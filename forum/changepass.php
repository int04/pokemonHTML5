<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.0//EN"><html>
   <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width,maximum-scale=1,user-scalable=no"/>
		<meta http-equiv="content-language" content="vi" />
        <title>Thay đổi mật khẩu PokeMon Biến Hình</title>
		<meta name="keywords" content="PokeMon, truyện pokemon, pokemon biến hình, pokemon bien hinh, pokemon viet nam, POKEMON MMO, pokemon RPG, Pokemon PVP, pokemon PK" />
		<meta name="description" content="Pokemon Biến hình, PokeMon Huyền thoại." />
		<meta name="robots" content="INDEX,FOLLOW" />
		<link rel="icon" href='/sql/load/images/items/Master%20ball.png' type="image/x-icon" />
		<link rel="apple-touch-icon" href="/sql/load/images/items/Master%20ball.png" />
		<link rel="shortcut icon" href='/sql/load/images/items/Master%20ball.png' type="image/x-icon" />
		<link rel="icon" type="/sql/load/images/items/Master%20ball.png">
        <link rel="stylesheet" type="text/css" href="/forum/images/StyleSheet.css?vc" />
        <link rel="stylesheet" type="text/css" href="/forum/images/template.css?cxx" />
		
    </head>
    <body>
        <div class="body_body">
            <div class="left_top"></div><div class="bg_top"><div class="right_top"></div></div>
            <div class="body-content">
                <div class="a" align="center"><img src="/sql/load/PokeBurn.png" height="90"/></div>
                <div id="top">
                    <div class="link-more">	
                        <div class="h" align="center">
                           
							<div class="bg_tree"></div>
							<div class="bg_noel"></div>
                                                                                    <div class="body" style="text-align:center">
                                                                                <?PHP
                                        require('confg.php');
                                        if(isset($_POST[submit])) {
                                               $taikhoan = $_POST[user];                $matkhau = $_POST[pass]; 
                                              $new = $_POST['new'];  
                                              $new1 = $_POST[new1];
     	$xuli = $mysqli->query("SELECT * FROM `taikhoan` WHERE `taikhoan`='".$_POST[user]."' AND `matkhau`='".$_POST[pass]."'")->fetch_assoc();

if($xuli[id] <=0) {
    $msg = 'Tài khoản hoặc mật khẩu chưa chính xác, vui lòng kiểm tra lại.';
} else
if($new != $new1) {
    $msg = 'mật khẩu mới bạn nhập không trùng nhau.';
}else {
$mysqli->query("UPDATE `taikhoan` SET `matkhau` =  '".$new."' WHERE `id`='".$xuli[id]."'");
    $_SESSION[id] = $xuli[id];
    $msg = 'THAY ĐỔI MẬT KHẨU THÀNH CÔNG.';

}
?>
<div class="bg-content">PokeMon Biến hình : <br>
<ul>
		<li><?=$msg?></li>
	</ul>
<a href="/forum/changepass.php">Quay lại trang đổi mật khẩu.</a>
<br></div>
<?PHP
                                                                                    
                                                                                    
                                                                                } else {
                                            ?>                                            
                            <div style="font-size:10px;">Vui lòng nhập chính xác tài khoản mật khẩu để đổi..</div>
                                <center><form action="/forum/changepass.php?do=chagepass" method="POST" name="login">
                                    <input type="hidden" name="nav" value="" readonly="readonly" />
                                    <table>
                                        <tr>
                                            <td colspan=2><label for="user">Tài khoản:</label></td>
                                            <td colspan=2><input name="user" type="text" value="" /></td>
                                        </tr>
                                        <tr>
                                            <td colspan=2><label for="pass">Mật khẩu cũ:</label></td>
                                            <td colspan=2><input name="pass" type="password" value="" />
                                        </tr>
                                        
                                        <tr>
                                            <td colspan=2><label for="pass">Mật khẩu mới:</label></td>
                                            <td colspan=2><input name="new" type="password" value="" />
                                        </tr>
                                        
                                        <tr>
                                            <td colspan=2><label for="pass">Xác nhận mật khẩu mới.:</label></td>
                                            <td colspan=2><input name="new1" type="password" value="" />
                                        </tr>
                                        
                                     
                                    </table>
								
                                    <button type="submit" value="Đăng nhập" name="submit">Đổi mật khẩu</button><br />
                                    								<a href="/forum/index.php?pokemon=forum&fwr=height&uid=3&p=0&kmess=15">>> Quay lại</a>

                                </form><br>
								</center>
								
								<?PHP } ?>
                            </div>
                        </div>
                        <br>
                    </div><br>

                </div>

            </div>

          <div class="left_b_bottom"><div class="right_b_bottom"><div class="footer"><div class="left_bottom"></div><div class="right_bottom"></div></div></div></div>
 <div class="copyright"><br> <p>2020. PokeMon Biến hình.</p>
</div>
</div>
        </div>
    </div>
</body>

</html>