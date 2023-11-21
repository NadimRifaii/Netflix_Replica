import React from "react"
import Btn1 from "../btns-components/Btn1"

export default function Footer(){
    return(
        <footer>
            <div className="questions">Questions? Contact us.</div>
            <ul className="list">
                <li>FAQ</li>
                <li>Help Center</li>
                <li>Account</li>
                <li>Media Center</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Ways to Watch</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Cookie preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
                <li>Speed Test</li>
                <li>Legal Notices</li>
                <li>Only on Netflix</li>
            </ul>
            <Btn1/>
        </footer>
    )
}