<?PHP

$id = $_POST[id];
$t = $_POST[c];
if($id ==0) {
    $p = new user($_SESSION['id']);
    $id = $p->id;
} else {
    $p = new user($id);
$id = $p->id;
}

$men = mysql_fetch_array( mysql_query("select * FROM `ducnghia_giatoc_thanhvien` WHERE `uid` = '".$p->id."'"));

         $giatoc = mysql_fetch_array( mysql_query("select * FROM `ducnghia_giatoc` WHERE `id` = '$men[giatoc]'"));
         if($p->giatoc ==0) {
             $xin='<font color="red"><b onclick="xin_giatoc('.$giatoc[id].')">['.t('Xin vào gia tộc').']</b></font>';
         }
       if($giatoc[id] !=0) {
           $ten_gt = '<b>'.t('Gia tộc').''.$xin.':</b>  <i style="color:#000000">'.$giatoc[ten].'<img src="/images/giatoc/'.$giatoc[icon].'.png"></i><br>';
       } 
$h0 = '<img src="/xml/nhanvat.php?nhanvat='.$p->sprite.'&nut=1"> '.$p->username.'#'.$p->id.' <br> 
'.t('Cấp độ').' '.$p->level.'+'.tron($cso).'% 
<span class="trai">('.tron($p->{'exp'}).'/'.tron($p->{'expmax'}).')</span> <br>
'.$ten_gt.'
';

///nhiệm vụ

///done

///đội hình
if($t=="1"){
    $select_pkm = mysql_query("SELECT * FROM `pokemon`  WHERE `uid` = '".$p->id."' AND `type` = 'bag' ");
	  
      //Pokemons opzak weergeven op het scherm
      while($whilepkm = mysql_fetch_assoc($select_pkm)){
        $po = new  pokemon($whilepkm[id]);
        
      $cvv.= '<div class="border" onclick="view_pkm(\''.$po->id.'\');"> <div  class="showitem" style="border: 2px solid;"><img src="/xml/nhanvat.php?nhanvat='.$po->chiso->img.'&nut=1" ><div class="count count-vp-1">lv.'.$po->chiso->level.'+'.($po->chiso->{'exp'}/$po->chiso->{'expmax'}*100).'% </div></div>'.$po->chiso->ten.'  HP : '.$po->chiso->hp.'/'.$po->chiso->hpfull.' </div>';
}
$c = $cvv;
}

///done
///túi đồ
if($t==3) {
    foreach ($p->vatpham as $abccc => $soluong) {
        
    if($soluong>0 AND $abccc>=1) {
				    $ab .= '<div class="border" onclick="xemshopvatpham(\''.$abccc.'\');"> <div  class="showitem" style="border: 2px solid;"><img src="/images/_/'.$abccc.'.png" ><div class="count count-vp-1">'.$soluong.' </div></div>'.t(''.shopvatpham($abccc).'').'</div>';
}
					}
					
		$c = $ab;			
}



///done

///gia tộc

if($t==4) {
   

    if($p->giatoc ==0) {
$ducnghia_gt=mysql_query("SELECT * FROM `ducnghia_giatoc` ORDER BY RAND() LIMIT 10 ");
    while($list_gd=mysql_fetch_array($ducnghia_gt)) {
        $c.='#'.$list_gd[ten].'<img src="/images/giatoc/'.$list_gd[icon].'.png">
         - Lv.'.$list_gd[level].' - Tv : '.mysql_result(mysql_query("SELECT COUNT(*) FROM `ducnghia_giatoc_thanhvien` WHERE `giatoc` = '$list_gd[id]' "), 0).' <font color="red"><b onclick="xin_giatoc('.$list_gd[id].')">['.t('Xin vào').']</b></font>
        
        <div class="kengang"></div>';
    }
    }
    else {
                 $men = mysql_fetch_array( mysql_query("select * FROM `ducnghia_giatoc_thanhvien` WHERE `uid` = '$user_id'"));

         $giatoc = mysql_fetch_array( mysql_query("select * FROM `ducnghia_giatoc` WHERE `id` = '$men[giatoc]'"));

if($giatoc[toctruong] == $user_id) {
    $xin = '<font color="red"><b onclick="giatoc_danhsachxin()">'.t('Danh sách xin vào gia tộc').'('.mysql_result(mysql_query("SELECT COUNT(*) FROM `ducnghia_giatoc_xin` WHERE `giatoc` = '".$p->giatoc."' "), 0).')</b></font>';
} else {
        $xin = '<font color="red"><b onclick="giatoc_roi()">'.t('Rời gia tộc').'</b></font>';

}

$c.='
<div class="infobox noborder">
<n3>'.t('Tên gia tộc').':</n3> <n4 style="color:#737373">'.$giatoc[ten].' <img src="/images/giatoc/'.$giatoc[icon].'.png"></n4> <br>
<n3>'.t('Người lãnh đạo').':</n3> <n4 style="color:#737373">'.nick($giatoc[toctruong]).'</n4> <br>
<n3>'.t('Tài sản').':</n3> <n4 style="color:#737373">'.tron($giatoc[xu]).' Xu + '.tron($giatoc[ruby]).' ruby</n4> <br>
<n3>'.t('Cấp độ').'.<font color="blue">'.$giatoc[level].'</font></n3><n4 style="color:#737373">  exp:'.tron($giatoc[exp]).'/'.tron($giatoc[expmax]).'</n4> <br>
<n3>'.t('Phí nâng cấp').':</n3> <n4 style="color:#737373">'.tron($xu_toc[$giatoc[level]+1]).' Xu + '.tron($ruby_toc[$giatoc[level]+1]).' ruby</n4> <br>

'.$xin.'
</div>
';
$c.='<hr><center>'.t('Thành viên').'</center> <hr>';
$men_gt=mysql_query("SELECT * FROM `ducnghia_giatoc_thanhvien` WHERE `giatoc` = '$giatoc[id]' ORDER BY `id` ");
    while($l_gt=mysql_fetch_array($men_gt)) {
        if($giatoc[toctruong] == $user_id AND $l_gt[uid] != $user_id) {
            $kich = '<font color="red"><b onclick="giatoc_kick('.$l_gt[uid].')">'.t('Đuổi khỏi gia tộc').'</b></font>';
        }
                     $user_xin = mysql_fetch_array( mysql_query("select * FROM `users` WHERE `user_id` = '$l_gt[uid]'"));

        $c.='
        #'.nick($l_gt[uid]).' - '.t('Cống hiến').' : '.tron($user_xin[conghien]).'  '.$kich.'
        <div class="kengang"></div>';
    }

    }
}

if($t==5) {

   if($id == $p->id) {
      
    $c.='<div class=" menu list" onclick="edit_info()">'.t('Đổi mật khẩu').'</div>';
    
     $c.=' <center>'.t('Tài khoản').' : '.$p->taikhoan.' <br> '.t('Nhân vật').' : '.$p->username.' <br> '.t('máy chủ').' : '.$p->sv.'</center>';
} else {
    $c .= '<div class="menu list" onclick="openchat('.$p->id.');">'.t('Gửi thư').'</div>  ';
                            $c .= '<div class="menu list" onclick="ketban('.$p->id.');">'.t('Kết bạn').'</div>';
                            $c .= '<div class="menu list" onclick="daupk('.$p->id.');">PVE</div>'; 
} 


}
///done
if($id == $p->id) {
    $q .=';'.t('Nhiệm vụ').':game_nhiemvu();'.t('túi đồ').':game_tuido()';
}
$h='PokeMon:users(\''.$id.'\',1)'.$q.';'.t('Gia tộc').':users(\''.$id.'\',4);'.t('Menu').':users(\''.$id.'\',5) ';
$j[head0]= $h0;

$j[head]= $h;
$j[center]  = $c;
echo json($j);