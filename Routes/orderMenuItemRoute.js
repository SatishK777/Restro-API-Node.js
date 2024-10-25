const express = require('express');
const router = express.Router();
const orderMenuItemController = require('../Controller/orderMenuItemController');


router.post('/', orderMenuItemController.createOrderMenuItem);
router.get('/', orderMenuItemController.getAllOrderMenuItems);
router.get('/:id', orderMenuItemController.getOrderMenuItemById);
router.put('/:id', orderMenuItemController.updateOrderMenuItem);
router.delete('/:id', orderMenuItemController.deleteOrderMenuItem);

module.exports = router;
