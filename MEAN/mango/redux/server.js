var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');


mongoose.connect('mongodb://localhost/quotingdojo');


var UserSchema = new mongoose.Schema({
  name: String,
  quote: String,
}, {timestamps:true})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'



app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})
// Add User Request
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User(req.body);
    user.save(function(err){
      if(err){
        console.log(err);
      }else{
        console.log(user);
      }
      res.redirect('/quote');
    })
    // This is where we would add the user from req.body to the database.
})
app.get('/quote', function(req, res) {
  User.find({}, function(errors, users){
    console.log("errors",errors);
    console.log("users",users);
    res.render('quotes',{allUsers:users});
  })
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.

})



app.listen(8000, function(){
  console.log("hi 8000");
})
