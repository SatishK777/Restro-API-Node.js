const express = require('express');
const router = express.Router();
const staffRoleController = require('../Controller/staffRoleController')


router.post('/', staffRoleController.createStaffRole); 
router.get('/', staffRoleController.getAllStaffRoles);
router.get('/:id', staffRoleController.getStaffRoleById); 

module.exports = router;