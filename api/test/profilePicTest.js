const expect = require('chai').expect;
const request = require('supertest');
const PicsService = require('../service_layer/PicsService');
const fs = require('fs');

const app = require('../app');

describe('Registers user 1 for PROFILE IMAGE test', () => {
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

describe('Test for profile image', () => {
    describe('Test for POST route', () => {
        it('should return 200 and create user profile picture', async() => {
            const res = await request(app)
                .post('/postpic/Tester1')
                .field('profilePic', 'true')
                .attach('picture', fs.readFileSync('./test/TestPic.jpg'), 'test/TestPic.jpg')
                expect(res.status).to.equal(200);
        })
    })
})