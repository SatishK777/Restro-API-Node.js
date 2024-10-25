const MenuItemIngredient = require('../models/menuItemIngredients');
const MenuItem = require('../models/menuItemSchema');
const Ingredient = require('../models/ingredientModel');


exports.createMenuItemIngredient = async (req, res) => {
    try {
        const { quantity, menu_item_id, ingredient_id } = req.body;

        // Check if the menu item exists
        const menuItem = await MenuItem.findById(menu_item_id);
        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        // Check if the ingredient exists
        const ingredient = await Ingredient.findById(ingredient_id);
        if (!ingredient) {
            return res.status(404).json({ message: 'Ingredient not found' });
        }

        const newMenuItemIngredient = new MenuItemIngredient({
            quantity,
            menu_item_id,
            ingredient_id
        });

        await newMenuItemIngredient.save();
        res.status(201).json({ message: 'Menu item ingredient created successfully', menuItemIngredient: newMenuItemIngredient });
    } catch (error) {
        res.status(500).json({ message: 'Error creating menu item ingredient', error: error.message });
    }
};

// Get all MenuItemIngredients
exports.getAllMenuItemIngredients = async (req, res) => {
    try {
        const menuItemIngredients = await MenuItemIngredient.find().populate({path:'menu_item_id' , populate:{path:'menu_id'}}).populate({path: 'ingredient_id', populate:{path:'ingredient_type_id'}});
        res.status(200).json(menuItemIngredients);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching menu item ingredients', error: error.message });
    }
};

// Get a MenuItemIngredient by ID
exports.getMenuItemIngredientById = async (req, res) => {
    try {
        const { id } = req.params;
        const menuItemIngredient = await MenuItemIngredient.findById(id).find().populate({path:'menu_item_id' , populate:{path:'menu_id'}}).populate({path: 'ingredient_id', populate:{path:'ingredient_type_id'}});
           
        res.status(200).json(menuItemIngredient);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching menu item ingredient', error: error.message });
    }
};

// Update a MenuItemIngredient by ID
exports.updateMenuItemIngredient = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity, menu_item_id, ingredient_id } = req.body;

        // Check if the menu item exists
        const menuItem = await MenuItem.findById(menu_item_id);
        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        // Check if the ingredient exists
        const ingredient = await Ingredient.findById(ingredient_id);
        if (!ingredient) {
            return res.status(404).json({ message: 'Ingredient not found' });
        }

        const updatedMenuItemIngredient = await MenuItemIngredient.findByIdAndUpdate(
            id,
            { quantity, menu_item_id, ingredient_id },
            { new: true }
        ).populate('menu_item_id').populate('ingredient_id');

        if (!updatedMenuItemIngredient) {
            return res.status(404).json({ message: 'Menu item ingredient not found' });
        }

        res.status(200).json({ message: 'Menu item ingredient updated successfully', menuItemIngredient: updatedMenuItemIngredient });
    } catch (error) {
        res.status(500).json({ message: 'Error updating menu item ingredient', error: error.message });
    }
};

// Delete a MenuItemIngredient by ID
exports.deleteMenuItemIngredient = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMenuItemIngredient = await MenuItemIngredient.findByIdAndDelete(id);

        if (!deletedMenuItemIngredient) {
            return res.status(404).json({ message: 'Menu item ingredient not found' });
        }

        res.status(200).json({ message: 'Menu item ingredient deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting menu item ingredient', error: error.message });
    }
};
