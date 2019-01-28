var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var db = mongoose.connect('mongodb://localhost/cdAPI');

var Cd = require('./models/cdModel');

var app = express(); 
//statische files
//console.log(__dirname);
app.use('/static',express.static(__dirname +'/public'));

var port = process.env.PORT || 3000;

app.options("/api/cds", function(req,res,next){
    res.header('Access-Control-Allow-Origin', null);
    res.header('Allow', 'GET,POST,OPTIONS');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.header('Access-Control-Allow-Header', 'Content-Type, Accept ,Authorization, Content-Length, X-Request-Width');
    res.sendStatus(200);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
 
cdRouter = require('./Routes/cdRoutes')(Cd); 

app.use(function (req, res, next) {
    if (req.accepts("json")) {
        next();
        return;
    } else {
        res.sendStatus(404);
    }
});

app.use('/api/cds', cdRouter); 




app.get('/', function(req, res){
    res.send('Gefeliciteerd Rachelle, je hebt tenminste iets werkend netjes! :) ');
});

app.listen(port, function(){
    console.log("running on port: " + port);
});