const OrderMenuItem = require('../models/orderMenuItemModel');
const Order = require('../models/orderModel');
const MenuItem = require('../models/menuItemSchema');
const { populate } = require('../models/customerModel');


exports.createOrderMenuItem = async (req, res) => {
    try {
        const { item_quantity, comments, order_id, menu_item_id } = req.body;
        const newOrderMenuItem = new OrderMenuItem({
            item_quantity,
            comments,
            order_id,
            menu_item_id
        });

        await newOrderMenuItem.save();
        res.status(201).json({ message: 'Order menu item created successfully', orderMenuItem: newOrderMenuItem });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order menu item', error: error.message });
    }
};

exports.getAllOrderMenuItems = async (req, res) => {
    try {
        const orderMenuItems = await OrderMenuItem.find().populate({path:'order_id', populate:{path:'staff_id', populate:{path:'staffRoll_id'}},populate:({path:'table_number'})}).populate({path:'menu_item_id', populate:{path:'menu_id'}});
        res.status(200).json(orderMenuItems);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order menu items', error: error.message });
    }
};


exports.getOrderMenuItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const orderMenuItem = await OrderMenuItem.findById(id).populate({path:'order_id', populate:{path:'staff_id', populate:{path:'staffRoll_id'}},populate:({path:'table_number'})}).populate({path:'menu_item_id', populate:{path:'menu_id'}});

        if (!orderMenuItem) {
            return res.status(404).json({ message: 'Order menu item not found' });
        }

        res.status(200).json(orderMenuItem);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order menu item', error: error.message });
    }
};


exports.updateOrderMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { item_quantity, comments, order_id, menu_item_id } = req.body;

        const updatedOrderMenuItem = await OrderMenuItem.findByIdAndUpdate(
            id,
            { item_quantity, comments, order_id, menu_item_id },
        ).populate('order_id').populate('menu_item_id');

        res.status(200).json({ message: 'Order menu item updated successfully', orderMenuItem: updatedOrderMenuItem });
    } catch (error) {
        res.status(500).json({ message: 'Error updating order menu item', error: error.message });
    }
};

exports.deleteOrderMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOrderMenuItem = await OrderMenuItem.findByIdAndDelete(id);

        if (!deletedOrderMenuItem) {
            return res.status(404).json({ message: 'Order menu item not found' });
        }

        res.status(200).json({ message: 'Order menu item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order menu item', error: error.message });
    }
};
