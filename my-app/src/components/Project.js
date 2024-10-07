import React from "react";
import "../styles/Project.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Project = ({title, type, description, tech}) => {
    return (
        <div className="row project-row d-flex align-items-start justify-content-center flex-wrap">
            <div className="col-4 d-flex align-items-center justify-content-left">
                <div className="project-visuals d-flex align-items-center justify-content-center">
                    Project visuals
                </div>
            </div>
            <div className="col-8 d-flex project-text flex-column align-items-start">
                <div className="project-title">{title}</div>
                <div className="project-type">My role/s: {type}</div>
                <div className="project-description">{description}</div>
                <div className="project-tech">{tech}</div>
            </div>
        </div>
    );
};

export default Project;