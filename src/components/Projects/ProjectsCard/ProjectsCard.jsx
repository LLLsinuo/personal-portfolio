import React from "react";
import './ProjectsCard.css'
import Slider from "react-slick";

const ProjectsCard = ({ details }) => {

    const hasImages = details.images && details.images.length > 0;

    const sliderSettings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: hasImages,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="projects-card">
            <h6>{details.title}</h6>

            {/* <div className="duration">{details.date}</div>
            <div className="link">{details.link}</div> */}

            <div className="duration-link-container">
                <div className="duration">{details.date}</div>
                <a href={details.link} className="link" target="_blank" rel="noopener noreferrer">
                    {details.link}
                </a>
            </div>

            <div className="description">{details.description}</div>

            <ul>
                {details.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            {/* <div className="images-container">
                {(details.images || []).map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={details.title + ' - ' + (index + 1)} // 使用更具描述性的文本
                        className="project-image"
                        style={{ width: image.width }}
                    />
                ))}
            </div> */}
            <div className="slider-container">
                <Slider {...sliderSettings}>
                    {(details.images || []).map((image, index) => (
                        <div key={index} className="slide-item">
                            <img
                                src={image.src}
                                alt={details.title + ' - ' + (index + 1)}
                                className="project-image"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    )
}

export default ProjectsCard