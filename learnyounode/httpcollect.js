var http = require('http');
var bl = require('bl');
/* ------------- approche 1 ------------------ */
/*
http.get(process.argv[2], function(response){
    var datas = '';
    response.setEncoding('utf-8');
    response.on('data', function(data){
        datas += data;
    }); 
    response.on('end',function(){
        console.log(datas.length);   
        console.log(datas);   
    })
});
*/

/* ------------- approche 2 ------------------ */
http.get(process.argv[2], function(response){
    var datas = '';
    response.pipe(bl(function(err, data){
        if(err)
            return console.error(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
