var Heading = require('./heading.js');

function Sprite(uri, coordinate) {
  _.bindAll(this, 'moveForward', 'moveLeft', 'moveRight', 'drawOn', 'location');
  this.image = new Image();
  this.image.src = uri;
  this.coordinate = coordinate;
}

Sprite.prototype.moveForward = function(world) {
  this.coordinate = this.coordinate.moveForward(world);
};

Sprite.prototype.moveLeft = function(world) {
  this.coordinate = this.coordinate.moveLeft(world);
};

Sprite.prototype.moveRight = function(world) {
  this.coordinate = this.coordinate.moveRight(world);
};

Sprite.prototype.drawOn = function(canvas) {
  canvas.drawImage(this.image, this.coordinate.x, this.coordinate.y);
};

Sprite.prototype.location = function() {
  return {
    x: this.coordinate.x,
    y: this.coordinate.y,
    radius: this.image.width/2,
  };
};

Sprite.prototype.chooseRandomHeading = function() {
  this.coordinate.heading = Heading.random();
};

module.exports = Sprite;
