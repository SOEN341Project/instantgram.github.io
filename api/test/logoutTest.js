const expect = require('chai').expect;
const request = require('supertest');


const app = require('../app');

describe('Logout user 1', () => {
    it('Test user 1 succesfully logged out', () => {
        request(app).post('/logout')
    })
})