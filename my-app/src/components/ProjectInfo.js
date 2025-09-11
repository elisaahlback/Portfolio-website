import React from "react";
import '.././styles/ProjectInfo.css';
import NavBar from './NavBar';
import Footer from './Footer';
import ImageSlider from "./ImageSlider";
import projectData from '../data/projectData';
import { useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";


function ProjectInfo() {
    const {projectid} = useParams();
    const project = projectData.find((p) => p.projectid === projectid);

    const slides = project.images;

    const containerStyles = {
        width: "calc(100% - 1vw)",
        height: "90%",
        margin: "0 auto",
        marginRight: "7vw"
      };

    return (
        <div className="App" id="project-info-page">
            <NavBar />
            <div className="row">
                <div className="col-4 project-info-row">
                    <div className="row">
                        <div className="col project-title">
                            {project.title}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                           {project.github && project.github.trim() !== "" && (
                            <a
                                href={project.github}
                                className="project-github"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col project-extended-description">
                            {/* {project.extended_description} */}
                            {project.extended_description && project.extended_description.length > 0 && (
                            <ul>
                                {project.extended_description.map((point, index) => (
                                <li key={index}>
                                    <ReactMarkdown>{point}</ReactMarkdown>
                                </li>
                                ))}
                            </ul>
                            )}
                            
                            Tech used: 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col project-tech">
                            {project.tech}
                        </div>
                    </div>
                </div>


                <div className="col-7">
                    <div className="row">
                        <div className="col slides-container">
                            <div style={containerStyles} className="slides">
                                <ImageSlider slides={slides} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div style={containerStyles}>
                                {project.images.title}
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProjectInfo;