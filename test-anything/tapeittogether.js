var test = require('tape');
var fancify = require(process.argv[2]);

test('fancify', function(t){
    t.equal(fancify('Hello'), '~*~Hello~*~', 'should be ~*~Hello~*~');
    t.equal(fancify('Hello', true), '~*~HELLO~*~', 'should be ~*~HELLO~*~');
    t.equal(fancify('Hello', false, '!'), '~!~Hello~!~', 'should be ~!~Hello~!~');
    t.end();
});


