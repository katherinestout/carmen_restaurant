
const express = require('express');
const router = express.Router();


router.get('/', function(req,res){
    res.render('home',
    {title: 'Home Page',
    slogan: 'Fare polpette di qualcuno.',
    name: "Carmen's"
    });
});

router.get('/menu', function(req,res){
    res.render('menu',
    {title: 'Menu',
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
    owner: 'Carmen Agliata',
    phone: '4449994949',
    address: '401 Roman Ave, Cobeletti California, 20904',
    email: 'agliata_restaurant@gmail.com'
    });
});

module.exports = router;