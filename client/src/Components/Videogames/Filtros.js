import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllVideogames, ordenarPorNombre, filtradoBd, filtradoRt, filtradoGenre, GenreList } from '../../Actions/index'
import './filtros.css'
export default function Filtros() {
  const dispatch = useDispatch();
  const genreListmap = useSelector((state) => state.genres)
  useEffect(() => {
    dispatch(getAllVideogames());
    dispatch(GenreList());
  },[dispatch])
  function ordenarNombre(e) {
    e.preventDefault() 
    dispatch(ordenarPorNombre(e.target.value))
    
  }
  function filtroCreado(e) {
    e.preventDefault() 
    dispatch(filtradoBd(e.target.value))
    
  }
  function filtroRat(e) {
    e.preventDefault() 
    dispatch(filtradoRt(e.target.value))
  
  }
  function filtradoG(e) {
    e.preventDefault() 
    dispatch(filtradoGenre(e.target.value))
  
  }
    return (
        <div className="filterToto">
         <div className="filterSub">
          <div className="filter">
          <select onChange={(e) => {
            ordenarNombre(e) 
          }}>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
          </div>
          
          <div className="filter">
          <select onChange={(e) => {
            filtroCreado(e)
          }}>
            <option defaultvalue value="All">AllVideogames</option>
            <option value="Db">Database</option>
            <option value="Api">Api</option>
          </select>
          </div>
          <div className="filter">
          <select onChange={(e) =>{
            filtroRat(e)
          }}>
            <option defaultvalue value="All">AllRating</option>
            <option value="Mini">Minimo</option>
            <option value="Max">Maximo</option>
          </select>
          </div>
          <div className="filter">
          <select onChange={(e) =>{
            filtradoG(e)
          }}>
            <option value="all">AllGenres</option>
            {genreListmap.map((genre) =>{
              return (
                <option value={genre} key={genre}>{genre}</option>
              )
            })}
          </select>
          </div>
         </div>
        </div>
    )
}
