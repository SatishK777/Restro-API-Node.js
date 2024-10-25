const mongoose = require('mongoose');


const tableSchema = new mongoose.Schema({
    table_number: {
        type: Number,
        required: true
    },
    table_details: {
        type: String,
    }
});
module.exports = mongoose.model('Table', tableSchema);
