

//const multer = require('multer');
//const upload = multer({dest: 'images/'});
const picsDAO = require('../data_access_layer/picsDAO');
//import picsDAO from '../data_access_layer/picsDAO';

class PicsService {
    constructor(picsDAO){
        this.picsDAO=picsDAO
    }

    savePic = function(picsDTO, userId){
     

        let newPic = new picsDAO({
            userId: userId,
            img: picsDTO.image
       });
         
       

       newPic.save();
       //return 'pic saved';
    }


    sendPic = function(){

       var newPic = new picsDAO;
       


    }
    
}

module.exports = PicsService;