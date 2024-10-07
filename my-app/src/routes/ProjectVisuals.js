import React from "react";
import '.././styles/ProjectVisuals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ImageSlider from "../components/ImageSlider";


function ProjectVisuals() {
    const slides = [
        { url: "http://localhost:3000/sliderImages/Bemify1.png", title:"Login"},
        { url: "http://localhost:3000/sliderImages/Bemify2.png", title:"Create account"},
        { url: "http://localhost:3000/sliderImages/Bemify3.png", title:"Main page"},
        { url: "http://localhost:3000/sliderImages/Bemify4.png", title:"Search"},
        { url: "http://localhost:3000/sliderImages/Bemify5.png", title:"Upload"},
        { url: "http://localhost:3000/sliderImages/Bemify6.png", title:"Profile"},
        { url: "http://localhost:3000/sliderImages/Bemify7.png", title:"Playlist"},
        { url: "http://localhost:3000/sliderImages/Bemify8.png", title:"Settings"},
    ];

    const containerStyles = {
        width: "720px",
        height: "512px",
        margin: "0 auto",
      };

    return (
        <div className="App">
            <NavBar />
            <div class="row">
                <div style={containerStyles}>
                    <ImageSlider slides={slides} />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProjectVisuals;