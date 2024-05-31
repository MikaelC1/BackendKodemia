const express = require("express");
const kodersUseCase = require('./koders.usecase')

//koders
const router = express.Router();
const getKodersRoute = '/'

//Middleware a nivel aplicacion
router.use((request, response, next) => {
    console.log("Middleware a nivel de router (koders")

    const authorization = request.headers.authorization

    if(authorization === 'holi') {
        next()
    } else {
        response.status(403),
        response.json({
            message: 'No tienes accesos'
        })
    }
})


router.get(getKodersRoute,(request, response, next) => {
    console.log("Middleware a nivel de ruta (Get Koders)")
}, (req, res) => {
    try {
        const koders = kodersUseCase.getAll()

        res.json({
            message: 'All Koders',
            date: {
                koders: koders,
            }
        })
    } catch(error) {
        res.status(error.status || 500)
        res.json({
            error: error.message
        })
    }
})

router.post(getKodersRoute, (req, res) => {
    try {
        const newKoder = req.body
        const koders = kodersUseCase.add(newKoder)
        
        res.json({
            message: 'Koder added',
            data: { koders }, 
        })
    } catch (error) {
        res.status(error.status || 500);

        res.json({
            error: error.message,
        })
    }
})

router.delete(getKodersRoute, (req, res) =>{
    try {
        kodersUseCase.deleteAll()

        res.json({
            message: 'All Koders Deleted',
            data: {koders}
        })
    } catch (error){
        res.status(error.status || 500)
    }
})

router.delete('/:name', (req, res) => {
    try{
        const name = req.params.name
        const koders = kodersUseCase.deleteByName(name)

        res.json({
            message: 'Koder Deleted',
            data: {koders}
        })
    } catch (error){

        res.json({
            error: error.message
        })
    }
})

module.exports = router;