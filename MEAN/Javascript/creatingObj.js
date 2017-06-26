function VehicleConstructor(name, numofwheels, passengerNumber){

  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name, numofwheels, passengerNumber);
  }
  var distance_traveled = 0;

  this.name = name;
  this.numofwheels = numofwheels;
  this.passengerNumber = passengerNumber;
};
VehicleConstructor.prototype.makeNoise = function(noise){
  var noise = noise || "Honk Honk";
  console.log(noise);
  return this;
};
VehicleConstructor.prototype.updateDistanceTraveled = function(){
  this.distanceTraveled += 1;
  console.log(this.distanceTraveled);
  return this;
};
VehicleConstructor.prototype.checkMiles = function(){
  console.log(this.distanceTraveled);
  return this;
};
VehicleConstructor.prototype.move = function(){
  this.makeNoise();
  this.updateDistanceTraveled();
  return this;
};




var bike = VehicleConstructor("bike",2,1)
bike.makeNoise("ring ring")
var sedan = VehicleConstructor("car",4,4)
sedan.makeNoise("Honk Honk")

var bus = VehicleConstructor("bus",6,6)
bus.pickupPassengers = function(newPassengers){
  bus.passengerNumber += newPassengers;
}
