if (Meteor.isClient) {
  // counter starts at 0


  var counterDict = new ReactiveDict();
  counterDict.set("counter", 0)

  Template.hello.helpers({
    counter: function () {
      var count = counterDict.get("counter");
      return count;
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      counterDict.set("counter", counterDict.get("counter") + 1)
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
