var redis = require('redis');
var kue = require('kue');

const charset = "abcdefghijklmnopqrstuvwxyz0123456789";

var index = 0;
var client = redis.createClient(6379, '127.0.0.1'); // port, host

var jobs = kue.createQueue();

for (index; index < 100; index++) {
    var job = jobs.create('setAsync' + index, {
        id: index,
        data: stringGen(8)
    });
    job.save();
}

index = 0;

for (index; index < 100; index++) {
    jobs.process('setAsync' + index, function(job, done) {
        var data = job.data;
        console.log(data);
        done();
    });
}

function stringGen(len) {
    var text = "";
    
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    
    return text;
}

/*
function asyncWork() {
    client.set("00", "teststring", function(err) {
        if (err) {
        // Something went wrong
        console.error("error");
        } else {
            client.get("00", function(err, value) {
                if (err) {
                    console.error("error");
                } else {
                    console.log("Worked: " + value);
                }
            });
        }
     });
}
*/