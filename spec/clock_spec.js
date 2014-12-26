describe("Clock", function(){
  var Clock = require('../public/javascripts/clock.js');
  _ = require('underscore');
  var subject;
  var window;

  beforeEach(function(){
    window = { requestAnimationFrame: function(x) {} };
    subject = new Clock(window);
  });

  describe("run", function(){
    var game;

    beforeEach(function(){
      spyOn(window, 'requestAnimationFrame');
      game = { add: function(){}, run: function(){} };
    });

    it("activates the game loop for the next redraw", function() {
      subject.run(game);
      expect(window.requestAnimationFrame).toHaveBeenCalledWith(game.run);
    });

    it ("registers itself to reschedule the next redraw", function() {
      spyOn(game, 'add');
      subject.run(game);
      expect(game.add).toHaveBeenCalledWith(subject.run);
    });
  });
});
