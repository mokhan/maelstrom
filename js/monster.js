var Coordinate = require('./coordinate.js');
var Utility = require('./utility.js');

function Monster(coordinate){
  this.coordinate = coordinate;
  this.speed = Utility.randomIntFromRange(1, 3);
  this.sprite = new Image(32, 32);
  this.sprite.src = 'img/enemy.bmp';

  _.bindAll(this, 'redrawOn');
}

Monster.prototype.redrawOn = function(world) {
  var that = this;
  this.coordinate.forward(world, this.speed);
  world.draw(function(view) {
    view.drawImage(that.sprite, that.coordinate.x, that.coordinate.y);
  });
};

module.exports = Monster;
