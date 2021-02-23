var express = require('express');
var router = express.Router();

router.post('/user/:userid', function(req, res){
    let picsDTO = req.body;
  
    article.save(function(err){
        if(err){
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    }); 
  });

  module.exports = router;
