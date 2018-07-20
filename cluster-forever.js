var forever = require('forever');

var child = new (forever.Monitor) ('cluster-start.js', {
    max: 5,
    options: [],
    watch: false,
    silent: true,
    logFile: 'forever.log',
    outFile: 'out.log',
    errFile: 'err.log'
});
child.start();
