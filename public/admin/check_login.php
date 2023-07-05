<?php
if(!isset($_COOKIE["login"])||!$_COOKIE["login"])
header("Location:./login.php");
require_once("../functions/mysql.php");

//TODO: add check login