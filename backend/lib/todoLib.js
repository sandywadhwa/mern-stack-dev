const todoModel = require('../models/todoModel');

module.exports.getAllTODOs = async function(cb){
	// TODO:  Complete It
	todoModel.find({}, cb);
};

module.exports.getSingleTODO = async function(id, cb){
	// TODO:  Complete It
	todoModel.find({}, cb);
};

module.exports.updateATODO = async function(id, userInput, cb){
	// TODO:  Complete It
};
