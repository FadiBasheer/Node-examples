
// REQUIRES
const express = require('express');
const app = express();

// npm install -g nodemon

// when running this, instead of calling node, you call node monitor
// so ... nodemon nodemon-example.js
app.get('/', function (req, res) {
  // make a change and watch it reload
})

app.use(function (req, res, next) {
  res.status(404).send("Nothing there, 404.");
})

// RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
})
