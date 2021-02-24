

//const multer = require('multer');
//const upload = multer({dest: 'images/'});
const picsDAO = require('../data_access_layer/picsDAO');
//import picsDAO from '../data_access_layer/picsDAO';

class PicsService {
    constructor(picsDAO){
        this.picsDAO=picsDAO
    }

    savePic = function(picsDTO){
     
        let newPic = new picsDAO({
           // userId: 
            img: picsDTO.image
       });
      /*
       var newPic = new picsDAO;
       newPic.img.data = picsDTO;
       */

       newPic.save();
       //return 'pic saved';
    }

    
}

module.exports = PicsService;