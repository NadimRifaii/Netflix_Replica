import React from "react"
import './Header1Style.css'
import { Outlet } from "react-router-dom"
export default function Header1() {
    return (
        <>
            <div className="nav-1">
                <img src='/netflix.png' alt="" className='netflix' />
                <div className="nav-1-right">
                    <div className="unlimited white txt-13">UNLIMITED TV SHOWS AND MOVIES</div>
                    <button className="red-background white txt-13">JOIN NOW</button>
                    <button className="black-background white txt-13">SIGN IN</button>
                </div>
            </div>
            <Outlet />
        </>
    )
}