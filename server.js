const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = 8000
const app = express();


const index = fs.readFileSync('index.html');

app.listen(PORT, () => {
	console.log(`Server started at: http://localhost:${PORT}/`);
});

app.get('/:location/:file', function (req, res) {
	fs.readFile(`./${req.params.location}/${req.params.file}`, function (err, data) {
		if (err) {
			res.send("Oops! Couldn't find that file.");
		} else {
			res.contentType(req.params.file);
			res.send(data);
		}
		res.end();
	});
});

app.get('/', (req, res) => {
	res.write(index);
	res.end();
});