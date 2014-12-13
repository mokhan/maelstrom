function World(){
  this.props = [];
  this.height = this.width = 512;
  this.wMidpoint = this.width/2;
  this.hMidpoint = this.height/2;
  this.x = 100;
  _.bindAll(this, 'add', 'bindTo', 'draw', 'run');
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
  _.each(this.props, function(prop){
    prop.redrawOn(that);
  });
  game.add(this.run);
};

World.prototype.clearCanvas = function() {
  this.canvasContext.clearRect(0, 0, this.width, this.height);
};

module.exports = World;
