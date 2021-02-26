
const picsDAO = require('../data_access_layer/picsDAO');
//var mongodb = require('mongodb');


const fs = require('fs');

class PicsService {
    constructor(picsDAO){
        this.picsDAO=picsDAO
    }

    leaveComment= async function(picsDTO){
        console.log('***********in service***************');
        const picId=picsDTO.picId;
        const from=picsDTO.fromUser;
        const comment=picsDTO.comment;
        //try{
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
        //return picsDAO.find({"_id" : picId});
        return {message: 'Comment posted.'}
        //}catch{

       // }

    }

    savePic = async function(picsDTO, userId){
        console.log('***********in service***************');
        try{
            if(!picsDTO.path){
                
           }
        let img = fs.readFileSync(picsDTO.path);
        var convertedImg = img.toString('base64');
       }catch{

       }

        //const convertedImg=picsDTO.picture;

        let picToSave={
            userId: userId,
            img: convertedImg,
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
        const foundPic= await picsDAO.find({"userId":userId}, function(err, foundPic){
            /*if(err){
                console.log(err)
                return {
                    status: 401,
                    response: 'Error'
                }
            } 
            if(!foundPic){
                return {
                    status: 200,
                    response: 'User has no picture'
                }
            }
            else{
                return {
                    status: 200,
                    response: foundPic
                }
            }
            */
        });
        return foundPic;

    }
    
}

module.exports = PicsService;