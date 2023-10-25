import React from "react";
import cloneapp from "./amazonclone.png";
import weatherimg from "./WeatherAPiImage.png";
import todoimg from "./todoapp.png";

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

                            <a href="https://amazonclonechiragdarekar.netlify.app/"> <img src={cloneapp} height="130px" /> </a>
                        </div>
                        <p>
                            HTML5 & CSS3  | <a id="link-project" href="https://github.com/ChiragDarekar/AmazonCloneNewRepo"><i href="" class="fa-brands fa-github fa-lg"></i> </a>  |   <a id="link-project" href="https://amazonclonechiragdarekar.netlify.app/">Live Demo    <i class="fa-solid fa-up-right-from-square fa-sm"></i></a>
                        </p>

                    </div>
                   
                    <hr className="p1hr"></hr>

                    <div className="project1">

                        <p>
                            HTML5 | CSS3 & React JS | <i class="fa-brands fa-github fa-lg"></i>   |   <a id="link-project" href="https://weatherforecastchiragdarekar.netlify.app/">Live Demo    <i class="fa-solid fa-up-right-from-square fa-sm"></i></a>
                        </p>
                        <div className="project1screenshot">

                            <a href="https://weatherforecastchiragdarekar.netlify.app/"><img src={weatherimg} height="130px" ></img></a>
                        </div>

                        <div className="project1-text">
                            <h2>Weather Forecast App</h2>
                            <br></br>
                            Weather apps are essential for travelers, helping them plan their trips effectively , <br></br>
                            So just a Simple Weather Forecast Website  using OpenWeatherAPI's <br></br>  Application Programming Interface  
                        </div>

                    </div>

                    <hr className="p1hr"></hr>

                    <div className="project1">
                        <div className="project1-text">
                            <h2>To-Do List App</h2>
                            <br></br>
                            If you struggle with managing tasks and staying organized <br></br> give a try to my To-Do App
                        </div>

                        <div className="project1screenshot">

                            <a href="https://todochiragdarekar.000webhostapp.com/"><img src={todoimg} height="130px" /></a>
                        </div>
                        <p>
                            HTML5 | CSS3 & React JS | <a id="link-project" href="https://github.com/ChiragDarekar/ToDoRemoteRepo"><i class="fa-brands fa-github fa-lg"></i></a>   |   <a id="link-project" href="https://todochiragdarekar.000webhostapp.com/">Live Demo    <i class="fa-solid fa-up-right-from-square fa-sm"></i></a>
                        </p>

                    </div>



                </div>

            </div>

        </>
    );
}
export default Projects;