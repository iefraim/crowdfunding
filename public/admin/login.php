<?php
if(isset($_POST["password"])&& $_POST["password"]=="1234"){
    setcookie("login","true");
    header("Location:./index.php");
}
if(isset($_COOKIE["login"])&&$_COOKIE["login"]==="true")
header("Location:./index.php");
require_once("../functions/mysql.php");
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <meta charset="utf-8">
    </head>
    <body>
        <form method="post">
            <input type="password" name="password">
            <button type="submit">Login</button>
        </form>
    </body>
</html>