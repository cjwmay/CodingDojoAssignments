var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var ejs = require("ejs");


app.set("view engine", ejs);
app.set("views", path.join(__dirname,"views"));

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "static" )))


app.get('/', function(req, res){
  res.render("index");
})
app.post('/submit', function(req, res){
  console.log(req.body);
  var result = req.body;
  res.render('results.ejs',result)

})
app.listen(8000, function(){
  console.log("hi");
})
