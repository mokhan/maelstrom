var Monster = require("../js/monster.js");

describe ("Monster", function() {
  var subject;
  var sprite = {};
  var coordinate = { forward: function(){ }, draw: function(){} };

  beforeEach(function(){
    subject = new Monster(coordinate, sprite);
  });

  describe("redrawOn", function() {
    var world = {draw: function(){}};

    beforeEach(function(){
      spyOn(coordinate, 'forward');
      spyOn(world, 'draw');
    });

    it ("moves forward", function() {
      subject.redrawOn(world);

      expect(coordinate.forward).toHaveBeenCalledWith(world, subject.speed);
    });

    it ("draws the current position on the canvas", function() {
      subject.redrawOn(world);

      expect(world.draw).toHaveBeenCalled();
    });
  });
});
