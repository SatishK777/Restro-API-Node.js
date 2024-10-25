const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    fname: {
        type:String,
        required: true
    },
    lname: {
        type:String,
        required: true
    },
    staffRoll_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'StaffRole',
        required: true
    }
});
module.exports = mongoose.model('Staff', staffSchema);
