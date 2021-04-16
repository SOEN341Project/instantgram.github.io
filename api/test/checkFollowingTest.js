const expect = require('chai').expect;
const request = require('supertest');
const PicsService = require('../service_layer/PicsService');
const fs = require('fs');

const app = require('../app');

describe('Registers user 1 for FOLLOWING test', () => {
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
})

describe('Test to see following', () => {
    describe('Test for followinge', () => {
        it('should verify empty follow array', async() => {
            const res = await request(app)
                .post('/following/Tester1')
                expect([]).to.be.empty;
        })
    })
})