<?php

$jsonString = $_POST['data'];

$jsonArr = json_decode($jsonString, true);

while($item = array_shift($jsonArr))
{
		$myFile = "students/".$item['reg']."/att.json";
		$fh = fopen($myFile, 'a') or die("can't open file");
		$arr = array("y"=>$item['y'],"m"=>$item['m'],"d"=>$item['d'],"a"=>$item['att']);
		$data = json_encode($arr);
		$data = ",".$data;
		fwrite($fh, $data);
		$class = $item['c'];
		fclose($fh);
   
}
header('Location:pushClass.php?class='.$class.'&msg=Attendance%20done%20for%20today!!');
?>