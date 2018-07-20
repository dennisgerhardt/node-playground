var http = require('http');

var server = http.createServer(function(req, res) {

    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('Hello World!\n');
    res.end();

}).listen(3000);