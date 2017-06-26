var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
for (var index in x){
  console.log(x[index]);
}
x.push(100)
var y = ["hello", "world", "JavaScript is Fun"]
for (var index in y){
  x.push(y[index])
}
for (var index in x){
  console.log(x[index]);
}
var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for (var index in newNinja){
  console.log(newNinja[index])
}
