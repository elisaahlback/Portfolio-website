import React from 'react'
import ".././styles/Footer.css"
import { ReactComponent as LinkedInIcon } from '.././assets/linkedin.svg';
import { ReactComponent as GitHubIcon } from '.././assets/github.svg';

const Footer = () => {
    return (
        <div class="row footer-row d-flex justify-content-center align-items-center">
            <div class="col col-1 d-flex justify-content-center align-items-center">
            <a href="https://www.linkedin.com/in/elisa-ahlbäck-norris-1102991b6" target="_blank"><LinkedInIcon id="footer-logo" /></a>
            </div>
            <div class="col col-1 d-flex justify-content-center align-items-center">
            <a href="https://github.com/elisaahlback" target="_blank"><GitHubIcon id="footer-logo" /></a>
            </div>
        </div>
    );
};


export default Footer;