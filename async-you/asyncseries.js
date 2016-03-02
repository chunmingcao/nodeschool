var async = require('async');
var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];

async.series({
  requestOne: function(done){
      fetchURL(url1, done);
  },
  requestTwo: function(done){
      fetchURL(url2, done);
  }
}, function(err, results){
  console.log(results);
});

function fetchURL(url, done){
     http.get(url, function(response){
        var datas = '';
        response.setEncoding('utf-8');
        response.on('data', function(data){
            datas += data;
        })
        response.on('end', function(){
            done(null, datas);
        })
    });   
}
