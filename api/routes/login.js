var express = require('express');
const usersDAO = require('../data_access_layer/usersDAO');
var router = express.Router();

var LoginService = require('../service_layer/LoginService');


/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
  });

router.post('/', async function(req, res, next){
    const loginDTO = req.body;
    console.log(req.body);
    const loginService = new LoginService();
    const {status, user} = await loginService.findUser(loginDTO);
    req.session.user = user;
    console.log(req.session.user);
    res.status(status).send(user);
});
module.exports = router;
