var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var schedule = require("node-schedule");
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    var rule = new schedule.RecurrenceRule();
    var times = [1,6,11,16,21,26,31,36,41,46,51,56];
    rule.second = times;
    var timer = schedule.scheduleJob(rule, function(){
        socket.emit('gps-traces', [{
            id: 1001,
            time: new Date().getTime(),
            longitude: 118.3500 + Math.random() * 99 / 1000,
            latitude: 31.3000 + Math.random() * 99 / 1000,
            speed: 50
        },{
            id: 1002,
            time: new Date().getTime(),
            longitude:  118.3800 + Math.random() * 99 / 1000,
            latitude: 31.3100 + Math.random() * 99 / 1000,
            speed: 50
        },{
            id: 1003,
            time: new Date().getTime(),
            longitude: 118.3200 + Math.random() * 99 / 1000,
            latitude: 31.3120 + Math.random() * 99 / 1000,
            speed: 50
        },{
            id: 1004,
            time: new Date().getTime(),
            longitude: 118.3300 + Math.random() * 99 / 1000,
            latitude: 31.3340 + Math.random() * 99 / 1000,
            speed: 50
        },{
            id: 1005,
            time: new Date().getTime(),
            longitude: 118.3600 + Math.random() * 99 / 1000,
            latitude: 31.3230 + Math.random() * 99 / 1000,
            speed: 50
        },{
            id: 1006,
            time: new Date().getTime(),
            longitude: 118.3550 + Math.random() * 99 / 1000,
            latitude: 31.3330 + Math.random() * 99 / 1000,
            speed: 50
        },{
            id: 1007,
            time: new Date().getTime(),
            longitude: 118.3450 + Math.random() * 99 / 1000,
            latitude: 31.3210 + Math.random() * 99 / 1000,
            speed: 50
        },{
            id: 1008,
            time: new Date().getTime(),
            longitude: 118.3280 + Math.random() * 99 / 1000,
            latitude: 31.3140 + Math.random() * 99 / 1000,
            speed: 50
        }]);
    });
    socket.on('disconnect', function() {
        timer.cancel();
    })
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});
