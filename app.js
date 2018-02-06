// global variables



$(document).ready(function() {
  
});

function logInToDashboard() {
  var userName = document.getElementById('uname').value;
  var password = document.getElementById('pwd').value;

  if (userName == "R1zzo23" && password == "jordan"){
    window.open("https://r1zzo23.github.io/CSL_Scouting_Site/dashboard.html");
  }
  else {
    alert("Username and password do not match our records. Please try again.");
  }
}

function createUser(userName) {

}
