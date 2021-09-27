import React from "react";
// import DavidB from '../../assets/images/david-headshot.jpg'

function About() {

    return (
        <div>
            <h2 class="secondary-title">About Me</h2>
            <div>
                {/* <img src={DavidB} alt="David Briagas Smiling" /> */}
            </div>
            <div className="about-text">
                <p> My name is David Briagas and I'm 23 years old. I was born and raised in Houston,Texas. My hobbies
                are photography, auto mechanics and spending money on rusty 90's cars. I own two 90s Miatas - One
                which i daily drive and the other a track car project. Most people know me as "the guy with the Miata".
                </p>
                <p> I graduated from Cinco Ranch High School in 2016. I studied Full-Stack Web Development at UT Austin
                    from April 2021 to October 2021 and recieved a certificate of completion. I gained a great amount of 
                    invaluable knowledge while attending the program and i'm currently looking for employment in the
                    Web Development field. As I search for employment, I continue to practice and expand my knowledge 
                    in Web Development so that I may be employer-competitive.
                </p>
            </div>
        </div>
    )
};

export default About;