// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', data);
};

/*
?{
    'data': [
      { 'name': 'Doug Engelbart',
        'imageURL': 'http://lorempixel.com/500/500/people/1',
        'discription': 'cool dude'
      },
      { 'name': 'Ivan Sutherland',
        'imageURL': 'http://lorempixel.com/500/500/people/2',
        'discription': 'cooler dude'
      },
      { 'name': 'JCR Licklider',
        'imageURL': 'http://lorempixel.com/500/500/people/3',
        'discription': 'coolest dude'
      }
    ]
    }
    */
