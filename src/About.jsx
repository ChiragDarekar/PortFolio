import React from "react";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import bootstrap from "./bootstrap.png";
import react from "./react.png";

import aws from "./aws.png";
import cyber from "./cyber.png";
import degree from "./degree.png";
import c from "./c.png";
import java from "./java.png";
import kali from "./kali.png";
import sql from "./sql.png";


const About = () => {

    return (
        <>

            <div id="About" className="about">

                <div className="inside-about">


                    <div className="main-about">
                        <div className="aboutbox1">
                            <div>
                                Skills : <br></br>
                                Front-End : HTML5 | CSS3  | JS  | Bootstrap | React JSX    <img src={html} height="30px" alt="html logo" />  | <img src={css} height="30px" alt="Css logo" /> | <img src={js} height="30px" alt="JS logo" /> | <img src={bootstrap} height="30px" alt="BootStrap logo" /> | <img src={react} height="30px" alt="React JS logo" /><br></br><br></br>
                                Languages:  C (DataStructure) | Java (OOPs) <img src={c} height="30px" alt="c logo" /> | <img src={java} height="30px" alt="java logo" />
                                <br></br><br></br>



                                Other Skills :

                                Structured Query Language (SQL) |
                                Linux Administration (Ethical Hacking) <img src={sql} height="30px" alt="c logo" /> | <img src={kali} height="30px" alt="c logo" />
                                <br></br><br></br>

                                Specialized Skills :
                                Amazon Web Services (AWS) (Cloud Computing) |
                                Information Security (Cyber Security) <img src={aws} height="30px" alt="java logo" /> | <img src={cyber} height="30px" alt="java logo" />

                            </div>


                        </div>
                        <div className="aboutbox2">


                            Education :<br></br>

                            University : Sage University Indore<br></br>
                            Course : BCA (Bachelor's in Computer Applictions)<br></br>
                            Specialization : Cloud Technology & Information Security <br></br>


                        </div>
                        <div className="aboutbox3">
                            Hobbies :
                            BasketBall | SkateBoarding  | Music | Dance (Hip-Hop & Tutting) <br></br>

                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default About;