import React from "react";
import gitIcon from '../../assets/images/Github-icon.png'
// import emailIcon from '../../assets/images/email-icon.png'
import linkedIn from '../../assets/images/linkedin-icon.png'
import stackOicon from '../../assets/images/Stackflow-png.png'

function Footer() {

    return (
        <footer className="footer fixed-bottom">
            <div>
                <a href="https://github.com/BriagasD98" target="_blank" className="mx-2">
                    <img src={gitIcon} alt="Github Link"/>
                </a>
            </div>
            <div>
                <a href="https://stackoverflow.com/users/15757837/david-briagas" target="_blank" className="mx-2">
                    <img src={stackOicon} alt="StackOverflow Link" className="emailIcon"/>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/david-briagas-a55782210" target="_blank" className="mx-2">
                    <img src={linkedIn} alt="LinkedIn Link" className="linkedinIcon"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;