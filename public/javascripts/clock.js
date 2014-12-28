var _ = require('underscore');

function Clock(window){
  this.window = window;
  _.bindAll(this, 'run');
}

Clock.prototype.run = function(game) {
  game.add(this.run);
  this.window.requestAnimationFrame(game.run);
};

module.exports = Clock;
