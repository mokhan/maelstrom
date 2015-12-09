describe("EventAggregator", function(){
  var EventAggregator = require('../public/javascripts/event_aggregator.js');
  var subject;

  beforeEach(function(){
    subject = new EventAggregator();
  });

  describe ("publish", function() {
    it ("notifies all subscribers", function() {
      called = false;
      subject.subscribe(function(message){
        called = message;
      });

      subject.publish('hello');
      expect(called).toEqual('hello');
    });
  });
})
