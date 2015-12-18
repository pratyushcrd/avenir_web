<?php  //Start the Session

session_start();

 require('connect_st.php');

//3. If the form is submitted or not.

//3.1 If the form is submitted


if (isset($_GET['stid']) and isset($_GET['pass'])){


$stid = $_GET['stid'];

$pass = $_GET['pass'];

//3.1.2 Checking the values are existing in the database or not

$query = "SELECT * FROM `studentsdb` WHERE stid='$stid' and pass='$pass' order by `roll`";
}
elseif (isset($_GET['class']) and isset($_GET['section'])){
 $class = $_GET['class'];
 $section = $_GET['section'];
$query = "SELECT * FROM `studentsdb` WHERE class='$class' and section='$section' order by `roll`"; 
}

$result = mysql_query($query) or die(mysql_error());

$count = mysql_num_rows($result);

//3.1.2 If the posted values are equal to the database values, then session will be created for the user.

if ($count == 1||(isset($_GET['class']) and isset($_GET['section']))){

//$_SESSION['stid'] = $stid;

echo "[";
$wh_count = 0;
while ($row = mysql_fetch_assoc($result)) {
 
 	if($wh_count>0)
	echo ",";
	
   echo "{\"stid\":\"" . $row['stid']."\", \"name\":\"".$row['name']."\", \"dob\":\"".$row['dob']."\", \"doa\":\"".$row['doa']
   ."\", \"father\":\"".$row['father']."\", \"mother\":\"".$row['mother']."\", \"class\":\"".$row['class']."\", \"registration\":\"".$row['reg']."\", \"location\":\"".$row['location']."\", \"phone\":\"".$row['phone']."\", \"email\":\"".$row['email']."\", \"section\":\"".$row['section']."\", \"roll\":\"".$row['roll']."\"}";
 
 $wh_count++;
	
}

echo "]";
}else{

//3.1.3 If the login credentials doesn't match, he will be shown with an error message.

echo "Invalid Login Credentials.";

}



?>
