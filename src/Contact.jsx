import React from "react";

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
                                <img src="map.png" height="30px" alt="c logo" />
                            </div>
                            Location<br></br>
                            Indore,India
                        </div>
                        <div className="contact-mail">
                            <div>
                                <img src="mail2.png" height="30px" alt="c logo" />
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
                        <i class="fa-brands fa-linkedin Social-linkedin fa-lg"></i>
                        <i className="fa-brands fa-github Social-git fa-lg"></i>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Contact;



