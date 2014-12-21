function Sprite(uri, coordinate) {
  _.bindAll(this, 'moveForward', 'drawOn');
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

module.exports = Sprite;
