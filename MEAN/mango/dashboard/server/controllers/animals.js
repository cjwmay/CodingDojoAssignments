var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
module.exports = {
  show: function(req,res){
    Animal.find({}, function(err, results) {
      if (err) { console.log(err); }
      res.render('index', { animals: results });
    })
  },
  mbyid: function(req,res){
    Animal.find({ _id: req.params.id }, function(err, results) {
      if (err) { console.log(err); }
      res.render('mongoosesbyid', { animals: results });
    })
  },
  editbyid: function(req,res){
    Animal.find({ _id: req.params.id }, function(err, results) {
      if (err) { console.log(err); }
      console.log(results)
      res.render('editbyid', { animals: results });
    })
  },
  mongooses: function(req,res){
    var ani = new Animal({name: req.body.name, age: req.body.age});
    ani.save(function(err) {
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
},
delete: function(req,res){
  Animal.remove({_id:req.params.id }, function(err){
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully deleted a user!');
    }
  })
  res.redirect('/');
}
}
