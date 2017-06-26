function personConstructor(name){
  var person = {
    name : name,
    distance_traveled : 0,
    say_name : function(){
      console.log(person.name);
    },
    say_something : function(phrase){
      console.log(`${person.name} says: ${phrase}`);
    },
    walk : function(){
      console.log(`${person.name} is walking!`);
      person.distance_traveled += 3;
      return person;
    },
    run : function(){
      console.log(`${person.name} is running!`);
      person.distance_traveled += 10;
      return person;
    },
    crawl : function(){
      console.log(`${person.name} is crawling!`);
      person.distance_traveled += 1;
      return person;
    },
    chewGum:function(){
      console.log("I can walk and chew gum, but I can't chew gum and walk...");
    }
  }
  return person
}
function ninjaConstructor(name, cohort){
  var belts = ["yellow", "red", "black"]
  var ninja = {
    name:name,
    cohort:cohort,
    beltlevel:0,
    levelUP:function(){
      if(ninja.beltlevel<2){
        beltlevel+=1;
      }
      return ninja
    },
    belt:belts[beltlevel],
  }
  return ninja
}
