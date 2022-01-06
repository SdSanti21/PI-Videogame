import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css'

export default function Inicio() {
  return (
       <div className="fondoLanding">
             <div className="caja2">
             <h1 className="titulo">WELCOME TO THE VIDEOGAMES APP</h1>
                <Link to='/Home'>
                 <button className="boton">Home</button>
                </Link> 
           </div>
      </div>
  )
}

