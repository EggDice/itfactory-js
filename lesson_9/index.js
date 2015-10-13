'use strict';

var express = require('express');
var fs = require('fs');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {
	  number: 42
  });
});

app.listen(8080);