const { Router } = require('express')
const { Videogame } = require('../db')
const axios = require('axios')

const router = Router()

router.post("/", async (req, res) => {
    const { nombre, descripcion, fechadelanzamiento, rating, plataformas} = req.body;
    try {
        const newGame = await Videogame.create({
            nombre, 
            descripcion, 
            fechadelanzamiento, 
            rating, 
            plataformas})

        res.status(200).json(newGame)
    } catch (error) {
        res.send(404, error)
    }
})







module.exports = router;