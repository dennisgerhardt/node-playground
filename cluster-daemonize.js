var daemon = require("daemonize2").setup({
    main: "cluster-start.js",
    name: "clusterapp",
    pidfile: "clusterapp.pid",
    max: 5,
    options: [],
    watch: false,
    silent: true,
    logFile: 'forever.log',
    outFile: 'out.log',
    errFile: 'err.log'
});

switch (process.argv[2]) {

    case "start":
        daemon.start();
        break;

    case "stop":
        daemon.stop();
        break;

    default:
        console.log("Usage: [start|stop]");
}