var path = require('path');
var rootPath = path.normalize(__dirname +  '/../../');

module.exports = {
	development: {
		rootPath: rootPath,
		port: process.env.PORT || 3000,
		host:"localhost"

	},
	production: {
		rootPath: rootPath,
		port: process.env.PORT || 80,
		host: "localhost"
	}

};