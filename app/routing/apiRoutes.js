//required dependencies
var path = require('path');
var friends = require('../data/friends.js');

module.exports = function (app) {

	app.get('/api/friends', function (req, res) {
		// console.log(res);
		res.json(friends);
	});

	//add new friend
	app.post('/api/friends', function (req, res) {
		var input = req.body;
		console.log(req.body);

		var userInput = input.scores;
		var matchName = '';
		var matchPhoto = '';
		var totalDiff = 50; //initial val for comparison

		//check all friends in the list
		for (var i = 0; i < friends.length; i++) {
			var difference = 0;
			for (var x = 0; x < userInput.length; x++) {
				// an interesting read  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
				difference += Math.abs(friends[i].scores[x] - userInput[x]);
			}

			//If lowest difference record
			if (difference < totalDiff) {

				totalDiff = difference;
				matchName = friends[i].name;
				matchPhoto = friends[i].photo;
			}
		}
		console.log("name of match " + matchName)
		// Add new user
		friends.push(input);

		//send response
		res.json({
			status: 'OK',
			matchName: matchName,
			matchPhoto: matchPhoto
		});
	});
};