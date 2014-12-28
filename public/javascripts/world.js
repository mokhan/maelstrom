var _ = require('underscore');

function World(options){
  _.bindAll(this, 'add', 'bindTo', 'draw', 'run', 'render', 'detectCollisions', 'eachProp', 'inBounds', 'remove');
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
      if (that.collision(prop.sprite, otherProp.sprite)) {
        prop.collideWith(otherProp);
      }
    });
  });
};

World.prototype.collision = function(prop, otherProp) {
  if (prop === otherProp) {
    return false;
  }
  var dx = (prop.x + prop.radius) - (otherProp.x + otherProp.radius);
  var dy = (prop.y + prop.radius) - (otherProp.y + otherProp.radius);
  var distance = Math.sqrt(dx * dx + dy * dy);

  return distance < prop.radius + otherProp.radius;
};

World.prototype.eachProp = function(callback) {
  var current = this.props.slice(0);
  _.each(current, callback);
};

World.prototype.inBounds = function(sprite) {
  if (sprite.x > this.width || sprite.x < 0) {
    return false;
  }
  if (sprite.y > this.height || sprite.y < 0) {
    return false;
  }
  return true;
};

World.prototype.remove = function(prop) {
  this.props.splice(this.props.indexOf(prop), 1);
};

module.exports = World;
