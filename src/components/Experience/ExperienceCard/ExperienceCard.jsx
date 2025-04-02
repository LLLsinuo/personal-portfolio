import React from "react";
import './ExperienceCard.css'

const ExperienceCard = ({ details }) => {
    return (
        <div className="experience-card">
            <h6>{details.title}</h6>
            {/* <div>{details.job}</div> */}
            <div className="duration-job-container">
                <div className="duration">{details.date}</div>
                <div className="job">{details.job}</div>
            </div>
            {/* <div className="duration">{details.date}</div> */}

            <ul>
                {details.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceCard