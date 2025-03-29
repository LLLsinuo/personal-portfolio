import React, { useState } from "react";
import './Navbar.css'
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src="./assets/images/logo.svg" alt="" />

                    <ul>
                        <li>
                            <a className="menu-item" href="#dashboard">Home</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#education">Education</a>
                        </li>
                        <li>
                            {/* <a className="menu-item">Skills</a> */}
                            <a className="menu-item" href="#skills">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#experience">Experience</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#projects">Projects</a>
                        </li>

                        <button className="contact-btn" onClick={() => {}}>
                            Hire Me
                        </button>
                    </ul>

                    <button className="menu-btn" onClick={toggleMenu}>
                        <span
                            className={"material-symbols-outlined"}
                            style={{ fontSize: "1.8rem" }}
                        >
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar