var Utility = require('./utility.js');

function Monster(sprite){
  _.bindAll(this, 'redrawOn', 'location', 'collideWith');
  this.sprite = sprite;
  this.stop = false;
}

Monster.prototype.redrawOn = function(world) {
  if (this.stop) {
    return;
  }
  this.sprite = this.sprite.moveForward(world);
  world.render(this.sprite);
};

Monster.prototype.location = function() {
  return this.sprite.location();
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
