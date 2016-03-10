'use strict';
var router = require('express').Router();
module.exports = router;

//for /api route
router.use('/members', require('./members'));
router.use('/users', require('./users.js'));
// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
