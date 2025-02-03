<?php 
require_once("./check_login.php");
if(isset($_GET["id"])){
$id=$db->real_escape_string($_GET["id"]);
$data=query("SELECT * FROM `donations` WHERE `id`=?", [$id])[0];
}else $data=["first_name"=>"",
"last_name"=>"",
"shown_name"=>"",
"amount"=>"",

"teamID"=>"",
"comment"=>"",
"email"=>"",
"phone"=>"",
"address"=>"",
"city"=>"",
"state"=>"",
"zip"=>"",
"paytype"=>"",
"campaign_id"=>""];

$teams=query("SELECT * FROM `teams` order by `name`");
$campaigns=query("SELECT * FROM `fundraiser_data` order by ID desc");


if(isset($_POST["firstName"])){
    foreach ($_POST as $key => $value) {
        $$key=$db->real_escape_string($value);
        if(!$$key)$$key="";
    }
    if(!$shownName)$shownName="$firstName $lastName";

    if ($paytype == "Pledge" or $paytype == 'Pay Later')  { $paid = 0; } else  { $paid = 1; }

    $team =($team ? $team : NULL) ;
    if($data["first_name"])  {

        $updateQuery = "UPDATE `donations` SET `first_name`=?, `last_name`=?, `shown_name`=?, `amount`=?, `teamId`=?, `comment`=?, `email`=?, `phone`=?, `address`=?, `city`=?, `state`=?, `zip`=?, `campaign_id`=?, `paytype`=?, `paid`=? WHERE `ID`=?";
        $params = [$firstName, $lastName, $shownName, $amount, $team, $note, $email, $phone, $address, $city, $state, $zip, $campaign, $paytype, $paid, $id];
        query($updateQuery, $params);

    }    else  {
        $insertQuery = "INSERT INTO `donations` (`first_name`, `last_name`, `shown_name`, `amount`, `teamId`, `comment`, `email`, `phone`, `address`, `city`, `state`, `zip`, `campaign_id`, `paytype`, `paid`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $params = [$firstName, $lastName, $shownName, $amount, $team, $note, $email, $phone, $address, $city, $state, $zip, $campaign, $paytype, $paid];
        query($insertQuery, $params);
    };
      
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
            <input name="firstName"  class="form-control" type="text" value="<?=$data["first_name"]?>" required>
            </div><div class="mb-3">  
            <label for="lastName"  class="form-label" >Last Name</label>
            <input name="lastName"   class="form-control"type="text" value="<?=$data["last_name"]?>" required>    </div><div class="mb-3">  
            <label for="shownName"  class="form-label" >Shown Name</label>
            <input name="shownName"   class="form-control" type="text" value="<?=$data["shown_name"]?>">    </div><div class="mb-3">  
            <label for="amount"  class="form-label" >Donation Amount</label>
            <input name="amount"  class="form-control" type="number" value="<?=$data["amount"]?>" required>    </div>
            <div class="mb-3">
                <label for="campaign">Campaign</label>
                <select name="campaign" id="campaign">
                    <option value="">Select a Campaign</option>
                    <?php
                    foreach ($campaigns as $campaign ) {?>

                        <option value=<?=$campaign["ID"]?>
                            <?=$campaign["ID"]==$data["campaign_id"]?"selected":""?>><?=$campaign["name"]?></option>
                    <?php }?>
                </select>
            </div>
            <div class="mb-3">  
            <label for="team"  class="form-label" >Team</label>
            <select name="team" id="team" class="form-control">
                <option value="">Select a Team</option>
                <?php foreach ($teams as  $value) {?>
                        <option value="<?=$value["ID"]?>" <?= $data["teamID"]==$value["ID"]?"selected":""?>><?=$value["name"]?></option>
                    <?php }?>
            </select>    </div>
            

            
            
            <div class="mb-3">  

            <label for="note"  class="form-label" >Note</label>
            <input name="note"  class="form-control" type="text" value="<?=$data["comment"]?>">    </div>
            
            
            <div class="mb-3">  
            <label for="email"  class="form-label" >Email</label>
            <input name="email"  class="form-control" type="email" value="<?=$data["email"]?>">    </div><div class="mb-3">  
            <label for="phone" class="form-label" >Phone #</label>
            <input name="phone"  class="form-control" type="number" value="<?=$data["phone"]?>">    </div><div class="mb-3">  
            <label for="address"  class="form-label" >address</label>
            <input name="address" class="form-control" type="text" value="<?=$data["address"]?>">    </div><div class="mb-3">  
            <label for="city"  class="form-label" >City</label>
            <input name="city"  class="form-control" type="text" value="<?=$data["city"]?>">    </div><div class="mb-3">  
            <label for="state"  class="form-label" >State</label>
            <input name="state"  class="form-control" type="text" value="<?=$data["state"]?>">    </div><div class="mb-3">  
            <label for="zip"  class="form-label" >Zip Code</label>
            <input name="zip" class="form-control"  type="number" value="<?=$data["zip"]?>">    </div>
            
            <div class="mb-3">  
            <label for="paytype"  class="form-label" >Pay Type</label>
            <select name="paytype"  class="form-control" required>
            <option value=""></option>
                <?php $options = ['Cash','Check','Credit Card', 'Pledge','Pay Later','Zelle'];
                foreach ($options as $option)  {
                    echo '<option';
                    if ($data["paytype"] == $option)  {
                        echo ' selected' ;
                    }

                    echo '>';
                    echo $option;
                    echo '</option>';
                }

?>

            </select>    </div>
            <div class="mb-3">  
            <button type="submit" class="btn btn-primary">Save</button>
  </div>
        </form>
        </div>
    </body>
    <script>
        let teams = <?php echo json_encode($teams); ?>;
        // Convert PHP array of teams to array of JavaScript teams
        teams = teams.map(team => {
            return {
                id: team.ID,
                campaign_id: team.campaign_id,
                name: team.name
            };
        });
        //on change #campaign, filter out team based on campaign_id
        document.getElementById("campaign").addEventListener("change", function() {
            let campaign_id = this.value;
            let teamSelect = document.getElementById("team");
            let options = teamSelect.options;

            for (let i = 0; i < options.length; i++) {
                let option = options[i];
                if (option.value) {
                    let team = teams.find(t => t.id == option.value);
                    if (team && team.campaign_id == campaign_id) {
                        option.style.display = "block";
                    } else {
                        option.style.display = "none";
                    }
                }
            }
        });

    </script>
</html>