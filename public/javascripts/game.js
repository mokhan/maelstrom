var _ = require('underscore');

function Game() {
  this.commands = [];
  _.bindAll(this, 'add', 'run');
}

Game.prototype.add = function(command) {
  this.commands.push(command);
};

Game.prototype.run = function(){
  var that = this;
  var currentBatchOfCommands = this.commands;
  this.commands = [];
  while (currentBatchOfCommands.length > 0) {
    var nextCommand = currentBatchOfCommands.shift();
    nextCommand(that);
  }
};

module.exports = Game;
