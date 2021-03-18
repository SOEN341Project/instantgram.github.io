var express = require('express');
const usersDAO = require('../data_access_layer/usersDAO');
var router = express.Router();
var session = require('express-session');

let User = require('../data_access_layer/usersDAO');
/* GET home page. */

router.get('/', function(req, res, next) {
  console.log(req.session.user);
    const useernamereq = req.session.user;
    res.status(200).send(useernamereq);
  });

router.post('/', function(req, res, next){
    if (!req.session.user){
      console.log("**NO SESSION POST**");
      res.status(403).send("You are not logged in");
      return;
  }
  console.log("**IN SESSION POST**");
  res.status(200).send(req.session.user);
  return;
  });
module.exports = router;
