import React from "react";
import { Link } from "react-router-dom";
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
    
    return (
            <nav className="navbar">
                <ul className="container navlinks">
                    <li className="mx-2 navlinks">
                        <Link to="/about">
                            About Me
                            </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li className="mx-2">
                    <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="mx-2">
                    <Link to="/resume">
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}

export default Nav;