'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');
require('./recipes');
//var Recipe = require('./recipes.js')

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
 //recipe:[{type: mongoose.Schema.Types.ObjectId, ref:'Recipe'}]
});

schema.statics.findRecipedetail = function(recipeNum){
    this.findOne({id: recipeNum})
    .then(function(res){
        return res;
    })
}

mongoose.model('Recipedetail', schema);