const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name : {
		type: String
	},
	email : {
		type: String,
		unique: true
	},
	roll_number: {
		type: String, 
		unique: true
	},
	github_profile_url : {
		type: String
	},
	github_course_repo_url : {
		type: String
	},
	deployment_course_repo_url : {
		type: String
	},
	is_approved : {
		type: Boolean
	},
	is_deleted : {
		type: Boolean
	}
});

module.exports = mongoose.model('user', userSchema);