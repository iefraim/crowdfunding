<?php 
require_once("./check_login.php");
if(!isset($_GET["id"]))header("Location:./donations.php");
$id=$db->real_escape_string($_GET["id"]);
$data=query("SELECT * FROM `donations` WHERE `id`=$id")[0];
if(!$data)header("Location:./donations.php");
$teams=query("SELECT * FROM `teams`");
if(isset($_POST["name"])){
    foreach ($_POST as $key => $value) {
        $$key=$db->real_escape_string($value);
    }
}

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Edit Donation</title>
        <meta charset="utf-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
        <div class="container pt-4" > 
            <div class="row"><h1>EDIT DONATION</h1></div>
        <form method="post">

      
  <div class="mb-3">
            <label for="firstName" class="form-label"> Name</label>
            <input name="firstName"  class="form-control" type="text" value="<?=$data["first_name"]?>">
            </div><div class="mb-3">  
            <label for="lastName"  class="form-label" >Last Name</label>
            <input name="lastName"   class="form-control"type="text" value="<?=$data["last_name"]?>">    </div><div class="mb-3">  
            <label for="shownName"  class="form-label" >Shown Name</label>
            <input name="shownName"   class="form-control" type="text" value="<?=$data["shown_name"]?>">    </div><div class="mb-3">  
            <label for="amount"  class="form-label" >Donation Amount</label>
            <input name="amount"  class="form-control" type="number" value="<?=$data["amount"]?>">    </div><div class="mb-3">  
            <label for="multiple"  class="form-label" >Donation Multiple</label>
            <input name="multiple" class="form-control" type="number" value="<?=$data["multiple"]?>">    </div><div class="mb-3">  
            <label for="team"  class="form-label" >Team</label>
            <select name="team"  class="form-control">
                <?php foreach ($teams as  $value) {?>
                        <option value="<?=$value["ID"]?>" <?= $data["teamID"]==$value["ID"]?"selected":""?>><?=$value["name"]?></option>
                    <?php }?>
            </select>    </div><div class="mb-3">  
            <label for="note"  class="form-label" >Note</label>
            <input name="note"  class="form-control" type="text" value="<?=$data["comment"]?>">    </div><div class="mb-3">  
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
            <input name="zip" class="form-control"  type="number" value="<?=$data["zip"]?>">    </div><div class="mb-3">  
            <button type="submit" class="btn btn-primary">Save</button>
  </div>
        </form>
        </div>
    </body>
</html>