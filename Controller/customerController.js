const Customer = require('../models/customerModel');

exports.createCustomer = async (req, res) => {

    const { fname , lname , number , cellphone_number , email ,other_customer_details}= req.body;
    try {
        const customer = new Customer({
            fname , lname , number , cellphone_number , email ,other_customer_details
        });
        await customer.save();
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) return res.status(404).json({ error: 'Customer not found' });
        res.status(200).json(customer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



