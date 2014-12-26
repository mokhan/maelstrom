module.exports = {
  keysPressed: {},

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32,
  ENTER: 13,

  isDown: function(keyCode) {
    return this.keysPressed[keyCode];
  },

  onKeydown: function(event) {
    this.keysPressed[event.keyCode] = true;
  },

  onKeyup: function(event) {
    delete this.keysPressed[event.keyCode];
  }
};
