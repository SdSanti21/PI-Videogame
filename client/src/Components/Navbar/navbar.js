import React from 'react'
import { Link } from 'react-router-dom'
import SearchVideogame  from './search'
import './navbar.css'

export default function Navbar() {
    return (
        <div className="contentPrincipal">
            <nav className="navContenedor">
                <ul className="ulNavbar">
                    <div className="navSearch">
                    <SearchVideogame />
                    </div>
               
                <div className="navCrear">
                    <Link className="btnCrearVideojuego" to="/Formulario">
                        <span> Create Videogame</span>
                    </Link>
               
                </div>
                </ul>
            </nav>
        </div>
    )
}

