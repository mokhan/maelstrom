var Monster = require('./monster');
var Sound = require('./sound');
var _ = require('underscore');

function Laser(sprite) {
  _.bindAll(this, 'redrawOn', 'collideWith');
  this.sprite = sprite;
  this.destroyed = false;
}

Laser.prototype.redrawOn = function(world) {
  if (this.destroyed) {
    world.remove(this);
  }
  else {
    if (world.inBounds(this.sprite)) {
      this.sprite = this.sprite.moveForward(world);
      world.render(this.sprite);
    } else {
      world.remove(this);
    }
  }
};

Laser.prototype.collideWith = function(otherProp) {
  if (otherProp.constructor === Monster) {
    this.destroyed = true;
    Sound.play(Sound.smash);
  }
};

module.exports = Laser;
