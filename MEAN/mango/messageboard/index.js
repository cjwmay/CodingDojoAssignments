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

var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
	name: String,
	message: String,
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});
MessageSchema.path('name').required(true, 'Name cannot be blank');
MessageSchema.path('message').required(true, 'Message cannot be blank');
mongoose.model("Message", MessageSchema);
var Message = mongoose.model("Message");
var CommentSchema = new mongoose.Schema({
	name: String,
	text: String,
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
});
CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('text').required(true, 'Comment cannot be blank');
mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model("Comment");

app.get('/', function(req, res) {
  Message.find({}).populate('_comments').exec(function(err, messages){
    console.log(messages);

      res.render('index', {messages: messages});
});
})
app.post('/newm', function(req, res) {
    console.log("POST DATA", req.body);
    var newMessage = new Message({name: req.body.name, message: req.body.message});
	newMessage.save(function(err){
		if(err){
			console.log(err);
			res.render('index.ejs', {errors: newMessage.errors});
		} else {
			console.log(newMessage);
			res.redirect('/');
		}
	})
})
app.post("/comment/:id", function(req, res){
	var newComment = new Comment(req.body);
	Message.findOne({_id: req.params.id}, function(err, message){
		newComment._message = message._id;
		newComment.save(function(err){
			if(err){
				console.log(err);
				res.render('index.ejs', {errors: newComment.errors});
			} else {
				message._comments.push(newComment._id);
				console.log("comment added");
				message.save(function(err){
								if(err){
									console.log("something went wrong while saving the modified message");
									console.log(err);
								}else{
									console.log("successfully added a comment:", newComment);
									res.redirect('/')
								}
							})
			}
		});

	});
});
app.listen(8000, function() {
    console.log("listening on port 8000");
})
