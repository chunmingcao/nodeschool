var test = require('tape');
var repeatCallback = require(process.argv[2]);
var n = 10;

test('', function(t){
    t.plan(n);
    repeatCallback(n, function(){
        t.pass('called');
    });
})