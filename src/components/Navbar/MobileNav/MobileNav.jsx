import React from "react";
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
        >
            <div className="mobile-menu-container">
                <img className="logo" src="./assets/images/logo.svg" alt="" />

                <ul>
                    <li>
                        {/* <a className="menu-item">Home</a> */}
                        <a className="menu-item" href="#dashboard">Home</a>
                    </li>

                    <li>
                        <a className="menu-item" href="#education">Education</a>
                    </li>

                    <li>
                        <a className="menu-item" href="#skills">Skills</a>
                    </li>

                    <li>
                        <a className="menu-item" href="#experience">Experience</a>
                    </li>

                    <li>
                        <a className="menu-item" href="#projects">Projects</a>
                    </li>

                    {/* <button className="contact-btn" onClick={() => { }}>
                        Hire Me
                    </button> */}
                </ul>
            </div>
        </div>
    )
}

export default MobileNav