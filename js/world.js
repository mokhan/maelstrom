function World(options){
  _.bindAll(this, 'add', 'bindTo', 'draw', 'run', 'render');
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
  _.each(this.props, function(prop){
    prop.redrawOn(that);
  });
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

module.exports = World;
