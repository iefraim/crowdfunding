<?php
//$db=new mysqli("localhost","root","","crowdfund");
//$db=new mysqli("localhost","myprpros_ss_dc05","OtMES565Qxxq", "myprpros_ss_dbnamec05");
//do not overwrite this file.
function query($query, $params = []) {
    global $db;
    $stmt = $db->prepare($query);
    if ($stmt === false) {
        // Handle error
        return;
    }

    if (!empty($params)) {
        // Dynamically bind parameters
        $types = str_repeat('s', count($params)); // Assuming all params are strings
        $stmt->bind_param($types, ...$params);
    }

    $stmt->execute();
    $response = $stmt->get_result();
    if ($response === false) {
        // Handle error
        return;
    }

    $responseArray = $response->fetch_all(MYSQLI_ASSOC);
    return $responseArray;
}
    //TODO switch this to global PDO.
    //it's not working for about with <br> and single quotes
