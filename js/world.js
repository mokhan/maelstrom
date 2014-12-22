function World(options){
  _.bindAll(this, 'add', 'bindTo', 'draw', 'run', 'render', 'detectCollisions', 'eachProp');
  this.props = [];
  this.height = options.height;
  this.width = options.width;
}

World.prototype.add = function(prop) {
  this.props.push(prop);
};

World.prototype.bindTo = function(document) {
  this.canvas = document.createElement('canvas');
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  this.canvasContext = this.canvas.getContext('2d');
  document.body.appendChild(this.canvas);
  return this;
};

World.prototype.draw = function(callback) {
  callback(this.canvasContext);
};

World.prototype.run = function(game){
  var that = this;
  this.clearCanvas();
  this.eachProp(function(prop){
    prop.redrawOn(that);
  });
  this.detectCollisions();
  game.add(this.run);
};

World.prototype.clearCanvas = function() {
  this.canvasContext.clearRect(0, 0, this.width, this.height);
};

World.prototype.render = function(sprite) {
  this.draw(function(view) {
    view.save();
    sprite.drawOn(view);
    view.restore();
  });
};

World.prototype.detectCollisions = function() {
  var that = this;
  this.eachProp(function(prop){
    that.eachProp(function(otherProp){
      if (that.collision(prop.sprite.location(), otherProp.sprite.location())) {
        prop.collideWith(otherProp);
      }
    });
  });
};

World.prototype.collision = function(prop, otherProp) {
  var dx = (prop.x + prop.radius) - (otherProp.x + otherProp.radius);
  var dy = (prop.y + prop.radius) - (otherProp.y + otherProp.radius);
  var distance = Math.sqrt(dx * dx + dy * dy);

  return distance < prop.radius + otherProp.radius;
};

World.prototype.eachProp = function(callback) {
  _.each(this.props, callback);
};

module.exports = World;
