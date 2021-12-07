require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db');

const getInfoApi = async (req, res) => {
    
        const apiUrl = await axios.get(`https://api.rawg.io/api/games?key=7db0632bc8014a4a87bd8f6173149e19`);
        const infoApi = await apiUrl?.data?.map(item =>{
            return{
               // image_background: item.image_background,
                name: item.name,
               // genres: item.genres //.map(item => item)
            }
        });
        return infoApi;
        
    
};

module.exports = {getInfoApi};