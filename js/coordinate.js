var Utility = require('./utility.js');
var Heading = require('./heading.js');

function Coordinate(options){
  _.bindAll(this, 'moveForward', 'moveLeft', 'moveRight');
  this.x = options.x;
  this.y = options.y;
  this.direction = options.direction;
  this.speed = options.speed;
  this.rotation = 0;
}

Coordinate.prototype.moveForward = function(world) {
  return this.move(world, this.direction);
};

Coordinate.prototype.moveLeft = function(world) {
  if (this.direction == Heading.NORTH) {
    return this.move(world, Heading.WEST);
  }
  if (this.direction == Heading.EAST) {
    return this.move(world, Heading.NORTH);
  }
  if (this.direction == Heading.SOUTH) {
    return this.move(world, Heading.EAST);
  }
  if (this.direction == Heading.WEST) {
    return this.move(world, Heading.SOUTH);
  }
};

Coordinate.prototype.moveRight = function(world) {
  if (this.direction == Heading.NORTH) {
    return this.move(world, Heading.EAST);
  }
  if (this.direction == Heading.EAST) {
    return this.move(world, Heading.SOUTH);
  }
  if (this.direction == Heading.SOUTH) {
    return this.move(world, Heading.WEST);
  }
  if (this.direction == Heading.WEST) {
    return this.move(world, Heading.NORTH);
  }
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
