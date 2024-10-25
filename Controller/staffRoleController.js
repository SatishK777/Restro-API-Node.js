const StaffRole = require('../models/staffRoleModel');


exports.createStaffRole = async (req, res) => {
    const{staff_role , staff_role_description}=req.body;
    try {
        const staffRole = new StaffRole({
            staff_role,
            staff_role_description
        });
        await staffRole.save();
        res.status(201).json(staffRole);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getAllStaffRoles = async (req, res) => {
    try {
        const staffRoles = await StaffRole.find();
        res.status(200).json(staffRoles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getStaffRoleById = async (req, res) => {
    try {
        const staffRole = await StaffRole.findById(req.params.id);
        if (!staffRole) {
            return res.status(404).json({ message: 'Staff role not found' });
        }
        res.status(200).json(staffRole);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


