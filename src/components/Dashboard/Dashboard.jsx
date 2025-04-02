import React from "react";
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <section className="dashboard-container">
            <div className="dashboard-content">
                <h2>Li Sinuo</h2>
                <p>
                    邮箱: lsn_lisinuo@163.com <br />
                    GitHub: https://github.com/LLLsinuo <br />
                    求职意向：前端开发工程师
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