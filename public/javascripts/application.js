var Game = require('./game.js');
var Clock = require('./clock.js');
var World = require('./world.js');
var Keyboard = require('./keyboard.js');
var Music = require('./music.js');
var LevelOne = require('./level_one.js');
var EventAggregator = require('./event_aggregator.js');
var _ = require('underscore');

window.addEventListener('keyup', function(event) { Keyboard.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Keyboard.onKeydown(event); }, false);

var eventAggregator = new EventAggregator();
var world = new World({height: 600, width: 960}).bindTo(document);
var levelOne = new LevelOne(world, eventAggregator);

var game = new Game();
game.add(new Clock(window).run);
game.add(levelOne.deployShip);
game.add(levelOne.run);
game.add(new Music("audio/main.mp3", window).run);
game.add(world.run);
game.run();
