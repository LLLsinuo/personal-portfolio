import React from "react";
import "./Education.css";
import EducationCard from './EducationCard/EducationCard';
import { EDUCATION } from "../../utils/data";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Education = () => {
    const educationItems = EDUCATION.filter(item => item.category === "education");
    const experienceItems = EDUCATION.filter(item => item.category === "experience");

    return (
        <section className="education-container">
            <h5>Education</h5>
            
            <div className="dual-timeline">
                {/* 教育时间线 (左侧) */}
                <div className="timeline-column education-column">
                    <div className="timeline-header">
                        <FaGraduationCap className="header-icon" />
                        {/* <h3>Education</h3> */}
                    </div>
                    {educationItems.map((item, index) => (
                        <EducationCard 
                            key={`edu-${index}`}
                            icon={item.icon}
                            title={item.title}
                            year={item.year}
                            desc={item.desc}
                        />
                    ))}
                </div>
                
                {/* 工作经验时间线 (右侧) */}
                {/* <div className="timeline-column experience-column">
                    <div className="timeline-header">
                        <FaBriefcase className="header-icon" />
                        <h3>Experience</h3>
                    </div>
                    {experienceItems.map((item, index) => (
                        <EducationCard 
                            key={`exp-${index}`}
                            icon={item.icon}
                            title={item.title}
                            year={item.year}
                            desc={item.desc}
                        />
                    ))}
                </div> */}
            </div>
        </section>
    )
}

export default Education;