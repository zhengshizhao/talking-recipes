var request = require('request-promise');


// request('http://www.google.com')
//     .then(function (htmlString) {
//       console.log(htmlString);
//     })
//     .catch(function (err) {
//          console.log("err", err)
//     });

module.exports = function searchAllrecipe(qs,param){
	var Urllink = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes";
var option = { 
	headers: {"X-Mashape-Key": "bWvJ7vEWh5mshWUGWqPz2eB8eiAnp1ncWaVjsnEA26E26Q1RI3"},
    json: true
}	 
	if(!!param) Urllink = Urllink + param;
	if(!!qs) option.qs = qs;
	option.uri = Urllink;
	
	return request(option).then(function(res){
		//console.log(res);
		return res;
	})
	.catch(function (err) {
         console.log("err", err)
    });
}

