<?php
require_once("./check_login.php");
if(!isset($_POST["id"])||!isset($_POST["table"]))die;
$id=$db->real_escape_string($_POST["id"]);
$table=$db->real_escape_string($_POST["table"]);
$query="DELETE FROM `$table` WHERE `ID`=$id";
query($query);