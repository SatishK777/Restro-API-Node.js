const mongoose = require('mongoose');

const menuSchema =new  mongoose.Schema({
    menu_date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Menu', menuSchema)