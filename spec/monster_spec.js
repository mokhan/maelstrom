var Monster = require("../js/monster.js");

describe ("Monster", function() {
  var subject;
  var sprite = { moveForward: function() {} };

  beforeEach(function(){
    subject = new Monster(sprite);
  });

  describe("redrawOn", function() {
    var world = { render: function(){} };

    beforeEach(function(){
      spyOn(sprite, 'moveForward');
      spyOn(world, 'render');
    });

    it ("moves forward", function() {
      subject.redrawOn(world);

      expect(sprite.moveForward).toHaveBeenCalledWith(world);
    });

    it ("draws the current position on the canvas", function() {
      subject.redrawOn(world);

      expect(world.render).toHaveBeenCalledWith(sprite);
    });
  });
});
