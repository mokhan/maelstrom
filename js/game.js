function Game() {
  this.commands = [];
}

Game.prototype.add = function(command) {
  this.commands.push(command);
};

Game.prototype.run = function(){
  var that = this;
  while (this.commands.length > 0) {
    var nextCommand = this.commands.shift();
    nextCommand(that);
  }
};

module.exports = Game;
