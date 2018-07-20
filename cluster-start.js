var cluster = require('cluster');
var os = require('os');
var http = require('http');

const NumberOfCores = os.cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < NumberOfCores; i++) {
        cluster.fork();
    }
} else {
    http.createServer(function(req, res) {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.write('Hello World!\n');
        res.end();
    }).listen(3000);
}

cluster.on('exit', function(worker) {
    cluster.fork();
});