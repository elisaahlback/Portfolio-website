import React from "react";
import '.././styles/ProjectInfo.css';
import NavBar from './NavBar';
import Footer from './Footer';
import ImageSlider from "./ImageSlider";
import projectData from '../data/projectData';
import { useParams } from 'react-router-dom';


function ProjectInfo() {
    const {projectid} = useParams();
    const project = projectData.find((p) => p.projectid === projectid);

    const slides = project.images;

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

export default ProjectInfo;