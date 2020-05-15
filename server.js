const express = require('express')
const nunjucks = require('Nunjucks')
const routes = require('./routes')

const server = express()
server.set("view engine", "njk")
server.use(express.static('public'))
server.use(routes)

nunjucks.configure("views", {
    autoescape:false,
    express:server
})

server.listen(5000, function(){
    console.log('Server is running.')
 })
