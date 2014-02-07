var data = require("../data.json");

exports.addFriend = function(req, res) {    


	var name = req.query.name;
	var description = req.query.description;

	var friend = 
	{
		'name': name,
		'description': description,
		'imageURL': "http://lorempixel.com/400/400/people"
	};
	res.render('add', data);
	data["friends"].push(friend);


 }