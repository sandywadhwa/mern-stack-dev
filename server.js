require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const userLib = require('./backend/lib/userLib');
const app = express();
const todoApiRouter = require('./backend/routers/todoApiRouter');
const util = require('util')
const port = process.env.PORT || 3030;

app.use(express.static(__dirname+"/frontend/public"));
app.use(express.json());

app.get('/', (req, res) => {
	res.sendFile(__dirname+"/frontend/public/views/index.html");
});


app.use('/api/todo', todoApiRouter);
app.get('/api/users', async (req, res) => {
	var users = await userLib.getAllUsers();
	res.json(users);
});

app.get('/api/products', (req, res) => {
	let products = [
		{
			"id" : 1,
			"name" : "Laptop"
		},
		{
			"id" : 2,
			"name" : "Mobile"
		},
		{
			"id" : 3,
			"name" : "Tablet"
		}
	];
	res.json(products);
});

app.get('/:page', (req, res) => res.sendFile(util.format("%s/frontend/public/views/%s.html", __dirname, req.params.page)));


mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {}, function(err){
	if(err){
		console.error("MONGO CONNECTION ERROR: " + err);
	}
	else{
		console.log("DB Connected Successfully");
		app.listen(port, () => {
			console.log("Application running on http://localhost:"+port);
		});
		userLib.addFirstUser();
	}
});

