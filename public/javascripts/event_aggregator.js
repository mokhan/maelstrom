var _ = require('underscore');

function EventAggregator(){
  _.bindAll(this, 'subscribe', 'publish');
  this.subscribers = [];
};

EventAggregator.prototype.subscribe = function(subscriber) {
  this.subscribers.push(subscriber);
}

EventAggregator.prototype.publish = function(message) {
  _.each(this.subscribers, function(subscriber){
    subscriber(message);
  });
}

module.exports = EventAggregator;
