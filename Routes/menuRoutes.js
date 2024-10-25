const express = require('express');
const router = express.Router();
const menuController = require('../Controller/menuController');


router.post('/', menuController.createMenu);
router.get('/', menuController.getAllMenus);
router.get('/:id', menuController.getMenuById);


module.exports = router;
