var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/messageboard');

app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('index');
})
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    res.redirect('/');
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})
