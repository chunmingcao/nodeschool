var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
    db.collection('docs').insert({firstName: process.argv[2], lastName: process.argv[3]}, function(err, data){
        if(err)
            console.log(err);
        //console.log(JSON.stringify(data));
        console.log(JSON.stringify(data));
        db.close();
    });
});