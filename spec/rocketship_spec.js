describe("Rocketship", function() {
  var Rocketship = require('../public/javascripts/rocketship.js');
  var Key = require('../public/javascripts/keyboard.js');
  var Images = require('../public/javascripts/images.js');
  var Sound = require('../public/javascripts/sound.js');
  var subject;
  var sprite;

  beforeEach(function(){
    sprite = { moveLeft: null, moveRight: null, moveForward: null, changeImageTo: null, moveTo: null };
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

    describe ("when dead", function() {
      beforeEach(function(){
        subject.dead = true;
      });

      it("stops moving", function() {
        spyOn(Key, 'isDown').and.callFake(function(key) {
          return key !== Key.ENTER;
        });

        subject.redrawOn(world);
        expect(sprite.moveForward).not.toHaveBeenCalled();
        expect(sprite.moveLeft).not.toHaveBeenCalled();
        expect(sprite.moveRight).not.toHaveBeenCalled();
        expect(subject.isDead()).toEqual(true);
      });

      describe ("when ENTER is pressed", function() {
        it("respawns", function() {
          spyOn(sprite, 'changeImageTo');
          spyOn(sprite, 'moveTo');
          spyOn(Key, 'isDown').and.callFake(function(key) {
            return key === Key.ENTER;
          });
          subject.redrawOn(world);
          expect(subject.isDead()).toEqual(false);
          expect(sprite.changeImageTo).toHaveBeenCalledWith(Images.rocketship);
          expect(sprite.moveTo).toHaveBeenCalledWith({x: 250, y: 400});
        });
      });
    });
  });

  describe("collideWith", function() {
    var object = {};

    beforeEach(function(){
      spyOn(sprite, 'changeImageTo');
      spyOn(sprite, 'moveTo');
      spyOn(Sound, 'play');
    });

    it("changes the image to display", function() {
      subject.collideWith(object);
      expect(sprite.changeImageTo).toHaveBeenCalledWith(Images.explosion);
    });

    it ("dies", function() {
      subject.collideWith(object);
      expect(subject.isDead()).toEqual(true);
    });

    it("plays a sound", function() {
      subject.collideWith(object);
      expect(Sound.play).toHaveBeenCalledWith(Sound.explosion);
    });

    describe("when dead", function() {
      it("cannot die again", function() {
        subject.dead = true;

        subject.collideWith(object);
        expect(Sound.play).not.toHaveBeenCalledWith(Sound.explosion);
        expect(sprite.changeImageTo).not.toHaveBeenCalledWith(Images.explosion);
      });
    });
  });
});
