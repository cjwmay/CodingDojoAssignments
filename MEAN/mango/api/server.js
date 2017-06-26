var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api');
mongoose.Promise = global.Promise;
var PeopleSchema = new mongoose.Schema({
 name: String,
})
mongoose.model('People', PeopleSchema); // We are setting this Schema in our Models as 'User'
var People = mongoose.model('People')


app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  People.find({}, function(err, results){
    if(err) { console.log(err); }
    res.json(results);
  });

})
app.get('/new/:name', function(req, res) {
    var peopleInstance = new People();
    peopleInstance.name = req.params.name;
    peopleInstance.save(function(err){
      if(err) { console.log(err); }
      res.redirect('/');
    })

})
app.get('/remove/:name', function(req, res) {
  People.remove({ name: req.params.name }, function(err, result){
   if (err) { console.log(err); }
   res.redirect('/');
 });
})
app.get('/:name', function(req, res) {
  People.find({ name: req.params.name }, function(err, result){
   if (err) { console.log(err); }
   res.json(result);
 });
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})
