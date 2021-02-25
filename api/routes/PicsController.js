
var PicsService =require('../service_layer/PicsService');
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
 



router.post('/:userId', upload.single('picture'),(req, res, next)=>{
    console.log('***********in controler*************');
    console.log(req.file);
    console.log(req.body);
    const userId = req.params.userId;
    const picsDTO = req.file;
    const picsService = new PicsService();
    const response=picsService.savePic(picsDTO,userId);
    res.send(response);



    //res.send({message: message});
 
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


router.get('/', async (req, res, next) => {
    //console.log('***********in controler*************');
    const picsService = new PicsService();
    const response= await picsService.getPic();
    res.send({pictures:response});
  });
  
  module.exports = router;
  
