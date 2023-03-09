import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import '../Header/Header.css'

/**
 * Component React which displays the header of the app
 * @component
 */

const HeaderApp = () => {    
    return (
        <header className='header'>
                <Link className="logo" to="/" >
                    <img src={logo} alt="Wealth Health logo" />
                </Link>                          
                <h1>HRnet</h1>
        </header>
    )
}

export default HeaderApp