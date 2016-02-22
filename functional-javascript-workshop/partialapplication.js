function logger(namspace){
    return function(){
        var argv = Array.prototype.slice.call(arguments);
        argv.unshift(namspace);
        console.log.apply(null, argv);
    }
    
}

module.exports = logger;