function Coordinate(options){
  this.x = options.x;
  this.y = options.y;
  this.direction = options.direction;
  _.bindAll(this, 'forward');
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

module.exports = Coordinate;
