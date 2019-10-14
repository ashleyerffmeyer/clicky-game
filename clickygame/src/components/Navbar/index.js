import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/">Clicky Game</a>
            <ul>
                <li className="itemRight">Score: 0 | Top Score: 0</li>
            </ul>
        </nav>
    );
}


export default Navbar;