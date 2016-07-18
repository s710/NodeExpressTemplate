var express = require('express'),
	logger = require('morgan'),
	bodyParser = require('body-parser');


module.exports = function(app, config){


	app.set('views', config.rootPath + '/public/views');
	app.set('view engine', "jade");
	app.use(logger('dev'));
	
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	app.use(express.static(config.rootPath + '/public'));

}