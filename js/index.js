var Game = require('./game.js');
var Clock = require('./clock.js');
var World = require('./world.js');
var Monster = require('./monster.js');
var Coordinate = require('./coordinate.js');
var Sprite = require('./sprite.js');
var Rocketship = require('./rocketship.js');
var Utility = require('./utility.js');
_ = require('underscore');

var world = new World().bindTo(document);

for (var i = 0; i < 10; i ++) {
  var coordinate = new Coordinate();
  world.add(new Monster(coordinate, new Sprite('img/enemy.bmp')));
}
world.add(new Rocketship(new Coordinate({x: 250, y: 250, direction: 0}), new Sprite("img/player.bmp")));

var game = new Game();
game.add(new Clock(window).run);
game.add(world.run);
game.run();
