import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <nav class="nav">
        <div class="container">
        <b-row class="row justify-content-md-center">
            <b-col class="nav-title">
                <a href="/" class="nav-title col-12">elisa ahlbäck</a>
            </b-col>
        </b-row>

        <div class="row justify-content-md-center">
    <div class="nav-item1 col col-2">
    <a href="/">about me</a>
    </div>
    <div class="nav-item2 col col-2">
        <a href="/Projects">projects</a>
    </div>
    <div class="nav-item3 col col-2">
        <a href="/Contact">contact</a>
    </div>
  </div>
        </div>
        
    </nav>
    );
};

export default NavBar;