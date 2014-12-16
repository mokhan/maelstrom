var Key = require('./keyboard.js');

function Rocketship(sprite){
  this.sprite = sprite;
  this.applyThrust = false;
  this.speed = 0.1;
  this.turnSpeed = 0.0005;
  this.rotation = 0;
  this.velocity = { x: 0, y: 0 };
}

Rocketship.prototype.redrawOn = function(world) {
  if (Key.isDown(Key.LEFT)) {
    //this.rotation += this.turnSpeed * -1;
    this.sprite.rotateLeft(this.turnSpeed);
  }

  if (Key.isDown(Key.RIGHT)) {
    //this.rotation += this.turnSpeed * 1;
    this.sprite.rotateRight(this.turnSpeed);
  }

  if (Key.isDown(Key.UP)) {
    //this.velocity.x += Math.cos((this.rotation/Math.PI*180)) * this.speed;
    //this.velocity.y += Math.sin((this.rotation/Math.PI*180)) * this.speed;
    this.sprite.moveForward(world, this.speed);
  }

  // apply friction
  //this.velocity.x *= 0.98;
  //this.velocity.y *= 0.98;

  // apply velocities
  //this.sprite.coordinate.x -= this.velocity.x;
  //this.sprite.coordinate.y -= this.velocity.y;

  world.render(this.sprite);
};

module.exports = Rocketship;
