// https://expressjs.com/en/guide/routing.html


// REQUIRES
const express = require('express');
const app = express();

// so '/stuff' will map to the directory '/files'
// try: http://localhost:8000/stuff/week08.html
app.use('/stuff', express.static('files'))

app.get('/', function (req, res) {
    res.send('<html><body><p>kjkljkljlk!</p></body></html>');
})

// e.g., http://localhost:8000/users/123/books/456
app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send("{ msg: 'success', " + JSON.stringify(req.params) + "}");
})

// create a callback that always gets called when any of the paths are referenced
// ... useful for logging, etc.
var myLogger = function (req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('LOGGED', ip);
  next();
}

// The 'use' method allows for middleware to be called for each request
app.use(myLogger);

app.use(function (req, res, next) {
  res.status(404).send("Nothing there, 404.");
})

// RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
})