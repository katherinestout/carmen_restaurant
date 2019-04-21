
const express = require('express');
const router = express.Router();


const Review = require('../models/reviews');
const Inquiry = require('../models/inquiries');

router.get('/', function(req,res){
    res.render('home',
    {title: 'Home Page',
    style: 'home.css',
    slogan: 'Fare polpette di qualcuno.',
    name: "Carmen's"
    });
});

router.get('/menu', function(req, res){
    res.render('menu',
    {title: 'Menu',
    style:'menu.css',
    menuItems: [
        {
            foodItems: ['Pizza', 'Pane', 'Pasta', 'Rice', 'Pesce', 'Carne', 'Verdura', 'Formaggi']
        },
        {
            wineItems: ['Pinot Noir', 'Pinot Grigio']
        },
        {
            dessertItems: ['Biscotti', 'Cannoli', 'Fruitti']
        }
    ]
   
   
    });
});

router.get('/contact', function(req,res){
    res.render('contact', 
    {title: 'Contact',
    style: 'contact.css',
    carmen: 
        {
        Owner: 'Carmen Algiata',
        Phone: '4449994949',
        Address: '401 Roman Ave, Cobeletti California, 20904',
        Email: 'agliata_restaurant@gmail.com'
        }
            
    });
});

// REVIEWS ROUTES

//test route
router.get('/test', (req ,res) => res.json({msg: "posts WORKS!"}));

//get route all
router.get('/reviews', function(req, res){
    Review.find({}).then(function(results){
       res.render('reviews',  
       {reviews: results,
        title: "Reviews",
        style: 'reviews.css'});
       //console.log(results);
   });
  
});

//post route
router.post('/reviews', function(req,res){
    let newReview = new Review({
        description: req.body.description,
        name2: req.body.name2
    });
    newReview.save().then(function(result){
        console.log(result);
        res.redirect('/reviews');
    }).catch(function(err){
        console.log(err);
        res.redirect('/reviews');
    });
});

// EMAIL ROUTE
//to save email information

router.post('/contact', function(req, res){
    let newInquiry = new Inquiry({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    newInquiry.save().then(function(result){
        console.log(result);
        res.redirect('/contact');
    }).catch(function(err){
        console.log(err);
        res.redirect('/contact');
    });
});



module.exports = router;