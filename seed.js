/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var users = require('./seeddata/UserDataSet.js');
var Recipe = Promise.promisifyAll(mongoose.model('Recipe'));
var Recipedetail = Promise.promisifyAll(mongoose.model('Recipedetail'));

var recipewithinstructions = require('./seeddata/recipeWithInstruction.js');
var recipedetailwithinstructions = require('./seeddata/recipedetailWithInstruction.js');

var seedUsers = function () {
  return User.createAsync(users);
};
var seedRecipewithinstructions = function () {
  return Recipe.createAsync(recipewithinstructions);
};

var seedRecipedetailwithinstructions = function () {
  return Recipedetail.createAsync(recipedetailwithinstructions);
};

connectToDb.then(function () {
    return User.findAsync({}).then(function (users) {
        if (users.length === 0) {
            return seedUsers();
        } else {
            console.log(chalk.magenta('Seems to already be user data, exiting!'));
            process.kill(0);
        }
    })
    .then(function(){
        return Recipe.findAsync({})
            .then(function (recipes) {
            if (recipes.length === 0) {
                return seedRecipewithinstructions();
            } else {
                console.log(chalk.magenta('Seems to already be recipe data, exiting!'));
                process.kill(0);
            }
        })

    })
    .then(function(){
        return Recipedetail.findAsync({})
            .then(function (recipedetails) {
            if (recipedetails.length === 0) {
                return seedRecipedetailwithinstructions();
            } else {
                console.log(chalk.magenta('Seems to already be recipedetail data, exiting!'));
                process.kill(0);
            }
        })

    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    });
});
