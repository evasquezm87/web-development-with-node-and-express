var express = require('express');

var app = express();

//Add a view engine handlebars, create a view engine
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});//is the default layout 
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

//routers
app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about',{fortune: randomFortune});
});

//Custom 404 page
app.use(function(req, res){    
    res.status(404);
    res.render('404');
});

//Custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);    
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started');
    app.get('port' + ' press ctrl + c to finish');
});

//Add dynamic content to views, in this example a fortune cookie
var fortunes = [
    "Conquer your fears or they will conquer you",
    "Rivers needs springs",
    "Do not fear what you dont known",
    "You will have a pleasant surprise",
    "Whenever possible, keep it simple",
];