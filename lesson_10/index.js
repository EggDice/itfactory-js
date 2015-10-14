'use strict';

var app = require('./app');

var fs = require('fs');

var dir = fs.readdirSync('./controllers');

dir.forEach(function(file) {
	var controller = require('./controllers/' + file);
	controller(app);
});

app.listen(8080);
