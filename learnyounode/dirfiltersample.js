var dirfilter = require('./dirfilter');

var dir = process.argv[2];
var filter = process.argv[3];

dirfilter(dir, filter, function(err, list){
    if(err)
        return console.log(err);
    
    list.forEach(function(filename){
        console.log(filename);
    });
});