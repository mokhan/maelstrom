var Game = require('./game.js');
var Clock = require('./clock.js');
var World = require('./world.js');
var Monster = require('./monster.js');
var Sprite = require('./sprite.js');
var Rocketship = require('./rocketship.js');
var Utility = require('./utility.js');
var Heading = require('./heading.js');
var Keyboard = require('./keyboard.js');
var Music = require('./music.js');
var Images = require('./images.js');
_ = require('underscore');

window.addEventListener('keyup', function(event) { Keyboard.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Keyboard.onKeydown(event); }, false);

var world = new World({height: 512, width: 512}).bindTo(document);

for (var i = 0; i < 10; i ++) {
  world.add(new Monster(new Sprite({
    x: Utility.randomIntFromRange(0, 512),
    y: Utility.randomIntFromRange(0, 512),
    heading: Heading.random(),
    speed: Utility.randomIntFromRange(1, 3),
    image: Images.load(Images.monster),
  })));
}
world.add(new Rocketship(new Sprite({
  x: 250,
  y: 250,
  heading: Heading.NORTH,
  speed: 1,
  image: Images.load(Images.player),
})));

var game = new Game();
game.add(new Clock(window).run);
//game.add(new Music("music/main.mp3", window).run);
game.add(world.run);
game.run();
