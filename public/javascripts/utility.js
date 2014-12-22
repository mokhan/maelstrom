function Utility(){
}

Utility.toDegrees = function(angle) {
  return angle * (180/Math.PI);
};

Utility.toRadians = function(angle) {
  return angle * (Math.PI/180);
};

Utility.randomFloatFromRange = function(min, max) {
  return Math.random() * (max - min) + min;
};

Utility.randomIntFromRange = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

module.exports = Utility;
