var Monster = require("../js/monster.js");

describe ("Monster", function() {
  var subject;
  var coordinate = { forward: function(){ }, render: function(){} };
  var sprite = { coordinate: coordinate };

  beforeEach(function(){
    subject = new Monster(sprite);
  });

  describe("redrawOn", function() {
    var world = { render: function(){} };

    beforeEach(function(){
      spyOn(coordinate, 'forward');
      spyOn(world, 'render');
    });

    it ("moves forward", function() {
      subject.redrawOn(world);

      expect(coordinate.forward).toHaveBeenCalledWith(world, subject.speed);
    });

    it ("draws the current position on the canvas", function() {
      subject.redrawOn(world);

      expect(world.render).toHaveBeenCalledWith(sprite);
    });
  });
});
