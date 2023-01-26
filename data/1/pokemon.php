<?PHP

$id = $_POST[id];
$t = $_POST[c];
if($id ==0) {
  
} else {
    $p = new pokemon($id);
$id = $p->id;
}



$h0 = '<img src="/xml/nhanvat.php?nhanvat='.$p->chiso->img.'&nut=1"> '.$p->chiso->ten.'#'.$p->id.' <br> 
'.t('Cấp độ').' '.$p->chiso->level.'+'.tron($p->chiso->{'exp'}/$p->chiso->expmax*100).'% 
<span class="trai">('.tron($p->chiso->{'exp'}).'/'.tron($p->chiso->{'expmax'}).')</span>

';


if($t==0) {
  
$c.='';
  $c.=' <span style="position: absolute;left:10%;">
  
  HP : '.tron($p->chiso->hp).'/'.tron($p->chiso->hpfull).' <br>
  Giáp : '.tron($p->chiso->giap).' <br>
  Xuyên giáp : '.tron($p->chiso->xuyengiap).'% <br>
  Kháng vật lí : '.tron($p->chiso->kvl).' <br>
  Giảm hồi chiêu : '.tron($p->chiso->tocdo).' milis <br>
  Công vật lí : '.tron($p->chiso->vatli).'  <br>
  Công phép : '.tron($p->chiso->phep).'  <br>
  Tỉ lệ chí mạng : '.tron($p->chiso->chimang).'%  <br>




  
  
  </span> ';
}

if($t==1) {
    foreach ($p->kinang as $name => $data) {
        
        $skill = sd($p->id,$name);

    
				  $tx = ''.$skill->ten.' (<font color=red>'.$skill->thuoc.'</font>) <br> '.$skill->mota.' <br> Sát thương : '.$skill->damegoc.' ~ '.$skill->damegoc*1.5.' <br> Thời gian hồi : '.$skill->thoigian.' milis <br> Mp cần : '.$skill->mp.' ';
$c.='<div class="border" onclick="giaotiep(\''.$tx.'\')"> <div  class="showitem" style="border: 2px solid;"><img src="" ><div class="count count-vp-1">lv.'.$data->level.'+'.tron($data->{'exp'}/$data->expmax*100).'%   </div></div>'.$skill->ten.'</div>';


					}
					if($p->id == $user->pokemon) {
					$c.='<center><button onclick="game_kinang()">DÁN KĨ NĂNG LÊN MÀN HÌNH</button></center>';
					}
}


if($t==2) {
    $c = 'Tính năng đang phát triển.';
}



///done



///done

$h=''.t('Cơ bản').':view_pkm(\''.$id.'\',0);'.t('kĩ năng').':view_pkm(\''.$id.'\',1)'.$q.';'.t('Trang bị').':view_pkm(\''.$id.'\',2);'.t('Menu').':users(\''.$id.'\',5) ';
$j[head0]= $h0;

$j[head]= $h;
$j[center]  = $c;
echo json($j);