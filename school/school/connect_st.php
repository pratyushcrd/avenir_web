<?php

@$connection = mysql_connect('localhost', 'prt_crd', 'pratyusH12');

if (!$connection){

    die("Database Connection Failed" . mysql_error());

}

$select_db = mysql_select_db('school1');

if (!$select_db){

    die("Database Selection Failed" . mysql_error());

}

?>