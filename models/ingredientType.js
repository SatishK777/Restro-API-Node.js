const mongoose = require('mongoose');

const ingredientTypeSchema = new mongoose.Schema({
    description: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model('IngredientType', ingredientTypeSchema);