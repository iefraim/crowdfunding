<?php 
require_once("./check_login.php");
if(isset($_GET["id"])){
$id=$db->real_escape_string($_GET["id"]);
$data=query("SELECT * FROM `donations` WHERE `id`=$id")[0];
}else $data=["first_name"=>"",
"last_name"=>"",
"shown_name"=>"",
"amount"=>"",
"multiple"=>"",
"teamID"=>"",
"comment"=>"",
"email"=>"",
"phone"=>"",
"adress"=>"",
"city"=>"",
"state"=>"",
"zip"=>"",
"paytype"=>"",
"campaign_id"=>""];

$teams=query("SELECT * FROM `teams`");
$campaigns=query("SELECT * FROM `fundraiser_data`");


if(isset($_POST["firstName"])){
    foreach ($_POST as $key => $value) {
        $$key=$db->real_escape_string($value);
        if(!$$key)$$key="";
    }
    if(!$shownName)$shownName="$firstName $lastName";

    if ($paytype == "Pledge" or $paytype == 'Pay Later')  { $paid = 0; } else  { $paid = 1; }
    $updateQuery="UPDATE `donations` SET `first_name`='$firstName', `last_name`='$lastName',`shown_name`='$shownName',`amount`='$amount',`multiple`=$multiple,`teamId`=$team,`comment`='$note',`email`='$email',`phone`='$phone',`adress`='$adress',`city`='$city',`state`='$state',`zip`='$zip', `campaign_id`='$campaign', `paytype`='$paytype' , `paid` = $paid WHERE `ID`=$id";
    $insertQuery="INSERT INTO `donations` (`first_name`,`last_name`,`shown_name`,`amount`,`multiple`,`teamId`,`comment`,`email`,`phone`,`adress`,`city`,`state`,`zip`,`campaign_id`, `paytype`, `paid`) VALUES ('$firstName','$lastName','$shownName','$amount','$multiple',$team,'$note','$email','$phone','$adress','$city','$state','$zip',$campaign, '$paytype', $paid"  ;
    if($data["first_name"])query($updateQuery);
    else query($insertQuery);
     header("Location:./donations.php");
}

?>
<!DOCTYPE html>
<html>
    <head>
        <title> Donation</title>
        <meta charset="utf-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
        <div class="container pt-4" > 
        <?php require("./outline.php");?>
            <div class="row"><h1> DONATION</h1></div>
        <form method="post">

      
  <div class="mb-3">
            <label for="firstName" class="form-label"> First Name</label>
            <input name="firstName"  class="form-control" type="text" value="<?=$data["first_name"]?>">
            </div><div class="mb-3">  
            <label for="lastName"  class="form-label" >Last Name</label>
            <input name="lastName"   class="form-control"type="text" value="<?=$data["last_name"]?>">    </div><div class="mb-3">  
            <label for="shownName"  class="form-label" >Shown Name</label>
            <input name="shownName"   class="form-control" type="text" value="<?=$data["shown_name"]?>">    </div><div class="mb-3">  
            <label for="amount"  class="form-label" >Donation Amount</label>
            <input name="amount"  class="form-control" type="number" value="<?=$data["amount"]?>">    </div>
            <div class="mb-3">  
            <label for="team"  class="form-label" >Team</label>
            <select name="team"  class="form-control">
                <?php foreach ($teams as  $value) {?>
                        <option value="<?=$value["ID"]?>" <?= $data["teamID"]==$value["ID"]?"selected":""?>><?=$value["name"]?></option>
                    <?php }?>
            </select>    </div>
            
            <div class="mb-3">  
                <label for="campaign">Campaign</label>
            <select name="campaign">
                <?php
                    foreach ($campaigns as $campaign ) {?>
                        <option value=<?=$campaign["ID"]?> 
                        <?=$campaign["ID"]==$data["campaign_id"]?"selected":""?>><?=$campaign["name"]?></option>
                    <?php }?>
            </select>
            </div>
            
            
            <div class="mb-3">  

            <label for="note"  class="form-label" >Note</label>
            <input name="note"  class="form-control" type="text" value="<?=$data["comment"]?>">    </div>
            
            
            <div class="mb-3">  
            <label for="email"  class="form-label" >Email</label>
            <input name="email"  class="form-control" type="email" value="<?=$data["email"]?>">    </div><div class="mb-3">  
            <label for="phone" class="form-label" >Phone #</label>
            <input name="phone"  class="form-control" type="number" value="<?=$data["phone"]?>">    </div><div class="mb-3">  
            <label for="adress"  class="form-label" >Adress</label>
            <input name="adress" class="form-control" type="text" value="<?=$data["adress"]?>">    </div><div class="mb-3">  
            <label for="city"  class="form-label" >City</label>
            <input name="city"  class="form-control" type="text" value="<?=$data["city"]?>">    </div><div class="mb-3">  
            <label for="state"  class="form-label" >State</label>
            <input name="state"  class="form-control" type="text" value="<?=$data["state"]?>">    </div><div class="mb-3">  
            <label for="zip"  class="form-label" >Zip Code</label>
            <input name="zip" class="form-control"  type="number" value="<?=$data["zip"]?>">    </div>
            
            <div class="mb-3">  
            <label for="paytype"  class="form-label" >Pay Type</label>
            <select name="paytype"  class="form-control">
<option value=""></option>
<option  >Cash</option>
<option  >Check</option>
<option  >Credit Card</option>
<option  >Pledge</option>
<option  >Pay Later</option>

<option  >Zelle</option>

            </select>    </div>
            <div class="mb-3">  
            <button type="submit" class="btn btn-primary">Save</button>
  </div>
        </form>
        </div>
    </body>
</html>