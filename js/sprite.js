function Sprite(uri, coordinate) {
  _.bindAll(this, 'drawOn');
  this.image = new Image();
  this.image.src = uri;
  this.coordinate = coordinate;
}

Sprite.prototype.drawOn = function(canvas) {
  canvas.drawImage(this.image, this.coordinate.x, this.coordinate.y);
};

module.exports = Sprite;
