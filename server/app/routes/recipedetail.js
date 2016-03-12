var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');

var Recipedetail = mongoose.model('Recipedetail');

//get all recipes
router.get('/', function(req, res, next) {
	Recipe.find(req.query)
	.then(function(response){
		res.json(response);
	})
	.then(null, next);
});

//get one
router.get('/:recipeNum', function(req, res, next) {
	Recipe.findRecipedetail(req.params.recipeNum)
    .then(function(res){
       res.json(res);
    })
    .then(null, next);
});

//get one from recipe: 