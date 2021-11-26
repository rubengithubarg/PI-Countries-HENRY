
import React from "react";
import { Link } from "react-router-dom";
import StyledHome from "./styles";

    function Landing() {
      return (

        <StyledHome>
          
                <h1>
                  Welcome!, my name is Ruben. I've built this App so that
                  you can find information about any country you want!
                </h1>

                <Link to="/countries" className="button">
                    <button>Let´s GO</button>
                </Link>

        </StyledHome>

      );
    }

export default Landing;