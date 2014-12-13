function Asteroid(){
  this.position = {
    x: this.randomIntFromRange(0, 512),
    y: this.randomIntFromRange(0, 512),
  };
  this.velocity = { x: 0, y: 0 };
  this.width = this.randomIntFromRange(6, 10);
  this.height = this.randomIntFromRange(6, 10);
  this.speed = this.randomIntFromRange(1, 3);
  this.rotation = 0;
  this.direction = 0;
  this.sprite = new Image(32, 32);
  this.sprite.src = 'img/enemy.bmp';

  _.bindAll(this, 'redrawOn');
}

Asteroid.prototype.redrawOn = function(world) {
  var that = this;
  world.draw(function(view) {
    if (that.position.y > world.height || that.position.x > world.width) {
      that.position.y = 0;
      that.position.x = that.randomIntFromRange(0, world.width);
      that.velocity.x = 0;
      that.velocity.y = 0;
      that.rotation = 0;
      that.direction = that.toRadians(that.randomIntFromRange(70,90));
    }
    that.velocity.x = (that.speed * Math.cos(that.direction));
    that.velocity.y = (that.speed * Math.sin(that.direction));
    that.position.x += that.velocity.x;
    that.position.y += that.velocity.y;
    that.rotation += 0.01;

    view.drawImage(that.sprite, that.position.x, that.position.y);
  });
};

Asteroid.prototype.randomIntFromRange = function(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
};

Asteroid.prototype.toRadians = function(angle) {
  return angle * (Math.PI/180);
};

Asteroid.prototype.randomFloatFromRange = function(min, max) {
  return Math.random() * (max - min) + min;
};

module.exports = Asteroid;
