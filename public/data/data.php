<?php require_once("./functions/mysql.php");

$teams=query("SELECT * FROM `teams`");?>

{"teams":[
<?php
foreach ($teams as $itemNum=>$team) {
    echo "{";//start next object
        foreach ($team as $key => $value) {
             echo "\"$key\":\"$value\"";//pass in item into json
             if($key!="active")echo ",";
        }
    echo "}";//close object
    if($itemNum!=count($teams)-1)echo ",\n";
}?>
],
"donations":[{
    "name":"test-1",
    "id":1,
    "amount":100,
    "note":"test1",
    "team":1
},
{
    "name":"test-2",
    "id":2,
    "amount":200,
    "note":"test2",
    "team":2
},
{
    "name":"test-3",
    "id":3,
    "amount":300,
    "note":"",
    "team":3
},
{
    "name":"test-4",
    "id":4,
    "amount":400,
    "note":"",
    "team":4
},
{
    "name":"test-5",
    "id":5,
    "amount":900,
    "note":"",
    "team":1
}

]}