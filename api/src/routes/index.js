const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { busquedaTotal, busquedaId, createVideogames, genresFront, getDetalle} = require('../Controller/Videogame.controller')
const { getGenres, genresFrontList } = require('../Controller/Genre.controller');
const router = Router();



router.get("/videogames", busquedaTotal) 
router.get("/videogames/:id", busquedaId ) //
router.get('/genres', getGenres)
router.get('/genre', genresFront) //RUTA PARA LOS FILTRADOS*
router.get('/genreslist', genresFrontList)//RUTA PARA LOS FILTRADOS
router.get('/description/:id', getDetalle)

router.post('/videogame', createVideogames)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
