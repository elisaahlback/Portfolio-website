import { useEffect, useRef } from 'react';
import '.././styles/ProjectsPage.css';
import React from "react";
import NavBar from '../components/NavBar';
import FigmaLogo from '.././assets/figma.svg';
import Footer from '../components/Footer';
import { Link, Element } from 'react-scroll';
import Project from '../components/Project';
import projectData from '../data/projectData';

function Projects() {
  return (
    <div className="App">
        <NavBar />
        <div class="row">
            <div className="col d-flex justify-content-start projects-page-title">
                Projects
            </div>
        </div>
        

        <div class="row">
            <ul>
                {projectData.map((project) => (
                    <Project
                        title={project.title}
                        github={project.github}
                        type={project.type}
                        description={project.description}
                        tech={project.tech}
                        image1={process.env.PUBLIC_URL + project.images[1].url}
                        image2={process.env.PUBLIC_URL + project.images[2].url}
                        projectid={project.projectid}
                    />
                ))}
            </ul>
        </div>

        <p class="project-type">
            More to come!
        </p>

    <Footer></Footer>
    </div>
  );
}

export default Projects;