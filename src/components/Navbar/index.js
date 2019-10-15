import React from "react";
import "./style.css";

function Navbar(props) {
    return (

        <nav className="navbar navbar-default navbar-fixed-top">
            <ul>
                <li className="itemLeft" href="https://whispering-brook-22023.herokuapp.com">Sanrio Clicky Game</li>
                <li className="itemCenter">{props.message}</li>
                <li className="itemRight">Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    );
}


export default Navbar;