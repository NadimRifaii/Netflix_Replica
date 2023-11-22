import React from 'react'
import Btn2 from '../btns-components/Btn2'
import './Header2Style.css'

export default function Header2() {
    return (
        <div className='nav-2'>
            <div className='nav-2-container'>
                <div className='nav-2-innercontainer'>

                    <img src="/netflix.png" alt="" className='netflix2' width='40px' />
                    <div className='nav-2-right'>
                        <Btn2 />
                        <button className='header2-signin'>SIGN IN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}