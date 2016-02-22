'use strict'

function *factorial(n){
  var initial = 1;
  for(let i = 1; i <= n; i ++){
      initial = initial * i;
      yield initial;
  }
}

for (var n of factorial(5)) {
  console.log(n)
}