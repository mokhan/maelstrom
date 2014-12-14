var Coordinate = require('./coordinate.js');

function Monster(){
  this.coordinate = new Coordinate({
    x: this.randomIntFromRange(0, 512),
    y: this.randomIntFromRange(0, 512),
    direction: 0
  });

  this.speed = this.randomIntFromRange(1, 3);
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

Monster.prototype.randomIntFromRange = function(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
};

module.exports = Monster;
