
const picsDAO = require('../data_access_layer/picsDAO');
//var mongodb = require('mongodb');


const fs = require('fs');

class PicsService {
    constructor(picsDAO){
        this.picsDAO=picsDAO
    }

    leaveComment = async function(picsDTO){
        console.log('***********in service***************');
        const picId=picsDTO.picId;
        const from=picsDTO.fromUser;
        const comment=picsDTO.comment;
        try{
        await picsDAO.findOneAndUpdate({"_id" : picId},{
            
            $push:{
                comments:{
                    comment:{
                        from: from,
                        text: comment
                    } 
                }    
            }
        })

        return {message: 'Comment posted.'}
        }catch(e){
            console.log(e);
        }

    }

    savePic = async function(picsDTO, userId, picBodyDTO){
        console.log('***********in service***************');
        try{
           if(!picsDTO.path){
                
          }

        }catch(e){
            console.log(e);
        }

        //const convertedImg=picsDTO.picture;
        let img = fs.readFileSync(picsDTO.path);
        var convertedImg = img.toString('base64');
        let picToSave={
            userId: userId,
            img: convertedImg,
            description: picBodyDTO.description,
            likes: '0'
        }

        let newPic = new picsDAO(picToSave);

        await newPic.save();
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


    getPic = async function(userId){
        //console.log('***********in service***************');
        const foundPic= await picsDAO.find({"userId":userId});
        return foundPic ;  
        /*
        if(!foundPic[0])
            return {message: 'Thiw user has no pictures'};       
        else{
            
        }
*/
    }
    
}

module.exports = PicsService;

/*    if(err){
        console.log(err)

           return 'Error';

    } 
    */
