const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var d = new Date;
var x = d.getDate();
var y = d.getFullYear();
var z = d.getMonth();
var xyz = x + '/' + z;



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
        type: Number,
        default: x
      }
});

module.exports = Review = mongoose.model('Reviews', reviewsSchema);