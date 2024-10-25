const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    ingredient_name: {
        type: String,
        required: true
    },
    ingredient_type_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'IngredientType' 
    }
});

module.exports=mongoose.model('Ingredient', ingredientSchema);