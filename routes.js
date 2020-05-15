const express = require('express')
const routes = express.Router()


const recipes = require('./recipes-data')
const homeRecipes = recipes.slice(0,6)

const aboutdata = require('./about-data')


routes.get('/', function(req, res){
    return res.render('home', {homeRecipes: homeRecipes, homeData})
 })

routes.get('/about', function(req, res){
    return res.render('about', {aboutdata})
})

routes.get('/recipes', function(req, res){
    return res.render('recipes', {recipes})
})

routes.get('/recipes/:id', function(req, res){
    const id = req.params.id;

    const recipe = recipes.find( recipe => {
        return recipe.id == id;
    })

    if(!recipe) {
        res.status(404).render('not-found')
    }

    res.render('recipe', {recipe})
})

routes.use(function(req, res){
    res.status(404).render('not-found')
})


module.exports = routes