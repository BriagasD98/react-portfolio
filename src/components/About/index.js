import React from "react";
import DavidB from '../../assets/images/david-headshot.jpg'

function About() {

    return (
        <div>
            <h2 class="secondary-title">About Me</h2>
            <div className="davidPic">
                <img src={DavidB} alt="David Briagas Smiling" />
            </div>
            <div className="about-text">
                <p>
                I'm a Full-Stack Developer leveraging a strong background in entrepreneurship to put 110% into everything I do
                 and creative thinking to find success. Recently earned a certificate in Full-Stack Web Development through 
                 The University of Texas at Austin. Newly developed skills in the MERN stack such as React, MongoDB, Express 
                 and Node. Skills to make a visually appealing & responsive website include CSS, Bootstrap, Bulma and Handlebars. 
                 Known as a creative problem-solver with a passion for developing sleek & intuitive web applications. 
                 With each project, my goal is to keep my target audience engaged and create recurring users on the site. 
                 I have worked effectively on a team multiple times to deliver a project by specific deadlines. I’m excited 
                 to leverage my skills in the industry to develop cutting-edge applications as part of a tenacious & enthusiastic team.
                </p>
                {/* <p> My name is David Briagas and I'm 23 years old. I was born and raised in Houston,Texas. My hobbies
                are photography, auto mechanics and spending money on rusty 90's cars. I own two 90s Miatas - One
                which i daily drive and the other a track car project. Most people know me as "the guy with the Miata".
                </p>
                <p> I graduated from Cinco Ranch High School in 2016. I studied Full-Stack Web Development at UT Austin
                    from April 2021 to October 2021 and recieved a certificate of completion. I gained a great amount of 
                    invaluable knowledge while attending the program and i'm currently looking for employment in the
                    Web Development field. As I search for employment, I continue to practice and expand my knowledge 
                    in Web Development so that I may be employer-competitive.
                </p> */}
            </div>
        </div>
    )
};

export default About;