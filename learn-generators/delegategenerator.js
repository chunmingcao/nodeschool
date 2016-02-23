'use strict'
function *flat (arr) {
    for(let i = 0, l = arr.length; i < l; i ++){
       if(Array.isArray(arr[i]))
          yield *flat(arr[i]);
      else
          yield arr[i];       
    }
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log( f );
}
// 1 2 3 4 5 6
