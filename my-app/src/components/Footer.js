import React from 'react'
import ".././styles/Footer.css"

const Footer = () => {
    return (
        <div class="row footer-row">
            <div class="row d-flex justify-content-center">
                <div class="col col-1 d-flex justify-content-center">
                    <a id="nav-item1" href="/Aboutme">about me</a>
                </div>
                <div class="col col-1 d-flex justify-content-center">
                    <a id="nav-item2" href="/Projects">projects</a>
                </div>
                <div class="col col-1 d-flex justify-content-center">
                    <a id="nav-item3" href="/Contact">contact</a>
                </div>
            </div>
            <div class="row ">
                <div class="col d-flex justify-content-center align-top" id="bottom-e">
                    <a id="footer-logo" href="/Mainpage">e</a>
                </div>
            </div>
            
        </div>
    );
};


export default Footer;