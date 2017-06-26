var mongoose = require('mongoose');
var AnimalSchema = new mongoose.Schema({
 name: String,
 age: Number,
})
mongoose.model('Animal', AnimalSchema); // We are setting this Schema in our Models as 'User'
var Animal = mongoose.model('Animal')
