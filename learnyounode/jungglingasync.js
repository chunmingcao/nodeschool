var http = require('http');
var bl = require('bl');

var results = [];
var count = 0;

for(var i = 2; i < process.argv.length; i ++){
    (function(i){
        http.get(process.argv[i], function(response){

            response.pipe(bl(function(err, data){
                results[i - 2] = data.toString();
                count ++;
                if(count === 3){
                    results.forEach(function(data){
                        console.log(data);
                    });
                }            
            }));
        });
    })(i);
}
