 var mongo = require('mongodb').MongoClient
    mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
      // db gives access to the database
        if(err)
            throw err;
        var parrots = db.collection('parrots').find({age:{$gt: parseInt(process.argv[2])} }).toArray(function(err, documents){
            if(err)
                throw err;
            console.log(documents);
            db.close();
        });
        
    })