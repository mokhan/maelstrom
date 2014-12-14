function Coordinate(options){
  this.x = options.x;
  this.y = options.y;
  this.direction = options.direction;
  _.bindAll(this, 'advance');
}

Coordinate.prototype.advance = function(world, speed) {
  this.x += (speed * Math.cos(this.direction));
  this.y += (speed * Math.sin(this.direction));
};

module.exports = Coordinate;
