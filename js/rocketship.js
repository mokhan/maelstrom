var Key = require('./keyboard.js');

function Rocketship(sprite){
  this.sprite = sprite;
  this.applyThrust = false;
  this.speed = 1.0;
  this.turnSpeed = 0.0005;
  this.rotation = 0;
  this.velocity = { x: 0, y: 0 };
}

Rocketship.prototype.redrawOn = function(world) {
  if (Key.isDown(Key.LEFT)) {
    this.speed = 1.0;
    this.sprite.rotateLeft(world, this.turnSpeed);
  }

  if (Key.isDown(Key.RIGHT)) {
    this.speed = 1.0;
    this.sprite.rotateRight(world, this.turnSpeed);
  }

  if (Key.isDown(Key.UP)) {
    this.speed += 0.05;
    this.sprite.moveForward(world, this.speed);
  }

  world.render(this.sprite);
};

module.exports = Rocketship;
