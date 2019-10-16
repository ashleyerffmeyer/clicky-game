import React from "react";
import "./style.css";

function Footer(props) {
    return (
        <div class="footer">
            <ul class="menu">
                <li className="footerRight"><span><img className='logo' id="reactLogo" src="logo192.png" alt="react-logo" /></span>Clicky Game!</li>
                <li className="footerCenter">© Ashley Erffmeyer. All rights reserved.</li>
                <li className="footerLeft"><a href="https://github.com/ashleyerffmeyer/clicky-game">GitHub</a></li>
            </ul>
        </div >
    );
}

export default Footer;