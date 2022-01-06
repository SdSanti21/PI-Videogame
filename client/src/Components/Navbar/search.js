import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByName } from "../../Actions/index";
//import './navbar.css'


export default function Search() {
  const [videogameState, setVideogameState] = useState("");
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    
    if (videogameState.length === 0) {
      return alert("Ingrese el nombre de un videojuego");
    } else {
      debugger
      dispatch(getVideogamesByName(videogameState));
      setVideogameState("");
      debugger
      // alert(dispatch.message);
    }
  }

  return (
    <div className="search" >
      <input
        type="text"
        placeholder="Search a Videogame..."
        value={videogameState}
        onChange={(e) => setVideogameState(e.target.value)}
      />
      <button className="busquedaBtn"  type="submit" onClick={handleClick}>
        <span  >search</span>
      </button>
    </div>
  );
}
