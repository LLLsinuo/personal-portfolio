import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-content">
                <h3>Contact Me</h3>
                <div className="contact-info">
                    <div className="contact-item">
                        <img src="./assets/images/logo-email.png" alt="Email" className="icon" />
                        <span className="contact-text">123@321.com</span>
                    </div>
                    <div className="contact-item">
                        <img src="./assets/images/logo-phone.png" alt="Phone" className="icon" />
                        <span className="contact-text">+86 123123123</span>
                    </div>
                    {/* <div className="contact-item">
                        <img src="./assets/images/logo-github.png" alt="GitHub" className="icon" />
                        <span className="contact-text">github</span>
                    </div> */}
                </div>
            </div>
            {/* 2025 Time To Program, Happy Coding */}
        </div>
    )
}

export default Footer