describe("EventAggregator", function(){
  var EventAggregator = require('../public/javascripts/event_aggregator.js');
  var subject;

  beforeEach(function(){
    subject = new EventAggregator();
  });

  describe ("publish", function() {
    it ("notifies all subscribers", function() {
      called = false;
      subject.subscribe('greeting', function(message){
        called = message;
      });

      subject.publish('greeting', 'hello');
      expect(called).toEqual('hello');
    });

    it ("does not notify subscribers for a different event", function() {
      called = false;
      subject.subscribe('other', function(message){
        called = message;
      });

      subject.publish('greeting', 'hello');
      expect(called).toEqual(false);
    });
  });
})
