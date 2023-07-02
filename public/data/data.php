<?php require_once("./functions/mysql.php");


$data=query("SELECT * FROM `fundraiser_data` WHERE `active`=1")[0];
$teams=query("SELECT * FROM `teams` WHERE `campaign_id`=$data[id] ");
$donations=query("SELECT * FROM `donations`   WHERE `campaign_id`=$data[id]");
?>

{"teams":[
<?php
foreach ($teams as $itemNum=>$team) {
    echo "{";//start next object
        foreach ($team as $key => $value) {
            $key=strtolower($key);
             echo "\"$key\":\"$value\"";//pass in item into json
             if($key!="campaign_id")echo ",";
        }
    echo "}";//close object
    if($itemNum!=count($teams)-1)echo ",\n";
}?>
],
"donations":[
<?php
    foreach ($donations as $itemNum => $donation) {
        echo "{";//start next object
            foreach ($donation as $key => $value) {
                $key=strtolower($key);
                 echo "\"$key\":\"$value\"";//pass in item into json
                 if($key!="campaign_id")echo ",";
            }
    echo "}";    
    if($itemNum!=count($donations)-1)echo ",\n";
    }
    ?>
],
"data":{<?php
    foreach ($data as $key => $value) {
                $key=strtolower($key);
                 echo "\"$key\":\"$value\"";//pass in item into json
                 if($key!="active")echo ",";
            }
    ?>}}