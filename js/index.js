var Game = require('./Game.js');
var Clock = require('./Clock.js');
_ = require('underscore');

var game = new Game();
game.add(new Clock(window).run);
game.run();
