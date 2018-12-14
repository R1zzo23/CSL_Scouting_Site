<?php

$host="localhost";
$user="root";
$password="";
$db="demo";

mysql_connect($host, $user, $password);
mysql_select_db($db);

if(isset($_POST['username'])){
  $uname=$_POST['username'];
  $password=$_POST['password'];

  $sql="select * from loginform where User='".$uname."' AND Pass='".$password."'
  limit 1";

  $result=mysql_query($sql);

  if(mysql_num_rows($result)==1){
    echo "You have successfull logged in!";
    exit();
  }
  else {
    echo "You have entered incorrect password!";
    exit();
  }
}


?>

<!DOCTYPE HTML>
<html>
  <head>
    <title>Login Form</title>
  </head>
  <body>
    <div class="container">
      <form method="POST" action="#">
        <div class="form_input">
          <input type="text" name="username" placeholder="Enter Username"/>
        </div>
        <div class="form_input">
          <input type="password" name="password" placeholder="Enter Password"/>
        </div>
        <input type="submit" name="submit" value="LOGIN" class="btn-login"/>
      </form>
    </div>
  </body>
</html>
