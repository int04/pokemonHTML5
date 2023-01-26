<?PHP
include_once('../templates/config.php');

	 header('Content-Type: application/json;charset=utf-8');  

date_default_timezone_set('Asia/Ho_Chi_Minh');

$listsv=$mysqli->query("SELECT * FROM `server` ORDER BY `id`  DESC");
    while($sv=$listsv->fetch_array()) {
      $j->listgame[] = array(
          'id' => $sv[id],
          'name' => $sv[ten],
          'port' => $sv[port],
          'code' => $sv[code],
          'date' => $sv[thoigian],
          'client' => base64_encode($sv[ten]),
          );  
    }

$j->{'time'}= time()*1000;
$j->server = array(
    
    'exp' => 1,
    'xu' => 1,
    'active' => 0, //0 baotri, 1= true;
    'notice' => 'Chào mừng bạn tới PokeBurn.', // thông báo khi login
    'faillogin' => 'Đăng nhập thất bại, không thể kết nối tới máy chủ.',
    'tip' => '<hr><center>Xin chào</center> <br> - Trò chơi đang Update dự kiến ra mắt vào ngày 1/5 ( Phiên bản mới). Hiện tại bạn có thể thử nghiệm trò chơi phiên bản cũ trước ! Hãy đăng nhập để trải nghiệm bản cũ.  <br> Fanpage : <a href="//fb.com/pokevietnam">PokeMon H5</a><hr>', // thông báo khi đăng nhập.
    'tiplogin' => 'Các bạn là người chơi mới : hãy mở RƯƠNG ĐỒ => CÀI ĐẶT => HƯỠNG DẪN TÂN THỦ để hiểu hơn nhé.<br>Để đổi tên vui lòng vào Hành Trang => Cài đặt => Đổi tên<br>Để xem cách bắt pokemon Vui lòng click vào đây : <a href="https://youtu.be/W7itu5tff44">https://youtu.be/W7itu5tff44</a> <iframe width="auto" height="auto" src="https://www.youtube.com/embed/W7itu5tff44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',//thông báo khi đã đăng nhập///
    
    
    );

	echo  json_encode($j);
$mysqli->close();
