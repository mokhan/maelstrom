var Coordinate = require('./coordinate.js');
var Sprite = require('./sprite.js');

function Rocketship(coordinate, sprite){
  this.coordinate = coordinate;
  this.sprite = sprite;
  this.applyThrust = false;
  this.speed = 0.1;
  this.turnSpeed = 0.0005;
  //this.setColliderRadius();
}

Rocketship.prototype.redrawOn = function(world) {
  var that = this;
  this.coordinate.forward(world, this.speed);
  world.draw(function(view) {
    view.drawImage(that.sprite.image, that.coordinate.x, that.coordinate.y);
  });
};

module.exports = Rocketship;
