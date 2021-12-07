const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const VideogameRouter  = require ('../Controller/Videogame.controller')
const { getInfoApi } = require('../Controller/VideogameJoincontroller')
//const GenreRouter = require ('../Controller/Genre.controller')
const router = Router();

//router.use("/Videogame", VideogameRouter)
//router.use("/inicio",GenreRouter )

router.get("/videogames", getInfoApi)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
