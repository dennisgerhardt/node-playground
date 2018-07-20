var express = require('express');
var http = require('http');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/css'));
app.use(require('stylus').middleware({
    src: __dirname + '/css'
}));

app.get('/hello', function(req, res) {
    res.render('hello', {sayHello: 'Hello World via html5'});
});
http.createServer(app).listen(3000);