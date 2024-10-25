const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order_date_time: {
        type: Date,
        required:true
    },
    staff_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
        required:true
    },
    table_number: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Table',
        required:true
    }
});
module.exports = mongoose.model('Order', orderSchema);
