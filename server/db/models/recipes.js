'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    id: {
        type: Number, required: true
    },
    title: String,
    readyInMinutes: Number,
    image: String,
    imageUrls: [String]
});


mongoose.model('Recipe', schema);
