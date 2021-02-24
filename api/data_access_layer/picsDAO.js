const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const picId = Schema.picId;


var picSchema = new Schema({
    /*
    userId:{
        type: picId,
        required: true
    },
    */
    img: { 
        type: String,
        required: true
    }
}, 
{
    timestamps: true
});

const picsDAO =mongoose.model('picsDAO',picSchema);
module.exports = picsDAO;