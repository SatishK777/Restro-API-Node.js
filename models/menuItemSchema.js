const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    menu_item_description: {
        type: String,
        required: true
    },
    menu_item_price: {
        type: Number,
        required: true
    },
    menu_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu'
    }
});

module.exports = mongoose.model('MenuItem', menuItemSchema)