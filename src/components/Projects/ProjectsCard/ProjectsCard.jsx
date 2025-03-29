import React from "react";
import './ProjectsCard.css'

const ProjectsCard = ({ details }) => {
    return (
        <div className="projects-card">
            <h6>{details.title}</h6>

            {/* <div className="duration">{details.date}</div>
            <div className="link">{details.link}</div> */}

            <div className="duration-link-container">
                <div className="duration">{details.date}</div>
                <div className="link">{details.link}</div>
            </div>

            <ul>
                {details.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <div className="images-container">
                {(details.images || []).map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={details.title + ' - ' + (index + 1)} // 使用更具描述性的文本
                        className="project-image"
                        style={{ width: image.width }}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default ProjectsCard