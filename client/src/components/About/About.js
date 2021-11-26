
import React from "react";
import AboutDiv from "./styles";
import ReactLogo from "../../img/react-logo.png";
import Redux from "../../img/redux.jpg";
import Express from "../../img/ExpressJS.jpg";
import Node from "../../img/node-js-logo.png";
import Postgres from "../../img/postgresql-logo.png";


function About(){
    return (
        <AboutDiv>

            <h1>About this website:</h1>

                <h4>
                    This website is my individual project in Henry's bootcamp. It's been
                    built with PostgreSQL, NodeJS and Express for the back
                    end and React/Redux, CSS for the front end. <br />
                    It consumes data from the following{" "}
                    <a href="https://restcountries.com/">API</a>
                </h4>

      <div className="pern">
          
                        <a href="https://www.postgresql.org/">
                        <img src={Postgres} width="60" heigth="50" className="pernIcon" />
                        </a>

                        <a href="https://expressjs.com/">
                        <img src={Express} width="100" height="50" className="pernIcon" />
                        </a>

                        <a href="https://redux.js.org/">
                        <img src={Redux} width="70" height="50" className="pernIcon" />
                        </a>

                        <a href="https://reactjs.org/">
                        <img src={ReactLogo} width="60" height="50" className="pernIcon" />
                        </a>

                        <a href="https://nodejs.org/">
                        <img src={Node} width="80" height="50" className="pernIcon" />
                        </a>

      </div>

        </AboutDiv>

    )
}

export default About;