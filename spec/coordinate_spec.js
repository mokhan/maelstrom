describe("Coordinate", function(){
  var Coordinate = require('../js/coordinate.js');
  var subject;

  describe("forward", function(){
    var world;

    beforeEach(function(){
      world = {};
    });

    describe ("when heading north", function() {
      it ("advances forward one space", function() {
        subject = new Coordinate({x: 100, y: 100, direction: (Math.PI / 2) * -1 });
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(100);
        expect(subject.y).toEqual(99);
      });
    });

    describe ("when heading east", function() {
      it ("advances forward one space", function() {
        subject = new Coordinate({x: 100, y: 100, direction: 0});
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(101);
        expect(subject.y).toEqual(100);
      });
    });

    describe ("when heading west", function() {
      it ("advances forward one space", function() {
        subject = new Coordinate({x: 100, y: 100, direction: Math.PI });
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(99);
        expect(subject.y).toEqual(100);
      });
    });

    describe ("when heading south", function() {
      it ("advances forward one space", function() {
        subject = new Coordinate({x: 100, y: 100, direction: Math.PI / 2 });
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(100);
        expect(subject.y).toEqual(101);
      });
    });
  });
});
