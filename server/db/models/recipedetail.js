'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');
require('./recipes');
//var Recipe = require('./recipes.js')
require('./ingredient');
var schema = new mongoose.Schema({
    vegetarian: Boolean,
    vegan: Boolean,
    glutenFree:Boolean, 
    servings: Number,
    sourceUrl: String,
    sourceName: String,
    image: String,
    instructions: String,
    id: Number,
    title: String,
    readyInMinutes: Number,
    extendedIngredients:[{name: String, amount: Number}]
    //ingredients: [{type: mongoose.Schema.Types.ObjectId, ref:'Ingredient'}]
 //recipe:[{type: mongoose.Schema.Types.ObjectId, ref:'Recipe'}]
});

mongoose.model('Recipedetail', schema);