<?php

require_once("../functions/mysql.php");

var_dump($_POST);

foreach ($_POST as $key => $value) {
    $$key=$db->real_escape_string($value);
}

$adultnames=$adultnames===""?"$firstname $lastname":$adultnames;

$query="INSERT INTO `donations` (`amount`,`first_name`,`last_name`,`shown_name`,`adress`,`city`,`state`,`zip`,`phone`,`email`,`comment`,`teamID`) VALUES ('$amount','$firstname','$lastname','$adultnames','$address','$city','$state','$zip','$phone','$email','$notes','$team')";

echo $query;

query($query);

// mail($email,"thank you","thank you for your donation!",[
//     "From"=>"efraimf.task@gmail.com"
// ]);
//can't set up on localhost