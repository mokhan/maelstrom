var Game = require('./Game.js');
var Clock = require('./Clock.js');
var World = require('./World.js');
_ = require('underscore');

var game = new Game();
var world = new World().bindTo(document);

game.add(new Clock(window).run);
game.add(world.run);
game.run();
