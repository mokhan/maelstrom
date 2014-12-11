function Asteroid(){
  this.position = {
    x: this.randomIntFromRange(0, 512),
    y: this.randomIntFromRange(0, 512),
  };
  this.width = this.randomIntFromRange(6, 10);
  this.height = this.randomIntFromRange(6, 10);
  this.rotation = 0;
  this.sprite = new Image(32, 32);
  this.sprite.src = 'img/enemy.bmp';

  _.bindAll(this, 'redrawOn');
}

Asteroid.prototype.redrawOn = function(world) {
  var that = this;
  world.draw(function(view) {
    view.save();
    view.translate(that.position.x + that.width/2, that.position.y + that.height/2);
    view.rotate(that.rotation/Math.PI*180);
    view.drawImage(that.sprite, -that.width/2, -that.height/2, that.width, that.height);
    view.restore();
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
