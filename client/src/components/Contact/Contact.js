
import React from "react";
import ContactDiv from "./styles.js";
import Email from "../../img/email.png";
import LinkedIn from "../../img/linkedin-blue-style-logo-png-0.png";

function Contact() {
    return (

        <ContactDiv>

                    <div className="contact">

                                <div className="contactInfo tag">

                                        <img src={Email} height="30" width="30" />
                                        <a href="mailto:emaranda94@gmail.com?">
                                            <h4>emaranda94@gmail.com</h4>
                                        </a>

                                </div>

                                <div className="contactInfo tag">

                                        <img src={LinkedIn} height="30" width="30" />
                                        <a href="https://www.linkedin.com/in/ruben-emanuel-aranda-0b60a3133/">
                                            <h4>Ruben Aranda</h4>
                                        </a>

                                </div>
                    </div>

        </ContactDiv>
        
    );
}

export default Contact;