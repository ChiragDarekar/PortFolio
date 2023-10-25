import React from "react";
import mail from "./mail2.png";
import map from "./map.png";


const Contact = () => {
    return (
        <>

            <div id="Contact" className="Contact">

                <div className="inner-contact">

                    <div className="main-contact1">
                        <div>
                            <h5>CONTACT</h5>
                            <p>Don't worry! just hit me up!  👇</p>
                        </div>

                    </div>



                    <div className="main-contact2">

                        <div className="contact-location">
                            <div>
                                <img src={map} height="30px" alt="c logo" />
                            </div>
                            Location<br></br>
                            Indore,India
                        </div>
                        <div className="contact-mail">
                            <div>
                                <img src={mail} height="30px" alt="c logo" />
                            </div>
                            Mail<br></br>
                            chiragdarekar101112@gmail.com
                        </div>
                    </div>

                </div>
                <div className="copyright">

                    <div className="copyright-text" >
                        Copyright © 2023.All rights are reserved


                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/chiragdarekar/" id="link-copy"><i class="fa-brands fa-linkedin Social-linkedin fa-lg"></i></a>
                        <a href="https://github.com/ChiragDarekar" id="link-copy"><i className="fa-brands fa-github Social-git fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Contact;



