import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/videogames">Videogames</Link>
                    <Link to="/Inicio">Inicio</Link>
                    <Link to="/Formulario">Create Videogame</Link>
                    <Link to="/Genres">Genres</Link>
                </ul>
            </nav>
        </div>
    )
}
