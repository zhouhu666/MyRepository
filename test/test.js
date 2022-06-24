const request = require('supertest');
const app = require('../app');

describe('App', function() {
  it('has the default page,this is feature/susu01', function(done) {
    request(app)
      .get('/')
      .expect(/Welcome to Express/, done);
  });
}); 
