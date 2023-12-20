<?php
//$db=new mysqli("localhost","root","","crowdfund");
//$db=new mysqli("localhost","myprpros_ss_dc05","OtMES565Qxxq", "myprpros_ss_dbnamec05");
function query($query){
    global $db;
    $response=$db->query($query);
    if(gettype($response)==="boolean"){
         return;
    }
//    echo $db->error;
    $responseArray=$response->fetch_all(MYSQLI_ASSOC);
    return $responseArray;
}