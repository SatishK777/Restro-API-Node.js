const mongoose = require('mongoose');
const staffRoleSchema = new mongoose.Schema({
    staff_role: {
        type:String,
        required:true
    },
    staff_role_description:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('StaffRole', staffRoleSchema);
