if (Meteor.isClient) {
  // counter starts at 0
  var counter =-1;

  var count = new Deps.Dependency();

  Template.hello.helpers({
    counter: function () {
      count.depend()
      counter += 1;
      return  counter;
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      count.changed();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
