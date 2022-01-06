import React, {useState, useEffect} from 'react';
import Card  from '../Card/index';
import { useSelector, useDispatch} from 'react-redux';
import {getAllVideogames} from '../../Actions/index';
import { Link } from 'react-router-dom';
import Filtros  from '../Videogames/Filtros';
import Paginacion from '../Home/Paginacion'
import Navbar from '../Navbar/navbar';
import './Home.css';

export default function Home() {
    const dispatch = useDispatch()
    const videogamesTot = useSelector((state) => state.videogamesTotal)
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamePerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamePerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamePerPage;
  const currentVideogames = videogamesTot?.slice(indexOfFirstVideogame, indexOfLastVideogame);
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
    useEffect(() => {
        dispatch(getAllVideogames())
    }, [dispatch])
     return (
         <>
         <div className="fondoHome">
             <Navbar />
              <Filtros />
             <div>
             </div>
             <div>
                 <Paginacion 
               videogamesTot={videogamesTot.length}
                  videogamePerPage={videogamePerPage}
                  pagination={pagination}
                  currentPage={currentPage}
                  />
                  <div className="dispVid">
              {currentVideogames.map(el => (
                <>
                <Link to={"/videogames/"+el.id}>
                <Card 
                name = {el.name}
                image = {el.image}
                genres = {el.genre}
                rating = {el.rating}
                />
                </Link>
                </>
            ))
          }
          </div>

             </div>
         </div>
         </>
     )
}
