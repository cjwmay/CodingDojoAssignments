module.exports = function (){
  return {
    add: function(num1, num2) {
      var sum = num1 +num2;
      console.log(sum);
      return sum;
         // add code here
    },
    multiply: function(num1, num2) {
      var sum = num1 *num2;
      console.log(sum);
      return sum;
    },
    square: function(num) {
      var sum = num*num;
      console.log(sum);
      return sum;
    },
    random: function(num1, num2) {
      var sum = math.random(num1,num2);
      console.log(sum);
      return sum;
    }
  }
};
