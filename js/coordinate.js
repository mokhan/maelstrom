var Utility = require('./utility.js');

function Coordinate(options){
  _.bindAll(this, 'forward', 'randomDirection');
  this.x = options.x;
  this.y = options.y;
  this.direction = options.direction;
  this.rotation = 0;
}

Coordinate.prototype.forward = function(world, speed) {
  var x = this.x + (speed * Math.round(Math.cos(this.direction)));
  var y = this.y + (speed * Math.round(Math.sin(this.direction)));

  if (y < 0) { y = world.height; }
  if (x < 0) { x = world.width; }
  if (x > world.width) { x = 0; }
  if (y > world.height) { y = 0; }

  return new Coordinate({x: x, y: y, direction: this.direction});
};

Coordinate.prototype.rotateLeft = function(world, speed) {
  return new Coordinate({x: this.x, y: this.y, direction: this.direction -= 0.0001});
};

Coordinate.prototype.rotateRight = function(world, speed) {
  return new Coordinate({x: this.x, y: this.y, direction: this.direction += 0.0001});
};

Coordinate.prototype.randomDirection = function() {
  return Utility.toRadians(Utility.randomIntFromRange(70,90));
};

module.exports = Coordinate;
