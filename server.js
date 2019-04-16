const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

//Routing
app.get('/', function(req,res){
    res.render('home',
    {title: 'Home Page',
    slogan: 'Fare polpette di qualcuno.',
    name: "Carmen's"
    });
});

app.get('/menu', function(req,res){
    res.render('menu',
    {title: 'Menu',
    foodItems: ['Pizza', 'Pane', 'Pasta', 'Rice', 'Pesce', 'Carne', 'Verdura', 'Formaggi'],
    wineItems: ['Pinot Noir', 'Pinot Grigio'],
    dessertItems: ['Biscotti', 'Cannoli', 'Fruitti']
    });
});

app.get('/contact', function(req,res){
    res.render('contact', 
    {title: 'Contact',
    owner: 'Carmen Agliata',
    phone: '4449994949',
    address: '401 Roman Ave, Cobeletti California, 20904',
    email: 'agliata_restaurant@gmail.com'
    });
});

app.listen(app.get('port'), function(){
    console.log('Server started on port' + app.get('port'));
});