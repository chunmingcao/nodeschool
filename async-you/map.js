var async = require('async');
var http = require('http');

var urls = process.argv.slice(2);

async.map(urls, function(url, done){
        fetchURL(url, done);
    },
    function(err, results){
        if(err)
            console.log(err);
        console.log(results);
    });

function fetchURL(url, done){

     http.get(url, function(response){
        var datas = '';
        response.setEncoding('utf-8');
        response.on('data', function(data){
            datas += data;
        });
        response.on('end', function(){
            done(null, datas);
        });

    }).on('error', err => done(err));
              
}
