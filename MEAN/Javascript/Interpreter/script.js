var first_variable;
console.log(first_variable);
first_variable = "Yipee I was first!";
function firstFunc() {
  var first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);

var food = "Chicken";
function eat() {
  var food = "half-chicken";
  console.log(food);
  food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);


var new_word = "NEW!";
function lastFunc() {
  var new_word = "old";
}
console.log(new_word);
