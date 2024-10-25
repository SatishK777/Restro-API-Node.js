const Table = require('../models/tableModel');

exports.createTable = async (req, res) => {
    const { table_number, table_details } = req.body;

    try {
        const table = new Table({
            table_number,
            table_details
        });
        await table.save();
        res.status(200).json(table);
    } catch (err) {

        console.log("error", err);
    }

}

exports.getAllTable = async (req, res) => {
    try {
        const tables = await Table.find();
        res.status(200).json(tables);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTableById = async (req, res) => {
    try {
        const table = await Table.findById(req.params.id);
        if (!table) return res.status(404).json({ error: 'Table not found' });
        res.status(200).json(table);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};