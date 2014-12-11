function World(){
  this.props = [];
  _.bindAll(this, 'add', 'bindTo', 'draw', 'run');
}

World.prototype.add = function(prop) {
  this.props.push(prop);
};

World.prototype.bindTo = function(document) {
  this.canvas = document.createElement('canvas');
  this.canvas.width = this.canvas.height = 512;
  document.body.appendChild(this.canvas);
  return this;
};

World.prototype.draw = function(callback) {
  callback(this.canvas.getContext('2d'));
};

World.prototype.run = function(game){
  var that = this;
  _.each(this.props, function(prop){
    prop.redrawOn(that);
  });
};

module.exports = World;
