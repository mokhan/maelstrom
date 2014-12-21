describe("Coordinate", function(){
  var Coordinate = require('../js/coordinate.js');
  var NORTH = (Math.PI / 2) * - 1;
  var SOUTH = 0;
  var WEST = Math.PI;
  var EAST = 0;
  var subject;

  describe("forward", function() {
    var world;

    beforeEach(function(){
      world = { width: 100, height: 100 };
    });

    describe ("when heading north", function() {
      it ("advances forward one space", function() {
        subject = new Coordinate({x: 100, y: 100, direction: NORTH });
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(100);
        expect(subject.y).toEqual(99);
      });

      it ("rolls around to the other side of the world", function() {
        subject = new Coordinate({ x: 100, y: 0, direction: NORTH });
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(100);
        expect(subject.y).toEqual(100);
      });
    });

    describe ("when heading east", function() {
      it ("advances forward one space", function() {
        subject = new Coordinate({x: 50, y: 50, direction: EAST});
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(51);
        expect(subject.y).toEqual(50);
      });

      it ("rolls around to the other side of the world", function() {
        subject = new Coordinate({x: 100, y: 100, direction: EAST});
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(0);
        expect(subject.y).toEqual(100);
      });
    });

    describe ("when heading west", function() {
      it ("advances forward one space", function() {
        subject = new Coordinate({x: 100, y: 100, direction: WEST });
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(99);
        expect(subject.y).toEqual(100);
      });

      it ("rolls around to the other side of the world", function() {
        subject = new Coordinate({ x: 0, y: 100, direction: WEST });
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(100);
        expect(subject.y).toEqual(100);
      });
    });

    describe ("when heading south", function() {
      var SOUTH = Math.PI / 2;
      it ("advances forward one space", function() {
        subject = new Coordinate({x: 100, y: 50, direction: SOUTH });
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(100);
        expect(subject.y).toEqual(51);
      });

      it ("rolls around to the other side of the world", function() {
        subject = new Coordinate({ x: 100, y: 100, direction: SOUTH });
        speed = 1;

        subject.forward(world, speed);

        expect(subject.x).toEqual(100);
        expect(subject.y).toEqual(0);
      });
    });
  });

  describe ("rotateLeft", function() {
    var world;

    beforeEach(function(){
      world = { width: 100, height: 100 };
    });

    it ("rotates to the left", function() {
      subject = new Coordinate({ x: 50, y: 50, direction: SOUTH });
      speed = 1;
      subject.rotateLeft(world, speed);

      expect(subject.direction).toEqual(-0.03);
      expect(subject.x).toEqual(50);
      expect(subject.y).toEqual(50);
    });
  });

  describe ("rotateRight", function() {
    var world;

    beforeEach(function(){
      world = { width: 100, height: 100 };
    });

    it ("rotates to the right", function() {
      subject = new Coordinate({ x: 50, y: 50, direction: SOUTH });
      speed = 1;
      subject.rotateRight(world, speed);

      expect(subject.direction).toEqual(0.03);
      expect(subject.x).toEqual(50);
      expect(subject.y).toEqual(50);
    });
  });
});
