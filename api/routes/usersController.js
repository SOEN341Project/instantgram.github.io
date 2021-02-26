var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
var expressValidator = require('express-validator');
router.use(expressValidator());


//GET users listing. 
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/


let User = require('../data_access_layer/usersDAO');

//register form
router.get('/register', function(req,res){
  res.render('register');
});

//register process
router.post('/register', function(req, res){
  const username = req.body.username;
  //const email = req.body.email;
  //const fName = req.body.fName;
  //const lName = req.body.lName;
  const password = req.body.password;
  console.log(req.body);
  console.log(password);
  req.checkBody('username', 'Username is required').notEmpty();
  //req.checkBody('email', 'Email is required').notEmpty();
  //req.checkBody('email', 'Email is not valid').isEmail();
  //req.checkBody('fName', 'First Name is required').notEmpty();
  //req.checkBody('lName', 'Last Name is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();

  let errors = req.validationErrors();
  
  if(errors){
    res.render('register', {
      errors:errors
    });
  } else {
    let newUser = new User({
      username:username,
      //email:email,
      //fName:fName,
      //lName:lName,
      password:password,
    });

    newUser.save(function(err){
      if(err){
        console.log(err);
        return;
      } else return res.send();
    });
    return res.send();
  }
});



module.exports = router;