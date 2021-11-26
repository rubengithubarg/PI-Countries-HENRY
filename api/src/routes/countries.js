require("dotenv").config();
const axios = require("axios").default;
const { Router } = require("express");
const { API_KEY } = process.env;
const { Op } = require("sequelize");
const { Country, Activity, country_activity } = require("../db");
const router = Router();

async function fillDB(){
        const { data } = await axios.get(`https://restcountries.com/v2/all`)
        //
        const dbClean = [];

        for (let i = 0; i < data.length; i++){
            
            dbClean.push({
                alpha3Code: data[i].alpha3Code,
                name: data[i].name,
                flag: data[i].flags.png,
                region: data[i].region,
                area: data[i].area,
                population: data[i].population
            })

        }
        
        for (let a = 0; a < dbClean.length; a++) {
            const [auxCountry, creted ] = await Country.findOrCreate({
                where: {
                    name: dbClean[a].name
                },
                defaults: {
                    id: dbClean[a].alpha3Code,
                    flag: dbClean[a].flag,
                    continent: dbClean[a].region,
                    area: dbClean[a].area,
                    population: dbClean[a].population
                }
            })
        }

    const result = await Country.findAll({
        attributes: ["id", "name", "flag", "continent", "area", "population"],
        include: [{ model: Activity, through: country_activity }]
    })
    return result;

}   

    async function getCountryInfo(alpha3Code) {
        try {
            if(alpha3Code){
                const dbResult = await Country.findAll({
                    where: {
                      id: `${alpha3Code}`
                    },
                    attributes: ["id", "name", "flag", "continent", "area", "population"],
                    include: [
                        {
                            model: Activity, through: country_activity
                        },
                    ],
                });

                if (dbResult) return dbResult;
                else return null

            }
            else return null;
        } catch (err) {
            console.log(err);
        }
    }

router.get("/countries", async (req, res) => {
    const { name, continent } = req.query;

    try {
        
        let ctryList = await Country.findAll({
            attributes: ["id", "name", "flag", "continent", "population"],
            include: [{ model: Activity, through: country_activity }]
        })

        if (ctryList.length === 0) ctryList = await fillDB()

        if(name || continent) {
            const filter = { where: {} };
            name ? (filter.where.name = { [Op.iLike]: `%${name}%` }) : null;
            continent ? (filter.where.continent = { [Op.eq]: continent }) : null;
            const filteredByProps = await Country.findAll({
              include: [{ model: Activity, require: true }],
              ...filter,
        });
        filteredByProps.length < 1
            ? res.send({ error: "No se encontro el pais" })
            : res.send(filteredByProps);
    } else {
        const countries = await Country.findAll({
            include: [{ model: Activity, require: true }],
        });
        res.send(countries);
    }
    } catch (error){
        res.status(400).send(error);
    }
})

router.get("/countries/:idPais", async (req, res) => {
    try {
      const idPais = req.params.idPais;
      console.log('ID por pais: ',idPais);
      const result = await getCountryInfo(idPais);
      if(result) res.json(result)
      else res.send("el id indicado no existe o no es correcto")
    } catch (err) {
      res.status(400).send(err);
      console.log(err)
    }
  });

  router.get("/activities", async (req, res) => {
    try {
      const result = await Activity.findAll()
            res.json(result);     
    } catch (err) {
      res.status(400).send(error);
      console.log(err)
    }
  });


  router.put("/activities", async (req, res) => {
    try {
      const { name, difficulty, duration, season, countries } = req.body;
      const activity = await Activity.findOne({
        where: {
          name: {
            [Op.eq]: name,
          },
        },
      });
      activity.difficulty = difficulty;
      activity.duration = duration;
      activity.season = season;
      await activity.save();
  
      let ctry;
      if (Array.isArray(countries)) {
        ctry = await Promise.all(
          countries.map((country) => Country.findByPk(country))
        );
      }
      if (ctry) {
        await activity.setCountries(ctry);
      }
      return res.send(activity);
    } catch (error) {
      console.log(error);
    }
  });

  router.post("/activities", async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    const activity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    let ctry;
    if (Array.isArray(countries)) {
      ctry = await Promise.all(
        countries.map((country) => Country.findByPk(country))
      );
    }
    if (ctry) {
      await activity.setCountries(ctry);
    }
    return res.send(activity);
  });

  module.exports = router;

  