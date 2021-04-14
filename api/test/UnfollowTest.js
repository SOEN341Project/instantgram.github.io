const expect = require('chai').expect;
const request = require('supertest');


const app = require('../app');

describe('Unfollow User', () => {
    it('User 1 login', (done) => {
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

        request(app).post('/unfollow/qwer')
    })
})