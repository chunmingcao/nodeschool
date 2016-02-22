function repeat(operation, num) {
    return function(){
      if (num <= 0) return
      operation()
      return repeat(operation, --num)       
    }
}

function trampoline(fn) {
    while(fn && fn instanceof Function)
        fn = fn();
}

module.exports = function(operation, num) {
  
  return trampoline(repeat(operation, num));
}