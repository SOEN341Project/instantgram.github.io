var express = require('express');
const usersDAO = require('../data_access_layer/usersDAO');
var router = express.Router();
var session = require('express-session');
var ProfileService = require('../service_layer/ProfileService');

const userDAO = require('../data_access_layer/usersDAO');

/* GET all users. */

router.get('/', async function(req,res,next){
    const profileService = new ProfileService();
    const founduser  = await profileService.getAllUser();
    res.status(200).send(founduser);
});

module.exports = router;
