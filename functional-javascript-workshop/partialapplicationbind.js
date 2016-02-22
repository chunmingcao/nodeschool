function logger(namspace){
    return console.log.bind(null, namspace);
}

module.exports = logger;