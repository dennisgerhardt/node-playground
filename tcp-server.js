var net = require('net');
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var sockets = [];

const server = net.createServer(function(socket) {
    for (var i = 0; i < sockets.length; i++) {
        socket.pipe(sockets[i]);
        sockets[i].pipe(socket);
    }
    sockets.push(socket);
    console.log(sockets.length);

    socket.on('end', function() {
        var i = sockets.indexOf(socket);

        sockets.splice(i, 1);
        console.log(sockets.length);
    });
    /*
    sockets.push(socket);
    socket.write('Hello\n');

    // ereignis, welches bei eingehenden daten an alle anderen clients verteilt
    socket.on('data', function(data) {
        for (var i = 0; i < sockets.length; i++) {
            if (sockets[i] === socket) { // bis auf den socket von den daten kamen
                continue;
            }

            //socket.pipe(sockets[i]);
            //sockets[i].write(data);
        }
    });
    // ereignis, das einen client wieder aus der liste entfernt
    socket.on('end', function() {
        var i = sockets.indexOf(socket);

        sockets.splice(i, 1);
        console.log(sockets.length);
    });
    //socket.end();
    */
}).listen(3000);