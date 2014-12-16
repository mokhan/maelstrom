function Sprite(uri, coordinate) {
  _.bindAll(this, 'moveForward', 'drawOn');
  this.image = new Image();
  this.image.src = uri;
  this.coordinate = coordinate;
}

Sprite.prototype.moveForward = function(world, speed) {
  this.coordinate.forward(world, speed);
};

Sprite.prototype.rotateLeft = function(speed) {
  this.coordinate.rotateLeft(speed);
};

Sprite.prototype.rotateRight = function(speed) {
  this.coordinate.rotateRight(speed);
};

Sprite.prototype.drawOn = function(canvas) {
  canvas.drawImage(this.image, this.coordinate.x, this.coordinate.y);
};

module.exports = Sprite;
