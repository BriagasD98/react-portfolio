import React from "react";
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        // 
    } = props;

    return (
        <header className="flex-row">
            <h2>
                <a href="/">
                    <span>David Briagas</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                    <a href="#contact">
                            Contact
                        </a>
                    </li>
                    <li className="mx-2">
                    <a href="#resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;