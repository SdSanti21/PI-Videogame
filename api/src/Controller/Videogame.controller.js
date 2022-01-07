require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db');
//const apiVideoGamesNew = require('../Controller/apiVideoGamesNew.json')

const getInfoApi = async (req, res) => {
        
    let page = 1;
      var videogamesTotal = [];
      while (page < 6) {
        const videogamesPorPagina = await axios(
          `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`
        );
        var { results } = videogamesPorPagina.data;
        /* Concateno el array results que me envia la api con el array vacio definido al principio, y por cada iteración del bucle se iran sumando los resultados de cada pagina */
        videogamesTotal = videogamesTotal.concat(results);
        page++;
      }
        const infoApi = await videogamesTotal
        .map(el =>{
            return{
                id: el.id,
                name : el.name,
                image: el.background_image,
                genre: el.genres.map(el=>el.name).join(", "),
                description: el.description,
                released_at: el.released,
                rating: el.rating,
                platforms: el.platforms.map(el=>el.platform.name).join(", ")
            }
        });
        return infoApi;
          
};

const infoBd = async (req, res) => {
    return await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ["name"], through: {
                attributes: []
            }
        }
    })
};

const joinApiBd = async () => {
    const bdApi = await getInfoApi();
    const bd = await infoBd();
    const newCreate = await bd.map(el => {
        return {
            id: el.id, 
            name: el.name.charAt(0).toUpperCase() + el.name.slice(1),
            image: el.image? el.image:"https://www.trecebits.com/wp-content/uploads/2019/04/11854.jpg",
            genre: el.Genres.map(el => el.name).join(', '),
            description: el.description,
            released_at: el.released_at,
            rating: el.rating,
            platforms: el.platforms,
            createDb: el.createDb
        }
    })
    //const totalInfo = bdApi.concat(newCreate);
    const totalInfo = newCreate.concat(bdApi);
    return totalInfo
};

const busquedaTotal = async (req, res) => {
    const { name } = req.query;
    try {
        const totalData = await joinApiBd()
        if (name){
            let nameVd = await totalData.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            nameVd.length?
            res.status(200).json(nameVd):
            res.status(404).json({message: "no se encontro videojuego"})
        } else {
            res.status(200).send(totalData)
        }  
    } catch (error) {
        console.log(error);
    }
   
};  

const busquedaId = async (req, res) => {
    const { id } = req.params
    const searchId = await joinApiBd()
    if (id){
        let idVd = await searchId.filter(el => el.id == id)
        idVd.length?
        res.status(200).json(idVd):
        res.status(404).json({message: "id no valido"})
    }
};

const createVideogames = async (req, res) => {
    
        const { name, image, description, released_at, rating, platforms, genre} = req.body;
        const newGame = await Videogame.create({
            name,
            image, 
            description, 
            released_at, 
            rating, 
            platforms
        })
        let genrEn = await Genre.findAll({
            where: {name:genre }
        })
        newGame.addGenre(genrEn);
        res.send("ya fuiste creado")
};

const dataTotal = async (req, res) => {
    const datag = await joinApiBd()
    return datag
};

const genresFront = async (req, res) => {
    const { genre } = req.query
    const genreTot = await dataTotal()
    const searchGenre = genreTot.filter((g) => {
        if(genre === "all") return genreTot
        else if (g.genre){
            return (g.genre.toLowerCase()).includes(genre.toLowerCase())
        }
    })
    res.status(200).json(searchGenre)
};

const getDetalle = async (req, res) => {
    try {
    const { id } = req.params
    const detalleVideogames = await axios.get(`https://api.rawg.io/api/games/${id}?key=d0e09f787b57497bb836b8c8bfea4c6e`)
    let el = detalleVideogames.data
    const descriptionT = {
                id: el.id,
                name : el.name,
                image: el.background_image,
                genre: el.genres.map(el=>el.name).join(", "),
                description: el.description,
                released_at: el.released,
                rating: el.rating,
                platforms: el.platforms.map(el=>el.platform.name).join(", ")
            }
    // const info = await infoBd()
    // const bmap = await info.map(el => { return {id: el.id}} )
    // const videoId = await bmap.filter(el=>el.id == id) 
    // const toto = await videoId.concat(descriptionT)
        res.status(200).json(descriptionT) 
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getInfoApi, 
    joinApiBd, 
    busquedaTotal,
    busquedaId, 
    createVideogames, 
    genresFront, 
    getDetalle
};







