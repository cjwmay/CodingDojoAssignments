var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = mongoose.Schema({
	content: {type: String, minlength: 2}
},{ timestamps: true });
mongoose.model('Comment', CommentSchema);