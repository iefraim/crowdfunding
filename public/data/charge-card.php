<?php
    $data = array();

    $data["xKey"] =" ";
                              

if ($_POST['firstname'] == 'test') {

$data["xKey"] ="DevorahFleisher_Test";

}

 

    $data["xVersion"] = "4.5.5";

    $data["xSoftwareName"] = "Zera Avraham";

    $data["xSoftwareVersion"] = "1.0";

    $data["xCommand"] = (isset($_POST['command']) ? $_POST['command']: "cc:sale");

    $data["xCardNum"] = $_POST['ccnum'];

    $data["xExp"] = $_POST['ccmonth']. $_POST['ccyear'];


$data['xCVV'] =  $_POST['cvv'];


    $data["xName"] = $_POST['firstname'] . ' '. $_POST['lastname'];

                $data["xStreet"] =$_POST['address'];

                $data["xZip"] = $_POST['zip'];



                $data["xDescription"] ="Crowdfunding Campaign";

                $data["xEmail"] = $_POST['email'];

                                $data["xBillPhone"] = $_POST['phone'];


$data["xAmount"] = $_POST['amount'];

if (isset($_POST['team']))  {  

$data["xCustom01"] = $_POST['team'];

                }


function buildQuery($data)

      {

        if(function_exists('http_build_query') && ini_get('arg_separator.output')=='&') return http_build_query($data);

        $tmp = array();

        foreach($data as $key=>$val) $tmp[] = rawurlencode($key) . '=' . rawurlencode($val);

        return implode('&', $tmp);

      }

    $data = buildQuery($data);

    $ch = curl_init("https://x1.cardknox.com/gateway");

    if(!is_resource($ch))

      {

        echo "Error: Unable to initialize CURL ($ch)";

        exit;

      }

    curl_setopt($ch, CURLOPT_HEADER, 1);

    curl_setopt($ch, CURLOPT_POST,1);

    curl_setopt($ch, CURLOPT_TIMEOUT, 45);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);

    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

   // curl_setopt($ch, CURLOPT_SSL_CIPHER_LIST, 'TLSv1');

    $raw_result = curl_exec($ch);

    if(curl_error($ch) != "")

      {

        echo curl_error($ch);

      }

    elseif(!strlen($raw_result))

      {

        echo "Error reading from card processing gateway. Please contact the merchant to verify whether transaction has been processed.";

        curl_close($ch);

        exit;

      }

    elseif($raw_result == false)

      {

        echo "Blank response from card processing gateway.";

        curl_close($ch);

        exit;

      }

    else

      {

        // SUCCESS

        curl_close($ch);

        // result will be on the last line of the return

        $tmp = explode("\n",$raw_result);

        $result_string = $tmp[count($tmp)-1];

  


        parse_str($result_string, $result_array);

       // echo "<pre>";

 

                               

if  ( $result_array['xResult']  == 'A' ) {

// echo 'done';

if ( isset($_POST['command'] ) && $_POST['command'] == 'cc:Save') {

$data = array();

$data['xTokenAlias'] =  $result_array['xMaskedCardNumber'] ;

$data['xToken'] = $result_array['xToken'];

$data['xTokenType'] ='cc';



}

                                                echo 'approved';
                                       

                                                  

                                  } else {

                                                  echo 'error';

                                  }

      }

  

  ?>