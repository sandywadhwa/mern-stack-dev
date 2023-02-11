const express = require('express');
const app = express();
const util = require('util')
const port = process.env.PORT || 3030;

app.use(express.static(__dirname+"/frontend/public"));

app.get('/', (req, res) => {
	res.sendFile(__dirname+"/frontend/public/views/index.html");
});

app.get('/:page', (req, res) => res.sendFile(util.format("%s/frontend/public/views/%s.html", __dirname, req.params.page)));


app.listen(port, () => {
	console.log("Application running on http://localhost:"+port);
});

