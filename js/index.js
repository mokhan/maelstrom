var Game = require('./game.js');
var Clock = require('./clock.js');
var World = require('./world.js');
var Monster = require('./monster.js');
var Coordinate = require('./coordinate.js');
var Utility = require('./utility.js');
_ = require('underscore');

var world = new World().bindTo(document);

for (var i = 0; i < 10; i ++) {
  var coordinate = new Coordinate({
    x: Utility.randomIntFromRange(0, 512),
    y: Utility.randomIntFromRange(0, 512),
    direction: 0
  });

  world.add(new Monster(coordinate));
}

var game = new Game();
game.add(new Clock(window).run);
game.add(world.run);
game.run();
