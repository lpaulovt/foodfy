const express = require('express')
const nunjucks = require('Nunjucks')

const recipes = require('./recipes-data')
const mostAccessedRecipes = require('./most-accessed__recipes-data')
const aboutdata = require('./about-data')

const server = express()
server.set("view engine", "njk")
server.use(express.static('public'))

nunjucks.configure("views", {
    autoescape:false,
    express:server
})

 //Routers
server.get('/', function(req, res){

    const homeData = {
        title: 'As melhores receitas',
        description: 'Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro.',
        image: '/assets/chef.png'
    }

    return res.render('home', {mostAccessedRecipes, homeData})
 })

server.get('/about', function(req, res){
    return res.render('about', {aboutdata})
})

server.get('/recipes', function(req, res){
    return res.render('recipes', {recipes})
})

server.use(function(req, res){
    res.status(404).render('not-found')
})

server.listen(5000, function(){
    console.log('Server is running.')
 })
