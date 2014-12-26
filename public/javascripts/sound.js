module.exports = {
  explosion: 'audio/explode.wav',
  laser: 'audio/laser.wav',
  play: function(sound){
    new Audio(sound).play();
  }
};
