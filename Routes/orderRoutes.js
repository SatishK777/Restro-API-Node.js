const express = require('express');
const router = express.Router();
const orderController = require('../Controller/orderController');


router.post('/', orderController.createOrder);
router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);


module.exports = router;
