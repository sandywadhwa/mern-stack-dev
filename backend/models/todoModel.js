const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
	title : {
		type: String
	},
	is_deleted : {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('todo', todoSchema);