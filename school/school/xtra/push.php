<?php
	
// Push The notification with parameters
require_once('PushBots.class.php');
$pb = new PushBots();
// Application ID
$appID = '551297791d0ab1af678b4570';
// Application Secret
$appSecret = '51f382e4ad766754903460b652499c00';
$pb->App($appID, $appSecret);
 
// Notification Settings
$pb->Alert("New Notifications received!");
$pb->Platform(array(0,1));

$pb->Push();
?>