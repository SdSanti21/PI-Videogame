const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { busquedaTotal, busquedaId } = require('../Controller/Videogame.controller')

const router = Router();



router.get("/videogames", busquedaTotal)
router.get("/videogames/:id", busquedaId)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
