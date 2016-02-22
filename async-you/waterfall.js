var fs = require('fs'),
    async = require('async')
    http = require('http');

async.waterfall([
    function(callback){
        var url = '';
        fs.readFile(process.argv[2], function(err, data){
            if(err)
                return callback(err);
            url = data.toString();
            callback(null, url);
        });
    },
    function(url, callback){
        http.get(url, function(response){
            var datas = '';
            response.setEncoding('utf-8');
            response.on('data', function(data){
                datas += data;
            })
            response.on('end', function(){
                callback(null, datas.toString());
            })
        }).on('err', function(){
            callback(err);
        });
    }
], function(err, data){
    if(err)
        return console.error(err);
    console.log(data);
})