var Key = require('./keyboard.js');

function Rocketship(sprite){
  _.bindAll(this, 'redrawOn', 'location', 'collideWith');
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

Rocketship.prototype.location = function() {
  return this.sprite.location();
};

Rocketship.prototype.collideWith = function(otherProp) {
  console.log("COLLISION with " + otherProp);
};

module.exports = Rocketship;
