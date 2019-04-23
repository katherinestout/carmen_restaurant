const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let reviewsSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    name2: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
      }
});

module.exports = Review = mongoose.model('Reviews', reviewsSchema);