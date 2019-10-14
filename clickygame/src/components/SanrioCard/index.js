import React from "react";
import "./style.css";

function SanrioCard(props) {
    return (
        <div>
            <img src={props.image} alt={props.name} class="img-thumbnail"></img>
        </div>
    );
}

export default SanrioCard;