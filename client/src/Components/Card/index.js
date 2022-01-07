import React from 'react'
import './card.css'
export default function Card({name, image, genres}) {
    return (
        <div className="cardT">
            <h3>{name}</h3> 
            <img src={image} width={100} height={100}alt="no se encuentra imagen" />
            <div>
            <h3>{genres}</h3>
            </div>
        </div>
    )
}
