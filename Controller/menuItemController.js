const MenuItem = require('../models/menuItemSchema');
const Menu = require('../models/menuModel');


exports.createMenuItem = async (req, res) => {
    try {
        const { menu_item_description, menu_item_price, menu_id } = req.body;
        const newMenuItem = new MenuItem({
            menu_item_description,
            menu_item_price,
            menu_id
        });

        await newMenuItem.save();
        res.status(201).json( newMenuItem );
    } catch (error) {
        res.status(500).json(error);
    }
};


exports.getAllMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find().populate('menu_id');
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json(error);
    }
};


exports.getMenuItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const menuItem = await MenuItem.findById(id).populate('menu_id');

        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(500).json(error);
    }
};


exports.updateMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { menu_item_description, menu_item_price, menu_id } = req.body;

        const updatedMenuItem = await MenuItem.findByIdAndUpdate(
            id,
            { menu_item_description, menu_item_price, menu_id }
        ).populate('menu_id');

        if (!updatedMenuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }
        res.status(200).json({ message: 'Menu item updated successfully', menuItem: updatedMenuItem });
    } catch (error) {
        res.status(500).json({ message: 'Error updating menu item', error: error.message });
    }
};


exports.deleteMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMenuItem = await MenuItem.findByIdAndDelete(id);

        if (!deletedMenuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }
        res.status(200).json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting menu item', error: error.message });
    }
};
