<?php

require_once("../functions/mysql.php");

// var_dump($_POST);

foreach ($_POST as $key => $value) {
    $$key=$db->real_escape_string($value);
}
if($firstname==="test")die( "bad first name");//TODO:insert validtor here
if (!is_numeric($amount) || $amount <=0 ) die("invalid amount");

$shownname=$shownname===""?"$firstname $lastname":$shownname;
//TODO clean string
$query="INSERT INTO `donations` (`amount`,`first_name`,`last_name`,`shown_name`,`adress`,`city`,`state`,`zip`,`phone`,`email`,`comment`,`teamID`,`campaign_id`,`multiple`) VALUES ('$amount','$firstname','$lastname','$shownname','$address','$city','$state','$zip','$phone','$email','$notes','$team',$campaignId,$multiple)";


query($query);
//TODO: fix email
// mail($email,"thank you","thank you for your donation!",[
//     "From"=>"efraimf.task@gmail.com"
// ]);


//can't set up on localhost