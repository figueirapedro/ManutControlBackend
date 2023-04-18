const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: false,
        type: String
    },
    metric: {
        required: false,
        type: String
    },
    time: {
        required: false,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)