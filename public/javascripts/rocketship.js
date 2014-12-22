var Key = require('./keyboard.js');
var Images = require('./images.js');
var Sound = require('./sound.js');

function Rocketship(sprite){
  _.bindAll(this, 'redrawOn', 'collideWith', 'die', 'alive');
  this.sprite = sprite;
  this.dead = false;
}

Rocketship.prototype.redrawOn = function(world) {
  if (this.dead) {
    if (Key.isDown(Key.ENTER)) {
      this.alive(world);
    }
  } else {
    if (Key.isDown(Key.LEFT)) {
      this.sprite = this.sprite.moveLeft(world);
    }

    if (Key.isDown(Key.RIGHT)) {
      this.sprite = this.sprite.moveRight(world);
    }

    if (Key.isDown(Key.UP)) {
      this.sprite = this.sprite.moveForward(world);
    }
  }

  world.render(this.sprite);
};

Rocketship.prototype.collideWith = function(otherProp) {
  if (this.dead === false) {
    this.die();
  }
};

Rocketship.prototype.die = function() {
  this.dead = true;
  this.sprite.changeImageTo(Images.explosion);
  Sound.play(Sound.explosion);
};

Rocketship.prototype.alive = function(world) {
  this.dead = false;
  this.sprite.changeImageTo(Images.rocketship);
  this.sprite = this.sprite.moveTo(world, 250, 400);
};

module.exports = Rocketship;
