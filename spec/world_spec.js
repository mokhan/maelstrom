describe("World", function(){
  var World = require("../js/world.js");
  var subject;

  beforeEach(function(){
    subject = new World();
  });

  describe("run", function(){
    it("redraws the world", function() {
      var asteroid = { redrawOn: function() { } };
      var rocketship = { redrawOn: function() { } };

      spyOn(asteroid, 'redrawOn');
      spyOn(rocketship, 'redrawOn');

      subject.add(asteroid);
      subject.add(rocketship);

      subject.run({});

      expect(asteroid.redrawOn).toHaveBeenCalledWith(subject);
      expect(rocketship.redrawOn).toHaveBeenCalledWith(subject);
    });
  });
});
