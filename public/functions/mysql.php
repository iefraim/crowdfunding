<?php
$db=new mysqli("localhost","root","","crowdfund");
function query($query){
    global $db;
    $response=$db->query($query);
    if(gettype($response)==="boolean"){
        echo $db->error;
        return;
    }
    $responseArray=$response->fetch_all(MYSQLI_ASSOC);
    return $responseArray;
}