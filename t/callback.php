<?php

					
				$myfile = fopen("log.txt", "w") or die("Unable to open file!");
				$txt = $_POST['status']."|".$_POST['message']."\n";
				fwrite($myfile, $txt);
				fclose($myfile);
		
									
						/// status = 1 ==> thẻ đúng
						/// status = 2 ==> thẻ sai
						/// status = 3 ==> thẻ ko dùng đc
						/// status = 99 ==> thẻ chờ xử lý
					
				//// Kết quả trả về sẽ có các trường như sau:
				
			require_once('config.php');
			$callback_sign = md5($partner_key.$_POST['code'].$_POST['serial']);
			if($_POST['callback_sign'] == $callback_sign) { 
				
				$getdata['status'] = $_POST['status'];
				$getdata['message'] = $_POST['message'];
				$getdata['request_id'] = $_POST['request_id'];   /// Mã giao dịch của bạn
				$getdata['trans_id'] = $_POST['trans_id'];   /// Mã giao dịch của website webthedfull.com
				$getdata['declared_value'] = $_POST['declared_value'];  /// Mệnh giá mà bạn khai báo lên
				$getdata['value'] = $_POST['value'];  /// Mệnh giá thực tế của thẻ
				$getdata['amount'] = $_POST['amount'];   /// Số tiền bạn nhận về (VND)
				$getdata['code'] = $_POST['code'];   /// Mã nạp
				$getdata['serial'] = $_POST['serial'];  /// Serial thẻ
				$getdata['telco'] = $_POST['telco'];   /// Nhà mạng
				
				print_r($getdata);
			}		
					
		

				

		
	
	
?>