var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2], 'utf-8');
//var str = buffer.toString();

var splits = buffer.split('\n');
console.log(splits.length - 1);