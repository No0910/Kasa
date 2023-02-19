import { Link } from 'react-router-dom'
import React from 'react'
import Logo from "../../assets/Logo-Header.png"
import './index.css'

function Header() {
    return (
        <header className='Header'>
        <div className='Header_div'>
            <a href="/"><img className="Header_logo" src={Logo} alt="Logo" /></a>
            <nav className='Header_nav'>
                <li><Link to="/"> Accueil</Link></li>
                <li><Link to="/About"> À Propos</Link></li>
            </nav>
        </div>
        </header>
    )
}

export default Header