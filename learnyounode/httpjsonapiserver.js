var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
    var parsedUrl = url.parse(req.url, true);
    
    var result;
    var date = new Date(parsedUrl.query.iso);
    if(parsedUrl.pathname === '/api/parsetime'){
        result = parsetime(date);
     }else if(parsedUrl.pathname === '/api/unixtime'){
        result = unixtime(date);    
    }
    if(result){
        res.writeHead('200', {'content-type': 'application/json'});
        res.write(JSON.stringify(result));
        res.end();
    }else{
        res.end('not support');
    }
});

function parsetime(time){
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()       
    }
}

function unixtime(time){
    return {
        unixtime: time.getTime()
    }
}
server.listen(process.argv[2]);