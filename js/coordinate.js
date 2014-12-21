var Utility = require('./utility.js');
var Heading = require('./heading.js');

function Coordinate(options){
  _.bindAll(this, 'moveForward', 'moveLeft', 'moveRight');
  this.x = options.x;
  this.y = options.y;
  this.heading = options.heading;
  this.speed = options.speed;
}

Coordinate.prototype.moveForward = function(world) {
  return this.move(world, this.heading);
};

Coordinate.prototype.moveLeft = function(world) {
  var leftRotation = this.heading + ((Math.PI / 2) * -1);
  return this.move(world, leftRotation);
};

Coordinate.prototype.moveRight = function(world) {
  var rightRotation = this.heading + (Math.PI / 2);
  return this.move(world, rightRotation);
};

Coordinate.prototype.move = function(world, heading) {
  var x = this.x + (this.speed * Math.round(Math.cos(heading)));
  var y = this.y + (this.speed * Math.round(Math.sin(heading)));

  if (y < 0) { y = world.height; }
  if (x < 0) { x = world.width; }
  if (x > world.width) { x = 0; }
  if (y > world.height) { y = 0; }

  return new Coordinate({x: x, y: y, heading: this.heading, speed: this.speed});
};

module.exports = Coordinate;
