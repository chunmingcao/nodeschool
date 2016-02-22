var q = require('q');

var defer = q.defer();

var promise = defer.promise;

promise.then(null, function(err){
    console.log(err.message);
});

setTimeout(defer.reject, 300, new Error('REJECTED!'));