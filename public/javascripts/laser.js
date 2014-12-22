function Laser(sprite) {
  _.bindAll(this, 'redrawOn');
  this.sprite = sprite;
}

Laser.prototype.redrawOn = function(world) {
  this.sprite = this.sprite.moveForward(world);
  world.render(this.sprite);
};

Laser.prototype.collideWith = function(otherProp) {
};

module.exports = Laser;
