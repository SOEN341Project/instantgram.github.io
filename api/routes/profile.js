var express = require('express');
const usersDAO = require('../data_access_layer/usersDAO');
var router = express.Router();
var session = require('express-session');
var ProfileService = require('../service_layer/ProfileService');



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

#123-Restructure-profile-and-login
router.post('/:username', async function(req,res,next){
  const username = req.params.username;
  const profileService = new ProfileService();
  const {status, user}  = await profileService.getUser(username);
  //res.status(200).send(req.session.user);
  //console.log(req.session.user);
  res.status(status).send(user);
});
module.exports = router;
