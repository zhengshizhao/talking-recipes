'use strict';
var router = require('express').Router();
module.exports = router;

//for /api route
//router.use('/members', require('./members'));
router.use('/users', require('./users.js'));
router.use('/recipes', require('./recipes.js'));
router.use('/recipedetail', require('./recipedetail.js'));

router.use(function (req, res) {
    res.status(404).end();
});
