<?php

	$url = 'https://thesieure.com/chargingws/v2';
	$partner_id = '6043991851';
	$partner_key = '24d9b3fc9140d232de4bbfeeb634e529';
	
	
    function creatSign($partner_key, $params)
    {
        $data = array();
        $data['request_id'] = $params['request_id'];
        $data['code'] = $params['code'];
        $data['partner_id'] = $params['partner_id'];
        $data['serial'] = $params['serial'];
        $data['telco'] = $params['telco'];
        $data['command'] = $params['command'];
        ksort($data);
        $sign = $partner_key;
        foreach ($data as $item) {
            $sign .= $item;
        }
		
		//return $sign;

        return md5($sign);
    }

$dataPost = array();
$ab =rand(100000,3333333);
			$dataPost['partner_id'] =$ab ;
			$dataPost['request_id'] = $ab;
			$dataPost['telco'] = 'VIETTEL';
			$dataPost['amount'] = 10000;
			$dataPost['serial'] = 10004783347874;
			$dataPost['code'] = 312821445892981;
			$dataPost['command'] = 'charging';
			$sign = creatSign($partner_key, $dataPost);
			$dataPost['sign'] = $sign;
$curl = curl_init();
            $data = http_build_query($dataPost);

echo $data;
curl_setopt_array($curl, array(
  CURLOPT_URL => "http://thesieure.com/chargingws/v2",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_POSTFIELDS =>$data,
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;