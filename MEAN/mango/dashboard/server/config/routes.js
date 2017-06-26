var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
var animals = require('../controllers/animals.js');
module.exports = function(app){
  app.get('/', function(req, res) {
    animals.show(req,res);
  })
  app.get('/mongooses/:id', function(req, res) {
    animals.mbyid(req,res);
  })
  app.get('/mongoose/new', function(req, res) {
      res.render('new');
  })
  app.post('/mongooses', function(req, res) {
      console.log("POST DATA", req.body);
      animals.mongooses(req,res);

  })
  app.get('/mongooses/edit/:id', function(req, res) {
    animals.editbyid(req,res);
  })
  app.post('/mongooses/:id', function(req, res) {
      console.log("POST DATA", req.body);
      Animal.findOne({ _id: req.params.id}, function(err, animal){
        animal.name = req.body.name;
        animal.age = req.body.age;

        animal.save(function(err){
          if(err) {
            console.log('something went wrong');
          } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');

          }
          res.redirect('/');
        })
      })
    })
  app.post('/mongooses/destroy/:id', function(req, res) {
      console.log("POST DATA", req.body);
      animals.delete(req,res);
  })
}
