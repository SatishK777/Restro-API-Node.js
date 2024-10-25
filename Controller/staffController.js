const Staff = require('../models/staffModel');


exports.createStaff = async (req, res) => {
    const {fname,lname,staffRoll_id} = req.body;
    try {
        const staff = new Staff({
            fname,
            lname,
            staffRoll_id
        });
        await staff.save();
        res.status(201).json(staff);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getAllStaff = async (req, res) => {
    try {
        const staff = await Staff.find().populate('staffRoll_id');
        res.status(200).json(staff);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getStaffById = async (req, res) => {
    try {
        const staff = await Staff.findById(req.params.id).populate('staffRoll_id');
        if (!staff) {
            return res.status(404).json({ message: 'Staff member not found' });
        }
        res.status(200).json(staff);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
