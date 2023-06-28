<?php
$db=new mysqli("localhost","root","","crowdfund");
function query($query){
    global $db;
    $response=$db->query($query);
    $responseArray=$response->fetch_all(MYSQLI_ASSOC);
    return $responseArray;
}