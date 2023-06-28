<?php require_once("./functions/mysql.php");

$teams=query("SELECT * FROM `teams`");
$donations=query("SELECT * FROM `donations`")?>

{"teams":[
<?php
foreach ($teams as $itemNum=>$team) {
    echo "{";//start next object
        foreach ($team as $key => $value) {
            $key=strtolower($key);
             echo "\"$key\":\"$value\"";//pass in item into json
             if($key!="active")echo ",";
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
                 if($key!="phone")echo ",";
            }
    echo "}";    
    if($itemNum!=count($donations)-1)echo ",\n";
    }
    ?>
]}