var Utility = require('./utility.js');

function Monster(sprite){
  this.speed = Utility.randomIntFromRange(1, 3);
  this.sprite = sprite;

  _.bindAll(this, 'redrawOn');
}

Monster.prototype.redrawOn = function(world) {
  this.sprite.coordinate.forward(world, this.speed);
  world.render(this.sprite);
};

module.exports = Monster;
