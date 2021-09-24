import React from "react";
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        // 
    } = props;

    return (
        <header className="row">
            <h2 className="header-title">
                <a href="/">
                    <span>David Briagas</span>
                </a>
            </h2>
            <nav className="navigation">
                <ul className="container row">
                    <li className="mx-2 col">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2 col">
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2 col">
                    <a href="#contact">
                            Contact
                        </a>
                    </li>
                    <li className="mx-2 col">
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