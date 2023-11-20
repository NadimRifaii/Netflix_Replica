import React from "react"
import Btn2 from "../btns-components/Btn2"
import "./Footer3.css"

export default function Footer3(){
    return(
        <footer className="footer3">
            <div className="questions underline sub-footer3">Questions? Contact us.</div>
            <ul className="list sub-footer3 underline">
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
            <div className="bt">
            <Btn2/>
            </div>
            <div className="underline batata">Netflix Lebanon</div>
        </footer>
    )
}