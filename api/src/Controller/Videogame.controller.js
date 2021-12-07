require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db');
//const apiVideoGamesNew = require('../Controller/apiVideoGamesNew.json')

const getInfoApi = async (req, res) => {
    
        const apiUrl = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
       // const apiUrl = await axios.get(`${apiVideoGamesNew}`); 
        const infoApi = await apiUrl.data.map(el =>{
            return{
                id: el.id,
                name: el.name,
                description: el.description,
                released_at: el.released_at,
                rating: el.rating
            }
        });
        return infoApi;  
};

const infoBd = async (req, res) => {
    return await Videogame.findAll({
        include: {
            model: Genre,
            atributes: ["name"], through: {
                atributes: []
            }
        }
    })
}

const joinApiBd = async () => {
    const bdApi = await getInfoApi();
    const bd = await infoBd();
    const totalInfo = bdApi.concat(bd);
    return totalInfo
}

const busquedaTotal = async (req, res) => {
    const { name } = req.query;
    const totalData = await joinApiBd()
    if (name){
        let nameVd = await totalData.filter(el => el.name.tolowercase().includes(name.tolowercase()))
        nameVd.length?
        res.status(200).json(nameVd):
        res.status(404).json({message: "no se encontro videojuego"})
    } else {
        res.status(200).send(totalData)
    }
   
}

const busquedaId = async (req, res) => {
    const { id } = req.params
    const searchId = await joinApiBd()
    if (id){
        let idVd = await searchId.filter(el => el.id == id)
        idVd.length?
        res.status(200).json(idVd):
        res.status(404).json({message: "id no valido"})
    }
}

module.exports = {getInfoApi, joinApiBd, busquedaTotal, busquedaId};







