var router = require('express').Router();

module.exports = router;
var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');

//get all recipes
router.get('/', function(req, res, next) {
	Recipe.find(req.query)
	.then(function(response){
		res.json(response);
	})
	.then(null, next);
});

//get one
router.get('/:id', function(req, res, next) {
	Recipe.findById(req.params.id)
    .then(function(res){
       res.json(res);
    })
    .then(null, next);
});
