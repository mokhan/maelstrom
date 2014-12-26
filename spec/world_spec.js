describe("World", function(){
  var World = require("../public/javascripts/world.js");
  var subject;

  beforeEach(function(){
    subject = new World({height: 100, width: 100});
  });

  describe("run", function(){
    var asteroid = { redrawOn: function() { } };
    var rocketship = { redrawOn: function() { } };
    var game = { add: function() { } };

    beforeEach(function(){
      spyOn(asteroid, 'redrawOn');
      spyOn(rocketship, 'redrawOn');
      spyOn(subject, 'clearCanvas');
      spyOn(subject, 'detectCollisions');
      spyOn(game, 'add');

      subject.add(asteroid);
      subject.add(rocketship);
    });

    it("redraws the world", function() {
      subject.run(game);

      expect(asteroid.redrawOn).toHaveBeenCalledWith(subject);
      expect(rocketship.redrawOn).toHaveBeenCalledWith(subject);
    });

    it ("re adds the game for the next generation", function() {
      subject.run(game);

      expect(game.add).toHaveBeenCalledWith(subject.run);
    });

    it ("clears the canvas", function() {
      subject.run(game);

      expect(subject.clearCanvas).toHaveBeenCalled();
    });

    it ("detects collisions", function() {
      subject.run(game);

      expect(subject.detectCollisions).toHaveBeenCalled();
    });
  });

  describe ("render", function() {
    var canvas = { save: function(){}, restore: function(){} };
    var sprite = { drawOn: function(){} };

    beforeEach(function(){
      subject.canvasContext = canvas;
      spyOn(sprite, 'drawOn');
    });

    it('draws the sprite on the canvas', function(){
      subject.render(sprite);
      expect(sprite.drawOn).toHaveBeenCalledWith(canvas);
    });
  });

  describe ("detectCollisions", function() {
    var player;
    var asteroid;

    beforeEach(function(){
      player = { sprite: {}, collideWith: function(other){} };
      asteroid = { sprite: {}, collideWith: function(other){} };

      spyOn(player, 'collideWith');
      spyOn(asteroid, 'collideWith');

      subject.add(player);
      subject.add(asteroid);
    });

    it ("notifies each prop when a collision occurs", function() {
      player.sprite = { x: 5, y: 5, radius: 20 };
      asteroid.sprite = { x: 10, y: 5, radius: 12 };

      subject.detectCollisions();

      expect(player.collideWith).toHaveBeenCalledWith(asteroid);
      expect(asteroid.collideWith).toHaveBeenCalledWith(player);
    });

    it ("does not notify props that were not involved in a collision", function() {
      player.sprite = { x: 5, y: 5, radius: 1 };
      asteroid.sprite = { x: 10, y: 10, radius: 1 };

      subject.detectCollisions();

      expect(player.collideWith).not.toHaveBeenCalledWith(asteroid);
      expect(asteroid.collideWith).not.toHaveBeenCalledWith(player);
    });
  });

  describe ("inBounds", function() {
    describe ("when the sprite is out of bounds", function() {
      it ("returns false", function() {
        var sprite = { x: subject.width + 1, y: subject.height + 1 };
        expect(subject.inBounds(sprite)).toEqual(false);
      });
    });

    describe ("when the sprite is in bounds", function() {
      it ("returns true", function() {
        var sprite = { x: subject.width - 1, y: subject.height - 1 };
        expect(subject.inBounds(sprite)).toEqual(true);
      });
    });
  });

  describe ("remove", function() {
    it ("removes the prop from the world", function() {
      var blah = {name: 'blah'};
      var huh = {name: 'huh'};
      subject.add(huh);
      subject.add(blah);

      subject.remove(blah);
      expect(subject.props.length).toEqual(1);
    });
  });
});
