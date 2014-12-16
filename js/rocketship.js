var Coordinate = require('./coordinate.js');
var Sprite = require('./sprite.js');

function Rocketship(){
  this.coordinate = new Coordinate({x: 250, y: 250, direction: 0});
  this.sprite = new Sprite("img/player.bmp");
  this.applyThrust = false;
  this.speed = 0.1;
  this.turnSpeed = 0.0005;
  //this.setColliderRadius();
}

Rocketship.prototype.redrawOn = function(world) {
  var that = this;
  world.draw(function(view) {
    view.drawImage(that.sprite.image, that.coordinate.x, that.coordinate.y);
  });
};

module.exports = Rocketship;
