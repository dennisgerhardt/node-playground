var connect = require('connect');
var http = require('http');

var app = connect();

app.use(function(req, res, next) {
    console.log('pre1');
    next();
    console.log('post1');
});
app.use(function(req, res, next) {
    console.log('pre2');
    next();
    console.log('post2');
});
app.use(function(req, res) {
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    res.end('Hallo Welt');
});
http.createServer(app).listen(3000);
/*
pre1
pre2
post2
post1
*/