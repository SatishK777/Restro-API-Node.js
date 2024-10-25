const express = require('express');
const router = express.Router();
const tableController = require('../Controller/tableController');

router.post('/', tableController.createTable);
router.get('/', tableController.getAllTable);
router.get('/:id', tableController.getTableById);

module.exports = router;
