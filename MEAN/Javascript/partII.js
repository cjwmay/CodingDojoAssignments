var funone = function(x,y){
  sum = 0;
  if(x<y){
    for(var i = x; i < y+1; i++){
      sum = sum+i;
    }
  }
  else{
      for(var i = y; i < x+1; i++){
        sum = sum+i;
    }
  }
}

var myObj = {
  sumXY:function(x,y){
    var sum = 0;
    for (var i = x; i < y + 1; i++) {
           sum += i;
       }
       return sum;
  },
  findAvg:function(arr){
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
  }, //end findAvg
  findMin: function findMin(arr) {
        if (arr) {
            var min = arr[0];
            for (var i = 1; i < arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            return min;
        }
    }
}



var person = {
  name:"jingwen",
  distance_traveled:0,
  say_name:function(){
    console.log(person.name);
    return person;
  },
  say_something:function(something){
    console.log(something);
    return person;
  },
  walk:function(){
    console.log("walking");
    distance_traveled+=3;
    return person;
  },
  run:function(){
    console.log("running");
    distance_traveled+=10;
    return person;
  },
  crawl:function(){
    cosole.log("crawling");
    distance_traveled+=1;
    return person;
  }
}
