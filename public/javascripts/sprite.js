var Heading = require('./heading.js');
var Images = require('./images.js');

function Sprite(options){
  _.bindAll(this, 'moveForward', 'moveLeft', 'moveRight', 'move');
  this.x = options.x;
  this.y = options.y;
  this.heading = options.heading;
  this.speed = options.speed;
  this.image = options.image;
  this.radius = this.image ? this.image.width / 2 : 0;
}

Sprite.prototype.moveForward = function(world) {
  return this.move(world, this.heading);
};

Sprite.prototype.moveLeft = function(world) {
  var leftRotation = this.heading + ((Math.PI / 2) * -1);
  return this.move(world, leftRotation);
};

Sprite.prototype.moveRight = function(world) {
  var rightRotation = this.heading + (Math.PI / 2);
  return this.move(world, rightRotation);
};

Sprite.prototype.move = function(world, heading) {
  var x = this.x + (this.speed * Math.round(Math.cos(heading)));
  var y = this.y + (this.speed * Math.round(Math.sin(heading)));

  return this.moveTo(world, x, y);
};

Sprite.prototype.drawOn = function(canvas) {
  canvas.drawImage(this.image, this.x, this.y);
};

Sprite.prototype.location = function() {
  return { x: this.x, y: this.y, radius: this.image.width/2, };
};

Sprite.prototype.chooseRandomHeading = function() {
  this.heading = Heading.random();
};

Sprite.prototype.changeImageTo = function(image) {
  this.image = Images.load(image);
};

Sprite.prototype.moveTo = function(world, x, y) {
  if (x < 0) { x = world.width; }
  if (x > world.width) { x = 0; }
  if (y < 0) { y = world.height; }
  if (y > world.height) { y = 0; }

  return new Sprite({
    x: x,
    y: y,
    heading: this.heading,
    speed: this.speed,
    image: this.image,
  });
};

module.exports = Sprite;
