import React from "react";
import cardnone from "../../../img/cardnone.png";
import StyledCardNone from "./styles";

function Loading({ countriesPerPage }) {

  let array = [];

  for (let i = 0; i < countriesPerPage; i++) {
    array.push(i);
  }

  return (

        <StyledCardNone>

              {array.map((el) => {
                return <img key={el} src={cardnone} />;
              })}
          
        </StyledCardNone>

  );
}

export default Loading;