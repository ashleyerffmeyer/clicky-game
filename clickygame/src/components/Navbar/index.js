import React from "react";
import "./style.css";

function Navbar() {
    return (

        <nav className="navbar navbar-default navbar-fixed-top">
            <ul>
                <li className="itemLeft" href="/">Sanrio Clicky Game</li>
                <li className="itemCenter">message</li>
                <li className="itemRight">Score: 0 | Top Score: 0</li>
            </ul>
        </nav>
    );
}


export default Navbar;