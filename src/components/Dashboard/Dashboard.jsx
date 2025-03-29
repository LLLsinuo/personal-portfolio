import React from "react";
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <section className="dashboard-container">
            <div className="dashboard-content">
                <h2>Building Digital Experiences The Insprie</h2>
                <p>
                    Passionate Frontend Developer | Transforming Ideas into Seamless and
                    Visually Stunning Web Solutions
                </p>
            </div>

            <div className="dashboard-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/logo-java.png" alt="" />
                    </div>
                    <img src="./assets/images/profile_pic.png" alt="" style={{ borderRadius: '10px' }} />
                </div>
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/logo-react.svg" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/logo-js.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/logo-HTML.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard