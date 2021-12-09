const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { busquedaTotal, busquedaId, createVideogames } = require('../Controller/Videogame.controller')
const { getGenres } = require('../Controller/Genre.controller');
const router = Router();



router.get("/videogames", busquedaTotal)
router.get("/videogames/:id", busquedaId)

router.get('/genres', getGenres)
router.post('/videogame', createVideogames)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
