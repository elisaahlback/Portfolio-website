import React from "react";
import "../styles/Project.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'



const Project = ({title, type, description, tech, image1, image2, projectid}) => {
    return (
    <Link to={`/Projects/${projectid}`} className="link">
        <div className="row project-row d-flex align-items-start justify-content-center flex-wrap">
            <div className="col-4 d-flex align-items-center justify-content-left">
                <div className="project-visuals">
                    <img src={image1} alt={`${title} Visual 1`} className="project-image project-image-1"/>
                    <img src={image2} alt={`${title} Visual 2`} className="project-image project-image-2"/>
                    <p id="view-more">
                        View more
                    </p>
                </div>
            </div>
            <div className="col-8 d-flex project-text flex-column align-items-start">
                <div className="project-title">{title}</div>
                <div className="project-type">Role/s: {type}</div>
                <div className="project-description">{description}</div>
                <div className="project-tech">{tech}</div>
            </div>
        </div>
    </Link>
    );
};

export default Project;