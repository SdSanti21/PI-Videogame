import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { postVideogames, GenreList  } from '../../Actions/index'

function validateForm(input) {
    let errors = {};
    
    if (!input.name) {errors.name = "Tienes que colocar un nombre";
    
    } else {errors.name = "";}
  
    if (!input.description) {
      
      errors.description = "Debes ingresar una descripcion";
    } else if (!/\d{1,2}/gi.test(input.description)) {
      
      errors.description = "";
    } else {
      errors.description = "";
    }
    if (!input.released_at) {
      errors.released_at = "Tiene que ser un numero";
    } else if (!/\d{1,2}/gi.test(input.released_at)) {
      errors.released_at = "Verifique que sea una fecha";
    } else {
      errors.released_at = "";
    }
    if (!input.rating) {
      errors.rating = "Escribe un numero del 1 al 5";
    } else if (!/\d{1,2}/gi.test(input.rating)) {
      errors.rating = "Debe tener un valor";
    } else {
      errors.rating = "";
    }
    if (!input.genre) {
      errors.genre = "Escribe el genero del juego";
    } else if (!/\d{1,2}/gi.test(input.genre)) {
      errors.genre = "Debe tener al menos un genero";
    } else {
      errors.genre = "";
    }
    if (!input.platforms) {
        errors.platforms = "Escribe en que plataforma esta el juego";
      } else if (!/\d{1,2}/gi.test(input.platforms)) {
        errors.platforms = "Debe tener al menos una plataforma";
      } else {
        errors.platforms = "";
      }
    return errors;
  }

export default function Formulario() {
    const dispatch = useDispatch()
    const history = useNavigate()
    const genre = useSelector((state) => state.genres)
    const [errors, setErrors] = useState({});
    const [inputs, setInputs] = useState({
        name: "",
        description: "",
        released_at: "",
        rating: "",
        genre: [],
        platforms: [],
    })
    function handleChange(e){
        console.log(e.target.value)
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
        setErrors(
            validateForm({
              ...inputs,
              [e.target.name]: e.target.value,
            })
          );
    }
    const ErroresValidacion=()=>{
    
        if(!inputs.name) {alert("FALTA EL CAMPO DEL NOMBRE"); return false;}
        if(!inputs.rating) {alert("FALTA EL CAMPO DEL RATING"); return false;}
        return true;
      }
    function handleDelete(el) {
        setInputs({
          ...inputs,
          genre: inputs.genre.filter((te) => te !== el),
        });
    }
    function handleSelect(e) {
        setInputs({
          ...inputs,
          genre: [...inputs.genre, e.target.value],
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(ErroresValidacion()){
            if (
              !errors.name  &&
              !errors.description &&
              !errors.released_at &&
              !errors.rating &&
              //!errors.genre &&
              !errors.platforms
            ) {
              alert("Your videogame has been created successfully");
            dispatch(postVideogames(inputs));
            setInputs({
                name: '',
                description:'',
                released_at: '',
                rating: '',
                genre: '',
                platforms: [],
              });
            } else {
              return alert("Faltan campos por llenar.");
            }
          }
            history('/Home')
            
    } 
    useEffect(() => {
        dispatch(GenreList())
    }, [dispatch])
    return (
        <div>
            <div>
               <form onSubmit={handleSubmit}>
                   <h1>CREATE VIDEOGAME</h1>
                   <label>
                       Name: 
                       <input name="name" value={inputs.name} onChange={(e) =>handleChange(e)} type="text" />
                       <div className="erroConte">
                         <p className="ValidadorError">{errors.name}</p>
                      </div>
                   </label>
                   <label>
                       Description: 
                       <input name="description" value={inputs.description} onChange={handleChange} type="text" />
                       <div className="erroConte">
                         <p className="ValidadorError">{errors.description}</p>
                       </div>
                   </label>
                   <label>
                       Relesead: 
                       <input name="released_at" value={inputs.released_at} onChange={handleChange} type="date" />
                       <div className="erroConte">
                         <p className="ValidadorError">{errors.released_at}</p>
                       </div>
                   </label>
                   <label>
                       Rating: 
                       <input name="rating" value={inputs.rating} onChange={handleChange} type="number" />
                       <div className="erroConte">
                         <p className="ValidadorError">{errors.rating}</p>
                       </div>
                   </label>
                   <label>
                       Genre: 
                       <select onChange={handleSelect}>
                          {genre.map(genre =>{
                              return (
                                  <option name={genre} value={genre}>{genre}</option>
                              )
                          })}
                       </select>
                     <div className="sidebar_box">
                          <h4>You have selected that:</h4>
                          {inputs.genre.map((el) => (
                          <div key={el} className="selectedItems">
                          <p>{el}</p>
                          <button onClick={() => handleDelete(el)}>x</button>
                     </div>
                ))}
              </div>
                   </label>
                   <label>
                       Platforms: 
                       <input name="platforms" value={inputs.platforms} onChange={handleChange} type="text" />
                       <div className="erroConte">
                         <p className="ValidadorError">{errors.platforms}</p>
                       </div>
                   </label>
                   <div className="buttonSection">
              <Link to="/home">
                <button className="buttonCancel">Cancel</button>
              </Link>
              <button className="button" type="submit">
                Crear 
              </button>
            </div>
               </form>
            </div>
        </div>
    )
}
