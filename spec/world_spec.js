describe("World", function(){
  var World = require("../js/world.js");
  var subject;

  beforeEach(function(){
    subject = new World();
  });

  describe("run", function(){
    var asteroid = { redrawOn: function() { } };
    var rocketship = { redrawOn: function() { } };
    var game = { add: function() { } };

    beforeEach(function(){
      spyOn(asteroid, 'redrawOn');
      spyOn(rocketship, 'redrawOn');
      spyOn(subject, 'clearCanvas');
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
  });
});
