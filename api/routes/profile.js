var express = require('express');
const usersDAO = require('../data_access_layer/usersDAO');
var router = express.Router();
var session = require('express-session');

let User = require('../data_access_layer/usersDAO');
/* GET home page. */
router.get('/', function(req, res, next) {
    if (!req.session.user){
        return res.status(403).send("You are not logged in");
    }
    res.render('profile', { title: 'Express', thing: req.session.user.username });
    return res.status(200).send(req.session.user.username);
  });

  router.post('/', function(req, res, next){
     
  })
module.exports = router;
