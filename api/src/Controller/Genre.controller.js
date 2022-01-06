require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Genre } = require('../db')


const getGenres = async (req, res) => {
    const apiGenres = await axios.get(`https://api.rawg.io/api/genres?key=7db0632bc8014a4a87bd8f6173149e19`);
    const infoGenres = await apiGenres.data.results
        infoGenres.forEach(async i => {
        await Genre.findOrCreate({
          where: {name: i.name}
        })  
    })
    const genresBd = await Genre.findAll();
     res.status(200).json(genresBd);
}

const genresFrontList = async (req, res) => {
  const genresBd = await Genre.findAll()
  const genres = await genresBd.map(el => el.name);
     res.status(200).json(genresBd);
}



module.exports = {getGenres, genresFrontList };