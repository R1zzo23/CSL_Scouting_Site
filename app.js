// global variables



$(document).ready(function() {
  /*var select = document.getElementById("selectTeam");
  var teamList = ["Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets"];

  for(var i = 0; i < teamList.length; i++) {
    var opt = teamList[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }​*/
});

function logInToDashboard() {
  var userName = document.getElementById('uname').value;
  var password = document.getElementById('pwd').value;

  if (userName == "R1zzo23" && password == "jordan"){
    window.open("https://r1zzo23.github.io/CSL_Scouting_Site/dashboard.html");
  }
}
