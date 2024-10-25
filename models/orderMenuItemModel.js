const mongoose = require('mongoose');

const orderMenuItemSchema = new mongoose.Schema({
    item_quantity: {
        type: Number,
        required: true
    },
    comments: {
        type: String
    },
    order_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Order' 
    },
    menu_item_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'MenuItem' 
    }
});
module.exports = mongoose.model('OrderMenuItem', orderMenuItemSchema);
