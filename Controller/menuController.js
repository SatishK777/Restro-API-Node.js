const Menu = require('../models/menuModel');


exports.createMenu = async (req, res) => {
    try {
        const { menu_date } = req.body;

        const newMenu = new Menu({
            menu_date
        });

        await newMenu.save();
        res.status(201).json(newMenu);
    } catch (error) {
        res.status(500).json(error);
    }
};


exports.getAllMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.status(200).json(menus);
    } catch (error) {
        res.status(500).json(error);
    }
};


exports.getMenuById = async (req, res) => {
    try {
        const { id } = req.params;
        const menu = await Menu.findById(id);
        if (!menu) {
            return res.status(404).json({ message: 'Menu not found' });
        }
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json(error);
    }
};
