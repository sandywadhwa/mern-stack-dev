const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

app.use(express.static(__dirname+"/frontend/public"));

app.get('/', (req, res) => {
	res.sendFile(__dirname+"/frontend/public/views/index.html");
});

app.listen(port, () => {
	console.log("Application running on http://localhost:"+port);
});

