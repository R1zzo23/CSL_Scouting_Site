var main = function () {
  "use strict";

  var userList = [
    { "username" : "Rizzo", "password" : "jordan", "rank" : "admin" },
    { "username" : "Kyrus", "password" : "houston",  "rank" : "admin" },
    { "username" : "Dennis", "password" : "boston", "rank" : "manager" },
    { "username" : "Jon", "password" : "detroit", "rank" : "manager" },
    { "username" : "Sun Scorched", "password" : "phoenix", "rank" : "manager" }
  ];

  /*$.getJSON("users.json", function (users) {
    // create an array element
    var userList = [];
    // add each user from .json file to the array
    users.forEach(function (user) {
      userList.push(user);
    });
  });*/

  $( "#login" ).click(function() {
    for (var i = 0; i < userList.length; i++) {
      if ($('#user').val() === userList[i].username){
        if ($('#password').val() === userList[i].password) {
          console.log("Successful login! Welcome " + $('#user').val() + "!");
        }
        else console.log("Password is incorrect!");
      }
    }
  });
};

$(document).ready(main);
