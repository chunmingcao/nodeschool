var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket){
    socket.write(strftime('%Y-%m-%d %H:%M'));
    socket.write('\n');
    socket.end();
});
server.listen(Number(process.argv[2]));