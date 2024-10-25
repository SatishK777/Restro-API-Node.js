const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    cellphone_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    other_customer_details: {
        type: String
    }
});
module.exports = mongoose.model('Customer', customerSchema);
