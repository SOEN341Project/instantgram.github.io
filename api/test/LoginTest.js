const expect = require('chai').expect;
const request = require('supertest');


const app = require('../app');

describe('Login user 1', () => {
    it('Test user 1 succesfully logged in', (done) => {
        request(app).post('/login')
        .send({username: 'Tester1', password: 'tester'})
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id');
            expect(body).to.contain.property('username');
            expect(body).to.contain.property('password');
            done();
        })
        .catch((err) => done(err))
    })
})