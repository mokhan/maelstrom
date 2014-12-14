describe("Coordinate", function(){
  var Coordinate = require('../js/coordinate.js');
  var subject;

  describe("forward", function(){
    var world;

    beforeEach(function(){
      world = {width: 100, height: 100};
    });

    describe ("when heading north", function() {
      it ("advances forward one space", function() {
        subject = new Coordinate({x: 100, y: 100, direction: (Math.PI / 2) * -1 });
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(100);
        expect(subject.y).toEqual(99);
      });

      it ("rolls around to the other side of the world", function() {
        subject = new Coordinate({ x: 100, y: 0, direction: (Math.PI / 2) * -1 });
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(100);
        expect(subject.y).toEqual(100);
      });
    });

    describe ("when heading east", function() {
      it ("advances forward one space", function() {
        subject = new Coordinate({x: 50, y: 50, direction: 0});
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(51);
        expect(subject.y).toEqual(50);
      });

      it ("rolls around to the other side of the world", function() {
        subject = new Coordinate({x: 100, y: 100, direction: 0});
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(0);
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

      it ("rolls around to the other side of the world", function() {
        subject = new Coordinate({ x: 0, y: 100, direction: Math.PI });
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(100);
        expect(subject.y).toEqual(100);
      });
    });

    describe ("when heading south", function() {
      it ("advances forward one space", function() {
        subject = new Coordinate({x: 100, y: 50, direction: Math.PI / 2 });
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(100);
        expect(subject.y).toEqual(51);
      });

      it ("rolls around to the other side of the world", function() {
        subject = new Coordinate({ x: 100, y: 100, direction: Math.PI / 2 });
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(100);
        expect(subject.y).toEqual(0);
      });
    });
  });
});
