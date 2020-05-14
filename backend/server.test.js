let chai = require('chai');
let expect = chai.expect();

//Authorization test
it('locates to the home page', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});


