const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reviewSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = Review = mongoose.model('Review', reviewSchema);