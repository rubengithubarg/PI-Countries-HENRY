import React from "react";
import { Link } from "react-router-dom";
import StyledCountries from "./styles";

function Countries({ countries }) {
  return (

    <StyledCountries>

          {countries.length < 1 ? (
            <h1>Countries Not Found</h1>
          ) : (
            countries.map((el) => {
              return (
                <div className="results" key={el.id}>
                  <Link to={`/countries/${el.id}`}>
                    <img src={el.flag} />
                  </Link>
                  <div className="countryName">
                    <h1>
                      {el.name.split("(")[0]}{" "}
                      {el.continent ? `(${el.continent})` : ""}
                    </h1>
                  </div>
                </div>
              );
            })
          )}
          
    </StyledCountries>

  );
}

export default Countries;