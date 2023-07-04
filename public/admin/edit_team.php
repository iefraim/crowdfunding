<?php 
require_once("./check_login.php");
if(isset($_GET["id"])){
    $id=$db->real_escape_string($_GET["id"]);
    $query="SELECT * FROM `teams` WHERE `id`=$id";
    $data=query($query)[0];
}else{
    $data=[
        "ID"=>false,
        "name"=>"",
        "goal"=>"",
        "link"=>""
    ];
}

if(isset($_POST["name"])){
    foreach ($_POST as $key => $value) {
        $$key=$db->real_escape_string($value);
    }
    if(isset($_GET["id"])){
        $query="UPDATE `teams` SET `name`='$name',`goal`='$goal',`link`='$link' WHERE `id`=$id";
    }
    else{
        $query="INSERT INTO `teams` (`name`,`goal`,`link`) VALUES ('$name','$goal','$link' )";
    }
    query($query);
    header("Location:./teams.php");
}
?>

<!DOCTYPE html>
<html>
    <head>
        <title><?php if($data['ID']){echo "Edit";}else{echo "Add";}?> team</title>
        <meta charset="utf-8"> 
           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
    <div class="container pt-4" > 
            <div class="row"><h1>EDIT DONATION</h1></div>
    <form method="post">
    <div class="mb-3">
            <label for="name"  class="form-label">Name</label>
            <input type="text" class="form-control" name="name" required value="<?=$data["name"]?>">           </div><div class="mb-3">  
            <label for="goal" class="form-label">Goal</label>
            <input type="number" class="form-control" name="goal" required value="<?=$data["goal"]?>">           </div><div class="mb-3">  
            <label for="name" class="form-label">Link</label>
            <input type="text" class="form-control" name="link" required value="<?=$data["link"]?>">           </div><div class="mb-3">  
            <button type="submit" class="btn btn-primary">Save</button>           </div> 
        </form>
    </div>
    </body>
</html>