const express = require('express')
const nunjucks = require('Nunjucks')

const recipes = require('./recipes-data')
const homeRecipes = recipes.slice(0,6)

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
    

    return res.render('home', {homeRecipes: homeRecipes, homeData})
 })

server.get('/about', function(req, res){
    return res.render('about', {aboutdata})
})

server.get('/recipes', function(req, res){
    return res.render('recipes', {recipes})
})

server.get('/recipes/:id', function(req, res){
    const id = req.params.id;

    const recipe = recipes.find( recipe => {
        return recipe.id == id;
    })

    if(!recipe) {
        res.status(404).render('not-found')
    }

    res.render('recipe', {recipe})
})

server.use(function(req, res){
    res.status(404).render('not-found')
})

server.listen(5000, function(){
    console.log('Server is running.')
 })
