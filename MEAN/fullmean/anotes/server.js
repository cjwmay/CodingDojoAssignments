//modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

//setting up
app.use(express.static(path.join(__dirname,'anotes-app','dist')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));

app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    });

app.listen(8000, function(){
    console.log("running on localhost:8000");
});