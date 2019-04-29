//dependencies
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//variables
const routes = require('./routes/handlers');
const app = express();

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose.connect(db).then(()=> console.log('MongoDB connected')).catch(err => console.log(err));

//main layout
const hbs = exphbs.create({
    defaultLayout:'main'
});

//access to public folder
app.use(express.static('public'));
app.use(express.static('img'));

//access to views folder
app.set('views', path.join(__dirname, 'views'));

//set handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

//Routing
app.use('/', routes);


app.listen(app.get('port'), function(){
    console.log('Server started on port' + app.get('port'));
});