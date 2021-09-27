import React from "react";
import gopher2 from '../../assets/images/gopher-hook.png';
import gopher1 from '../../assets/images/gopher1.png';
import runBuddy from '../../assets/images/Run-Buddy-1.png';
import TechBlog from '../../assets/images/Tech-Blog.png';
import EmpTracker from '../../assets/images/Employee-Tracker.png';

function Project() {
    
    return (
        <section id="work">
        <h2 class="secondary-title">Portfolio</h2>
        <div class="flex-container">
            <div className="flex-item box-1" style={{backgroundImage: `url(${gopher2})` }}>
              <a href="https://thawing-fortress-75852.herokuapp.com/">GOPHER 2.0</a>
              <a href="https://github.com/BriagasD98/Gopher-2.0">View Repository</a>
            </div>
            <div className="flex-item box-2" style={{backgroundImage: `url(${runBuddy})` }}>
                <a href="https://briagasd98.github.io/run-buddy/">RUN BUDDY</a>
                <a href="https://github.com/BriagasD98/run-buddy">View Repository</a>
            </div>
            <div className="flex-item box-3" style={{backgroundImage: `url(${gopher1})` }}>
                <a href="https://lrk83.github.io/Gopher/">GOPHER 1.0</a>
                <a href="https://github.com/BriagasD98/Gopher">View Repository</a>
            </div>
            <div className="flex-item box-4" style={{backgroundImage: `url(${TechBlog})` }}>
                <a href="https://tranquil-tundra-80963.herokuapp.com/login">TECH BLOG</a>
                <a href="https://github.com/BriagasD98/TechBlog">View Repository</a>
            </div>
            <div className="flex-item box-5" style={{backgroundImage: `url(${EmpTracker})` }}>
                <a href="https://briagasd98.github.io/Team-Profile-Generator/">TEAM GENERATOR</a>
                <a href="https://github.com/BriagasD98/Team-Profile-Generator">View Repository</a>
            </div>
          </div>
    </section>
    )
};

export default Project;