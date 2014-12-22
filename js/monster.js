var Utility = require('./utility.js');

function Monster(sprite){
  _.bindAll(this, 'redrawOn', 'location', 'collideWith');
  this.sprite = sprite;
}

Monster.prototype.redrawOn = function(world) {
  this.sprite.moveForward(world);
  world.render(this.sprite);
};

Monster.prototype.location = function() {
  return this.sprite.location();
};

Monster.prototype.collideWith = function(otherProp) {
  console.log("COLLISION with " + otherProp);
};

module.exports = Monster;
