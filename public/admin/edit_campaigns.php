<?php 
require_once("./check_login.php");
if(isset($_GET["id"])){
    $id=$db->real_escape_string($_GET["id"]);
    $query="SELECT * FROM `fundraiser_data` WHERE `ID`=$id";
    $data=query($query)[0];
}else{
    $data=[
        "ID"=>false,
        "name"=>"",
        "goal"=>"",
        "bonus_goal"=>"",
        'start_date'=>"",
        "end_date"=>""
    ];
}
if(isset($_POST["name"])){
    foreach ($_POST as $key => $value) {
        $$key=$db->real_escape_string($value);
    }
    if(isset($_GET["id"])){
        $query="UPDATE `fundraiser_data` SET `name`='$name',`goal`='$goal',`bonus_goal`='$bonus_goal',`start_date`='$start_date',`end_date`='$end_date' WHERE `ID`=$id";
    }
    else{
        $query="INSERT INTO `fundraiser_data` (`name`,`goal`,`bonus_goal`,`start_date`,`end_date`) VALUES ('$name','$goal','$bonus_goal','$start_date','$end_date' )";
    }
    query($query);
    header("Location:./campaigns.php");
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title><?php if($data['id']){echo "Edit";}else{echo "Create new";}?> campaign</title>
        <meta charset="utf-8">
    </head>
    <body>
        <?php require("./outline.php");?>
        <form method="post">
            <label for="name">Name</label>
            <input type="text" name="name" required value="<?=$data["name"]?>">
            <label for="goal">Goal</label>
            <input type="number" name="goal" required  value="<?=$data["goal"]?>">
            <label for="bonus_goal">Bonus Goal</label>
            <input type="number" name="bonus_goal"  value="<?=$data["bonus_goal"]?>">
            <label for="start_date">Start Date</label>
            <input type="datetime-local" name="start_date" required  value="<?=$data["start_date"]?>">
            <label for="end_date">End Date</label>
            <input type="datetime-local" name="end_date" required  value="<?=$data["end_date"]?>">
            <button type="submit">Save</button>
        </form>
    </body>
</html>