function Music(url, window){
  _.bindAll(this, 'run');
  this.url = url;
  this.window = window;
}

Music.prototype.run = function(game) {
  this.window.AudioContext = this.window.AudioContext || this.window.webkitAudioContext;
  var context = new AudioContext();
  var onError = function(){};
  var request = new XMLHttpRequest();
  request.open('GET', this.url, true);
  request.responseType = 'arraybuffer';

  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      var source    = context.createBufferSource(); // creates a sound source
      source.buffer = buffer;                       // tell the source which sound to play
      source.loop = true;
      source.connect(context.destination);          // connect the source to the context's destination
      source.start(0);                              // play the source now
    }, onError);
  };
  request.send();
};

module.exports = Music;
