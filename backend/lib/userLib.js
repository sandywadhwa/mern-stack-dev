const { findOneAndDelete, findOneAndRemove } = require('../models/userModel');
const userModel = require('../models/userModel');

module.exports.getDeploymentsList = async function(cb){
	var users = await userModel.find({});
	return users;
}


module.exports.addFirstUser = async function(){
	var user = {
		name : "Being Zero",
		email: "beingzeroin@gmail.com",
		roll_number: "000001",
		is_approved : true,
		is_deleted : false
	};
	var userModelObj = new userModel(user);
	try{
		// await findOneAndDelete({email: "beingzeroin@gmail.com"});
		await userModelObj.save();
	}catch(err){
		await userModel.updateOne({email: "beingzeroin@gmail.com"}, {is_approved : true});
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
		users = await userModel.find(query, {name: 1, roll_number : 1});
	}
	catch(err){
		console.error(err);
	}
	finally{
		console.log(users);
		return users;
	}
}