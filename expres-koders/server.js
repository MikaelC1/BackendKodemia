const express = require('express')
const kodersRouter = require('./koders.router')
const server = express()

server.use(express.json())
server.use((request, response, next) => {
    console.log("Middleware de aplicacion")

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

server.use('/koders', kodersRouter)

server.get('/', (req, res) => {
   res.json({
      message: "Kodemia API v1"
   })
})

module.exports = { 
   server: server 
};