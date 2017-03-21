var express = require('express');
var path = require('path');

var app = express();


// prepare server
app.use(express.static(__dirname + '/public'));
app.use(express.static('views'));
app.use(express.static('routes'));
app.use(express.static(path.join(__dirname, 'public')));


//engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');



//link routes
var index = require('./routes/index');


//allow app to access route files
app.use('/', index)




var port = (process.env.PORT || 5500);
  app.listen((process.env.PORT || 5500), function() {
    console.log('Node app is running on port', port);
  })


module.exports = app;
