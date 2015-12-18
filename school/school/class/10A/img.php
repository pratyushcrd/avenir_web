<?php
    // Get image string posted from Android App
    $base=$_REQUEST['image'];
    // Get file name posted from Android App
    $filename = $_REQUEST['filename'];
	$tit = $_REQUEST['teacher'];
    // Decode Image
    $binary=base64_decode($base);
    header('Content-Type: bitmap; charset=utf-8');
    // Images will be saved under 'www/imgupload/uplodedimages' folder
    // Create File
	$i=0;
	while(file_exists("img/".$filename)){
		$filename = $i.$filename;
	}
	
	$file = fopen("img/".$filename, 'wb');
	fwrite($file, $binary);
    
	
	$date = date("D M d, Y G:i");
    fclose($file);
	
		$myFile = "gallery.json";
		$fh = fopen($myFile, 'a') or die("can't open file");
		$arr = array("text"=>$date,"title"=>$tit,"url"=>"img/".$filename);
		$data = json_encode($arr);
		$data = ",".$data;
		fwrite($fh, $data);
	
	
    echo 'success';
?>