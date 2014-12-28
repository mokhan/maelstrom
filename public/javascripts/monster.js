var _ = require('underscore');

function Monster(sprite){
  _.bindAll(this, 'redrawOn', 'collideWith');
  this.sprite = sprite;
  this.stop = false;
}

Monster.prototype.redrawOn = function(world) {
  if (this.isMoving()) {
    this.sprite = this.sprite.moveForward(world);
    world.render(this.sprite);
  } else {
    world.remove(this);
  }
};

Monster.prototype.collideWith = function(otherProp) {
  if (this.constructor === otherProp.constructor) {
    this.sprite.chooseRandomHeading();
  }
  else {
    this.stop = true;
  }
};

Monster.prototype.isMoving = function() {
  return this.stop === false;
};

module.exports = Monster;
