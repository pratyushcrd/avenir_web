<?php  //Start the Session

session_start();

 require('connect_st.php');

//3. If the form is submitted or not.

//3.1 If the form is submitted


if (isset($_GET['email']) and isset($_GET['pass'])){



//3.1.1 Assigning posted values to variables.

$email = $_GET['email'];

$pass = $_GET['pass'];

//3.1.2 Checking the values are existing in the database or not

$query = "SELECT * FROM `teachersdb` WHERE email='$email' and pass='$pass'";

  

$result = mysql_query($query) or die(mysql_error());

$count = mysql_num_rows($result);

//3.1.2 If the posted values are equal to the database values, then session will be created for the user.

if ($count == 1){

//$_SESSION['email'] = $email;

while ($row = mysql_fetch_assoc($result)) {
 
   echo "[ {\"email\":\"" . $row['email']."\", \"name\":\"".$row['name']."\", \"location\":\"".$row['location']."\", \"des\":\"".$row['des']."\"}]";
 
	
}

}else{

//3.1.3 If the login credentials doesn't match, he will be shown with an error message.

echo "Invalid Login Credentials.";

}

}

?>
