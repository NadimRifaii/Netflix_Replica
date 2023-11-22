import React from "react";
import Button from '../Button/button.components.jsx';
import Input from "../Input/input.components.jsx";
import "./input-button.style.css"
import { Link } from "react-router-dom";

const InputButton = () => {
    return (
        <div className="input-holder">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input-button">
                <Input />
                <Link to={`/genres`} >
                    <Button name="Get Started >" />
                </Link>
            </div>
        </div>
    )
}

export default InputButton;