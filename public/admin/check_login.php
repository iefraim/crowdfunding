<?php
if (!isset($_COOKIE["login"]) || !$_COOKIE["login"]) {
    header("Location: ./login.php");
    exit;
}
require_once("../functions/mysql.php");
?>