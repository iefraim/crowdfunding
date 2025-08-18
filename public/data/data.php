<?php require_once("../functions/mysql.php");

//show error
error_reporting(E_ALL);
//any other code to show error


$data=query("SELECT id,name,goal, bonus_goal, start_date, end_date, active, aboutheader, abouttext, timezone, img_url, multiple FROM `fundraiser_data` WHERE `active`=1")[0];
$teams=query("SELECT id, name,link, goal,active, campaign_id FROM `teams` WHERE `campaign_id`=? ", [$data["id"]]);
$donations=query("SELECT id, first_name, last_name, shown_name, date, amount, multiple, teamid, comment, campaign_id FROM `donations`   WHERE `campaign_id`=? order by id desc", [$data["id"]]);


// Encode the data to JSON
$response = [
    "teams" => $teams,
    "donations" => $donations,
    "data" => $data
];

// Output the JSON-encoded data
header('Content-Type: application/json');
echo json_encode($response, JSON_PRETTY_PRINT);
?>