const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let inquiriesSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = Inquiry = mongoose.model('Inquiries', inquiriesSchema);