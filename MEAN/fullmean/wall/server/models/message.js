var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MessageSchema = mongoose.Schema({
	content: {type: String, minlength: 2},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]},
    { timestamps: true });
mongoose.model('Message', MessageSchema);