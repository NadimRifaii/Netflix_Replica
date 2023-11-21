import React from "react";
import Button from "../button/button.component";
import Input from "../input/input.component";
import "./input-button.style.css"


const InputButton = () => {
    return (
        <div className="input-button">
            <Input />
            <Button name = "Get Started >" />
        </div>
    )
}

export default InputButton;