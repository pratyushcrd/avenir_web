<?php

$jsonString = $_POST['data'];
$class = $_POST['class'];

		$myFile = "class/".$class."/notif.json";
		$fh = fopen($myFile, 'a') or die("can't open file");
		$data = ",".$jsonString;
		fwrite($fh, $data);
		fclose($fh);
   

header('Location:pushClass.php?class='.$class.'&msg=New%20class%20notification%20received!!');
?>