describe("Rocketship", function() {
  var Rocketship = require('../js/rocketship.js');
  var Key = require('../js/keyboard.js');
  var Images = require('../js/images.js');
  var subject;
  var sprite;

  beforeEach(function(){
    sprite = { moveLeft: null, moveRight: null, moveForward: null, crash: null };
    subject = new Rocketship(sprite);
  });

  describe ("redrawOn", function() {
    var world;

    beforeEach(function(){
      world = {render: null};
      spyOn(world, 'render');
      spyOn(sprite, 'moveLeft').and.returnValue(sprite);
      spyOn(sprite, 'moveRight').and.returnValue(sprite);
      spyOn(sprite, 'moveForward').and.returnValue(sprite);
    });

    it ("renders the sprite in the world", function() {
      subject.redrawOn(world);
      expect(world.render).toHaveBeenCalledWith(sprite);
    });

    it("moves the sprite to the left", function() {
      spyOn(Key, 'isDown').and.callFake(function(key) {
        return key === Key.LEFT;
      });

      subject.redrawOn(world);

      expect(sprite.moveLeft).toHaveBeenCalledWith(world);
    });

    it ("moves the sprite to the right", function() {
      spyOn(Key, 'isDown').and.callFake(function(key) {
        return key === Key.RIGHT;
      });

      subject.redrawOn(world);

      expect(sprite.moveRight).toHaveBeenCalledWith(world);
    });

    it ("moves the sprite forward", function() {
      spyOn(Key, 'isDown').and.callFake(function(key) {
        return key === Key.UP;
      });

      subject.redrawOn(world);
      expect(sprite.moveForward).toHaveBeenCalledWith(world);
    });
  });

  describe("collideWith", function() {
    beforeEach(function(){
      spyOn(sprite, 'crash');
    });

    it("dies", function() {
      var object = {};
      subject.collideWith(object);
      expect(sprite.crash).toHaveBeenCalledWith(Images.explosion);
    });
  });
});
