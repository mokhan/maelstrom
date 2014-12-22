var Key = require('./keyboard.js');
var Images = require('./images.js');
var Sound = require('./sound.js');

function Rocketship(sprite){
  _.bindAll(this, 'redrawOn', 'collideWith', 'isDead', 'die', 'alive');
  this.sprite = sprite;
  this.dead = false;
}

Rocketship.prototype.redrawOn = function(world) {
  if (this.isDead()) {
    if (Key.isDown(Key.ENTER)) {
      this.alive();
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
  if (this.isDead() === false) {
    this.die();
  }
};

Rocketship.prototype.isDead = function() {
  return this.dead;
};

Rocketship.prototype.die = function() {
  this.dead = true;
  this.sprite.changeImageTo(Images.explosion);
  Sound.play(Sound.explosion);
};

Rocketship.prototype.alive = function() {
  this.dead = false;
  this.sprite.changeImageTo(Images.rocketship);
};

module.exports = Rocketship;
