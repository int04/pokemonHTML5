<?PHP

include_once('../templates/config.php');
include_once('../templates/ducnghia.php');

if($user_id !=1) {
    echo'BẠN CHƯA DỦ QUYỀN';
    exit();
}

    if(isset($_GET[admin])) {
        echo'<center>Trong game cũng có thể gõ <b>admin</b></center>';
                echo'<button onclick="cp_chon(\'thuong\')">KILL POKEMON</button> <br>';

        echo'<button onclick="cp_chon(\'pokemon\')">ADD POKEMON</button> <br>';
        echo'<button onclick="cp_chon(\'vatpham\')">ADD vatpham</button> <br>';
           echo'<button onclick="cp_chon(\'xu\')">SET Xu,Ruby</button> <br>';
                echo'<button onclick="cp_chon(\'npc\')">DAnh sách ID NPC</button> <br>';
          echo'<button onclick="cp_chon(\'saochep\')">Sao chép NPC.</button><br>';
          
          echo'<button onclick="cp_chon(\'them\')">Thêm Battel.</button><br>';
          echo'<button onclick="cp_chon(\'code\')">Giftcode.</button><br>';

      echo'<hr>';
echo'<br> - Người chơi : ' .number_format(mysql_result(mysql_query("SELECT COUNT(*) FROM `users`"), 0)) . ' ';      
echo'<br> - PokeMon : ' .number_format(mysql_result(mysql_query("SELECT COUNT(*) FROM `pokemon_speler`"), 0)) . ' ';      
echo'<br> - Xu : ' .number_format(mysql_result(mysql_query("SELECT SUM(xu) FROM `users`"), 0)) . ' ';      
echo'<br> - Ruby : ' .number_format(mysql_result(mysql_query("SELECT SUM(ruby) FROM `users`"), 0)) . ' ';  
$tran = mysql_result(mysql_query("SELECT SUM(thang) FROM `users`"), 0)+mysql_result(mysql_query("SELECT SUM(thua) FROM `users`"), 0); 
echo'<br> - Trận : ' .number_format($tran) . ' ';      

      
    }

if(isset($_GET[thuong])) {
    $text = ''.$_POST[xu].'^'.$_POST['exp'].'^'.$_POST[vatpham].'';
   						mysql_query("UPDATE `m` SET `thuong` = '" . $text . "' WHERE `nhom` = '" . $_POST[nhom] . "'");
   						echo $text;

}

if(isset($_GET[tool])) {
    if($_POST[name]=="thuong") {
    echo'<div id="admin">
    <BR><BR><BR><BR><BR>
#NHÓM : <input type="text"  name="nhom" value="">  <br>
#XU:TỈ LỆ : <input type="text"  name="xu" value="0:0">  <br>
#EXP: <input type="text"  name="exp" value="0">  <br>
#VẬT PHẨM (IDVP:SL) : <input type="text"  name="vatpham" value="">  <br>



</div>

<center><button onclick="adminad(\'thuong\')">ADD</button></center>
';    

    }
    if($_POST[name]=="pokemon") {
    echo'<div id="admin">
    <BR><BR><BR><BR><BR>
#ID TV : <input type="text"  name="users" value="">  <br>
PokeMon : <input type="text"  name="pokemon" value="">  <br>
Cấp độ : <input type="text"  name="level" value=""> 


</div>

<center><button onclick="adminad(\'addpkm\')">ADD POKEMON</button></center>
';    

    }
    
if($_POST[name]=="khoa") {
    echo'<div id="admin">
    <BR><BR><BR><BR><BR>
#ID TV : <input type="text"  name="users" value="">  <br>
Thời gian(tính = giây) : <input type="text"  name="thoigian" value=""> 


</div>

<center><button onclick="adminad(\'khoanick\')">Khóa nick</button></center>
';    

    }    
    
if($_POST[name]=="vatpham") {
    echo'<div id="admin">
    <BR><BR><BR><BR><BR>
#ID TV : <input type="text"  name="users" value="">  <br>
#Số lượng : <input type="text"  name="soluong" value="">  <br>

';
echo'<select name="vatpham"> ';
 $datam = mysql_query("SELECT * FROM shopvatpham ORDER BY `id` DESC");
                                while ($data_map = mysql_fetch_assoc($datam)){
echo ' <option value="'.$data_map[id].'">#'.$data_map[tenvatpham].'</option>';
}
echo'</select><br>

</div>

<center><button onclick="adminad(\'vatpham\')">ADD</button></center>
';    

    } 
    
    if($_POST[name]=="xu") {
    echo'<div id="admin">
    <BR><BR><BR><BR><BR>
#ID TV : <input type="text"  name="users" value="">  <br>
xu : <input type="text"  name="xu" value=""> 
ruby : <input type="text"  name="ruby" value=""> 


</div>

<center><button onclick="adminad(\'xu\')">SET</button></center>
';    

    }   
    
    
     if($_POST[name]=="npc") {
foreach (glob("../images/charactersets/*.png") as $filename) {
    $ducnghiaxxx =explode("/",$filename);
    $get_x = explode(".",$ducnghiaxxx[3]);

    echo '<label style="display: inline-block;text-align: center;"><b style="font-size: 9px;color:red;font-weight:bold;text-align: center;">#'.$get_x[0].'.png</b><br><img src="/xml/nhanvat.php?nhanvat='.$get_x[0].'.png&nut=1"></label><hr>';
}
    }
    
     if($_POST[name]=="saochep") {
    echo'<div id="admin">
    <BR><BR><BR><BR><BR>
MAP : <input type="text"  name="id" value=""> 
NPC ID : <input type="text"  name="npc" value=""> 


</div>

<center><button onclick="adminad(\'map\')">ADD</button></center>
';    

    }   
    
    
if($_POST[name]=="them") {
    echo'<div id="admin">
    <BR><BR><BR><BR><BR>
map : <input type="text"  name="map" value="'.$_POST[mapID].'">  <br>
x : <input type="text"  name="x" value="'.($_POST[x]+1).'">  <br>
y : <input type="text"  name="y" value="'.($_POST[y]+1).'">  <br>
ảnh : <input type="text"  name="style" value="">  <br>

Di : <input type="text"  name="direction" value="'.$_POST[di].'">  <br>


LEVEL : <input type="text"  name="level" value="0">  <br>
LEVELPKM : <input type="text"  name="lvpkm" value="">  <br>

Pokemon ( cách nhau dấu phẩy) : <input type="text"  name="pokemon" value=""> 


</div>

<center><button onclick="adminad(\'them\')">ADD</button></center>
';    

    }       
    
    
    if($_POST[name]=="code") {
    echo'<div id="admin">
    <BR><BR>
xu : <input type="text"  name="xu" value="0">  <br>
ruby : <input type="text"  name="xu" value="0">  <br>
Hạn(1=vv) : <input type="text"  name="vinhvien" value="0">  <br>
Vật Phẩm : <input type="text"  name="vatpham" value="">  <br>
Item : <input type="text"  name="item" value="">  <br>
HM,TM : <input type="text"  name="tmhm" value="">  <br>



</div>

<center><button onclick="adminad(\'code\')">ADD</button></center>
<hr>
Về Vật phẩm,item,HM,TM : <Br>
+ Vật phẩm là loại item đặc biệt ở shop ví dụ như thẻ treo,v.v - nhập phải là mã ID của vật phẩm <br>
+ Item là các vật phẩm như race candy,iron v.v <br>
+ HM,TM thì không phải nói <br>
- Mỗi vật phẩm cách nhau = dấu phẩy, số lượng = dấu : ví dụ ở ô item : Master Ball:10,Iron:5 ( thêm master ball số lượng 10, iron số lượng 5 !)
';    

    }       
    
}

if(isset($_GET[code])) {
     function ducnghia_sql_code($ducnghia_code) {
$chars ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
$size = strlen($char);
for($i = 0; $i<$ducnghia_code; $i++) {
$str .= $chars[rand(0, $size -1)];
$str=substr(str_shuffle($chars), 0, $ducnghia_code);
}
return$str;
}
$c = ducnghia_sql_code(16);
if($_SESSION[id]==1) {
mysql_query("INSERT INTO `giftcode` SET 
 `vinhvien` = '".$_POST[vinhvien]."', `xu` = '".$_POST[xu]."', `ruby` = '".$_POST[ruby]."', `vatpham` = '".$_POST[vatpham]."', `item` = '".$_POST[item]."', `tmhm` = '".$_POST[tmhm]."',`code` = '".$c."'");          }
     echo' Mã quà tặng : '.$c.' ';
}

if(isset($_GET[them])) {

mysql_query("INSERT INTO `chiendau` SET 
 `level` = '".$_POST[level]."', `lvpkm` = '".$_POST[lvpkm]."', `pokemon` = '".$_POST[pokemon]."'");          
 
 $t = mysql_insert_id();

 $npc = '[{"line":1,"function":"DISPLAY MESSAGE","arguments":{"@cdata":"DUCNGHIA"}}]';

mysql_query("INSERT INTO `npcs` SET `map` = '".$_POST[map]."',`x` = '".$_POST[x]."',`y` = '".$_POST[y]."',`name`='So Tài.".$t."',`movement` = 'Still',`style`='".$_POST[style]."',`client_script`='".$npc."',`type`='Action Button',`direction`='".$_POST[direction]."',`text`='Muốn so tài với ta ?',`o1`='huanluyen(".$t.")',`n1`='So tài'");

echo $t.' Thành công.';
}


if(isset($_GET[addpkm])) {
    pokemon($_POST[pokemon],$_POST[level],$_POST[users]);
    echo'OKE';
}


if(isset($_GET[khoanick])) {
$thoigian = $_POST[thoigian] + time();
             mysql_query("UPDATE `users` SET `khoa`='".$thoigian."' WHERE `id`='".$_POST[users]."'");

    echo'KHÓA THÀNH CÔNG ID'.$_POST[user_id].' với thời gian '.($thoigian-time()).'s.  ';
}

if(isset($_GET[vatpham])) {
echo'Thành công.';
                       vatpham($_POST[vatpham],$_POST[soluong],$_POST[users]);

}


if(isset($_GET[xu])) {
             mysql_query("UPDATE `users` SET `xu`=`xu`+'".$_POST[xu]."',`ruby` = `ruby` + '".$_POST[ruby]."' WHERE `id`='".$_POST[users]."'");

    echo'OK.  ';
}


if(isset($_GET[map])) {
        $map=mysql_fetch_array(mysql_query("SELECT * FROM `npcs` WHERE `id` = '".$_POST[npc]."'"));
        
mysql_query("INSERT INTO `npcs` SET 
 `map` = '".$_POST[id]."',`name` = '".$map['name']."',`direction` = '".$map['direction']."',
 `x` = '".$map['x']."',`y` = '".$map['y']."',`type` = '".$map['type']."',`style` = '".$map['style']."',`movement` = '".$map['movement']."',`o1` = '".$map[o1]."',`n1` = '".$map[n1]."',`text` = '".$map[text]."',`client_script` = '".$map['client_script']."',`server_script` = '".$map['server_script']."',`o2` = '".$map[o1]."',`n2` = '".$map[n1]."',`o3` = '".$map[o3]."',`n3` = '".$map[n3]."',`o4` = '".$map[o4]."',`n4` = '".$map[n4]."'
");           

echo $map[name].' Thành công.';
}


