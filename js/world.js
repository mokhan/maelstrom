function World(){
  this.props = [];
  _.bindAll(this, 'run');
}

World.prototype.add = function(prop) {
  this.props.push(prop);
};

World.prototype.bindTo = function(document) {
  var canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  var context = canvas.getContext('2d');
  document.body.appendChild(canvas);
  return this;
};

World.prototype.run = function(game){
  var that = this;
  _.each(this.props, function(prop){
    prop.redrawOn(that);
  });
};

module.exports = World;
