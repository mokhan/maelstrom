var Key = require('./keyboard.js');

function Rocketship(sprite){
  this.sprite = sprite;
}

Rocketship.prototype.redrawOn = function(world) {
  if (Key.isDown(Key.LEFT)) {
    this.sprite.moveLeft(world);
  }

  if (Key.isDown(Key.RIGHT)) {
    this.sprite.moveRight(world);
  }

  if (Key.isDown(Key.UP)) {
    this.sprite.moveForward(world);
  }

  world.render(this.sprite);
};

module.exports = Rocketship;
