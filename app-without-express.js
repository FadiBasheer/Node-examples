// Taken from:
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction

// Load HTTP module
var http = require("http");
//console.log(http)
// Create HTTP server and listen on port 8000 for requests
http.createServer(function (request, response) {
    // Set the response HTTP header with HTTP status and Content type
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    // Send the response body "Hello World"
    let d = new Date();
    response.end('<!DOCTYPE html><html lang="en">\n<head>\n<title>Yay for Node!</title></head>\n<body>\n<p>Hello there!</p>\n<p>' + d + '</p>\n</body>\n</html>\n');
    // console.log(request);
    // console.log(response);
}).listen(8000);

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:8000/');