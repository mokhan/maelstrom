var Utility = require('./utility.js');
var Heading = require('./heading.js');

function Coordinate(options){
  _.bindAll(this, 'moveForward', 'moveLeft', 'moveRight');
  this.x = options.x;
  this.y = options.y;
  this.direction = options.direction;
  this.speed = options.speed;
}

Coordinate.prototype.moveForward = function(world) {
  return this.move(world, this.direction);
};

Coordinate.prototype.moveLeft = function(world) {
  var leftRotation = this.direction + ((Math.PI / 2) * -1);
  return this.move(world, leftRotation);
};

Coordinate.prototype.moveRight = function(world) {
  var rightRotation = this.direction + (Math.PI / 2);
  return this.move(world, rightRotation);
};

Coordinate.prototype.move = function(world, direction) {
  var x = this.x + (this.speed * Math.round(Math.cos(direction)));
  var y = this.y + (this.speed * Math.round(Math.sin(direction)));

  if (y < 0) { y = world.height; }
  if (x < 0) { x = world.width; }
  if (x > world.width) { x = 0; }
  if (y > world.height) { y = 0; }

  return new Coordinate({x: x, y: y, direction: this.direction, speed: this.speed});
};

module.exports = Coordinate;
