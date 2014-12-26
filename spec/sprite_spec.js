describe("Sprite", function(){
  var Sprite = require('../public/javascripts/sprite.js');
  var Heading = require('../public/javascripts/heading.js');
  var Images = require('../public/javascripts/images.js');
  var Sound = require('../public/javascripts/sound.js');
  var subject;

  describe("forward", function() {
    var world;

    beforeEach(function(){
      world = { width: 100, height: 100 };
    });

    describe ("when heading north", function() {
      it ("advances forward one space", function() {
        subject = new Sprite({x: 100, y: 100, heading: Heading.NORTH, speed: 1 });

        var result = subject.moveForward(world);
        expect(result.x).toEqual(100);
        expect(result.y).toEqual(99);
      });

      it ("rolls around to the other side of the world", function() {
        subject = new Sprite({ x: 0, y: 0, heading: Heading.NORTH, speed: 1 });
        var result = subject.moveForward(world);

        expect(result.x).toEqual(0);
        expect(result.y).toEqual(world.height);
      });
    });

    describe ("when heading east", function() {
      it ("advances forward one space", function() {
        subject = new Sprite({x: 50, y: 50, heading: Heading.EAST, speed: 1});
        var result = subject.moveForward(world);
        expect(result.x).toEqual(51);
        expect(result.y).toEqual(50);
      });

      it ("rolls around to the other side of the world", function() {
        subject = new Sprite({x: world.width, y: 0, heading: Heading.EAST, speed: 1});
        var result = subject.moveForward(world);

        expect(result.x).toEqual(0);
        expect(result.y).toEqual(0);
      });
    });

    describe ("when heading west", function() {
      it ("advances forward one space", function() {
        subject = new Sprite({x: 100, y: 100, heading: Heading.WEST, speed: 1 });
        var result = subject.moveForward(world);

        expect(result.x).toEqual(99);
        expect(result.y).toEqual(100);
      });

      it ("rolls around to the other side of the world", function() {
        subject = new Sprite({ x: 0, y: 0, heading: Heading.WEST, speed: 1 });
        var result = subject.moveForward(world);

        expect(result.x).toEqual(world.width);
        expect(result.y).toEqual(0);
      });
    });

    describe ("when heading south", function() {
      it ("advances forward one space", function() {
        subject = new Sprite({x: 100, y: 50, heading: Heading.SOUTH, speed: 1});

        var result = subject.moveForward(world);

        expect(result.x).toEqual(100);
        expect(result.y).toEqual(51);
      });

      it ("rolls around to the other side of the world", function() {
        subject = new Sprite({ x: 0, y: 100, heading: Heading.SOUTH, speed: 1 });

        var result = subject.moveForward(world);

        expect(result.x).toEqual(0);
        expect(result.y).toEqual(0);
      });
    });
  });

  describe ("moveBack", function() {
    var world;

    beforeEach(function(){
      world = { width: 100, height: 100 };
    });

    describe ("heading NORTH", function() {
      it ("moves south one space", function() {
        subject = new Sprite({ x: 50, y: 50, heading: Heading.NORTH, speed: 1 });
        var result = subject.moveBack(world);

        expect(result.heading).toEqual(Heading.NORTH);
        expect(result.x).toEqual(50);
        expect(result.y).toEqual(51);
      });
    });

    describe ("heading SOUTH", function() {
      it ("moves north one space", function() {
        var world = { width: 100, height: 100 };
        subject = new Sprite({ x: 50, y: 50, heading: Heading.SOUTH, speed: 1 });
        var result = subject.moveBack(world);

        expect(result.heading).toEqual(Heading.SOUTH);
        expect(result.x).toEqual(50);
        expect(result.y).toEqual(49);
      });
    });

    describe ("heading EAST", function() {
      it ("moves west one space", function() {
        subject = new Sprite({ x: 50, y: 50, heading: Heading.EAST, speed: 1 });
        var result = subject.moveBack(world);

        expect(result.heading).toEqual(Heading.EAST);
        expect(result.x).toEqual(49);
        expect(result.y).toEqual(50);
      });
    });

    describe ("heading WEST", function() {
      it ("moves west one space", function() {
        subject = new Sprite({ x: 50, y: 50, heading: Heading.WEST, speed: 1 });
        var result = subject.moveBack(world);

        expect(result.heading).toEqual(Heading.WEST);
        expect(result.x).toEqual(51);
        expect(result.y).toEqual(50);
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
        subject = new Sprite({ x: 50, y: 50, heading: Heading.NORTH, speed: 1 });
        var result = subject.moveLeft(world);

        expect(result.heading).toEqual(Heading.NORTH);
        expect(result.x).toEqual(49);
        expect(result.y).toEqual(50);
      });
    });

    describe ("heading SOUTH", function() {
      it ("moves to the left", function() {
        subject = new Sprite({ x: 50, y: 50, heading: Heading.SOUTH, speed: 1 });
        var result = subject.moveLeft(world);

        expect(result.heading).toEqual(Heading.SOUTH);
        expect(result.x).toEqual(51);
        expect(result.y).toEqual(50);
      });
    });

    describe ("heading EAST", function() {
      it ("moves to the left", function() {
        subject = new Sprite({ x: 50, y: 50, heading: Heading.EAST, speed: 1 });
        var result = subject.moveLeft(world);

        expect(result.heading).toEqual(Heading.EAST);
        expect(result.x).toEqual(50);
        expect(result.y).toEqual(49);
      });
    });

    describe ("heading WEST", function() {
      it ("moves to the left", function() {
        subject = new Sprite({ x: 50, y: 50, heading: Heading.WEST, speed: 1 });
        var result = subject.moveLeft(world);

        expect(result.heading).toEqual(Heading.WEST);
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
        subject = new Sprite({ x: 50, y: 50, heading: Heading.NORTH, speed: 1 });
        var result = subject.moveRight(world);

        expect(result.heading).toEqual(Heading.NORTH);
        expect(result.x).toEqual(51);
        expect(result.y).toEqual(50);
      });
    });

    describe("heading EAST", function(){
      it ("moves to the right", function() {
        subject = new Sprite({ x: 50, y: 50, heading: Heading.EAST, speed: 1 });
        var result = subject.moveRight(world);

        expect(result.heading).toEqual(Heading.EAST);
        expect(result.x).toEqual(50);
        expect(result.y).toEqual(51);
      });
    });

    describe("heading SOUTH", function(){
      it ("moves to the right", function() {
        subject = new Sprite({ x: 50, y: 50, heading: Heading.SOUTH, speed: 1 });
        var result = subject.moveRight(world);

        expect(result.heading).toEqual(Heading.SOUTH);
        expect(result.x).toEqual(49);
        expect(result.y).toEqual(50);
      });
    });

    describe("heading WEST", function(){
      it ("moves to the right", function() {
        subject = new Sprite({ x: 50, y: 50, heading: Heading.WEST, speed: 1 });
        var result = subject.moveRight(world);

        expect(result.heading).toEqual(Heading.WEST);
        expect(result.x).toEqual(50);
        expect(result.y).toEqual(49);
      });
    });
  });

  describe ("drawOn", function() {
    var image;

    beforeEach(function(){
      image = {};
      subject = new Sprite({ x: 50, y: 50, heading: Heading.WEST, speed: 1, image: image });
    });

    it("draws an image on the canvas", function() {
      var canvas = { drawImage: function(){} };
      spyOn(canvas, 'drawImage');

      subject.drawOn(canvas);

      expect(canvas.drawImage).toHaveBeenCalledWith(image, subject.x, subject.y);
    });
  });

  describe ("location", function() {
    it ("returns the current location", function() {
      var image = { width: 32 };
      var halfOfImageWidth = 16;
      subject = new Sprite({ x: 50, y: 50, heading: Heading.WEST, image: image });

      var result = subject.location();

      expect(result.x).toEqual(subject.x);
      expect(result.y).toEqual(subject.y);
      expect(result.radius).toEqual(halfOfImageWidth);
    });
  });

  describe("chooseRandomHeading", function() {
    it ("chooses a new heading", function() {
      var originalHeading = Heading.random();
      subject = new Sprite({ heading: originalHeading });
      subject.chooseRandomHeading();
      expect(subject.heading).not.toEqual(originalHeading);
    });
  });

  describe ("changeImageTo", function() {
    it("loads the new image", function() {
      var newImage = {};
      spyOn(Images, 'load').and.returnValue(newImage);
      subject = new Sprite({ });

      subject.changeImageTo(Images.explosion);
      expect(subject.image).toEqual(newImage);
    });
  });

  describe ("moveTo", function() {
    var world;

    beforeEach(function(){
      world = {width: 500, height: 500};
      subject = new Sprite({x: 50, y: 50, heading: Heading.NORTH });
    });

    it ("moves the sprite to the new position", function() {
      var result = subject.moveTo(world, 100, 200);
      expect(result.x).toEqual(100);
      expect(result.y).toEqual(200);
    });
  });

  describe ("fire", function() {
    var world;

    beforeEach(function(){
      world = { add: null };
      spyOn(world, 'add');
      spyOn(Images, 'load');
      spyOn(Sound, 'play');
    });

    it('adds a new laser to the world', function(){
      subject.fire(world);
      expect(world.add).toHaveBeenCalled();
    });

    it("plays a sound", function() {
      subject.fire(world);
      expect(Sound.play).toHaveBeenCalledWith(Sound.laser);
    });
  });
});
