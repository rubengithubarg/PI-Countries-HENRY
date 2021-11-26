import React from "react";
import StyledActivity from "./styles";
import Clock from "./clock.png";
import Circulo from "./circulo.png";

function Activity({ name, duration, season, difficulty, edit }) {

  let Tactivity = [];
  for (let i = 1; i <= difficulty; i++) {
    Tactivity.push(i);
  }

  return (

    <StyledActivity>

      {edit ? <span>These are current values</span> : null}

      <h1 id="nombre">{name}</h1>

      <div className="iconedProp">

        <img src={Clock} width="15" height="15" />
        <h4>{duration} min</h4>

      </div>

          <div className="infoDiv">
            <h4>{season}</h4>

                      <div>
                        {Tactivity.map((el) => (
                            <img
                              src={Circulo}
                              width="15"
                              height="15"
                              className="cross"
                            />
                        ))}
          </div>

      </div>

    </StyledActivity>
  );
}

export default Activity;