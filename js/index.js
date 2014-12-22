var Game = require('./game.js');
var Clock = require('./clock.js');
var World = require('./world.js');
var Keyboard = require('./keyboard.js');
var Music = require('./music.js');
var LevelOne = require('./level_one.js');
_ = require('underscore');

window.addEventListener('keyup', function(event) { Keyboard.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Keyboard.onKeydown(event); }, false);

var world = new World({height: 512, width: 512}).bindTo(document);

var levelOne = new LevelOne();
levelOne.setup(world);

var game = new Game();
game.add(new Clock(window).run);
game.add(new Music("music/main.mp3", window).run);
game.add(world.run);
game.run();
