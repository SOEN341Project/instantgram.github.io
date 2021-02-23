var express = require('express');
var router = express.Router();

let login = require('../controllers/login');
/* GET home page. */
router.get('/', login.login);

module.exports = router;
