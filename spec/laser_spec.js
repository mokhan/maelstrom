describe ("Laser", function() {
  var Laser = require('../public/javascripts/laser.js');
  var Monster = require('../public/javascripts/monster.js');
  var Sound = require('../public/javascripts/sound.js');
  var subject;
  var sprite;

  beforeEach(function(){
    sprite = { moveForward: null };
    subject = new Laser(sprite);
  });

  describe ("redrawOn", function() {
    var world;

    beforeEach(function(){
      world = { inBounds: null, remove: null, render: null };
      spyOn(world, 'remove');
      spyOn(world, 'render');
    });

    describe ("when the laser it out of bounds", function() {
      it ("removes itself from the world", function() {
        spyOn(world, 'inBounds').and.returnValue(false);

        subject.redrawOn(world);
        expect(world.remove).toHaveBeenCalledWith(subject);
      });
    });

    describe ("when in bounds", function() {
      it ("moves the sprite forward", function() {
        spyOn(world, 'inBounds').and.returnValue(true);
        spyOn(sprite, 'moveForward').and.returnValue(sprite);

        subject.redrawOn(world);

        expect(sprite.moveForward).toHaveBeenCalledWith(world);
        expect(world.render).toHaveBeenCalledWith(sprite);
      });
    });
  });

  describe ("collideWith", function() {
    it ("plays a smash sound", function() {
      spyOn(Sound, 'play');

      var monster = new Monster({});
      subject.collideWith(monster);
      expect(Sound.play).toHaveBeenCalledWith(Sound.smash);
    });
  });
});
