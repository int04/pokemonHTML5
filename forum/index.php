<?PHP
require('confg.php');
$test = isset($_GET['pokemon']);
$url = $_GET['pokemon'];
if($url == "ducnghia") {
        $baiviet=$mysqli->query("SELECT * FROM `ducnghia_baiviet` Where  `id` = '".$_GET['uid']."'")->fetch_assoc();
$textl = $baiviet[tieude];
}
require('head.php');
$time = time();
///khóa
if($url =="khoa") {
    if($data[admin] ==0) {
        exit;
    }
    $baiviet=$mysqli->query("SELECT * FROM `ducnghia_baiviet` Where  `id` = '".$_GET['uid']."'")->fetch_assoc();
if($baiviet[khoa]==1) {
    $nghia = 0;
} else { $nghia =1; }
         $mysqli->query("UPDATE `ducnghia_baiviet` set `khoa` = '{$nghia}' WHERE `id`='".$_GET[uid]."'");
         ?>
 <script type="text/javascript">

        window.location="/forum/index.php?pokemon=ducnghia&uid=<?=$_GET[uid]?>&p=<?=$_GET[p]?>&kmess=15";

      </script>
      <?PHP
}
if($url =="vip") {
    if($data[admin] ==0) {
        exit;
    }
    $baiviet=$mysqli->query("SELECT * FROM `ducnghia_baiviet` Where  `id` = '".$_GET['uid']."'")->fetch_assoc();
if($baiviet[vip]==1) {
    $nghia = 0;
} else { $nghia =1; }
         $mysqli->query("UPDATE `ducnghia_baiviet` set `vip` = '{$nghia}' WHERE `id`='".$_GET[uid]."'");
         ?>
 <script type="text/javascript">

        window.location="/forum/index.php?pokemon=ducnghia&uid=<?=$_GET[uid]?>&p=<?=$_GET[p]?>&kmess=15";

      </script>
      <?PHP
}
if($url =="xoa") {
    if($data[admin] ==0) {
        exit;
    }
    $baiviet=$mysqli->query("SELECT * FROM `ducnghia_baiviet` Where  `id` = '".$_GET['uid']."'")->fetch_assoc();

         $mysqli->query("DELETE FROM `ducnghia_baiviet` WHERE `id`='".$_GET[uid]."'");
         ?>
 <script type="text/javascript">

        window.location="/forum/index.php?pokemon=forum&fwr=height&uid=3&p=0&kmess=15";

      </script>
      <?PHP
}

///

///edit bài viết

if($url =="edit") {
    $baiviet=$mysqli->query("SELECT * FROM `ducnghia_baiviet` Where  `id` = '".$_GET['uid']."'")->fetch_assoc();
     if(isset($_POST['ducnghia'])) {
         $tieude = $_POST[tieude];
                  $noidung = $_POST[noidung];
        $dem =strlen($noidung);
        $dem_t = strlen($tieude);
       if($data[admin] ==0)   {
       echo'    <div class="bg-content"><br>
<br><center><div><strong>Tiêu đề bài viết không được vượt quá 70 ký tự !</strong></div><div><strong>Tiêu đề bài viết không được sử dụng ký tự đặc biệt !</strong></div><div><strong>số ký tự phải lớn hơn 10 và tối đa là 100 . !</strong></div><div>thời gian giữa 2 bài viết tối thiểu là 60 giây và giữa 2 comment là 20 giây</div><div><a href="/forum/index.php?pokemon=ducnghia&uid='.$_GET[uid].'&p='.$_GET[p].'&kmess=15">Click để quay về diễn đàn !</a></div></center>
<br>
<br></div>';
           
       }      else {

         $mysqli->query("UPDATE `ducnghia_baiviet` SET `noidung` =  '".$noidung."' WHERE `id`='".$_GET[uid]."'");

     ?>
     <script type="text/javascript">

        window.location="/forum/index.php?pokemon=ducnghia&uid=<?=$_GET[uid]?>&p=<?=$_GET[p]?>&kmess=15";

      </script>

<?PHP
           
       }    

     } else {
?> 
<div id="box_forums">

		
<div class="box_home"><div class="box_icon"><a href="/forum/index.php?pokemon=ducnghia&uid=<?=$_GET[uid]?>&p=0&kmess=15"><< Forum</a></div></div><div class="box_list_chuyenmuc"><div class="box_topss"><span>Viết bài mới</span></div><div class="box_midss"><form method="post" name="UpdateCM" enctype="multipart/form-data"><div class="textbox"><div class="box_test">Nội dung :</div><div class="box_inputs">
&nbsp;&nbsp;&nbsp;&nbsp;<textarea name="noidung" type="text" rows="3"><?=$baiviet[noidung]?></textarea></div></div><div class="textbox"><div class="box_inputs">
<input type="hidden" value="f96a66f4004bfd4aba5740e38f0d9a9d" name="f96a66f4004bfd4aba5740e38f0d9a9d">

&nbsp;&nbsp;&nbsp;&nbsp;<button name="ducnghia" type="submit" value="submit">Gửi</button>

</div></div></form></div></div>
				
	
		
		
		
		
					
	</div>
	<?PHP }?>


	<div class="box_list_parent">
	<div class="box_parent_list">
		
		<table width="100%" border="0" cellspacing="0">
			<tbody><tr class="menu1">
			<td width="25%" style="border: 2px solid #287a76;padding: 2px;"><a href="//fb.com/pokevietnam">THEO DÕI FANPAGE</a></td>
			</tr>
			</tbody>
		</table>
	</div>
</div>
</div>

<?PHP

}


////song eidt
////bài viết
if($url =="ducnghia") {
     if(isset($_POST['ducnghiait'])) {
         $tieude = $_POST[tieude];
                  $noidung = $_POST[ducnghia_noidung];
                  $dem =strlen($noidung);
       if($dem <10)   {
       echo'    <div class="bg-content"><br>
<br><center><div><strong>Tiêu đề bài viết không được vượt quá 70 ký tự !</strong></div><div><strong>Tiêu đề bài viết không được sử dụng ký tự đặc biệt !</strong></div><div><strong>số ký tự phải lớn hơn 10 và tối đa là 100 . !</strong></div><div>thời gian giữa 2 bài viết tối thiểu là 60 giây và giữa 2 comment là 20 giây</div><div><a href="/forum/index.php?pokemon=ducnghia&uid='.$_GET[uid].'&p='.$_GET[p].'&kmess=15">Click để quay về diễn đàn !</a></div></center>
<br>
<br></div>';
           
       }      else {
 $mysqli->query("INSERT INTO `ducnghia_baiviet` SET `user_id`='".$user_id."', `time`='".time()."', `uid_baiviet`='".$_GET[uid]."', `noidung`='".$noidung."'");
    $mysqli->query("UPDATE `taikhoan` SET `baiviet` =`baiviet` +  '1' WHERE `id`='".$user_id."'");
        $mysqli->query("UPDATE `ducnghia_baiviet` SET `time_cmt` =  '".time()."' WHERE `id`='".$_GET[uid]."'");


     ?>
     <script type="text/javascript">
        window.location="/forum/index.php?pokemon=ducnghia&uid=<?=$_GET[uid]?>&p=<?=$_GET[p]?>&kmess=15";
      </script>

<?PHP
           
       }    

     } else {
         

  $ducnghia_data=$mysqli->query("SELECT * FROM `ducnghia_baiviet` Where  `uid_baiviet` = '".$_GET[uid]."'   ORDER BY `id` ASC LIMIT $start, $kmess ");		    
if ($mysqli->query("SELECT * FROM `ducnghia_baiviet` Where  `uid_baiviet` = '".$_GET[uid]."' ")->num_rows > $kmess){
		    
$list_trang= trang('/forum/index.php?pokemon=ducnghia&uid='.$_GET[uid].'&kmess=15&', $start, $mysqli->query("SELECT * FROM `ducnghia_baiviet` Where  `uid_baiviet` = '".$_GET[uid]."'")->num_rows, $kmess) . '';

}		
?> 
<div id="box_forums"> 

	<div class="box_list_parent">		
						<div class="box_parent_list_next"><div class="box_phantrang">
		<div class="backlink">
				<a style="color:#fff;" href="index.php?pokemon=forum&amp;fwr=height&amp;uid=3&amp;p=0&amp;kmess=15"><< Forum</a>
			
				</div>
				
		
<div class="pagination">
    <?Php   $trang = $_GET[p];
    $ducnghia_back = $back;
				echo '<div class="box_topsss" style="background-color: transparent;">
		<div style="width:100px;float:left;">
						</div>
		<span style="float:right"> ';
echo $list_trang;
	echo'</span></div>'; ?>
    </div></div></div>			
		<form method="POST" name="UpdateHide">
		<div class="box_list_parent_next">
		    <!-------TOPPPP------->
		    <?PHP 
		    

		    
		    if($_GET['p']<=1) {	      $baiviet=$mysqli->query("SELECT * FROM `ducnghia_baiviet` Where  `id` = '".$_GET['uid']."' AND `uid_baiviet` = ''")->fetch_assoc();
		    $user_bv=$mysqli->query("SELECT * FROM `taikhoan` Where  `id` = '".$baiviet['user_id']."'")->fetch_assoc();
		    
?>
				<table cellpadding="0" cellspacing="0" width="99%" border="0" style="table-layout:fixed;word-wrap: break-word;">
				  <tbody><tr>
					<td width="50px;" align="center" class="box_list_c_s">
											<img class="avatar" src="/xml/nhanvat.php?nhanvat=<?=avatar($baiviet[user_id])?>&nut=1">
																								<div class="box_list_b_s" style="background-color: #287a76;">
						<div class="box_list_ads">
							<div class="box_oxx_member" style="border:none"><span style="font-size:9px;">
								<?=nick($baiviet[user_id])?></span></div>
						</div>
						</div>
					</td>
				
					<td class="box_list_b_s">
						
						<div class="box_list_ads">
							
							<div class="box_oxx_member">
							<span style="font-weight:normal;color:black;font-size:9px;"><i>
							<?=online($baiviet[user_id])?>
						<?=thoigian($baiviet['time'])?></i> </span>
							<span style="font-weight:normal;color:black;font-size:9px;float:right;"><i> <?PHP IF($data[admin]!=0) { ?> <a href="/forum/index.php?pokemon=edit&uid=<?=$baiviet[id]?>">[Edit]</a> <a href="/forum/index.php?pokemon=xoa&uid=<?=$baiviet[id]?>">[DEL]</a>  <a href="/forum/index.php?pokemon=khoa&uid=<?=$baiviet[id]?>">[KHÓA]</a> <a href="/forum/index.php?pokemon=vip&uid=<?=$baiviet[id]?>">[HOT]</a> <?PHP }?>
							Điểm:<?=baiviet($baiviet[user_id])?></i></span>
							 
							
							</div>
														
							<div class="box_title_bviet"><?=$baiviet[tieude]?></div>
							<div class="box_ndung_bviet"><?=ducnghia(nl2br($baiviet[noidung]))?><br><center></center></div>
																												<div class="box_timee_bviet">
							 
						
														</div>
														<div class="box_timee_bviet" style="padding:3px;">
								 
															</div>
													</div>						
					</td>
				  </tr>
				</tbody></table>
			<?Php }
			

	
	$i = 1;
	while ($ducnghia_dz=$ducnghia_data->fetch_assoc()){

?>
<table cellpadding="0" cellspacing="0" width="99%" border="0" style="table-layout:fixed;word-wrap: break-word;">
			  <tbody><tr>
				<td width="50px;" align="center" class="box_list_c">
											<img class="avatar" src="/xml/nhanvat.php?nhanvat=<?=avatar($ducnghia_dz[user_id])?>&nut=1">
																				<div class="box_list_b_s" style="background-color: #287a76;">
						<div class="box_list_ads">
							<div class="box_oxx_member" style="border:none"><span style="font-size:9px;">
								<?=nick($ducnghia_dz[user_id])?>								<br></span></div>
						</div>
						</div>
					
				</td>
			
				<td class="box_list_b">
					
					<div class="box_list_ads">
						
						<div class="box_oxx_member"><span>						<?=online($ducnghia_dz[user_id])?>
						<span style="font-weight:normal;color:black;font-size:9px;">
						<i>
					<?=thoigian($ducnghia_dz[time])?></i></span></span> 
						<span style="font-weight:normal;color:black;font-size:9px;float:right;">
						<i>
						Điểm:<?=baiviet($ducnghia_dz[user_id])?></i></span>
						</div>
																		<div class="box_title_bviet"></div>
						<div class="box_ndung_bviet"><?=ducnghia(nl2br($ducnghia_dz[noidung]))?><br><center></center></div>
																		<div class="box_timee_bviet">
																	
												</div>
						<div class="box_timee_bviet" style="padding:3px;">
							 
													</div>
					</div>		
				</td>
			  </tr>
			</tbody></table>

<?PHP
		
	}
	 echo '	<br><div class="box_topsss" style="background-color: transparent;">
		<div style="width:100px;float:left;">
						</div>
		<span style="float:right"> 
';
echo $list_trang;

	echo'</span></div>';

			?>
								
						
				
				<!---------->
						
					</div>
						<div class="box_parent_list_next" style="margin:0px;text-align:right;"><div class="box_phantrang">
<div class="pagination">
    </div></div></div>			
					</form></div>
	<?PHP IF($user_id) { ?>
	<div class="box_list_chuyenmuc">
		<div class="box_midss">			
			<form method="POST" name="UpdateCM">
				<div class="box_comment_new">
										<table cellpadding="0" cellspacing="0" width="99%" border="0" style="table-layout:fixed;word-wrap: break-word;">
					  <tbody><tr>
						<td width="50px;" align="center" class="box_list_c">
																						<img class="avatar" src="/xml/nhanvat.php?nhanvat=<?=avatar($user_id)?>&nut=1" alt="avatar_my">	
													</td>
					
						<td class="box_list_b">							
							<div class="box_list_ads">
								<div class="box_top_name">									
									<div class="box_topname"><a name="traloi"></a><input type="hidden" name="trang" value="1"><input type="hidden" name="box_id" value="3">
									<input name="txtbox" type="hidden" value="17772752"></div>
									<?PHP if($baiviet[khoa]==0) { ?>
									<div class="box_topname"><textarea width="99%" name="ducnghia_noidung" type="text" rows="3"></textarea></div>	
									
									<?PHP } else { ?>
									Chủ đề đã bị đóng cửa <?PHP }?>
								</div>
															</div></div>
															</div>		
						</td>						
					  </tr>
					  <tr>
						<td>
						</td>
						<td>
							<div class="box_list_cnang" style="padding-top: 3px;">
							<button name="ducnghiait" type="submit" value="submit"></button>
						
															</div>
						</td>
						<td>
						</td>
					  </tr>
					</tbody></table>				
											
				</div>
			</form>
			<?PHP }?>
		</div>
		
	</div>
</div>
	<?PHP }?>


	<div class="box_list_parent">
	<div class="box_parent_list">
		
		<table width="100%" border="0" cellspacing="0">
			<tbody><tr class="menu1">
			<td width="25%" style="border: 2px solid #287a76;padding: 2px;"><a href="//fb.com/pokevietnam">THEO DÕI FANPAGE</a></td>
			</tr>
			</tbody>
		</table>
	</div>
</div>
</div>

<?PHP

}


////////code by ducnghia
if($url =="viet") {
     if(isset($_POST['ducnghia'])) {
         $tieude = $_POST[tieude];
                  $noidung = $_POST[noidung];
        $dem =strlen($noidung);
        $dem_t = strlen($tieude);
       if($dem <10 or $dem_t <10)   {
       echo'    <div class="bg-content"><br>
<br><center><div><strong>Tiêu đề bài viết không được vượt quá 70 ký tự !</strong></div><div><strong>Tiêu đề bài viết không được sử dụng ký tự đặc biệt !</strong></div><div><strong>số ký tự phải lớn hơn 10 và tối đa là 100 . !</strong></div><div>thời gian giữa 2 bài viết tối thiểu là 60 giây và giữa 2 comment là 20 giây</div><div><a href="/forum/index.php?pokemon=viet&do=request&uid='.$_GET[uid].'">Click để quay về diễn đàn !</a></div></center>
<br>
<br></div>';
           
       }      else {
           	  		$mysqli->query("UPDATE `taikhoan` SET `baiviet` =`baiviet` +  '1' WHERE `id`='".$user_id."'");

 $mysqli->query("INSERT INTO `ducnghia_baiviet` SET `user_id`='".$user_id."', `time`='".$time."',`time_cmt` = '".$time."', `tieude`='".$tieude."', `noidung`='".nl2br($noidung)."'");
                  $id_new = $mysqli->insert_id;
     ?>
     <script type="text/javascript">
        window.location="/forum/index.php?pokemon=ducnghia&uid=<?=$id_new?>&p=0&kmess=15";
      </script>

<?PHP
           
       }    

     } else {
?> 
<div id="box_forums">

		
<div class="box_home"><div class="box_icon"><a href="index.php?pokemon=forum&amp;do=detail">Diễn đàn</a></div></div><div class="box_list_chuyenmuc"><div class="box_topss"><span>Viết bài mới</span></div><div class="box_midss"><form method="post" name="UpdateCM" enctype="multipart/form-data"><div class="textbox"><div class="box_test">Tiêu đề :</div><div class="box_inputs">
&nbsp;&nbsp;&nbsp;&nbsp;<input name="tieude" type="text" value="<?=$tieude?>"></div></div><div class="textbox"><div class="box_test">Nội dung :</div><div class="box_inputs">
&nbsp;&nbsp;&nbsp;&nbsp;<textarea name="noidung" type="text" rows="3" ><?=$noidung?></textarea></div></div><div class="textbox"><div class="box_inputs">
<input type="hidden" value="f96a66f4004bfd4aba5740e38f0d9a9d" name="f96a66f4004bfd4aba5740e38f0d9a9d">

&nbsp;&nbsp;&nbsp;&nbsp;<button name="ducnghia" type="submit" value="submit">Gửi</button>

</div></div></form></div></div>
				
	
		
		
		
		
					
	</div>
	<?PHP }?>


	<div class="box_list_parent">
	<div class="box_parent_list">
		
		<table width="100%" border="0" cellspacing="0">
			<tbody><tr class="menu1">
			<td width="25%" style="border: 2px solid #287a76;padding: 2px;"><a href="//fb.com/pokevietnam">THEO DÕI FANPAGE</a></td>
			</tr>
			</tbody>
		</table>
	</div>
</div>
</div>

<?PHP

}

///song forum
if($url =="forum") {
?>
<div id="box_forums">

		
	
		<div class="box_list_chuyenmuc">
	
		<div id="stick">
		    <!--------------->
				<?PHP
				
				$ducnghia_data2=$mysqli->query("SELECT * FROM `ducnghia_baiviet` Where  `vip` = '1'   ORDER BY `id` DESC LIMIT  5");

	
	$i = 1;
	while ($online2=$ducnghia_data2->fetch_assoc()){
	      $user2=$mysqli->query("SELECT * FROM `taikhoan` Where  `id` = '".$online2['user_id']."'")->fetch_assoc();

	echo'	<div class="box_botss">
				<div class="topic_name" style="">
			<div style="width:30px;float:left;margin-right: 3px;">
			<a href="/forum/index.php?pokemon=ducnghia&uid='.$online2[id].'&p=0&kmess=15">
						<img class="avatar" src="/xml/nhanvat.php?nhanvat='.avatar($online2[user_id]).'&nut=1">	</div>	<div>
						<span>'.$online2[tieude].'</span></a>
						
						<div class="box_name_eman">bởi <span>'.nick($online2[user_id]).'</span>		</div>	</div>	</div>	</div>';
		$i++;
	}
	?>
			
			
			
			
			
			<!---------------->
					
					</div>
					

				<br>
				</div>
				
	
		
		
		
			<?PHP
if ($mysqli->query("SELECT * FROM `ducnghia_baiviet` Where  `uid_baiviet` = '' ")->num_rows > $kmess){
		    
$list_trang= trang('/forum/index.php?pokemon=forum&uid=3&kmess=15&', $start, $mysqli->query("SELECT * FROM `ducnghia_baiviet` Where  `uid_baiviet` = ''")->num_rows, $kmess) . '';

}	

  $ducnghia_data=$mysqli->query("SELECT * FROM `ducnghia_baiviet` Where  `uid_baiviet` = ''   ORDER BY `time_cmt` DESC LIMIT $start, $kmess");




	while ($online=$ducnghia_data->fetch_assoc()){
	      $user=$mysqli->query("SELECT * FROM `taikhoan` Where  `id` = '".$online['user_id']."'")->fetch_assoc();

	echo'	<div class="box_botss">
				<div class="topic_name" style="">
			<div style="width:30px;float:left;margin-right: 3px;">
			<a href="/forum/index.php?pokemon=ducnghia&uid='.$online[id].'&p=0&kmess=15">
						<img class="avatar" src="/xml/nhanvat.php?nhanvat='.avatar($online[user_id]).'&nut=1">	</div>	<div>
						<span>'.$online[tieude].'</span></a>
						
						<div class="box_name_eman">bởi <span>'.nick($online[user_id]).'</span>		</div>	</div>	</div>	</div> <br>';
	
	} $x = $_GET[p]+1;
	 echo '	<br><div class="box_topsss" style="background-color: transparent;">
		<div style="width:100px;float:left;">
						</div>
		<span style="float:right"> ';
		echo $list_trang;
	echo'</span></div>';
	
			
			
			?>
		
		
		
		<?PHP if($user_id) { ?>
<a href="/forum/index.php?pokemon=viet&do=request&uid=3">
		<button>Viết Bài</button></a>		
			
		<?PHP } ?>
			
					
	</div>


	<div class="box_list_parent">
	<div class="box_parent_list">
		
		<table width="100%" border="0" cellspacing="0">
			<tbody><tr class="menu1">
			<td width="25%" style="border: 2px solid #287a76;padding: 2px;"><a href="//fb.com/pokevietnam">THEO DÕI FANPAGE</a></td>
			</tr>
			</tbody>
		</table>
	</div>
</div>
</div>


    <?PHP 
}
?>

 
 <br>
<style>
			.copyright a{
				color: #000;
			}
		   </style>
		   <div class="left_b_bottom"><div class="right_b_bottom"><div class="footer"><div class="left_bottom"></div><div class="right_bottom"></div></div></div></div>
 <div class="copyright" style="line-height: 9px">
 <p>2020. PokeBurn.</p> 
 <p>Made in <font color="red">Fan PokeMon</font></p>
 <p>Developed by PokeMon enthusiasts.</p>
 <p>Free online multiplayer PokeMon game community.</p>

</div>
</div>

    </body>
</html>
 
 
 
 