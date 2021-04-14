
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
 

router.post('/comment',async (req, res, next)=>{
    console.log('***********in controler*************');
    console.log(req.body);
    const picsDTO = req.body;
    const picsService = new PicsService();
    const response= await picsService.leaveComment(picsDTO);
    res.send(response);
});

router.post('/:userId', upload.single('picture'),async (req, res, next)=>{
    console.log('***********in controler*************');
    console.log(req.file);
    console.log(req.body);
    if(!req.file){
        return res.status(401).send('There was no pic sent with the request.')
    }else{
    const userId = req.params.userId;
    const picsDTO = req.file;
    const picsService = new PicsService();
    const picBodyDTO = req.body;
    const response= await picsService.savePic(picsDTO,userId, picBodyDTO);
    return res.status(200).send(response);
    }

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


router.get('/:userId', async (req, res, next) => {
    console.log('***********in controler*************');
    const userId = req.params.userId;
    const picsService = new PicsService();
    const response = await picsService.getPic(userId);
    res.send(response);
  });

  router.get('/getProfilePic/:userId', async (req, res, next) => {
    console.log('***********in controler*************');
    const userId = req.params.userId;
    const picsService = new PicsService();
    const response = await picsService.getPic(userId,true);
    res.send(response);
  });

  
  module.exports = router;
   //.status(status).
