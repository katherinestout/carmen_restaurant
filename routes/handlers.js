
const express = require('express');
const router = express.Router();


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

router.get('/reviews', function(req,res){
    res.render('reviews', 
    {title: 'Reviews',
    style: 'reviews.css'
    });
});

const Review = require('../models/reviews');

//test route
router.get('/test', (req ,res) => res.json({msg: "posts WORKS!"}));

//post route
router.post('/reviews', function(req,res){
    let newReview = new Review({
        description: req.body.description,
        name2: req.body.name2
    });
    newReview.save().then(function(result){
        console.log(result);
        res.redirect('/')
    });
});



module.exports = router;