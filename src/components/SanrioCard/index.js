import React from "react";
import "./style.css";

function SanrioCard(props) {
    return (
        <div>
            <img src={props.image} alt={props.name} className="img-thumbnail" onClick={props.imageClick}></img>
        </div>
    );
}

export default SanrioCard;