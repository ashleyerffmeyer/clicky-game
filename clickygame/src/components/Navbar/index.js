import React from "react";
import "./style.css";

function Navbar(props) {
    return (

        <nav className="navbar navbar-default navbar-fixed-top">
            <ul>
                <li className="itemLeft" href="/">Sanrio Clicky Game</li>
                <li className="itemCenter"></li>
                <li className="itemRight">Score: {this.props.score} | Top Score: 0</li>
            </ul>
        </nav>
    );
}


export default Navbar;