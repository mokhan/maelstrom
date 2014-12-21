var Utility = require('./utility.js');

function Coordinate(options){
  _.bindAll(this, 'forward', 'randomDirection');
  if (options) {
    this.x = options.x;
    this.y = options.y;
    this.direction = options.direction;
  }
  else {
    this.x = Utility.randomIntFromRange(0, 512);
    this.y = Utility.randomIntFromRange(0, 512);
    this.direction = this.randomDirection();
  }
  this.rotation = 0;
}

Coordinate.prototype.forward = function(world, speed) {
  this.x += (speed * Math.cos(this.direction));
  this.y += (speed * Math.sin(this.direction));

  if (this.y < 0) {
    this.y = world.height - this.y - 1;
  }
  if (this.x < 0) {
    this.x = world.width - this.x - 1;
  }
  if (this.x > world.width) {
    this.x = this.x - world.width - 1;
  }
  if (this.y > world.height) {
    this.y = this.y - world.height - 1;
  }
};

Coordinate.prototype.rotateLeft = function(world, speed) {
  //this.rotation = 45 * Math.PI / 180;
  this.rotation += 0.0001 * -1;
  this.direction -= 0.0001;
  console.log('rotation ' + this.rotation);
  console.log('direction ' + this.direction);
};

Coordinate.prototype.rotateRight = function(world, speed) {
  //this.rotation = -45 * Math.PI / 180;
  this.rotation += 0.0001 * 1;
  this.direction += 0.0001;
};

Coordinate.prototype.randomDirection = function() {
  return Utility.toRadians(Utility.randomIntFromRange(70,90));
};

module.exports = Coordinate;
