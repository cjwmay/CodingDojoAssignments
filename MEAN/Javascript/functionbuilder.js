function runningLogger(){
  console.log("im running")
}
function multipleByTen(num){
  num*=5
  console.log(num)
}
multipleByTen(5)
function stringReturnOne(){
  var string = "hi";
  return(string);
}
function stringReturnTwo(){
  var stringone = "hi";
  var stringtwo = "hihi";
  return(stringone,stringtwo);
}
function caller(i){
  if (typeof(i) == 'function'){
    i();
  }
}
function myDoubleConsoleLog(param1,param2){
  if (typeof(param1) == 'function' && typeof(param2) == 'function'){
    console.log(param1(), param2());
  }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

function caller2(param){
  console.log('starting');
  var x = setTimeout(function(){
    if (typeof(param)=='function'){
      // notice the passed parameters...
      param(stringReturnOne, stringReturnTwo);
    }
  }, 2000);
  console.log('ending');
  return "interesting";
}

caller2(myDoubleConsoleLog);
