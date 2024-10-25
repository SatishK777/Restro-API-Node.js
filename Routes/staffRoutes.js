const express = require('express');
const router = express.Router();
const staffController = require('../Controller/staffController');


router.post('/', staffController.createStaff);  
router.get('/', staffController.getAllStaff); 
router.get('/:id', staffController.getStaffById); 

module.exports = router;