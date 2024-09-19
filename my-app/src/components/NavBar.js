import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <nav class="nav">
        <div class="container">
        <b-row class="row">
            <b-col class="nav-title col-2 d-flex align-items-center">
                <a href="/" class="nav-logo"><img id="nav-logo" src={require('.././assets/nav-logo.png')} /></a>
            </b-col>
            
            <div class="nav-item1 col col-2 d-flex justify-content-center align-items-center"><a href="/">about me</a>
            </div>
            <div class="nav-item2 col col-2 d-flex justify-content-center align-items-center"><a href="/Projects">projects</a>
            </div>
            <div class="nav-item3 col col-2 d-flex justify-content-center align-items-center"><a href="/Contact">contact</a>
            </div>
        </b-row>

        
        </div>
        
    </nav>
    );
};

export default NavBar;