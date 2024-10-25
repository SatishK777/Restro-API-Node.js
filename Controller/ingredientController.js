const Ingredient = require('../models/ingredientModel');
const IngredientType = require('../models/ingredientType');


exports.createIngredient = async (req, res) => {
    try {
        const { ingredient_name, ingredient_type_id } = req.body;

        // Check if ingredient type exists
        const ingredientType = await IngredientType.findById(ingredient_type_id);
        if (!ingredientType) {
            return res.status(404).json({ message: 'Ingredient type not found' });
        }

        const newIngredient = new Ingredient({
            ingredient_name,
            ingredient_type_id
        });

        await newIngredient.save();
        res.status(201).json({ message: 'Ingredient created successfully', ingredient: newIngredient });
    } catch (error) {
        res.status(500).json({ message: 'Error creating ingredient', error: error.message });
    }
};


exports.getAllIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find().populate('ingredient_type_id');
        res.status(200).json(ingredients);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ingredients', error: error.message });
    }
};


exports.getIngredientById = async (req, res) => {
    try {
        const { id } = req.params;
        const ingredient = await Ingredient.findById(id).populate('ingredient_type_id');

        if (!ingredient) {
            return res.status(404).json({ message: 'Ingredient not found' });
        }

        res.status(200).json(ingredient);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ingredient', error: error.message });
    }
};

