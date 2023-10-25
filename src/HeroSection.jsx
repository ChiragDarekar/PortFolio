import React from "react";

const HeroSection = () => {
    return (
        <>

            <div className="HeroSection">
                <div className="Inner-Section">
                    <div className="Developer">
                        <div className="Position">
                            Front-End Web Developer
                            <div className="hand-img">
                                <img src="icons8-waving-hand-emoji-48.png" height="45px" alt="Hand Wave " />
                            </div>
                        </div>


                        <p>
                            Hi i'm Chirag Darekar a Fresher & a Passionate Front-End Developer<br></br>
                            <span>based in (M.P)  Indore. <i className="fa-solid fa-map-pin"></i></span>
                        </p>

                        <div className="Social-Links" >
                           <a href="https://www.linkedin.com/in/chiragdarekar/" id="link-socio" ><i class="fa-brands fa-linkedin Social-linkedin"></i></a> 
                            <a href="https://github.com/ChiragDarekar" id="link-socio"  ><i className="fa-brands fa-github Social-git"></i></a>

                        </div>

                        <div className="Tech-Stacks"> Tech Stack  |
                            <img src="html.png" height="30px" alt="html logo" />
                            <img src="css.png" height="30px" alt="Css logo" />
                            <img src="js.png" height="30px" alt="JS logo" />
                            <img src="bootstrap.png" height="30px" alt="BootStrap logo" />
                            <img src="react.png" height="30px" alt="React JS logo" />
                        </div>

                    </div>



                    <div className="Photo">
                        <a href="https://www.instagram.com/chirag.theog/"><img className="audreyimg" src="mun4.jpg" height="210px" alt="ProfilePhoto" /></a>
                    </div>



                </div>


            </div>
        </>
    );
}
export default HeroSection;