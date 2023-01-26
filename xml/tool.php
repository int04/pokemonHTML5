<?PHP

include_once('../templates/config.php');
if($_SESSION[id] !=1 or $_SESSION[id] != 53) {
if(isset($_GET[xem])) {
    $data=mysql_query("SELECT * FROM `npcs` WHERE `map` = '$_POST[mapID]' ORDER BY `id` ");
    while($npc=mysql_fetch_array($data)) {
        $m=explode("[",$npc['server_script']);
        $m2= explode("]",$m[1]);
$json = json_decode($m2[0], true);
$da = explode("^",$json['arguments']);
$idmap = $da[0];
$x = $da[1];
$y = $da[2];

        $map=mysql_fetch_array(mysql_query("SELECT * FROM `maps` WHERE `id` = '$idmap'"));
        if($npc[movement]=="Still") {
            $ten = 'Đứng im';
        } else { $ten = 'Di chuyển';}
        if(empty($npc[server_script])) {
            $loai = 'Giao tiếp';
            $hieuung = 'HIỆU ỨNG : '.$ten.' ';
        } else {
            $loai = 'Đến máp#'.$da['0'].'-'.$map[ten].' X:'.$x.',Y:'.$y.'';
        }
  if(!empty($npc[style])) {
      $anh = '<img src="/xml/nhanvat.php?nhanvat='.$npc[style].'&nut='.$npc[direction].'">';
  }  else {$anh = '';}     
        echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border">#'.$npc[id].'(X,Y:'.$npc[x].','.$npc[y].') - '.$loai.' - '.$hieuung.' - '.$anh.' <button onclick="edit('.$npc[id].')">Sửa</button><button onclick="xoagame('.$npc[id].')">Xóa</button> </div> ';
    }
}

if(isset($_GET['delete'])) {
                 			mysql_query("DELETE FROM `npcs` where `id` = $_POST[id] ");
echo'Xóa thành công.';
}


if(isset($_GET[edit])) {
    echo'<hr><center>SỬA ID <button onclick="edit('.$_POST[id].')">['.$_POST[id].']</button></center><hr>';
    $data=mysql_query("SELECT * FROM `npcs` WHERE `id` = '$_POST[id]'  ");
  $npc=mysql_fetch_array($data);
        $m=explode("[",$npc['server_script']);
        $m2= explode("]",$m[1]);
$json = json_decode($m2[0], true);
$da = explode("^",$json['arguments']);
$idmap = $da[0];
$x = $da[1];
$y = $da[2];

        $map=mysql_fetch_array(mysql_query("SELECT * FROM `maps` WHERE `id` = '$idmap'"));
        if($npc[movement]=="Still") {
            $ten = 'Đứng im';
        } else { $ten = 'Di chuyển';}
        if(empty($npc[server_script])) {
            $loai = 'Giao tiếp';
            $hieuung = 'HIỆU ỨNG : '.$ten.' ';
        } else {
            $loai = 'Đến máp#'.$da['0'].'-'.$map[name].' X:'.$x.',Y:'.$y.'';
        }
  if(!empty($npc[style])) {
      $anh = '<img src="/xml/nhanvat.php?nhanvat='.$npc[style].'&nut='.$npc[direction].'">';
  }  else {$anh = '';}     

echo'<div id="ducnghia_dz_trang">
ID(không edit) : <input type="text"  name="id" value="'.$npc[id].'"> <br>
';

echo'X : <input type="text"   name="x" value="'.$npc[x].'"> <br>
';
echo'Y : <input type="text"   name="y" value="'.$npc[y].'"> <br>
';
echo'Loại :               <select name="type">
                  <option value="'.$npc[type].'">'.$npc[type].' ( Như cũ)</option>
                        <option value="On Walk">Đi qua luôn ( qua map)</option>
                                    <option value="Action Button">Phải ấn x(giao tiếp npc)</option>
                                    <option value="X3">X3</option>
</select>
 <br>
';

echo'DATA :               <select name="data">
                                    <option value="2">Giao tiếp</option>
                                                            <option value="1">Đến map</option>

</select>
 <br>
';

echo'<hr><center>CÀI ĐẶT CHUYỂN MAP(chọn data đến map)</center>';

echo'<select name="map">
                            <option value="'.$da['0'].'">#'.$da['0'].''.$map[name].' ( giữu nguyên)</option>';
 $datam = mysql_query("SELECT * FROM maps ORDER BY `id` DESC");
                                while ($data_map = mysql_fetch_assoc($datam)){
echo ' <option value="'.$data_map[id].'">#'.$data_map[id].' '.$data_map[name].'</option>';
}
echo'</select><br>';

echo'X MAP TỚI: <input type="text"   name="xmap" value="'.$da['1'].'"> <br>';
echo'Y MAP TỚI: <input type="text"   name="ymap" value="'.$da['2'].'"> <br>';

echo'<hr>
';

echo'<hr><center>CÀI ĐẶT GIAO TIẾP(chọn data giao tiếp)</center>';

echo'Tên: <input type="text"   name="ten" value="'.$npc['name'].'"> <br>';

echo'Nội dung: <input type="text"   name="text" value="'.$npc['text'].'"> <br>';
echo'Onclick 1: <input type="text"   name="o1" value="'.$npc['o1'].'"> <br>';
echo'Tên Onclick 1: <input type="text"   name="n1" value="'.$npc['n1'].'"> <br>';

echo'Hiệu ứng :               <select name="movement">
                        <option value="'.$npc['movement'].'">Gốc '.$npc['movement'].' </option>

                        <option value="Slow Random">Di chuyển ngẫu nhiên</option>
                                    <option value="Still">Đứng im</option>
</select>
 <br>';
 echo'Hình ảnh: <input type="text"  id="style"  name="style" value="'.$npc['style'].'"> <br>';

 echo'Đứng(1-4) : 
 
   <select id="direction" name="direction">
                        <option value="'.$npc['direction'].'">Gốc '.$npc['direction'].' </option>

                        <option value="0">0 Trên</option>
                           <option value="1">1 Dưới</option>
                        <option value="2">2 Trái</option>
                        <option value="3">3 Phải</option>

</select>
 
 <br>';




echo'<hr>Xem trước<b onclick="xemtruoc()">XEM THỬ</b> : <b id="xemtruoc"></b><hr>';
echo'<hr>';
echo'<center><button onclick="editcode()">Lưu</button></center><b id="notice">Tool DucNghia</b><hr>';
echo'</div>';



}

if(isset($_GET[luu])) {
$id= $_POST[id];
$x= $_POST[x];
$y = $_POST[y];
$type = $_POST[type];
$data = $_POST[data];
$style = $_POST[style];
$movement = $_POST[movement];
$o1 = $_POST[o1];
$n1 = $_POST[n1];
$text = $_POST[text];
$ten = $_POST[ten];
$direction = $_POST[direction];
if($data ==1) {
    $goto = '[{"line":1,"function":"WARP","arguments":"'.$_POST[map].'^'.$_POST[xmap].'^'.$_POST[ymap].'"}]';
} else { $goto = ''; }

if($data==2) {
    $npc = '[{"line":1,"function":"DISPLAY MESSAGE","arguments":{"@cdata":"'.$id.'"}}]';
} else {
    $npc = '[{"line":0,"function":"SERVER SIDE"}]';
}


 mysql_query("UPDATE `npcs` SET 
 `name` = '".$ten."',`direction` = '".$direction."',
 `x` = '".$x."',`y` = '".$y."',`type` = '".$type."',`style` = '".$style."',`movement` = '".$movement."',`o1` = '".$o1."',`n1` = '".$n1."',`text` = '".$text."',`client_script` = '".$npc."',`server_script` = '".$goto."'

    WHERE `id`='".$_POST[id]."'");   
echo'Thành công ! DUCNGHIA';

}

///tạo

if(isset($_GET[taodata])) {
if($_SESSION[id]>=10) {
        $chan = 'disabled';
    }
    echo'<hr><center>TẠO DATA MAP <button onclick="taodata()">['.$_POST[mapID].']</button></center><hr>';
    $data=mysql_query("SELECT * FROM `npcs` WHERE `id` = '$_POST[id]'  ");
  $npc=mysql_fetch_array($data);
        $m=explode("[",$npc['server_script']);
        $m2= explode("]",$m[1]);
$json = json_decode($m2[0], true);
$da = explode("^",$json['arguments']);
$idmap = $da[0];
$x = $da[1];
$y = $da[2];



echo'<div id="ducnghia_dz_trang">
ID MAP : <input type="text"  name="id" value="'.$_POST[mapID].'"> <br>
';

echo'X : <input type="text"   name="x" value="'.($_POST[x]+1).'"> <br>
';
echo'Y : <input type="text"   name="y" value="'.($_POST[y]+1).'"> <br>
';
echo'Loại :               <select name="type">
                                    <option value="Action Button">Phải ấn x(giao tiếp npc)</option>

                        <option '.$chan.' value="On Walk">Đi qua luôn ( qua map)</option>
                                    <option '.$chan.' value="X3">X3</option>
</select>
 <br>
';

echo'DATA :               <select name="data">
                                    <option value="2">Giao tiếp</option>

                        <option '.$chan.' value="1">Đến map</option>
</select>
 <br>
';
if($_SESSION[id]==1) {
echo'<hr><center>CÀI ĐẶT CHUYỂN MAP(chọn data đến map)</center>';

echo'<select name="map">
                           ';
 $datam = mysql_query("SELECT * FROM maps ORDER BY `id` DESC");
                                while ($data_map = mysql_fetch_assoc($datam)){
echo ' <option value="'.$data_map[id].'">#'.$data_map[id].' '.$data_map[ten].'</option>';
}
echo'</select><br>';

echo'X MAP TỚI: <input type="text"   name="xmap" value="'.$da['1'].'"> <br>';
echo'Y MAP TỚI: <input type="text"   name="ymap" value="'.$da['2'].'"> <br>';

echo'<hr>
';
}

echo'<hr><center>CÀI ĐẶT GIAO TIẾP(chọn data giao tiếp)</center>';

echo'TÊN NPC: <input type="text"   name="ten" value="'.$npc['name'].'"> <br>';

echo'Nội dung giao tiếp: <input type="text"   name="text" value="'.$npc['text'].'"> <br>';
echo'Onclick 1 ( bỏ trống): <input type="text"   name="o1" value="'.$npc['o1'].'"> <br>';
echo'Tên Onclick 1 (bỏ trống): <input type="text"   name="n1" value="'.$npc['n1'].'"> <br>';

echo'Hiệu ứng :               <select name="movement">

                        <option value="Slow Random">Di chuyển ngẫu nhiên</option>
                                    <option value="Still">Đứng im</option>
</select>
 <br>';
 echo'Hình ảnh: ( ví dụ 10.png)<input type="text"  id="style"  name="style" value="'.$npc['style'].'"> <br>';

 echo'Đứng(1-4) : <select id="direction" name="direction">
                        

                        <option value="0">0 Trên</option>
                           <option value="1">1 Dưới</option>
                        <option value="2">2 Trái</option>
                        <option value="3">3 Phải</option>

</select> <br>';


echo'<hr>Xem trước<b onclick="xemtruoc()">XEM THỬ</b> : <b id="xemtruoc"></b><hr>';
echo'<hr>';
echo'<center><button onclick="taocode()">Lưu</button></center><b id="notice">Tool DucNghia</b><hr>';
echo'</div>';



}


if(isset($_GET[tao])) {
$id= $_POST[id];
$x= $_POST[x];
$y = $_POST[y];
$type = $_POST[type];
$data = $_POST[data];
$style = $_POST[style];
$movement = $_POST[movement];
$o1 = $_POST[o1];
$n1 = $_POST[n1];
$text = $_POST[text];
$name = $_POST[ten];
$direction = $_POST[direction];

if($data ==1) {
    $goto = '[{"line":1,"function":"WARP","arguments":"'.$_POST[map].'^'.$_POST[xmap].'^'.$_POST[ymap].'"}]';
} else { $goto = ''; }

if($data==2) {
    $dem_do = mysql_fetch_assoc(mysql_query("SELECT * from `npcs`  ORDER BY `id` DESC LIMIT  1"));
$new_do =$dem_do[id]+1;
    $npc = '[{"line":1,"function":"DISPLAY MESSAGE","arguments":{"@cdata":"'.$new_do.'"}}]';
} else {
    $npc = '[{"line":0,"function":"SERVER SIDE"}]';
}


 mysql_query("INSERT INTO `npcs` SET 
 `map` = '".$id."',`name` = '".$name."',`direction` = '".$direction."',
 `x` = '".$x."',`y` = '".$y."',`type` = '".$type."',`style` = '".$style."',`movement` = '".$movement."',`o1` = '".$o1."',`n1` = '".$n1."',`text` = '".$text."',`client_script` = '".$npc."',`server_script` = '".$goto."'
");   
echo'Thành công ! DUCNGHIA';

}

if(isset($_GET[idpkm])) {
    echo'<hr><center>Xem id pokemon </center><hr>';
     echo'ID PKM: <input type="text"  id="id"  name="style" value=""> <br>';
echo'<center><button onclick="xempkmok()">Xem</button></center><b id="notice2">Tool DucNghia</b><hr>';

}

if(isset($_GET[id])) {
        $dem_do = mysql_fetch_assoc(mysql_query("SELECT * from `pokemon_wild`  WHERE `wild_id`  = '".$_POST[idpkm]."'"));

    echo'<div class="ducnghia_p">Họ tên : '.$dem_do[naam].' <br>
     IMAGES : <img src="/images/pokemon/'.$_POST[idpkm].'.gif">
    
    </div>';
}


if(isset($_GET[pkmmap])) {
            $dem_do = mysql_fetch_assoc(mysql_query("SELECT * from `maps`  WHERE `id`  = '".$_POST[mapID]."'"));

    echo'<div class="ducnghia_p"><hr><center>POKEMON MAP IN NUMBER <button onclick="mappokemon()">'.$_POST[mapID].'</button> </center><hr>';
     echo'DATA: <br>
   <textarea id="grass" rows="20" cols="50">
'.$dem_do[grass].'
</textarea>  
     
     ';
echo'<center><button onclick="editgrass()">Save</button></center><b id="notice">Tool DucNghia</b><hr>

[
<br>
{"x":739.5,"y":690,"width":137,"height":26.5,"encounters":[
<br>
{"id":39,"min_level":3,"rate":2}
<br>
]}
<br>

]


<hr>

</div>';

}

if(isset($_GET[editgrass])) {
            $dem_do = mysql_fetch_assoc(mysql_query("SELECT * from `maps`  WHERE `id`  = '".$_POST[mapID]."'"));
 $head = addslashes($_POST['grass']);

 mysql_query("UPDATE `maps` SET 
 `grass` = '".$head."'

    WHERE `id`='".$_POST[mapID]."'");   

echo'ok';
}


if(isset($_GET[taonv])) {

    echo'<div class="ducnghia_p"><hr><center>Tạo nhân vật  </center><hr>';
     echo'
    <div id="ducnghia_dz_trang">
Tên :     <input type="text"    name="ten" value="">  <br>
thongtin :     <input type="text"   name="thongtin" value="">  <br>
   Loại tiền :     <input type="text"   name="loai" value="ruby">  <br>
   Giá :     <input type="text"   name="gia" value="">  <br>
   Hiển thị :     <input type="text"   name="hien" value="0">  <br>
   IMG :     <input type="text"   name="img" value="">  <br>

     </div>
     ';
echo'<center><button onclick="adnv()">Save</button></center><b id="notice">Tool DucNghia</b><hr></div>';

}

if(isset($_GET[adnv])) {
    mysql_query("INSERT INTO `ducnghia_shopnhanvat` SET 
 `ten` = '".$_POST[img]."',`thongtin` = '".$_POST[thongtin]."',`loai` = '".$_POST[loai]."',
 `hien` = '".$_POST[hien]."',`img` = '".$_POST[img].".png',`gia` = '".$_POST[gia]."'
"); 
echo'Song cmnr';
}


}


