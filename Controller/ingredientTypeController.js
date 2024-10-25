const IngredientType = require('../models/ingredientType');


exports.createIngredientType = async (req, res) => {
    try {
        const { description } = req.body;

        const newIngredientType = new IngredientType({
            description
        });

        await newIngredientType.save();
        res.status(201).json({ message: 'Ingredient type created successfully', ingredientType: newIngredientType });
    } catch (error) {
        res.status(500).json({ message: 'Error creating ingredient type', error: error.message });
    }
};


exports.getAllIngredientTypes = async (req, res) => {
    try {
        const ingredientTypes = await IngredientType.find();
        res.status(200).json(ingredientTypes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ingredient types', error: error.message });
    }
};


exports.getIngredientTypeById = async (req, res) => {
    try {
        const { id } = req.params;
        const ingredientType = await IngredientType.findById(id);

        if (!ingredientType) {
            return res.status(404).json({ message: 'Ingredient type not found' });
        }

        res.status(200).json(ingredientType);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ingredient type', error: error.message });
    }
};

