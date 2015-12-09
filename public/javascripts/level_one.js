var Monster = require('./monster.js');
var Sprite = require('./sprite.js');
var Heading = require('./heading.js');
var Utility = require('./utility.js');
var Images = require('./images.js');
var Rocketship = require('./rocketship.js');
var Sound = require('./sound.js');
var _ = require('underscore');

function LevelOne(world, eventAggregator){
  _.bindAll(this, 'run', 'deployMonster', 'deployShip');
  this.world = world;
  this.eventAggregator = eventAggregator;
  this.countdown = 0;

  this.eventAggregator.subscribe('rocketship-died', function(){
    Sound.play(Sound.explosion);
  });
}

LevelOne.prototype.run = function(game) {
  if (this.countdown < 0) {
    if (this.world.props.length <= 10) {
      this.deployMonster();
    }
  }

  this.countdown -= 1;
  game.add(this.run);
};

LevelOne.prototype.deployMonster = function() {
  this.world.add(new Monster(new Sprite({
    x: Utility.randomIntFromRange(0, this.world.width),
    y: 0,
    heading: Heading.random(),
    speed: Utility.randomIntFromRange(1, 3),
    image: Images.load(Images.monster),
  })));
  this.countdown = 100;
};

LevelOne.prototype.deployShip = function() {
  this.world.add(new Rocketship(new Sprite({
    x: 250,
    y: 400,
    heading: Heading.NORTH,
    speed: 2,
    image: Images.load(Images.rocketship),
  }), this.eventAggregator));
};

module.exports = LevelOne;
