module.exports = {
  explosion: 'audio/explode.wav',
  laser: 'audio/laser.wav',
  smash: 'audio/smash.wav',
  play: function(sound){
    new Audio(sound).play();
  }
};
