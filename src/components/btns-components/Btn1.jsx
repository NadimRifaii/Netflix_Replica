import React from 'react'
import "./btns-styles.css"

export default function Btn1(){
    return(
    <div className="lang1">
        <img src="" alt="" />
        <select id="lang1" name="SelectedLang" data-uia="language-picker-header">
            <option selected="" lang="en" label="English" value="en-LB">English</option>
            <option lang="ar" label="العربية" value="ar-LB">العربية</option>
        </select>
    </div>
    )
}