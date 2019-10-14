import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/">Clicky Game</a>
            <p className="nav-item instruction">Click an image to begin!</p>
            <p className="nav-item score">Score: 0 | Top Score: 0</p>
        </nav>
    );
}


export default Navbar;