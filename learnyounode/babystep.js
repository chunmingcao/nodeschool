var argv = process.argv;
var count = 0;
var l = argv.length;
for(var i = 2; i < l; i ++){
    count += +argv[i];   
}
console.log(count);