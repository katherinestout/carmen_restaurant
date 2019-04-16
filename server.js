//dependencies
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

//variables
const routes = require('./routes/handlers');
const app = express();

//main layout
const hbs = exphbs.create({
    defaultLayout:'main'
});

//access to public folder
app.use(express.static('public'));

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