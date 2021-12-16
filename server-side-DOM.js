/*
    Libs to install:
      - express
      - jquery
      - jsdom
 */

// REQUIRES
const express = require('express');
// https://www.npmjs.com/package/jsdom
const { JSDOM } = require('jsdom');
const app = express();
const fs = require("fs");

// STATIC DIRECTORIES
app.use('/css', express.static('css'));
app.use('/img', express.static('img'));
app.use('/js', express.static('js'));


app.get('/', function (req, res) {

    // just being silly but you can change the header response so that it
    // doesn't say Node.js, but some custom info about your app
    res.set('Server', 'Wazubi Engine');
    res.set('X-Powered-By', 'Magical Pixies');

    let doc = fs.readFileSync('./files/index.html', "utf8");
    //console.log(JSDOM);
    let dom = new JSDOM(doc);
    let $ = require("jquery")(dom.window);

    console.log($("#content").html());

    // could append too!
    //$('#content').append("<p>Part of the document was changed on the server!<p>");
    $('#content').html("<p>Part of the document was changed on the server!<p>");

    // don't forget to send the document
    res.send(dom.serialize());

});

app.use(function (req, res, next) {
  res.status(404).send("Nothing there, 404.");
});

// RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});
