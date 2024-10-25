const Order = require('../models/orderModel');


exports.createOrder = async (req, res) => {
    try {
        const { order_date_time, staff_id, table_number } = req.body;

        const newOrder = new Order({
            order_date_time,
            staff_id,
            table_number
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json(error);
    }
};


exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate({path: 'staff_id', populate: {path: 'staffRoll_id'}}).populate('table_number');           
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id).populate({path: 'staff_id', populate: {path: 'staffRoll_id'}}).populate('table_number');    
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
