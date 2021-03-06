const expect = require('chai').expect;
const request = require('supertest');


const app = require('../app');

describe('Register users 1 & 2', () => {
    it('Test user 1 succesfully registered', (done) => {
        request(app).post('/users/register')
        .send({username: 'Tester1', password: 'tester'})
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('response');
            done();
        })
        .catch((err) => done(err))
    })

    it('Test user 2 succesfully registered', (done) => {
        request(app).post('/users/register')
        .send({username: 'qwer', password: 'tester'})
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('response');
            done();
        })
        .catch((err) => done(err))
    })

    
})