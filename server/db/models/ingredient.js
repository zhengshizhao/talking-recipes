'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');
require('./recipedetail');
var schema = new mongoose.Schema({
    name: String,
    amount: Number
});

mongoose.model('Ingredient', schema);