var Keyboard = {
  _pressed: {},

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32,

  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },

  onKeydown: function(event) {
    console.log('key down ' + event.keyCode);
    this._pressed[event.keyCode] = true;
  },

  onKeyup: function(event) {
    console.log('key up ' + event.keyCode);
    delete this._pressed[event.keyCode];
  }
};

module.exports = Keyboard;
