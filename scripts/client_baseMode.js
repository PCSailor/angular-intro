var phirePhiterApp = angular.module('PhirePhiterApp', []);
phirePhiterApp.controller('PhirePhiterController', function(){
  console.log('PhirePhiter controller loaded');
  var self = this; // holds the value of this
  console.log(this);
  self.newPerson = {};
  self.people = [
    {
      firstName: "Luke",
      lastName: "Schlangen",
      git_username: "LukeSchlangen",
      shoutout: "Thanks for being awesome during the angular lecture today."
    }
  ];
  self.createPerson = function(){
    console.log(self.newPerson);
    self.people.push(angular.copy(self.newPerson));
  };
});
