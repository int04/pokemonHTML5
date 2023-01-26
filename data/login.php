<?PHP
include_once('../templates/config.php');

if(isset($_GET[dky_2020])) {
    $taikhoan = trim($_POST[taikhoan]);
    $matkhau  = trim($_POST[matkhau]);
    
$user = $mysqli->query("SELECT * FROM `taikhoan` WHERE `taikhoan` = '".$taikhoan."'")->fetch_assoc();
if (!preg_match('/^[a-z0-9]{3,15}$/', $taikhoan)) {
    $ab[ducnghia] = 'Tài khoản của bạn phải phải từ 3-15 kí tự,và chỉ được dùng chữ thường,không kí tự đặc biệt,in hoa. ';
} else

if (!preg_match('/^[a-z0-9]{3,15}$/', $matkhau)) {
    $ab[ducnghia] = 'Mật khẩu của bạn phải phải từ 3-15 kí tự,và chỉ được dùng chữ thường,không kí tự đặc biệt,in hoa. ';
} else
if($user[id] !=0) {
  $ab[ducnghia] = 'Tài khoản đã tồn tại. Xin vui lòng chọn tài khoản khác.';
  
} else {
     $mysqli->query("INSERT INTO `taikhoan` SET `taikhoan` = '".$_POST[taikhoan]."', `matkhau` = '".$matkhau."' ");      
   
    $ab[ducnghia] ='Đăng kí thành công. Chúc bạn chơi game vui vẻ.';
}
echo json_encode($ab);

}

if(isset($_GET[login_2020])) {
      header('Content-Type: application/json;charset=utf-8');  

  $taikhoan = $_POST[taikhoan];
    $matkhau = $_POST[matkhau];  
    $accc = $mysqli->query("SELECT * FROM `taikhoan` WHERE `taikhoan` = '".$taikhoan."' AND `matkhau` = '".$matkhau."'")->fetch_assoc();
    $j->uid = $accc[id];
    if($accc[id] <=0) {
        $j->code = 1;
        $j->msg = 'Tài khoản hoặc mật khẩu không chính xác.';
    } else {
      $nhanvat = $mysqli->query("SELECT * FROM `users` WHERE `taikhoan` = '".$taikhoan."' AND `sv` = '".$_POST[sv]."'")->fetch_assoc();
      if($nhanvat[id] <=0) {
          $j->nhanvat->users->id = rand(100000,999999999);
 $j->nhanvat->users->username = 'newplay'.rand(100000,999999).'';
 $j->nhanvat->users->skin = 'GreenRed.png';
  $j->nhanvat->users->amthanh = '1';

 $j->nhanvat->users->taikhoan = $taikhoan;
 $j->nhanvat->users->viettat = '';
 $j->nhanvat->users->matkhau = md5($matkhau);
 $j->nhanvat->users->pokemon = '';
 $j->nhanvat->users->nhiemvu->id='1';
 $j->nhanvat->pokemon = [];
 $j->nhanvat->setkinang = [];
  $j->nhanvat->vatpham = [];
 $j->nhanvat->users->xu = '0';
 $j->nhanvat->users->ruby='0';
 $j->nhanvat->users->level='0';
 $j->nhanvat->users->{'exp'} = '0';
 $j->nhanvat->users->expmax='0';
 $j->nhanvat->users->co = '0';
 $j->nhanvat->click = '{}';
  $j->nhanvat->buff = '{}';
  $j->nhanvat->pk = '{}';
$j->nhanvat->ruong = [];
$j->nhanvat->khodo->ruong = 10;
$j->nhanvat->khodo->kho = 20;
$j->nhanvat->camdi=0;
$j->nhanvat->camdanh=0;
$j->nhanvat->auto = [];
$j->nhanvat->buff = [];
$j->nhanvat->trangbi = [];
$j->nhanvat->kethu = [];
$j->nhanvat->banbe = [];

$j->nhanvat->thoitrang = [];
$j->nhanvat->nhatvatpham = [];
$j->nhanvat->users->thucan->ducnghia  =1;
$j->nhanvat->users->thoitrang='GreenRed.png';
$j->nhanvat->lichsu = [];
$j->nhanvat->qua->id = 1;

 $j->nhanvat->users->x = '52';
 $j->nhanvat->users->y = '24';
 $j->nhanvat->users->map = '2';
 $j->nhanvat->users->mapname = 'm2';
 $j->nhanvat->save->x = '18';
 $j->nhanvat->save->y = '17';
 $j->nhanvat->save->map = 'vi';
 $j->nhanvat->chiso->hp = '0';
      } else {
      foreach($nhanvat as $key => $value) {
	    if($key !="taikhoan" AND $key !="id" AND $key !="sv") {
			$j->nhanvat->{$key} = json_decode($value);
	    }
			}    
      }
        
        $j->msg = 'Đăng nhập thành công.';
    }
echo json_encode($j);
}


if(isset($_GET[login])) {
  header('Content-Type: application/json;charset=utf-8');  
   $taikhoan = $_POST[taikhoan];
    $matkhau = $_POST[matkhau];
    $users = 'nguoichoi/'.$taikhoan.'.json';

if(!file_exists($users)){
echo 1;
} else
{
 $a = file_get_contents($users);
 $b = json_decode($a);
 if($b->users->matkhau != md5($matkhau)) {
     echo 2;
 } else {
 echo $a;
 }
}
}
if(isset($_GET[regchoi])) {
    $taikhoan = $_POST[taikhoan];
    $matkhau = $_POST[matkhau];
$users = 'nguoichoi/'.$taikhoan.'.json';

if (!preg_match('/^[a-z0-9]{3,15}$/', $taikhoan)) {
    $msg = 'Tài khoản của bạn phải phải từ 3-15 kí tự,và chỉ được dùng chữ thường,không kí tự đặc biệt,in hoa. ';
} else

if (!preg_match('/^[a-z0-9]{3,15}$/', $matkhau)) {
    $msg = 'Mật khẩu của bạn phải phải từ 3-15 kí tự,và chỉ được dùng chữ thường,không kí tự đặc biệt,in hoa. ';
}
else
if(file_exists($users)){
$msg = 'Tài khoản đã tồn tại ! vui lòng thử tài khoản khác.';
}else{
 
 $my->users->id = rand(100000,999999999);
 $my->users->username = 'newplay'.rand(100000,999999).'';
 $my->users->skin = 'GreenRed.png';
  $my->users->amthanh = '1';

 $my->users->taikhoan = $taikhoan;
 $my->users->viettat = '';
 $my->users->matkhau = md5($matkhau);
 $my->users->pokemon = '';
 $my->users->nhiemvu->id='1';
 $my->pokemon = [];
 $my->setkinang = [];
  $my->vatpham = [];
 $my->users->xu = '0';
 $my->users->ruby='0';
 $my->users->level='0';
 $my->users->{'exp'} = '0';
 $my->users->expmax='0';
 $my->users->co = '0';
 $my->click = '{}';
  $my->buff = '{}';
  $my->pk = '{}';
$my->ruong = [];
$my->khodo->ruong = 10;
$my->khodo->kho = 20;
$my->camdi=0;
$my->camdanh=0;
$my->auto = [];
$my->buff = [];
$my->trangbi = [];
$my->thoitrang = [];
$my->nhatvatpham = [];
$my->users->thucan->ducnghia  =1;
$my->users->thoitrang='GreenRed.png';
$my->lichsu = [];
$my->qua->id = 1;

 $my->users->x = '18';
 $my->users->y = '17';
 $my->users->map = '1';
 $my->users->mapname = 'vi';
 $my->save->x = '18';
 $my->save->y = '17';
 $my->save->map = 'vi';
 $my->chiso->hp = '0';
 $json = json_encode($my);
$index = fopen('nguoichoi/'.$taikhoan.'.json', 'w' );
fwrite ($index, $json);
fclose ($index);
 $msg = 'Đăng kí thành công. Chúc bạn chơi game vui vẻ.';
}
$ab[ducnghia] = $msg;
echo json_encode($ab);
}