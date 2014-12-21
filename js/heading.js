var Utility = require('./utility.js');

var Heading = {
  NORTH: (Math.PI / 2) * - 1,
  SOUTH: Math.PI / 2,
  WEST: Math.PI,
  EAST: 0,
  random: function() {
    return Utility.toRadians(Utility.randomIntFromRange(70,90));
  }
};

module.exports = Heading;
