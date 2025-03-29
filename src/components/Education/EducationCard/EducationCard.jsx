import React from "react";
import "./EducationCard.css";

const EducationCard = (props) => {
    return (
        <div className="timeline-item">
            <i className={`timeline-icon ${props.icon}`}></i>
            <span className="timeline-date">{props.year}</span>
            <h3 className="timeline-title">{props.title}</h3>
            <p className="timeline-text">{props.desc}</p>
        </div>
    )
}

export default EducationCard;