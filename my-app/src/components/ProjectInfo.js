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
        width: "90%",
        height: "90%",
        margin: "0 auto",
      };

    return (
        <div className="App" id="project-info-page">
            <NavBar />
            <div class="row">
                <div class="col-7">
                    <div class="row">
                        <div class="col slides-container">
                            <div style={containerStyles}>
                                <ImageSlider slides={slides} />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div style={containerStyles}>
                                {project.images.title}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-5 project-info-row">
                    <div class="row">
                        <div class="col project-title">
                            {project.title}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col project-description">
                            {project.description}<br/>Tech used: 
                        </div>
                    </div>
                    <div class="row">
                        <div class="col project-tech">
                            {project.tech}
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProjectInfo;