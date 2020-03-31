function silnia(n) {
  if ((n == 0) || (n == 1))
     return 1
  else {
     var result = (n * silnia(n-1) );
     return result
  }
}

console.log(silnia(5));


function fibonacci(n) {
  if (n <= 1) {
    return n;  
   } 
  else {
    return fibonacci(n - 2) + fibonacci(n - 1);
   }
}

console.log(fibonacci(10));