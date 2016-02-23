var koa = require('koa');
var views = require('co-views');

var app = koa();
var render = views(__dirname + '/views', {ext: 'ejs'});

app.use(function *(next){

    if(this.method !== 'GET')
        return yield next;  
    if(this.path !== '/'){
        return yield next;    
    }
    var user = {
        name:{
            first: 'Tobi',
            last: 'Cao'
        },
        species: 'ferret',
        age: 3
    }
    this.body = yield render('user', {user: user});
});

app.listen(process.argv[2]);