function Clock(window){
  this.window = window;
}

Clock.prototype.run = function(game) {
  game.add(this.run);
  this.window.requestAnimationFrame(game.run);
};

module.exports = Clock;
