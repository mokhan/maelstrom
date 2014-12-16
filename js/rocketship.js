function Rocketship(sprite){
  this.sprite = sprite;
  this.applyThrust = false;
  this.speed = 0.1;
  this.turnSpeed = 0.0005;
  //this.setColliderRadius();
}

Rocketship.prototype.redrawOn = function(world) {
  this.sprite.coordinate.forward(world, this.speed);
  world.render(this.sprite);
};

module.exports = Rocketship;
