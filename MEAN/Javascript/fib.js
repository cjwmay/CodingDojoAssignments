function fib() {
  var a = 0;
  var b = 1;
  // Some variables here
  function nacci() {
    var temp = b;
    b +=a;
    a = temp;
    console.log(b);
    // do something to those variables here
  }
  return nacci
}
var fibCounter = fib();
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
