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
        required: true,
        type: String
    },
    machine: {
        required: false,
        type: String
    },
    mstime: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)