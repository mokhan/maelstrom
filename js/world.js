function World(window, document){
  this.window = window;
  this.document = document;
  this.canvas = this.document.createElement('canvas');
  this.context = this.canvas.getContext('2d');
  this.canvas.width = 256;
  this.canvas.height = 256;
  this.wMidpoint = 256/2;
  this.hMidpoint = 256/2;
  this.document.body.appendChild(this.canvas);
  _.bindAll(this, 'run');
}

World.prototype.run = function(game){
};

module.exports = World;
