import axios from 'axios';

require('dotenv').config();
const {
    REACT_APP_SERVER,
  } = process.env;

export function getAllVideogames() {
    return async function (dispatch) {
        const games = await axios(`${REACT_APP_SERVER}/videogames`)
        return dispatch
        ({
            type: 'GET_VIDEOGAMES',
            payload: games.data
        })
    }
}

export function ordenarPorNombre(payload) {
    return {
        type: 'ORDENAR_POR_NOMBRE',
        payload
    }
}

export function filtradoBd(payload) {
    return {
        type: 'FILTRADO_BD',
        payload
    }
}

export function filtradoRt(payload) {
    return {
        type: 'FILTRADO_RT',
        payload
    }
}

export function filtradoGenre(payload) {
    return async function (dispatch) {
        try {
            const genres = await axios(`${REACT_APP_SERVER}/genre?genre=${payload}`);
        return dispatch
        ({
            type: 'GET_GENRE_FILTRADO',
            payload: genres.data
        })
        } catch (error) {
            console.log(error)
        }
    }
} 

export function GenreList() {
    return async function (dispatch) {
        try {
            const genresL = await axios(`${REACT_APP_SERVER}/genreslist`);
            const listGenre = await genresL.data.map(el => el.name)
        return dispatch
        ({
            type: 'GET_GENRE_LIST',
            payload: listGenre
        })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getDetalle(id) {
    return async function (dispatch) {
        try {
            const detalleV = await axios(`${REACT_APP_SERVER}/videogames/`+id);  
        return dispatch
        ({
            type: 'GET_DETALLE',
            payload: detalleV.data
        })
        } catch (error) {
            console.log(error)
        }
    }
} 

export function postVideogames(payload) {
    return async function () {
            const createVideogame = await axios.post(`${REACT_APP_SERVER}/videogame`,payload);  
        return createVideogame
       
    }
}

export function getVideogamesByName(name) {
    return async function (dispatch) {
        const { data } = await axios.get(`${REACT_APP_SERVER}/videogames?name=${name}`);
        return dispatch({
            type: 'GET_VIDEOGAMES_BY_NAME',
            payload: data
        });
    };
}


