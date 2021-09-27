import React from "react";

function Project() {
    
    return (
        <section id="work">
        <h2 class="secondary-title">Portfolio</h2>
        <div class="flex-container">
            <div className="flex-item box-1">
              <a href="https://thawing-fortress-75852.herokuapp.com/">GOPHER 2.0</a>
              <span>JAVASCRIPT, HANDLEBARS and MYSQL</span>
            </div>
            <div className="flex-item box-2">
                <a href="https://briagasd98.github.io/run-buddy/">RUN BUDDY</a>
              <span>HTML and CSS</span>
            </div>
            <div className="flex-item box-3">
                <a href="https://lrk83.github.io/Gopher/">GOPHER 1.0</a>
              <span>JAVASCRIPT, HTML and CSS</span>
            </div>
            <div className="flex-item box-4">
                <a href="https://github.com/BriagasD98">DISCOVER MORE.</a>
              <span>REACT, JAVASCRIPT and CSS</span>
            </div>
            <div className="flex-item box-5">
                <a href="https://github.com/BriagasD98">DISCOVER MAS.</a>
              <span>HTML and JAVASCRIPT</span>
            </div>
          </div>
    </section>
    )
};

export default Project;