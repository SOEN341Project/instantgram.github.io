
const picsDAO = require('../data_access_layer/picsDAO');

const fs = require('fs');

class PicsService {
    constructor(picsDAO){
        this.picsDAO=picsDAO
    }

    savePic = function(picsDTO, userId){
        //console.log('***********in service***************');
        let img = fs.readFileSync(picsDTO.path);
        var convertedImg = img.toString('base64');
        let picToSave={
            userId: userId,
            img: convertedImg
        }

        let newPic = new picsDAO(picToSave);

        newPic.save();
        return {message:'picture posted'};
        
    


       /*
       .then(result =>{
            return {success: true, result: result} ;
       }).catch(err=>{
           if (err) return {success: false, error: err};
       })
       */
       //return 'pic saved';
    }


    getPic = function(){
        //console.log('***********in service***************');
        const foundPic= picsDAO.find();
        return foundPic;

    }
    
}

module.exports = PicsService;