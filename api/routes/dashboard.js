var express = require('express');
const usersDAO = require('../data_access_layer/usersDAO');
var router = express.Router();

let User = require('../data_access_layer/usersDAO');
/* GET home page. */
router.get('/', function(req, res, next){
      if(!req.session.user){
          return res.status(401).send();
      }
      return res.status(200).send('You are logged in');
  })
module.exports = router;
