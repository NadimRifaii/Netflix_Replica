import React from "react";
import Button from '../Button/button.components.jsx';
import Input from "../Input/input.components.jsx";
import "./input-button.style.css"


const InputButton = () => {
    return (
        <div className="input-holder">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input-button">
                <Input />
                <Button name="Get Started >" />
            </div>
        </div>
    )
}

export default InputButton;