import React from "react";
import './button.style.css'


const Button = (props) => {
    return (
        <button className="btn">{props.name}</button>
    );
}

export default Button;
