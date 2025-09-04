import React from "react";
import { Link } from "react-router-dom";
import "../styles/Project.css";

const MainProjectCard = ({ title, projectid, image1, image2 }) => {
  return (
    <Link to={`/Projects/${projectid}`} className="link">
      <div className="project-item">
        {/* Title */}
        <div className="main-project-title">{title}</div>

        {/* Images inside pill */}
        <img
          src={image1}
          alt={`${title} Visual 1`}
          className="project-image project-image-1"
        />
        <img
          src={image2}
          alt={`${title} Visual 2`}
          className="project-image project-image-2"
        />
      </div>
    </Link>
  );
};

export default MainProjectCard;
