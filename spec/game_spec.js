describe("Game", function(){
  var Game = require('../public/javascripts/game.js');
  var subject;

  beforeEach(function(){
    subject = new Game();
  });

  describe("run", function(){
    it('runs each command added to the loop', function(){
      var wasRun = false;
      var command = function(){ wasRun = true; };

      subject.add(command);
      subject.run();
      expect(wasRun).toEqual(true);
    });

    it("passes the game to each command", function() {
      var wasRun = false;
      var args = null;
      var command = function(argument){ args = argument; };

      subject.add(command);
      subject.run();

      expect(args).toEqual(subject);
    });

    it("allows a command to queue another command to run in the next batch", function() {
      var wasRun = false;
      var secondCommand = function(game) {
        wasRun = true;
      };

      var firstCommand = function(game){
        game.add(secondCommand);
      };

      subject.add(firstCommand);
      subject.run();
      expect(wasRun).toEqual(false);

      subject.run();
      expect(wasRun).toEqual(true);
    });
  });
});
