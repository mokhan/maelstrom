var Game = require('./Game.js');
var Clock = require('./Clock.js');
var World = require('./World.js');
_ = require('underscore');

var game = new Game();
game.add(new Clock(window).run);
game.add(new World(window, document).run);
game.run();
