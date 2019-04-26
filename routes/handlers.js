
const express = require('express');
const router = express.Router();
const nodemailer =  require('nodemailer');


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

router.get('/thanks', function(req,res){
    res.render('thanks', 
    {title: 'Thank You',
    style: 'thanks.css',    
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
        name2: req.body.name2,
        date: r
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
//to save email information and send using nodemailer

router.post('/contact', (req, res) => {

    //saving the message to mongoDB
    let newInquiry = new Inquiry({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    newInquiry.save().then(function(result){
        console.log(result);

    //nodemailer 
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = 
       `<h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>`

        //mail options

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'kaylee19@ethereal.email',
                pass: 'sSN3ZsgFj285TnZNCa'
            }

        });

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'kaylee19@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return console.log(err)
            }
            console.log('Message sent', info.message);
            console.log('Message URL:', nodemailer.getTestMessageUrl(info));
            res.redirect('/thanks');
        })
    })
});

});

module.exports = router;