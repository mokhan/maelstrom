module.exports = {
  monster: 'img/spider.gif',
  rocketship: 'img/rocketship.png',
  explosion: 'img/explosion.gif',
  laser: 'img/laser.gif',
  load: function(uri){
    var image = new Image(32, 32);
    image.src = uri;
    return image;
  },
};
