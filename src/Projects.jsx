import React from "react";


const Projects = () => {

    return (
        <>
            <div id="Projects" className="Projects">
                <div className="main-project">

                    <div className="project1">

                        <div className="project1-text">
                            <h2>Amazon Clone</h2>
                            <br></br>
                            Love Designing Websites with CSS & Endedup Creating a Fabulous <br></br>Clone of (Shoping Website) Amazon.com's Front Page 
                        </div>

                        <div className="project1screenshot">

                            <img src="amazonclone.png" height="130px" />
                        </div>
                        <p>
                            HTML5 & CSS3  | <i class="fa-brands fa-github fa-lg"></i>   |   <a >Live Demo    <i class="fa-solid fa-up-right-from-square fa-sm"></i></a>
                        </p>

                    </div>
                   
                    <hr className="p1hr"></hr>

                    <div className="project1">

                        <p>
                            HTML5 | CSS3 & React JS | <i class="fa-brands fa-github fa-lg"></i>   |   <a >Live Demo    <i class="fa-solid fa-up-right-from-square fa-sm"></i></a>
                        </p>
                        <div className="project1screenshot">

                            <img src="WeatherAPiImage.png" height="130px" ></img>
                        </div>

                        <div className="project1-text">
                            <h2>Weather Forecast App</h2>
                            <br></br>
                            Just a Simple Weather Forecast Website  using OpenWeatherAPI's <br></br>  Application Programming Interface 
                        </div>

                    </div>

                    <hr className="p1hr"></hr>

                    <div className="project1">
                        <div className="project1-text">
                            <h2>To-Do List App</h2>
                            <br></br>
                            Love Designing Websites with CSS & Endedup Creating a Fabulous <br></br>Clone of (Shoping Website) Amazon.com's Front Page
                        </div>

                        <div className="project1screenshot">

                            <img src="todoapp.png" height="130px" />
                        </div>
                        <p>
                            HTML5 | CSS3 & React JS | <i class="fa-brands fa-github fa-lg"></i>   |   <a >Live Demo    <i class="fa-solid fa-up-right-from-square fa-sm"></i></a>
                        </p>

                    </div>



                </div>

            </div>

        </>
    );
}
export default Projects;