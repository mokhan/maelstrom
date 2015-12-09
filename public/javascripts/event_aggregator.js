var _ = require('underscore');

function EventAggregator(){
  _.bindAll(this, 'subscribe', 'publish');
  this.subscribers = {};
};

EventAggregator.prototype.subscribe = function(event, subscriber) {
  this.subscribers[event] = this.subscribers[event] || [];
  this.subscribers[event].push(subscriber);
}

EventAggregator.prototype.publish = function(event, message) {
  _.each(this.subscribers[event], function(subscriber){
    subscriber(message);
  });
}

module.exports = EventAggregator;
