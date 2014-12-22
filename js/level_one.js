var Monster = require('./monster.js');
var Sprite = require('./sprite.js');
var Heading = require('./heading.js');
var Utility = require('./utility.js');
var Images = require('./images.js');
var Rocketship = require('./rocketship.js');

function LevelOne(){
  _.bindAll(this, 'setup');
}

LevelOne.prototype.setup = function(world) {
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
};

module.exports = LevelOne;
