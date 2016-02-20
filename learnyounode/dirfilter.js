var fs = require('fs');
var path = require('path');

function dirfilter(dir, filter, callback){
  
    fs.readdir(dir, function(err, list){
        if(err)
            return callback(err);
        /*
        for(var i = 0; i < list.length; i ++){
            if(path.extname(list[i]) === '.' + filter)
                console.log(list[i]);
        }*/
        var filteredList = [];

        list = list.filter(function(filename){
            return path.extname(filename) === '.' + filter;
        });
        
        callback(null, list);
    });
}

module.exports = dirfilter;

