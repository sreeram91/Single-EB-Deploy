const express = require('express');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.send("page sent");
});

const port = 3001;

var server = app.listen(port, () => {
    console.log("listening on: ", server.address().port);
});