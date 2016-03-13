var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');

var Recipedetail = mongoose.model('Recipedetail');
//get all recipes
router.get('/', function(req, res, next) {
	Recipedetail.find(req.query)
	.then(function(response){
		res.json(response);
	})
	.then(null, next);
});

//get one
router.get('/:recipeNum', function(req, res, next) {
	Recipedetail.findOne({id:req.params.recipeNum})
    .then(function(response){
       res.json(response);
    })
    .then(null, next);
});

//get one from recipe: 