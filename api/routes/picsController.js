var express = require('express');
var router = express.Router();


const multer = require('multer');
const upload = multer({dest: 'images/'});

/*
//multer options
const upload = multer({
  dest: 'images'
  }); 
  */
 
  /*

  router.post('/pics',(req, res, next)=>{
    //console.log(req.file);

    //let picsDTO = req.body;
  
 

    res.status(200).json({
        message: 'works'
    })
  });
  */



router.post('/', upload.single('postedImage'),(req, res, next)=>{
    console.log(req.file);


    //res.send();

    //let picsDTO = req.body;
  
    /*
    article.save(function(err){
        if(err){
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    }); 
    */
/*
    res.status(200).json({
        message: 'works'
    })
    */

});


router.get('/', function(req, res, next) {
    res.send('getworks');
  });
  
  module.exports = router;
  
