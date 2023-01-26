<?php

    if (!isset($_POST['telco']) || !isset($_POST['amount']) || !isset($_POST['serial']) || !isset($_POST['code'])) {
        $j->msg = 'Chưa nhập đầy đủ thông tin.';
    } else {
        $telco = $_POST['telco'];
        $amount = $_POST['amount'];
        $serial = $_POST['serial'];
        $code = $_POST['code'];
        
		$command = 'charging';  // Nap the

        require_once('config.php'); 

        $request_id = rand(100000000, 999999999); /// Order id của bạn, ví dụ này lấy ngẫu nhiên để test

            $dataPost = array();
			$dataPost['partner_id'] = $partner_id;
			$dataPost['request_id'] = $request_id;
			$dataPost['telco'] = $telco;
			$dataPost['amount'] = $amount;
			$dataPost['serial'] = $serial;
			$dataPost['code'] = $code;
			$dataPost['command'] = $command;
			$sign = creatSign($partner_key, $dataPost);
			$dataPost['sign'] = $sign;
			
            $data = http_build_query($dataPost);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            $actual_link = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
            curl_setopt($ch, CURLOPT_REFERER, $actual_link);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $result = curl_exec($ch);
            curl_close($ch);

            $obj = json_decode($result);

            if ($obj->status == 99) {
               $j->msg = 'Gửi thẻ thành công ! Hệ thống đang nạp thẻ ! Xin vui lòng báo lại serial cho Admin để kiểm tra';
            
            } elseif($obj->status == 1) {
                //Thành công
            $j->msg = 'nạp thẻ thành công';
            $j->chia = 1;
            $j->code = $amount;

            }elseif($obj->status == 2) {
                //Thành công nhưng sai mệnh giá
                $j->msg = 'Thẻ nạp thành công nhưng sai mệnh giá ! vui lòng liên hệ cho admin.';
                $j->chia =2;
            }elseif($obj->status == 3) {
                //Thẻ lỗi
        $j->msg = 'Thẻ cào đã được sử dụng hoặc không tồn tại.';

            }elseif($obj->status == 4) {
                //Bảo trì
                                       $j->msg = 'Hệ thống nạp thẻ bảo trì.';

			}else{
				//Lỗi
                       $j->msg = 'Chưa nhập đầy đủ thông tin hoặc thẻ này đang được nạp.';
 
			}

        
    }

echo json_encode($j);
?>
