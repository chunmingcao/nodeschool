var fs = require('fs');

var count = 0;
fs.readFile(process.argv[2], 'utf-8', function(err, data){
    if(err)
        return console.log(err);
    count += data.split('\n').length - 1;
    console.log(count);
});
