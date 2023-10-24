import React, { useState } from "react";


const Navbar = () => {


const [showmenu,setShowmenu]=useState(false);

    return (
        <>

            <nav id="Navbar" className="Navbar">
                
                <div className="logo-letters">
                    <span>chiraᧁ.dare𝒌ar</span>
                </div>

                <div className={showmenu ? "  Mobile-bar ": "Inner-bar "}>
                    <div className="home-bar">
                        <a href="#" onClick={()=>{setShowmenu(false)}}>Home</a>
                    </div>

                    <div className="about-bar">
                        <a href="#About" onClick={()=>{setShowmenu(false)}}>About</a>
                    </div>

                    <div className="Experiences-bar">
                        <a href="#Experiences" onClick={()=>{setShowmenu(false)}}>Experience</a>
                    </div>

                    <div className="projects-bar">
                        <a href="#Projects" onClick={()=>{setShowmenu(false)}}>Projects</a>
                    </div>
                   
                    <div className="contact-bar">
                        <a href="#Contact" onClick={()=>{setShowmenu(false)}}>Contact</a>
                    </div>

                    
                </div>

                <div className="hamburger-menu">
                      <a href="#" onClick={() => setShowmenu(!showmenu)}><i class="fa-solid fa-bars"></i></a>

                </div>
               
                

                
            </nav>


        


        </>
    );

}

export default Navbar;