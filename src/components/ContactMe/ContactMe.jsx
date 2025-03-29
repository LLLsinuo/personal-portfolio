import React from "react";
import './ContactMe.css'
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
    return (
        <section className="contact-container">
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl="./assets/images/logo-email.png"
                        text="123@321.com"
                    />
                    <ContactInfoCard
                        iconUrl="./assets/images/logo-github.png"
                        text="https://github.com"
                    />
                    <ContactInfoCard
                        iconUrl="./assets/images/logo-phone.png"
                        text="+86 123123123"
                    />
                </div>
                
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactMe