import React from "react";
import download from '../../assets/images/document-icon.png'
import arrow from '../../assets/images/down-arrow.png'

function Resume() {

    return (
        <section>
            <h2 className="secondary-title">Resume</h2>
            <div className="resume-download">
                <p>View & Download my resume Here !</p>
                <a href="https://docs.google.com/document/d/1BHQSK87pGRyUdzCEycDPM5r7ZPkLKtQmK0RNpI-YxsM/edit?usp=sharing" target="_blank">
                    <img src={arrow} className="emailIcon" alt="arrow"></img>
                </a>
                <a href="https://docs.google.com/document/d/1BHQSK87pGRyUdzCEycDPM5r7ZPkLKtQmK0RNpI-YxsM/edit?usp=sharing" target="_blank">
                    <img src={download} className="emailIcon" alt="download my resume"></img>
                </a>
            </div>
            <div className="resume-text">
                <h2>Technical Proficiencies</h2>
                <ul className="skills">
                    <li>React</li>
                    <li>Javascript</li>
                    <li>Node.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>Git</li>
                </ul>
                <ul className="skills">
                    <li>PWAs</li>
                    <li>MVC</li>
                    <li>APIs</li>
                    <li>Sequelize</li>
                    <li>Mongoose</li>
                    <li>Redux</li>
                </ul>
            </div>
        </section>
    )
};

export default Resume;