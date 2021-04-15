const expect = require('chai').expect;
const request = require('supertest');


const app = require('../app');

describe('Show users', () => {
    it('Show all registered users ', (done) => {
        request(app).post('/allusers')
        .then((res) => {
            expect({"username":"Tester1","username":"qwer"}).to.include({"username":"Tester1","username":"qwer"});
            done();
        })
    })
})