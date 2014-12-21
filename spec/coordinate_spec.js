describe("Coordinate", function(){
  var Coordinate = require('../js/coordinate.js');
  var Heading = require('../js/heading.js');
  var subject;

  describe("forward", function() {
    var world;

    beforeEach(function(){
      world = { width: 100, height: 100 };
    });

    describe ("when heading north", function() {
      it ("advances forward one space", function() {
        subject = new Coordinate({x: 100, y: 100, direction: Heading.NORTH, speed: 1 });

        result = subject.moveForward(world);
        expect(result.x).toEqual(100);
        expect(result.y).toEqual(99);
      });

      it ("rolls around to the other side of the world", function() {
        subject = new Coordinate({ x: 0, y: 0, direction: Heading.NORTH, speed: 1 });
        result = subject.moveForward(world);

        expect(result.x).toEqual(0);
        expect(result.y).toEqual(world.height);
      });
    });

    describe ("when heading east", function() {
      it ("advances forward one space", function() {
        subject = new Coordinate({x: 50, y: 50, direction: Heading.EAST, speed: 1});
        result = subject.moveForward(world);
        expect(result.x).toEqual(51);
        expect(result.y).toEqual(50);
      });

      it ("rolls around to the other side of the world", function() {
        subject = new Coordinate({x: world.width, y: 0, direction: Heading.EAST, speed: 1});
        result = subject.moveForward(world);

        expect(result.x).toEqual(0);
        expect(result.y).toEqual(0);
      });
    });

    describe ("when heading west", function() {
      it ("advances forward one space", function() {
        subject = new Coordinate({x: 100, y: 100, direction: Heading.WEST, speed: 1 });
        result = subject.moveForward(world);

        expect(result.x).toEqual(99);
        expect(result.y).toEqual(100);
      });

      it ("rolls around to the other side of the world", function() {
        subject = new Coordinate({ x: 0, y: 0, direction: Heading.WEST, speed: 1 });
        result = subject.moveForward(world);

        expect(result.x).toEqual(world.width);
        expect(result.y).toEqual(0);
      });
    });

    describe ("when heading south", function() {
      it ("advances forward one space", function() {
        subject = new Coordinate({x: 100, y: 50, direction: Heading.SOUTH, speed: 1});

        result = subject.moveForward(world);

        expect(result.x).toEqual(100);
        expect(result.y).toEqual(51);
      });

      it ("rolls around to the other side of the world", function() {
        subject = new Coordinate({ x: 0, y: 100, direction: Heading.SOUTH, speed: 1 });

        result = subject.moveForward(world);

        expect(result.x).toEqual(0);
        expect(result.y).toEqual(0);
      });
    });
  });

  describe ("moveLeft", function() {
    var world;

    beforeEach(function(){
      world = { width: 100, height: 100 };
    });

    describe ("heading NORTH", function() {
      it ("moves to the left", function() {
        subject = new Coordinate({ x: 50, y: 50, direction: Heading.NORTH, speed: 1 });
        result = subject.moveLeft(world);

        expect(result.direction).toEqual(Heading.NORTH);
        expect(result.x).toEqual(49);
        expect(result.y).toEqual(50);
      });
    });

    describe ("heading SOUTH", function() {
      it ("moves to the left", function() {
        subject = new Coordinate({ x: 50, y: 50, direction: Heading.SOUTH, speed: 1 });
        result = subject.moveLeft(world);

        expect(result.direction).toEqual(Heading.SOUTH);
        expect(result.x).toEqual(51);
        expect(result.y).toEqual(50);
      });
    });

    describe ("heading EAST", function() {
      it ("moves to the left", function() {
        subject = new Coordinate({ x: 50, y: 50, direction: Heading.EAST, speed: 1 });
        result = subject.moveLeft(world);

        expect(result.direction).toEqual(Heading.EAST);
        expect(result.x).toEqual(50);
        expect(result.y).toEqual(49);
      });
    });

    describe ("heading WEST", function() {
      it ("moves to the left", function() {
        subject = new Coordinate({ x: 50, y: 50, direction: Heading.WEST, speed: 1 });
        result = subject.moveLeft(world);

        expect(result.direction).toEqual(Heading.WEST);
        expect(result.x).toEqual(50);
        expect(result.y).toEqual(51);
      });
    });
  });

  describe ("moveRight", function() {
    var world;

    beforeEach(function(){
      world = { width: 100, height: 100 };
    });

    describe("heading NORTH", function(){
      it ("moves to the right", function() {
        subject = new Coordinate({ x: 50, y: 50, direction: Heading.NORTH, speed: 1 });
        result = subject.moveRight(world);

        expect(result.direction).toEqual(Heading.NORTH);
        expect(result.x).toEqual(51);
        expect(result.y).toEqual(50);
      });
    });

    describe("heading EAST", function(){
      it ("moves to the right", function() {
        subject = new Coordinate({ x: 50, y: 50, direction: Heading.EAST, speed: 1 });
        result = subject.moveRight(world);

        expect(result.direction).toEqual(Heading.EAST);
        expect(result.x).toEqual(50);
        expect(result.y).toEqual(51);
      });
    });

    describe("heading SOUTH", function(){
      it ("moves to the right", function() {
        subject = new Coordinate({ x: 50, y: 50, direction: Heading.SOUTH, speed: 1 });
        result = subject.moveRight(world);

        expect(result.direction).toEqual(Heading.SOUTH);
        expect(result.x).toEqual(49);
        expect(result.y).toEqual(50);
      });
    });

    describe("heading WEST", function(){
      it ("moves to the right", function() {
        subject = new Coordinate({ x: 50, y: 50, direction: Heading.WEST, speed: 1 });
        result = subject.moveRight(world);

        expect(result.direction).toEqual(Heading.WEST);
        expect(result.x).toEqual(50);
        expect(result.y).toEqual(49);
      });
    });
  });
});
