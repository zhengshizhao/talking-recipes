var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var users = require('./seeddata/UserDataSet.js');
var Recipe = Promise.promisifyAll(mongoose.model('Recipe'));
var Recipedetail = Promise.promisifyAll(mongoose.model('Recipedetail'));
var Ingredient = Promise.promisifyAll(mongoose.model('Ingredient'));
var recipewithinstructions = require('./seeddata/recipeWithInstruction.js');
var recipedetailwithinstructions = require('./seeddata/recipedetailWithInstruction.js');
var ingredients = require('./seeddata/ingredient.js');


// var seedUsers = function () {
//   return User.createAsync(users);
// };
// var seedRecipewithinstructions = function () {
//   return Recipe.createAsync(recipewithinstructions);
// };

// var seedRecipedetailwithinstructions = function () {
//   return Recipedetail.createAsync(recipedetailwithinstructions);
// };
// var seedRecipedetailwithinstructions = function () {
//   return Recipedetail.createAsync(recipedetailwithinstructions);
// };
var seedIngredients = function () {
  return Ingredient.createAsync(ingredients);
};

// var seedUsers = function () {
//   return User.createAsync(users);
// };
connectToDb.then(function () {
    return Ingredient.findAsync({}).then(function (users) {
        if (users.length === 0) {
            return seedIngredients();
        } else {
            console.log(chalk.magenta('Seems to already be user data, exiting!'));
            process.kill(0);
        }
    })
})
    