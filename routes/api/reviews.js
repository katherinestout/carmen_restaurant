const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Review = require('../../models/reviews');

//test route
router.get('/test', (req ,res) => res.json({msg: "posts WORKS!"}));

//post route
router.post('/reviews', function(req,res){
    let newReview = new Review({
        description: req.body.description,
        name2: req.body.name2
    });
});

module.exports = router;