import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getDetalle, deleteDetalle } from '../../Actions/index';
import './detalle.css';

function Detalle() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const guardarEstado = useSelector((state) =>
      state.detalleVideogames
    )
    console.log(guardarEstado)
    useEffect(() => {
        dispatch(getDetalle(id))
        return () => {dispatch(deleteDetalle())}
    }, [dispatch, id]) 
    return (
        <div className="fondoDetalle">
           {guardarEstado.length > 0 ? (
               <div className="contenido">
                   <h1>{guardarEstado[0]?.name}</h1>
                   <img className="image" src={guardarEstado[0]?.image} alt="No se encontro la imagen" width="300px" height="300px"
                   />
                   <div>
                       <span>GENRES: {guardarEstado[0]?.genre}</span>
                   </div>
                   <div>
                       <span>RELESEAD DATE: {guardarEstado[0]?.released_at}</span>
                   </div>
                   <div>
                       <span>DESCRIPTION: {guardarEstado[0]?.description}</span>
                   </div>
                   <div>
                       <span>PLATFORMS: {guardarEstado[0]?.platforms}</span>
                   </div>
                   <div>
                       <span>RATING: {guardarEstado[0]?.rating}</span>
                   </div>
                   <div >
                      <Link to="/Home">
                        <button className="boton">BACK HOME</button>
                      </Link>
                   </div>
               </div>
           ): (<p>LOADING...</p>)} 
           
        </div>
    )
}

export default Detalle
