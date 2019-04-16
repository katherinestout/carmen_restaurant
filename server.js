const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./routes/handlers');

const app = express();

const hbs = exphbs.create({
    defaultLayout:'main'
});

//app.use(express.static(''));

app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

//Routing
app.use('/', routes);

app.listen(app.get('port'), function(){
    console.log('Server started on port' + app.get('port'));
});