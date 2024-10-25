const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    date_of_booking: {
        type: String,
        required: true
    },
    number_in_party: {
        type: Number,
    },
    customer_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    table_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table',
        required: true
    }
});
module.exports = mongoose.model('Booking', bookingSchema);
