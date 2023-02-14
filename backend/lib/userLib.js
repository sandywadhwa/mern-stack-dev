const { findOneAndDelete, findOneAndRemove } = require('../models/userModel');
const userModel = require('../models/userModel');

module.exports.getDeploymentsList = async function(cb){
	var users = await userModel.find({});
	return users;
}


module.exports.addFirstUser = async function(){
	var user = {
		name : "Being Zero",
		email: "beingzeroin1@gmail.com",
		roll_number: "000001",
		is_approved : true,
		is_deleted : false
	};
	var userModelObj = new userModel(user);
	try{
		// await findOneAndDelete({email: "beingzeroin@gmail.com"});
		await userModelObj.save();
	}catch(err){
		// TODO:  Ignoring for now, enable while debugging
		// console.error(err);
	}
}

module.exports.getAllUsers = async function(){
	var users = [];
	try{
		let query = {
			is_deleted : {$ne: true}, 
			is_approved : true
		};
		users = await userModel.find(query);
	}
	catch(err){
		console.error(err);
	}
	finally{
		console.log(users);
		return users;
	}
}