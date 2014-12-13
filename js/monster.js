function Monster(){
  this.position = {
    x: this.randomIntFromRange(0, 512),
    y: this.randomIntFromRange(0, 512),
  };
  this.velocity = { x: 0, y: 0 };
  this.width = this.randomIntFromRange(6, 10);
  this.height = this.randomIntFromRange(6, 10);
  this.speed = this.randomIntFromRange(1, 3);
  this.direction = 0;
  this.sprite = new Image(32, 32);
  this.sprite.src = 'img/enemy.bmp';

  _.bindAll(this, 'redrawOn');
}

Monster.prototype.redrawOn = function(world) {
  if (this.position.y > world.height || this.position.x > world.width) {
    this.position.y = 0;
    this.position.x = this.randomIntFromRange(0, world.width);
    this.velocity.x = 0;
    this.velocity.y = 0;
    this.direction = this.toRadians(this.randomIntFromRange(70,90));
  }
  this.velocity.x = (this.speed * Math.cos(this.direction));
  this.velocity.y = (this.speed * Math.sin(this.direction));
  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;

  var that = this;
  world.draw(function(view) {
    view.drawImage(that.sprite, that.position.x, that.position.y);
  });
};

Monster.prototype.randomIntFromRange = function(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
};

Monster.prototype.toRadians = function(angle) {
  return angle * (Math.PI/180);
};

Monster.prototype.randomFloatFromRange = function(min, max) {
  return Math.random() * (max - min) + min;
};

module.exports = Monster;
