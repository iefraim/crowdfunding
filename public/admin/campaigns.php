<?php
require_once("./check_login.php");

$query= "SELECT * FROM `fundraiser_data`";

$campaignList=query($query)
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Campaign List</title>
        <meta charset="utf-8">
    </head>
    <body>
        <table>
            <thead>
                <th>Campaign Name</th>
                <th>Goal</th>
                <th>Bonus Goal</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Edit</th>
            </thead>
            <?php
            foreach ($campaignList as $row) {?>
            <tr>
                <td><?=$row["name"]?></td>
                <td><?=$row["goal"]?></td>
                <td><?=$row["bonus_goal"]?></td>
                <td><?=$row["start_date"]?></td>
                <td><?=$row["end_date"]?></td>
                <td><a href="./edit_campaigns.php?id=<?=$row["id"]?>">edit</a></td>
            </tr>
            <?php }?>
        </table>
        <a href="./edit_campaigns.php">Create new</a>
    </body>
</html>