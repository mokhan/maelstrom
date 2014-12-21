var Utility = require('./utility.js');

function Monster(sprite){
  this.sprite = sprite;

  _.bindAll(this, 'redrawOn');
}

Monster.prototype.redrawOn = function(world) {
  this.sprite.moveForward(world);
  world.render(this.sprite);
};

module.exports = Monster;
