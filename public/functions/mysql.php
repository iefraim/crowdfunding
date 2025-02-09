<?php
//$db=new mysqli("localhost","root","","crowdfund");
//$db=new mysqli("localhost","myprpros_ss_dc05","OtMES565Qxxq", "myprpros_ss_dbnamec05");
//do not overwrite this file.

function query($query, $params = []) {
    global $db;
    $stmt = $db->prepare($query);
    if ($stmt === false) {
        $errorDetails = [
            'error' => $db->error,
            'errno' => $db->errno,
        ];

        $errorDetailsString = json_encode($errorDetails);
        sendErrorEmail($errorDetailsString, $query, $params);
        // Handle error
        return;
    }

    if (!empty($params)) {
        // Dynamically bind parameters
        $types = str_repeat('s', count($params)); // Assuming all params are strings
        $stmt->bind_param($types, ...$params);
    }

    $stmt->execute();

    if (stripos($query, 'SELECT') === 0) {
        $response = $stmt->get_result();
        if ($response === false) {
            // Handle error
            sendErrorEmail($db->error, $query, $params);
            return;
        }
        return $response->fetch_all(MYSQLI_ASSOC);

    } else {
        return true;
    }

}

function sendErrorEmail ($error, $query='', $params=[]  )
{
    $from = "Magen Lev<info@magenlevgemach.org>";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $from" . "\r\n";

    $to = "debs2830@gmail.com";
    $subject = "Error in Crowdfund";
    $message = "Error: $error\n";
    $message .= "Query: $query\n";
    $message .= "Params: " . implode(", ", $params) . "\n";
    mail($to, $subject, $message, $headers);

}