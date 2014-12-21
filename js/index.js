var Game = require('./game.js');
var Clock = require('./clock.js');
var World = require('./world.js');
var Monster = require('./monster.js');
var Coordinate = require('./coordinate.js');
var Sprite = require('./sprite.js');
var Rocketship = require('./rocketship.js');
var Utility = require('./utility.js');
var Heading = require('./heading.js');
var Keyboard = require('./keyboard.js');
_ = require('underscore');

window.addEventListener('keyup', function(event) { Keyboard.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Keyboard.onKeydown(event); }, false);

var world = new World().bindTo(document);

for (var i = 0; i < 10; i ++) {
  var x = Utility.randomIntFromRange(0, 512);
  var y = Utility.randomIntFromRange(0, 512);
  var direction = Heading.random();

  var coordinate = new Coordinate({x: x, y: y, direction: direction, speed: Utility.randomIntFromRange(1, 3)});
  world.add(new Monster(new Sprite('img/enemy.bmp', coordinate)));
}
world.add(new Rocketship(new Sprite("img/player.bmp", new Coordinate({x: 250, y: 250, direction: Heading.NORTH, speed: 1}))));

var game = new Game();
game.add(new Clock(window).run);
game.add(world.run);
game.run();
