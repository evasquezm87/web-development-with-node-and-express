var express = require('express');

var app = express();

//Add a view engine handlebars, create a view engine
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});//is the default layout 
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebar');

app.set('port', process.env.PORT || 3000);

//routers
app.get('/', function(req, res){
    res.type('text/plain');
    res.send('Meadowlark Travel');
});

app.get('/about', function(req, res){
    res.type('text/plain');
    res.send('About Meadowlark Travel');
});

//Custom 404 page
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');    
});

//Custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');    
});

app.listen(app.get('port'), function(){
    console.log('Express started');
    app.get('port' + ' press ctrl + c to finish');
});