var Key = require('./keyboard.js');
var Images = require('./images.js');
var Audio = require('./audio.js');

function Rocketship(sprite){
  _.bindAll(this, 'redrawOn', 'collideWith', 'isDead', 'die');
  this.sprite = sprite;
  this.dead = false;
}

Rocketship.prototype.redrawOn = function(world) {
  if (this.isDead() === false) {
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
  this.die();
};

Rocketship.prototype.isDead = function() {
  return this.dead;
};

Rocketship.prototype.die = function() {
  this.dead = true;
  this.sprite.changeImageTo(Images.explosion);
  Audio.play(Audio.explosion);
};

module.exports = Rocketship;
