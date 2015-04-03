-- taskboard.js

var mongoose = require( 'mongoose' );

// Item
var taskBoardItemSchema = new mongoose.Schema({
	title: {type: String, required: true},
	description: String,
	assignee: String,
	category: String,
	color: String,
	due_date: Date,
	points: Number,
	position: {type: Number, "default": 1, min: 1}
});

// Lane
var taskboardLaneSchema = new Mongoose.Schema({
	position: {type: Number, "default": 1, min: 1},
	name: {type: String, required: true},
	items: [ taskBoardItemSchema ]
});

// Taskboard
var taskboardSchema = new Mongoose.Schema({
	name: {type: String, required: true},
	active: {type: Number, "default": 1},
	lane: [ taskboardLaneSchema ],
	user: [String]
});

// Users
var userSchema = new Mongoose.Schema({
	username: {type: String, required: true},
	is_admin: Boolean,
	logins: Number, 
	last_login: Date,
	default_board: {type: Schema.Types.ObjectId, ref: 'taskboardSchema'},
	salt: String,
	password: String,
	token: String
});


mongoose.model('TastBoard', taskboardSchema);
mongoose.model('Users', userSchema);