<?php

require_once("./check_login.php");
if(isset($_GET["id"])){
    $id=$db->real_escape_string($_GET["id"]);
    $query="SELECT * FROM `fundraiser_data` WHERE `ID`=?";
    $data=query($query, [$id])[0];

}else{
    $data=[
        "ID"=>false,
        "name"=>"",
        "goal"=>"",
        "bonus_goal"=>"",
        'start_date'=>"",
        "end_date"=>"",
        "aboutText"=>"",
        "img_url"=>"",
        "multiple"=>1,
        "active"=>false
    ];
}
if(isset($_POST["name"])){
    foreach ($_POST as $key => $value) {
        $$key=$db->real_escape_string($value);
    }
    $active=isset($active)?1:0;
//    echo $active;
    if(isset($_GET["id"])){
        $query = "UPDATE `fundraiser_data` SET `name`=?, `goal`=?, `bonus_goal`=?, `start_date`=?, `end_date`=?, `aboutText`=?, `multiple`=?, `img_url`=?, `active`=? WHERE `ID`=?";
        $params = [$name, $goal, $bonus_goal, $start_date, $end_date, $aboutText, $multiple, $img_url, $active, $id];

    }
    else{
        $query = "INSERT INTO `fundraiser_data` (`name`, `goal`, `bonus_goal`, `start_date`, `end_date`, `aboutText`, `multiple`, `img_url`, `active`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $params = [$name, $goal, $bonus_goal, $start_date, $end_date, $aboutText, $multiple, $img_url, $active];

    }

    query($query, $params);
    header("Location:./");
}
?>
<!DOCTYPE html>
<html>
<head>
    <title><?php if($data['ID']){echo "Edit";}else{echo "Create new";}?> campaign</title>
    <meta charset="utf-8">
</head>
<body>
<div class="container pt-4">
    <?php require("./outline.php");?>
    <div class="row"><h1>CAMPAIGNS</h1></div>
    <form method="post">
        <div class="mb-3">
            <label class="form-label" for="name">Name</label>
            <input class="form-control" type="text" name="name" required value="<?=$data["name"]?>">
        </div><div class="mb-3">
            <label class="form-label" for="goal">Goal</label>
            <input class="form-control" type="number" name="goal" required  value="<?=$data["goal"]?>">
        </div><div class="mb-3">
            <label class="form-label" for="bonus_goal">Bonus Goal</label>
            <input class="form-control" type="number" name="bonus_goal"  value="<?=$data["bonus_goal"]?>">
        </div><div class="mb-3">
            <label class="form-label" for="start_date">Start Date</label>
            <input class="form-control" type="datetime-local" name="start_date" required  value="<?=$data["start_date"]?>">
        </div><div class="mb-3">
            <label class="form-label" for="end_date">End Date</label>
            <input class="form-control" type="datetime-local" name="end_date" required  value="<?=$data["end_date"]?>">
        </div>
        <div class="mb-3">
            <label class="form-label" for="aboutText">About Campaign</label>
            <textarea class="form-control"  name="aboutText"   row="6" ><?=$data["aboutText"]?></textarea>
        </div>
        <div class="mb-3">
            <label class="form-label" for="aboutText">Image Url</label>
            <textarea class="form-control"  name="img_url"   row="6" ><?=$data["img_url"]?></textarea>
        </div>

        <div class="mb-3">
            <label class="form-label" for="multiple">Multiply By:</label>
            <input class="form-control" type="number" name="multiple" min="1" value="<?=$data["multiple"]?>">
        </div><div class="mb-3">
            <label class="form-check-label" for="active">Active</label>
            <input class="form-check-input" type="checkbox" name="active" <?=$data["active"]?"checked":""?>>
        </div><div class="mb-3">
            <button type="submit" class="btn btn-primary">Save</button>
        </div>
    </form>
</div>
</body>
</html>