var Monster = require("../public/javascripts/monster.js");
var Rocketship = require("../public/javascripts/rocketship.js");

describe ("Monster", function() {
  var subject;
  var sprite = { moveForward: function() {}, chooseRandomHeading: function(){} };

  beforeEach(function(){
    subject = new Monster(sprite);
  });

  describe("redrawOn", function() {
    var world = { render: function(){}, remove: function(){} };

    beforeEach(function(){
      spyOn(sprite, 'moveForward').and.returnValue(sprite);
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

    describe ("when stopped", function() {
      it ("does not move", function() {
        subject.stop = true;
        subject.redrawOn(world);

        expect(sprite.moveForward).not.toHaveBeenCalledWith(world);
      });
    });
  });

  describe ("collideWith", function() {
    beforeEach(function(){
      spyOn(sprite, 'chooseRandomHeading');
    });

    it('changes direction when colliding with another monster', function(){
      var otherMonster = new Monster(sprite);
      subject.collideWith(otherMonster);

      expect(subject.isMoving()).toEqual(true);
      expect(sprite.chooseRandomHeading).toHaveBeenCalled();
    });

    it("stops moving when colliding with a rocketship", function() {
      var rocketship = new Rocketship(sprite);
      subject.collideWith(rocketship);

      expect(subject.isMoving()).toEqual(false);
      expect(sprite.chooseRandomHeading).not.toHaveBeenCalled();
    });
  });
});
