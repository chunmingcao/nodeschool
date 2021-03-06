var koa = require('koa');

var app = koa();

app.use(errorHandler());

app.use(function* () {
  if (this.path === '/error') throw new Error('ooops');
  this.body = 'OK';
});

function errorHandler() {
  return function* (next) {
    // try catch all downstream errors here
      try{
          yield next;
      }catch(e){
          this.status = 500;
          this.body = 'internal server error';
          this.app.emit('error', e, this);
      }
  };
}

app.listen(process.argv[2]);