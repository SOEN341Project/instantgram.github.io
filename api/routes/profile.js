var express = require('express');
const usersDAO = require('../data_access_layer/usersDAO');
var router = express.Router();
var session = require('express-session');

let User = require('../data_access_layer/usersDAO');
/* GET home page. */

router.get('/', function(req, res, next) {
  if (!req.session.user){
    console.log("**NO SESSION GET**");
    return res.status(403).send("You are not logged in");
  }
  console.log("**IN SESSION GET**");
  return res.status(200).send(req.session.user);
  });

router.post('/', function(req, res, next){
  if (!req.session.user){
    console.log("**NO SESSION POST**");
    return res.status(403).send("You are not logged in");
  }
  console.log("**IN SESSION POST**");
  return res.status(200).send(req.session.user);
  });

router.get('/:username', function(req,res,next){
  const uName = req.params.username;
  User.findOne({username: uName}, function(err,user){
    if(err){
      console.log(err);
      return res.status(500).send();
    }
    if(!user){
      return res.status(404).send();
    }
    return res.status(200).send(user);
  })
})
module.exports = router;
