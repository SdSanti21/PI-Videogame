const { Router } = require('express');
const { Genre } = require('../db')

const router = Router();

router.post('/',(req, res, next)=>{
    const {nombre} = req.body;
       Genre.create({nombre})
   .then((nuevoVideo)=>{
       res.json(nuevoVideo);
   })
   .catch((error)=>{
       next(error)
       console.log(error)
   }) 
   
  
})


module.exports = router;