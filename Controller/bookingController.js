const Booking = require('../models/bookingModel');


exports.createBooking = async (req, res) => {
    const { date_of_booking, number_in_party,customer_id,table_id } = req.body;

    try {
        const booking = new Booking({
            date_of_booking,
            number_in_party,
            customer_id,
            table_id
        });
        await booking.save();
        res.status(200).json(booking);
    } catch (err) {

        console.log("error", err);
    }
};

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('customer_id table_id');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id).populate('customer_id table_id');
        if (!booking) return res.status(404).json({ error: 'Booking not found' });
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

