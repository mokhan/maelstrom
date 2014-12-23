function Laser(sprite) {
  _.bindAll(this, 'redrawOn', 'collideWith');
  this.sprite = sprite;
}

Laser.prototype.redrawOn = function(world) {
  if (world.inBounds(this.sprite)) {
    this.sprite = this.sprite.moveForward(world);
    world.render(this.sprite);
  } else {
    world.remove(this);
  }
};

Laser.prototype.collideWith = function(otherProp) {
};

module.exports = Laser;
