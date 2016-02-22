/*
function Spy(target, method){
    if(!(this instanceof Spy))
        return new Spy(target, method);
    this.count = 0;
    var oldmethod = target[method];
    var self = this;
    target[method] = function(){
        self.count ++;
        return oldmethod.apply(this, arguments);
    }
}
*/

/* Second Approach */
function Spy(target, method){
    var result = {};
    var oldmethod = target[method];
    target[method] = function(){
        result.count = ++result.count || 1;
        return oldmethod.apply(this, arguments);
    }
    return result;
}

module.exports = Spy;