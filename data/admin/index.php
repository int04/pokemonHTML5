<?PHP
if($user_id ==1) {
  echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border">
Fanpage : <b class="float-right"><a href="//fb.com/pokevietnam">PokeMon H5</a></b>
</div>
 
<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><a href="/play"><b>Full màn hình</b></a></div>
<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><b onclick="control()">Admin</b></div>';
exit();
}
$p = $_POST[p];

if($p == "gym")  {
$mysqli->query("INSERT INTO `gym` SET `he` ='".$_POST[he]."',`soluong`='".$_POST[soluong]."',`level` = '".$_POST[level]."',`huyhieu` ='".$_POST[huyhieu]."'
");    
$idgym = $mysqli->insert_id;
$aaa = '[{"line":1,"function":"DISPLAY MESSAGE","arguments":{"@cdata":"'.$idgym.'"}}]';
$mysqli->query("INSERT INTO `npcs` SET 
 `map` = '".$_POST[map]."',`name` = '".$_POST[ten]."',`direction` = '".$_POST['direction']."',
 `x` = '".$_POST[x]."',`y` = '".$_POST[y]."',`type` = 'Action Button',`style` = '".$_POST['style']."',`movement` = '".$_POST[hieuung]."',`text` = 'Cậu muốn so tài với ta ?', `client_script` = '".$aaa."'");   
 $idnpc = $mysqli->insert_id;
$npcs = new npcs($idnpc);
    $npcs->add($idgym,'id',$idgym);
    
    $npcs->add($idgym,'name','Chiến đấu');
    $npcs->add($idgym,'onclick','game_gym('.$idgym.')');
echo'Thanh cong.';
}

if($p == "saochep")  {
    $map=$mysqli->query("SELECT * FROM `npcs` WHERE `id` = '".$_POST[npc]."'")->fetch_assoc();
        
$mysqli->query("INSERT INTO `npcs` SET 
 `map` = '".$_POST[map]."',`name` = '".$map['name']."',`direction` = '".$map['direction']."',
 `x` = '".$_POST[x]."',`y` = '".$_POST[y]."',`type` = '".$map['type']."',`style` = '".$map['style']."',`movement` = '".$map['movement']."',`text` = '".$map[text]."',`client_script` = '".$map['client_script']."',`server_script` = '".$map['server_script']."',`ducnghia` = '".$map[ducnghia]."'
");           
echo'Thanh cong.';
}

if($p=="pokemon") {
$mysqli->query("INSERT INTO `ducnghia_pokemon` set `nhiemvu` = '1'");
$iid = $mysqli->insert_id;
move_uploaded_file($_FILES["img"]["tmp_name"],"../sql/pokemon0/".$iid.".png");
         $add = new pkm($iid);
         $add->add('img',''.$iid.'.png');  
         $add->add('ten',$_POST['ten']);  
         $add->add('hp',$_POST[hp]);  
         $add->add('giap',$_POST[giap]);  
         $add->add('mp',$_POST[mp]);  
         $add->add('xuyengiap',1);  
         $add->add('tocdo',$_POST[tocdo]);  
         $add->add('phep',$_POST[att]);  
         $add->add('chimang',1);  
         $add->add('vatli',$_POST[att]);  
         $add->add('type1',$_POST[type1]);  
         $add->add('type2',$_POST[type2]);  
         $add->add('tangtruong',$_POST[tangtruong]);  
         
               echo'Tạo pokemon thành công.';

}

if($p=="set") {
     $text = ''.$_POST[xu].'^'.$_POST['exp'].'^'.$_POST[vatpham].'';
   	$mysqli->query("UPDATE `m` SET `thuong` = '" . $text . "' WHERE `nhom` = '" . $_POST[nhom] . "'");
   						echo $text;
}

if($p=="saochepquai") {
          $pkm = $mysqli->query("SELECT * FROM `m`  WHERE `img` = '".$_POST[img]."' ")->fetch_assoc();
if($pkm[i] <=0) {
    echo'KHÔNG TỒN TẠI '.$_POST[img].' - '.$pkm[id].' ';
    exit();
}
    ////////////////////
    function izrand($length) {

                $random_string="";
                while(strlen($random_string)<$length && $length > 0) {
                        $randnum = mt_rand(0,61);
                        $random_string .= ($randnum < 10) ?
                                chr($randnum+48) : ($randnum < 36 ? 
                                        chr($randnum+55) : $randnum+61);
                 }
                return $random_string;
}

$i =0;
while($i < $_POST[soluong]) {
    $mysqli->query("INSERT INTO `m` SET 
           `name` = '".$pkm[name]."' , 
           `id` = '".izrand(13)."',
   `img` = '".$pkm[img]."' , 
   `thuong` = '" . $pkm[thuong] . "',
     `hoisinh` = '".$pkm['hoisinh']."' , 
       `hpfull` = '".$pkm[hpfull]."' , 
         `tancong` = '".$pkm[tancong]."' , 
           `giap` = '".$pkm[giap]."' , 
             `chimang` = '".$pkm[chimang]."' , 
               `map` = '".$_POST[map]."' , 
             `x` = '".($_POST[x]+rand(-2,+2))."' , 
             `y` = '".($_POST[y]+rand(-2,+2))."' , 
                          `level` = '".$pkm[level]."' , 

                `nhom` = '".$pkm[nhom]."' 
        
             
             ");
             $i++;
}
             
             echo'ADD thành công.';  
    
    
    /////////////////////
}

if($p=="thuong") {
    function izrand($length) {

                $random_string="";
                while(strlen($random_string)<$length && $length > 0) {
                        $randnum = mt_rand(0,61);
                        $random_string .= ($randnum < 10) ?
                                chr($randnum+48) : ($randnum < 36 ? 
                                        chr($randnum+55) : $randnum+61);
                 }
                return $random_string;
}
     $text = ''.$_POST[xu].'^'.$_POST['exp'].'^'.$_POST[vatpham].'';

$i =0;
while($i < $_POST[soluong]) {
    $mysqli->query("INSERT INTO `m` SET 
           `name` = '".$_POST[name]."' , 
           `id` = '".izrand(13)."',
   `img` = '".$_POST[img]."' , 
   `thuong` = '" . $text . "',
     `hoisinh` = '".$_POST['hoisinh']."' , 
       `hpfull` = '".$_POST[hpfull]."' , 
         `tancong` = '".$_POST[tancong]."' , 
           `giap` = '".$_POST[giap]."' , 
             `chimang` = '".$_POST[chimang]."' , 
               `map` = '".$_POST[map]."' , 
             `x` = '".($_POST[x]+rand(-2,+2))."' , 
             `y` = '".($_POST[y]+rand(-2,+2))."' , 
                          `level` = '".$_POST[level]."' , 

                `nhom` = '".$_POST[nhom]."' 
        
             
             ");
             $i++;
}
             
             echo'ADD thành công.';

   
}
if($p=="add") {
   $id = $_POST[id];
    $on = $_POST[onclick];
    $code = $_POST[ma];
    $na = $_POST[ten];
    $npcs = new npcs($id);
    $npcs->add($code,'id',$code);
    
    $npcs->add($code,'name',$na);
    $npcs->add($code,'onclick',$on);
        echo'Thành công : '.$on.' - '.$na.' ';

   
}

if($p=="xoa") {
    $id = $_POST[id];
    $on = $_POST[onclick];
    $na = $_POST[ten];
        $code = $_POST[ma];

    $npcs = new npcs($id);
    $npcs->xoa($code);
    echo'Thành côngggggg';
    
}

if($p=="nv") {
      $get_nv = $mysqli->query("SELECT * FROM `ducnghia_nhiemvu`  ORDER BY `nhiemvu` DESC LIMIT 1")->fetch_assoc();
$nnz = $get_nv[nhiemvu] + 1;
             $mysqli->query("INSERT INTO `ducnghia_nhiemvu` SET 
             `nhiemvu` = '".$nnz."'
             ");
             
           $add = new nhiemvu($nnz);
         $add->add('ten',$_POST['tennv']);  
         $add->add('text',$_POST['text']);  
         $add->add('text2',$_POST['nhiemvu']);  
         $add->add('npc',$_POST['npc']);  
         $add->add('loai',$_POST['loai']);  
         $add->add('pokemon',$_POST['pokemon']);  
         $add->add('can',$_POST['can']);  
         $add->add('xu',$_POST['silver']);  
         $add->add('exp',$_POST['exp']);  
         $add->add('ruby',$_POST['gold']);  
         $add->add('vatpham',$_POST['vatpham']);  
         $add->add('item',$_POST['item']);  
         
               echo'Tạo nhiệm vụ thành công.';

}


if($p=="npc"){
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
    $dem_do = $mysqli->query("SELECT * from `npcs`  ORDER BY `id` DESC LIMIT  1")->fetch_assoc();
$new_do =$dem_do[id]+1;
    $npc = '[{"line":1,"function":"DISPLAY MESSAGE","arguments":{"@cdata":"'.$new_do.'"}}]';
} else {
    $npc = '[{"line":0,"function":"SERVER SIDE"}]';
}


 $mysqli->query("INSERT INTO `npcs` SET 
 `map` = '".$id."',`name` = '".$name."',`direction` = '".$direction."',
 `x` = '".$x."',`y` = '".$y."',`type` = '".$type."',`style` = '".$style."',`movement` = '".$movement."',`o1` = '".$o1."',`n1` = '".$n1."',`text` = '".$text."',`client_script` = '".$npc."',`server_script` = '".$goto."'
");   
echo'Thành công ! DUCNGHIA';
}

if($p=="sv") {
          $n = $mysqli->query("SELECT * FROM `server`  WHERE `id`='".$_POST[id]."'")->fetch_assoc();

if(empty($_POST[ten])) {
    $ten = $n[ten];
} else {
    $ten = $_POST[ten];
}
        $mysqli->query("UPDATE `server` SET `code`='".$_POST[code]."',`ten`='".$ten."' WHERE `id` ='".$_POST[id]."'");
        
echo'Chỉnh sửa thành công.';
}

if($p == "tao") {
            $mysqli->query("INSERT INTO `server` SET `code`='".$_POST[code]."',`ten`='".$_POST[ten]."', `thoigian` = '".date('h:m:s d/m/y')."'");
echo'Tạo máy chủ thành công.';
}
if(isset($_POST[index])) {
echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><a href="/data/install.php">UPDATE JSON GAME</a></div>';
echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><b onclick="menu(\'gym\')">Tạo gym</b></div>';
echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><b onclick="menu(\'saochepquai\')">sao chép quái</b></div>';

echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><b onclick="menu(\'saochep\')">Sao chép npc</b></div>';
echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><b onclick="menu(\'sv\')">Quản lí máy chủ</b></div>';

echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><b onclick="menu(\'pokemon\')">Add pkm</b></div>';
    
echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><b onclick="menu(\'set\')">Xét vật phẩm cho quái</b></div>';
    
echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><b onclick="menu(\'thuong\')">Tạo quái</b></div>';
echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><b onclick="menu(\'map\')">Danh sách map</b></div>';
echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><b onclick="menu(\'npc\')">NPC MAP</b></div>';
echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><b onclick="menu(\'menunpc\')">Button NPC</b></div>';
echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><b onclick="menu(\'nv\')">ADD nhiệm vụ</b></div>';
echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><b onclick="menu(\'viet\')">Viết bài</b></div>';
echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><b onclick="menu(\'tb\')">Thông báo</b></div>';


}

