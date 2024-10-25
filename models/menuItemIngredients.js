const mongoose = require('mongoose');

const menuItemIngredientSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    menu_item_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'MenuItem' 
    },
    ingredient_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Ingredient' 
    }
});

module.exports = mongoose.model('MenuItemIngredient', menuItemIngredientSchema);