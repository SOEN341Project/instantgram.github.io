var express = require('express');
const usersDAO = require('../data_access_layer/usersDAO');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.post('/', function(req, res, next){
      req.session.destroy();
      return res.status(200).send("Logged Out");
  })
module.exports = router;
