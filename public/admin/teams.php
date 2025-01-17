<?php
require_once("./check_login.php");
$teams=query("SELECT * FROM `teams`");
$donors=query("SELECT `teamID` FROM `donations`");
$campaigns=query("SELECT * FROM `fundraiser_data`");
$campaign=isset($_GET["campaignId"])?array_filter($campaigns,function($i){
    return $_GET["campaignId"]=$i["ID"];
})[0]["name"]:false;

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Team List</title>
        <meta charset="utf-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link href="//cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css" rel="stylesheet" />
    </head>
    <body>
    <div class="container mt-4">
        <?php require("./outline.php");?>
        <div class="row"><h1>Teams</h1></div>
        <?php if($campaign){?>
        <div class="row"><h2>Campaign: <?=$campaign?></h2></div>
        <?php }?>
        <div class="col-md-6 mb-3">  <a href="./edit_team.php" class="btn btn-primary">New team</a></div>
        <div class="row">
     
        <table id="datatable" class="mt-4">
     
            <thead>
                <th>Name</th>
                <th>Goal</th>
                <th>Link</th>
                <th>Email</th>
                <th>Donors</th>

        
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
            <?php
            foreach ($teams as $row) {?>
                <tr data-id="<?=$row['ID']?>">
                <td><?=$row["name"]?></td>
                <td>$<?=$row["goal"]?></td>
                <td><?=$row["link"]?></td>
                    <td><?=$row["email"]?></td>
                <td><?=  count(array_filter($donors,function($i){
                    global $row;
                    return $i["teamID"]===$row["ID"];
                })); ?></td>
        
                <td><a href="./edit_team.php?id=<?=$row["ID"]?>"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg></a></td>
<td><a onclick="deleteItem(<?=$row['ID']?>)">X</a></td>
            </tr>
            <?php }?>
            </tbody>
        </table>
    
        
        <?php require("./export.php") ?>
            </div></div>
            </body>
        <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    <script src="//cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
    <script>
let table = new DataTable('#datatable');
const deleteItem=(id)=>{
                        if(!confirm("Are you sure you want to delete this item?")){
                            return;
                        }
                        console.log("delete ",id)
                        $.post("./delete_item.php",{id:id,table:"teams"})
                            .then((res)=>{
                                if(res=="success"){

                                    $('tr[data-id="'+id+'"]').remove();



                                }else{
                                    alert("Error deleting item");
                                }
                            })

}
    </script>
</html>