var request = require('supertest');

var app = require('./../../server');

describe('Hitting Root Directory', function(){
	
	it('Returns a 200 Status Code')
		request(app)
			.get('/')
			.expect(200)
			.end(function(error){
				if(error) throw error;
			}); 

});
