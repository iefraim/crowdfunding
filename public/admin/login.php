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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    </head>
    <body>
    <div class="container pt-4" > 
<h2 >Login</h2>
        <form method="post">
            <input type="password" name="password" class="form-control" required>
            <div class="form-row  mt-4">
            <button type="submit">Login</button>
                <?php if(isset($_POST["password"])){?>
                <div class="alert alert-danger mt-2" role="alert">
                    Wrong password
                </div>
                <?php }?>
            </div>
        </form>
        <div>
    </body>
</html>