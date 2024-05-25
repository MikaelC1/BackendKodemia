const express = require('express')
const kodersUseCase = require('./koders.usecase')
const server = express()

server.use(express.json())

server.get('/', (req, res) => {
   res.json({
      message: "Kodemia API v1"
   })
})

server.get('/koders', (req, res) => {
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

server.post('/koders', (req, res) => {
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

server.delete('/koders', (req, res) =>{
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

server.delete('/koders/:name', (req, res) => {
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

module.exports = { 
   server: server 
};