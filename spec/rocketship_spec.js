describe("Rocketship", function() {
  var Rocketship = require('../public/javascripts/rocketship.js');
  var Key = require('../public/javascripts/keyboard.js');
  var Images = require('../public/javascripts/images.js');
  var Laser = require('../public/javascripts/laser.js');
  var subject;
  var sprite;
  var eventAggregator;

  beforeEach(function(){
    sprite = { moveLeft: null, moveRight: null, moveForward: null, changeImageTo: null, moveTo: null, fire: null, moveBack: null };
    eventAggregator = { publish: null };
    subject = new Rocketship(sprite, eventAggregator);
  });

  describe ("redrawOn", function() {
    var world;

    beforeEach(function(){
      world = {render: null};
      spyOn(world, 'render');
      spyOn(sprite, 'moveLeft').and.returnValue(sprite);
      spyOn(sprite, 'moveRight').and.returnValue(sprite);
      spyOn(sprite, 'moveForward').and.returnValue(sprite);
      spyOn(sprite, 'moveBack').and.returnValue(sprite);
      spyOn(sprite, 'fire');
      spyOn(eventAggregator, 'publish');
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

    it ("moves the sprite back", function() {
      spyOn(Key, 'isDown').and.callFake(function(key) {
        return key === Key.DOWN;
      });
      subject.redrawOn(world);
      expect(sprite.moveBack).toHaveBeenCalledWith(world);
    });

    it ("fires a laser", function() {
      spyOn(Key, 'isDown').and.callFake(function(key){
        return key === Key.SPACE;
      });

      subject.redrawOn(world);
      expect(sprite.fire).toHaveBeenCalledWith(world);
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
        expect(subject.dead).toEqual(true);
      });

      describe ("when ENTER is pressed", function() {
        it("respawns", function() {
          spyOn(sprite, 'changeImageTo');
          spyOn(sprite, 'moveTo');
          spyOn(Key, 'isDown').and.callFake(function(key) {
            return key === Key.ENTER;
          });
          subject.redrawOn(world);
          expect(subject.dead).toEqual(false);
          expect(sprite.changeImageTo).toHaveBeenCalledWith(Images.rocketship);
          expect(sprite.moveTo).toHaveBeenCalledWith(world, 250, 400);
        });
      });
    });
  });

  describe("collideWith", function() {
    var object = {};

    beforeEach(function(){
      spyOn(sprite, 'changeImageTo');
      spyOn(sprite, 'moveTo');
      spyOn(eventAggregator, 'publish');
    });

    it("changes the image to display", function() {
      subject.collideWith(object);
      expect(sprite.changeImageTo).toHaveBeenCalledWith(Images.explosion);
    });

    it ("dies", function() {
      subject.collideWith(object);
      expect(subject.dead).toEqual(true);
      expect(eventAggregator.publish).toHaveBeenCalledWith('rocketship-died', subject);
    });

    it("ignores its own lasers", function() {
      var laser = new Laser({});
      subject.collideWith(laser);

      expect(eventAggregator.publish).not.toHaveBeenCalled();
      expect(subject.dead).toEqual(false);
      expect(sprite.changeImageTo).not.toHaveBeenCalledWith(Images.explosion);
    });

    describe("when dead", function() {
      it("cannot die again", function() {
        subject.dead = true;

        subject.collideWith(object);
        expect(sprite.changeImageTo).not.toHaveBeenCalledWith(Images.explosion);
      });
    });
  });
});
