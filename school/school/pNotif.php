<?php

$jsonString = $_POST['data'];
$class = $_POST['st'];

		$myFile = "students/".$class."/notif.json";
		$fh = fopen($myFile, 'a') or die("can't open file");
		$data = ",".$jsonString;
		fwrite($fh, $data);
		fclose($fh);
   

header('Location:pushClass2.php?alias='.$class.'&msg=New%20message%20received!!');
?>