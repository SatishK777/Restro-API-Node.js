const express = require('express');
const router = express.Router();
const bookingController = require('../Controller/bookingController');

router.post('/', bookingController.createBooking);
router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getBookingById);

module.exports = router;
