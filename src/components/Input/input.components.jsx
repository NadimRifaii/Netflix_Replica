import {useState} from "react";
import "./input.style.css" 

const Input = () => {
    const [isActive , setIsActive] = useState(false)
    function inputFocus(){
        setIsActive(!isActive);
    }
    return (
        <div className="input-label">
        <input onFocus={inputFocus} onBlur={inputFocus} type="text"   className="input-style"/>
        <label className={`${isActive ? 'active' : ''}`} >Email address</label>
        </div>
    );
}

export default Input;

