import React, { useEffect } from "react";
import { getCountryDetail } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Activity from "./Activity/Activity";
import { formatArea, formatPopulation } from "./functions";
import Loading from "./LoadingDetail/LoadingDetail";
import StyledDiv from "./styles";
import Population from "../../img/population.png";
import Area from "../../img/area.png";
import Location from "../../img/location.png";

function Country(props) {

  const id = props.match.params.id;
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countryDetail);

  useEffect(() => {
    console.log('Detail: ');
    dispatch(getCountryDetail(id));
  }, []);

  return (

    <StyledDiv>

      {country && country.id !== id ? (
        <Loading />

      ) : (

        <div className="detailContainer">

          <div className="country">

            <h1>
              {country.name && country.name.split("(")[0]} ({country.id})
            </h1>

            <div className="midCard">

                  <div className="infoDiv">

            </div>

              <div className="infoDiv">

              {country.continent ? (

                  <div className="iconedDiv">

                      <img src={Location} height="30" width="30" />

                      <h3>
                        {country.continent}{" "}
                      </h3>

                  </div>

                  ) : null}

                  <div>
                      <div className="iconedDiv">
                        <img src={Population} height="30" width="30" />
                        <h3>Population: {formatPopulation(country.population)}</h3>
                      </div>
                  </div>

                  <div className="iconedDiv">
                      <img src={Area} height="30" width="30" />
                      <h3>Area: {formatArea(country.area)}</h3>
                  </div>

              </div>

                <img src={country.flag} className="detailedFlag" />

            </div>

          </div>


          <div className="activitiesContainer">
            <ul className="activities">
              {country.activities && country.activities.length > 0
                ? country.activities.map((el) => (
                      <Activity
                        name={el.name}
                        duration={el.duration}
                        season={el.season}
                        difficulty={el.difficulty}
                      />
                  ))
                : null}
            </ul>
          </div>

        
        </div>
      )}

    </StyledDiv>

  );
}

export default Country;