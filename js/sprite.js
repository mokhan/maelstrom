function Sprite(uri, coordinate) {
  _.bindAll(this, 'x', 'y');
  this.image = new Image();
  this.image.src = uri;
  this.coordinate = coordinate;
}

Sprite.prototype.x = function() {
  return this.coordinate.x;
};

Sprite.prototype.y = function() {
  return this.coordinate.y;
};

module.exports = Sprite;
