var Utility = require('./utility.js');

function Monster(coordinate, sprite){
  this.coordinate = coordinate;
  this.speed = Utility.randomIntFromRange(1, 3);
  this.sprite = sprite;

  _.bindAll(this, 'redrawOn');
}

Monster.prototype.redrawOn = function(world) {
  var that = this;
  this.coordinate.forward(world, this.speed);
  world.draw(function(view) {
    view.drawImage(that.sprite.image, that.coordinate.x, that.coordinate.y);
  });
};

module.exports = Monster;
