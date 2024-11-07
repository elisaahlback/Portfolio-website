import React from "react";
import "../styles/NavBar.css";
import { Link as RouterLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from "../routes/MainPage.js";
import Projects from "../routes/Projects.js";
import ContactPage from "../routes/ContactPage.js";

const NavBar = () => {
    return (
    <nav class="nav">
        <div class="container p-5">
        <b-row class="row">
            <b-col class="nav-title col-2 d-flex align-items-center">
                <RouterLink to="/" class="nav-logo">
                    <img id="nav-logo" src={require('.././assets/nav-logo.png')} />
                </RouterLink>
            </b-col>
            
            <div className="col d-flex justify-content-end">
                <div className="nav-item d-flex align-items-center mx-3">
                    <RouterLink to="/#about-me-rectangle" smooth={true} duration={10}>
                        <button id="nav-button">about me</button>
                    </RouterLink>
                </div>
                <div className="nav-item d-flex align-items-center mx-3">
                    <RouterLink to="/Projects" id="nav-button">
                        projects
                        </RouterLink>
                </div>
                <div className="nav-item d-flex align-items-center mx-3">
                    <RouterLink to="/ContactPage" id="nav-button">
                        contact
                        </RouterLink>
                </div>
            </div>
        </b-row>

        
        </div>
        
    </nav>
    );
};

export default NavBar;