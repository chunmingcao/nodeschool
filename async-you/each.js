var async = require('async');
var http = require('http');

var urls = process.argv.slice(2);

async.each(urls, function(url, done){
        fetchURL(url, done);
    },
    function(err){
        if(err)
            console.log(err);
    });

function fetchURL(url, done){

     http.get(url, function(response){
        response.setEncoding('utf-8');
        response.on('data', function(data){
        });
        response.on('end', function(){
            done(null);
        });

    }).on('error', err => done(err));
              
}
