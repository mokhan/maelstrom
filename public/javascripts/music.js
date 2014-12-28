var _ = require('underscore');

function Music(url, window){
  _.bindAll(this, 'run', 'onLoad', 'onError');
  this.url = url;
  this.window = window;
}

Music.prototype.run = function(game) {
  this.window.AudioContext = this.window.AudioContext || this.window.webkitAudioContext;
  this.request = new XMLHttpRequest();
  this.request.open('GET', this.url, true);
  this.request.responseType = 'arraybuffer';
  this.request.onload = this.onLoad;
  this.request.send();
};

Music.prototype.onLoad = function() {
  var context = new AudioContext();
  context.decodeAudioData(this.request.response, function(buffer) {
    var source    = context.createBufferSource(); // creates a sound source
    source.buffer = buffer;                       // tell the source which sound to play
    source.loop = true;
    source.connect(context.destination);          // connect the source to the context's destination
    source.start(0);                              // play the source now
  }, this.onError);
};

Music.prototype.onError = function() {
};

module.exports = Music;
