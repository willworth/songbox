var express = require('express');

var app = express();

//look for the port in env, or..
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('welcome to my songbox API!');
});


app.listen(port, function(){
    console.log('Running my app on  PORT: ' + port);
});
