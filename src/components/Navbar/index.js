import React from "react";
import "./style.css";

function Navbar(props) {
    return (

        <nav className="navbar navbar-default navbar-fixed-top">
            <ul>
                <li className="itemLeft"> <a href="https://sanrio-clicky-game.herokuapp.com/">Sanrio Clicky Game</a></li>
                <li className="itemCenter">{props.message}</li>
                <li className="itemRight">Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    );
}


export default Navbar;