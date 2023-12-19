<?php

require_once("../functions/mysql.php");
$from = "Zera Avraham<office@zeraavraham.com>";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: $from" . "\r\n";

foreach ($_POST as $key => $value) {
    $$key=$db->real_escape_string($value);
}

$shownname=$shownname===""?"$firstname $lastname":$shownname;

$query="INSERT INTO `donations` (`amount`,`first_name`,`last_name`,`shown_name`,`address`,`city`,`state`,`zip`,`phone`,`email`,`comment`,`teamID`,`campaign_id`, `paytype`, `paid`) VALUES ($amount,'$firstname','$lastname','$shownname','$address','$city','$state','$zip','$phone','$email','$notes',";
               $query.=    ($team ? $team : "NULL") ;                                                                                                                                                                        
            $query .=",$campaignId, 'Credit Card', 1)";

    query($query);





$subject="Thank you for your donation";
$message  = '<html>
<body><div align="center">
	<div style="width:700px; text-align: center;" >
	<div style="height:10px; background-color:rgb(153, 102, 153);"></div>
	<div><img src="https://zeraabraham.com/wp-content/uploads/2021/08/ZeraAbraham-150px.png" alt="" style="height:auto;width:100%;" ></div>
	<h1 style="color:#7a563d;">Thank You for Partnering to Write the Next Chapter of A Storied Community! </h1>
<div align="center">
<div style="text-align:left;width:75%;">
			
		Donor name: ' . $firstname . ' '  . $lastname . ' <br><br>
Organization legal name: Congregation Zera Abraham  <br>


Amount: $' . $amount ;

$message  .= ' <br> <br>
Date: '. date('m/d/Y') . ' <br><br>

No goods or services have been provided in consideration of this contribution.<br>
All donations are tax deductible. EIN Number: 84-0466144

		</div>
		</div>
		<div style="height:10px; background-color:rgb(153, 102, 153);margin-top:10px;"></div>
		
	</div>
	</div>
</body>
</html>';


if (!empty($email)) {
    mail($email, $subject, $message, $headers);
}

$query="SELECT email FROM `teams` WHERE `id`=$team";
$data=query($query)[0];


 if($data["email"]) {

     $subject = "A donation has been made on your team";
     $message = '<html>
<body><div align="center">
	<div style="width:700px; text-align: center;" >
	<div style="height:10px; background-color:rgb(153, 102, 153);"></div>
	<div><img src="https://zeraabraham.com/wp-content/uploads/2021/08/ZeraAbraham-150px.png" alt="" style="height:auto;width:100%;" ></div>
	<h1 style="color:#7a563d;">Thank You for Partnering to Write the Next Chapter of A Storied Community! </h1>
<div align="center">
<div style="text-align:left;width:75%;">' .
	 $firstname . ' ' . $lastname . ' has made a donation in the amount of $' . $amount;

     $message .= '

		</div>
		</div>
		<div style="height:10px; background-color:rgb(153, 102, 153);margin-top:10px;"></div>
		
	</div>
	</div>
</body>
</html>';
 ;




     mail($data["email"], $subject, $message, $headers);

 }