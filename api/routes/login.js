var express = require('express');
const usersDAO = require('../data_access_layer/usersDAO');
var router = express.Router();
var session = require('express-session');

let User = require('../data_access_layer/usersDAO');
/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
  });

router.post('/', function(req, res, next){
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);
    console.log(password);
    User.findOne({username: username, password: password}, function(err, user){
        if(err){
            console.log(err)
            return res.status(500).send();
        } 
        if(!user){
            return res.status(404).send();
        }
        req.session.user = user;
        console.log(req.session.user);
        res.status(200).send(user);
        return;
    })
});
module.exports = router;
