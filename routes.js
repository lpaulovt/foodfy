const express = require('express')
const routes = express.Router()

const data = require('./data.json')
const homeRecipes = data.recipes.slice(0,6)


routes.get('/', function(req, res){
    return res.render('home', {homeRecipes: homeRecipes, homeData: data.home})
 })

routes.get('/about', function(req, res){
    return res.render('about', {aboutdata: data.about})
})

routes.get('/recipes', function(req, res){
    return res.render('recipes', {recipes: data.recipes})
})

routes.get('/recipes/:id', function(req, res){
    const id = req.params.id;

    const recipe = data.recipes.find( recipe => {
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