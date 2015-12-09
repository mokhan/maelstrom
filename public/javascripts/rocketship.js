var Key = require('./keyboard.js');
var Images = require('./images.js');
var Laser = require('./laser.js');
var _ = require('underscore');

function Rocketship(sprite, eventAggregator){
  _.bindAll(this, 'redrawOn', 'collideWith', 'die', 'alive');
  this.sprite = sprite;
  this.dead = false;
  this.coolDown = 0;
  this.eventAggregator = eventAggregator;
}

Rocketship.prototype.redrawOn = function(world) {
  if (this.dead) {
    if (Key.isDown(Key.ENTER)) {
      this.alive(world);
    }
  } else {
    this.coolDown -= 1;
    if (Key.isDown(Key.LEFT)) {
      this.sprite = this.sprite.moveLeft(world);
    }

    if (Key.isDown(Key.RIGHT)) {
      this.sprite = this.sprite.moveRight(world);
    }

    if (Key.isDown(Key.UP)) {
      this.sprite = this.sprite.moveForward(world);
    }

    if (Key.isDown(Key.DOWN)) {
      this.sprite = this.sprite.moveBack(world);
    }

    if (Key.isDown(Key.SPACE) && this.coolDown <= 0) {
      this.coolDown = 50;
      this.sprite.fire(world);
    }
  }

  world.render(this.sprite);
};

Rocketship.prototype.collideWith = function(otherProp) {
  if (otherProp.constructor === Laser) {
    return;
  }
  if (this.dead === false) {
    this.die();
  }
};

Rocketship.prototype.die = function() {
  this.dead = true;
  this.sprite.changeImageTo(Images.explosion);
  this.eventAggregator.publish('rocketship-died', this);
};

Rocketship.prototype.alive = function(world) {
  this.dead = false;
  this.sprite.changeImageTo(Images.rocketship);
  this.sprite = this.sprite.moveTo(world, 250, 400);
};

module.exports = Rocketship;
