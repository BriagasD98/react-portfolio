import React from "react";
import { Link } from "react-router-dom";
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
    
    return (
            <nav className="navigation">
                <ul className="container row">
                    <li className="mx-2 col">
                        <Link to="/about">
                            About Me
                            </Link>
                    </li>
                    <li className="mx-2 col">
                        <Link to="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li className="mx-2 col">
                    <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="mx-2 col">
                    <Link to="/resume">
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}

export default Nav;