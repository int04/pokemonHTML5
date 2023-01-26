<?PHP
$m = $_POST[index];
if($m=="saochepquai") {
$datam = $mysqli->query("SELECT * FROM m ORDER BY `id` DESC");
                                while ($data_map = $datam->fetch_assoc()){
                             $msg.='<option value="'.$data_map[id].'">'.$data_map[img].' '.$data_map[name].' lv.'.$data_map[level].'</option>';       
                                }
   echo'
       <form method="post" enctype="multipart/form-data" id="crducnghia">
 <input type="text"   name="a" value="index" style="display:none;">
<input type="text"   name="b" value="admin" style="display:none;">
<input type="text"   name="p" value="saochepquai" style="display:none;">
ảnh : <input type="text"  name="img" value=".png">  <br>
Số lượng : <input type="number"  name="soluong" value="0">  <br>
Map : <input type="text"  name="map" value="">  <br>
X: <input type="text"  name="x" value="">  <br>
Y : <input type="text"  name="y" value="">  <br>

Mẫu : <select name="test"> '.$msg.' </select>

</form><button onclick="save()">Lưu</button>
   
   '; 
}
if($m=="gym") {

   echo'
       <form method="post" enctype="multipart/form-data" id="crducnghia">
 <input type="text"   name="a" value="index" style="display:none;">
<input type="text"   name="b" value="admin" style="display:none;">
<input type="text"   name="p" value="gym" style="display:none;">
Tên : <input type="text"  name="ten" value="">  <br>

ảnh : <input type="text"  name="style" value="Blackbelt.png">  <br>
Trái/ phải : <select name="direction"><option value="0">Trên</option><option value="1">Dưới</option><option value="2">Trái</option><option value="3">Phải</option></select>  <br>
HIệu wusng :  <select name="hieuung">
                                    <option value="Still">Đứng im</option> <option value="Slow Random">Di chuyển ngẫu nhiên</option></select> <br>
Hệ : <select name="he"><option value="Normal">Normal</option>
<option value="Water">Water</option>
<option value="Fire">Fire</option>
<option value="Electric">Electric</option>
<option value="Grass">Grass</option>
<option value="Ice">Ice</option>
<option value="Fighting">Fighting</option>
<option value="Poison">Poison</option>
<option value="Ground">Ground</option>
<option value="Flying">Flying</option>
<option value="Psychic">Psychic</option>
<option value="Bug">Bug</option>
<option value="Rock">Rock</option>
<option value="Ghost">Ghost</option>
<option value="Dragon">Dragon</option>
<option value="Dark">Dark</option>
<option value="Steel">Steel</option>
<option value="Fairy">Fairy</option>

</select>  <br>
Số lượng : <input type="number"  name="soluong" value="0">  <br>

level : <input type="number"  name="level" value="0">  <br>
Huy hiệu : <input type="text"  name="huyhieu" value="">  <br>

Map : <input type="text"  name="map" value="">  <br>
X: <input type="text"  name="x" value="">  <br>
Y : <input type="text"  name="y" value="">  <br>


</form><button onclick="save()">Lưu</button>
   
   '; 
}
if($m=="saochep") {

   echo'
       <form method="post" enctype="multipart/form-data" id="crducnghia">
 <input type="text"   name="a" value="index" style="display:none;">
<input type="text"   name="b" value="admin" style="display:none;">
<input type="text"   name="p" value="saochep" style="display:none;">
ID NPC : <input type="text"  name="npc" value="">  <br>
Map : <input type="text"  name="map" value="">  <br>
X: <input type="text"  name="x" value="">  <br>
Y : <input type="text"  name="y" value="">  <br>


<hr>
TIP :  <br>
kho đồ #49 <br>
Vòng quay : #48 <br>
TOP : #47 , <br>
Tiên cánh : #42, <br>
Sách :  #40 <br>
Thức ăn : #39 <br>
Cường hóa : #37 <br>
Linh tinh : #36 <br>
Cường hóa : #35 <br>
Skin : 34 <br>
tb : 32 <br>
</form><button onclick="save()">Lưu</button>
   
   '; 
}
if($m=="pokemon") {

   echo'
<form method="post" enctype="multipart/form-data" id="crducnghia">
 <input type="text"   name="a" value="index" style="display:none;">
<input type="text"   name="b" value="admin" style="display:none;">
<input type="text"   name="p" value="pokemon" style="display:none;">
Tên : <input type="text"  name="ten" value="">  <br>
Hp: <input type="text"  name="hp" value="">  <br>
Tấn công: <input type="text"  name="att" value="">  <br>
giáp: <input type="text"  name="giap" value="">  <br>
tốc độ: <input type="text"  name="tocdo" value="">  <br>

mp: <input type="text"  name="mp" value="">  <br>
 Ảnh :  <input type="file" name="img" id="fileToUpload"> <br>
 Type1 : <select name="type1"><option value="Normal">Normal</option>
<option value="Water">Water</option>
<option value="Fire">Fire</option>
<option value="Electric">Electric</option>
<option value="Grass">Grass</option>
<option value="Ice">Ice</option>
<option value="Fighting">Fighting</option>
<option value="Poison">Poison</option>
<option value="Ground">Ground</option>
<option value="Flying">Flying</option>
<option value="Psychic">Psychic</option>
<option value="Bug">Bug</option>
<option value="Rock">Rock</option>
<option value="Ghost">Ghost</option>
<option value="Dragon">Dragon</option>
<option value="Dark">Dark</option>
<option value="Steel">Steel</option>
<option value="Fairy">Fairy</option>

</select>  <br>
Type2 : <select name="type2">
<option value="">không</option>
<option value="Normal">Normal</option>
<option value="Water">Water</option>
<option value="Fire">Fire</option>
<option value="Electric">Electric</option>
<option value="Grass">Grass</option>
<option value="Ice">Ice</option>
<option value="Fighting">Fighting</option>
<option value="Poison">Poison</option>
<option value="Ground">Ground</option>
<option value="Flying">Flying</option>
<option value="Psychic">Psychic</option>
<option value="Bug">Bug</option>
<option value="Rock">Rock</option>
<option value="Ghost">Ghost</option>
<option value="Dragon">Dragon</option>
<option value="Dark">Dark</option>
<option value="Steel">Steel</option>
<option value="Fairy">Fairy</option>

</select>  <br>

Tăng trưởng : <select name="tangtruong">
<option value="Erratic">Erratic</option>
<option value="Fast">Fast</option>
<option value="Medium Slow">Medium Slow</option>
<option value="Medium Fast">Medium Fast</option>
<option value="Slow">Slow</option>

</select>  <br>



</form><button onclick="save()">Lưu</button>
   
   '; 
   ?>
   <script>
       $(document).ready( function () {
    
    $("#imgsssssss").each(function(){
                    $(this).keyup(function(){
                       console.log('có');
                    $('#show').html('<img src="/sql/pokemon0/'+$('#imgsssssss').val()+' ">');
      
                        });
                    });
});
   </script>
   <?PHP
}
if($m=="set") {

   echo'
       <form method="post" enctype="multipart/form-data" id="crducnghia">
 <input type="text"   name="a" value="index" style="display:none;">
<input type="text"   name="b" value="admin" style="display:none;">
<input type="text"   name="p" value="set" style="display:none;">
NHÓM : <input type="text"  name="nhom" value="">  <br>
#XU:TỈ LỆ : <input type="text"  name="xu" value="0:0">  <br>
#EXP: <input type="text"  name="exp" value="0">  <br>
#VẬT PHẨM (IDVP:SL) : <input type="text"  name="vatpham" value="">  <br>


</form><button onclick="save()">Lưu</button>
   
   '; 
}
if($m=="thuong") {
      $get_nv = $mysqli->query("SELECT * FROM `m` WHERE `hoisinh` = '5000'  ORDER BY `hpfull` DESC LIMIT 1")->fetch_assoc();

   echo'
       <form method="post" enctype="multipart/form-data" id="crducnghia">
 <input type="text"   name="a" value="index" style="display:none;">
<input type="text"   name="b" value="admin" style="display:none;">
<input type="text"   name="p" value="thuong" style="display:none;">
<br>
Số lượng : <input type="text" placeholder=""  name="soluong" value="1">
 <br>
Nhóm : <input type="text" placeholder=""  name="nhom" value="'.($get_nv[nhom]+1).'">
<br>
Tên : <input type="text" placeholder=""  name="name" value="">
<br>

Img : <input type="text" id="imgsssssss"  name="img" value=".png"> <b id="show"></b>  <br>


Tg hồi sinh : <input type="text" placeholder=""  name="hoisinh" value="'.$get_nv[hoisinh].'">
<br>

Level : <input type="text" placeholder=""  name="level" value="'.(1+$get_nv[level]).'">
<br>
HpFULL : <input type="text" placeholder=""  name="hpfull" value="'.$get_nv[hpfull].'">
<br>
Tấn công : <input type="text" placeholder=""  name="tancong" value="'.$get_nv[tancong].'">
<br>
Giáp : <input type="text" placeholder=""  name="giap" value="'.$get_nv[giap].'">
<br>
chí mạng : <input type="text" placeholder=""  name="chimang" value="'.$get_nv[chimang].'">
<br>
map : <input type="text" placeholder=""  name="map" value="">
<br>
x : <input type="text" placeholder=""  name="x" value="">
<br>
y : <input type="text" placeholder=""  name="y" value=""> <br>
#XU:TỈ LỆ : <input type="text"  name="xu" value="0:0">  <br>
#EXP: <input type="text"  name="exp" value="0">  <br>
#VẬT PHẨM (IDVP:SL) : <input type="text"  name="vatpham" value="">  <br>
<br>

</form><button onclick="save()">Lưu</button>
   
   
   '; 
   ?>
    <script>
       $(document).ready( function () {
    
    $("#imgsssssss").each(function(){
                    $(this).keyup(function(){
                       console.log('có');
                    $('#show').html('<img src="/sql/pokemon0/'+$('#imgsssssss').val()+' ">');
      
                        });
                    });
});
   </script>
   <?PHP
}
if($m=="fm") {
 
   echo'
       <form method="post" enctype="multipart/form-data" id="crducnghia">
<input type="text"   name="a" value="index" style="display:none;">
<input type="text"   name="b" value="admin" style="display:none;">
<input type="text"   name="p" value="fm" style="display:none;">

<br>

Tên : <input type="text" placeholder=""  name="ten" value="">
<br>
Loại nhà :
 <select name="code"> 
 
 <option value="benhvien">Bệnh viện 1</option> 
 <option value="shop">Cửa hàng 1</option> 
 <option value="nha">Nhà 1</option> 
  <option value="nha20">Nhà 2</option> 
  <option value="nha3">Nhà 3</option> 
  <option value="nha4">Nhà 4</option> 
  <option value="nha5">Nhà 5</option> 
  <option value="nha6">Nhà 6</option> 

 <option value="benhvien2">Bệnh viện 2</option> 
 <option value="shop2">cửa hàng 2</option> 
 
 </select>
<hr>
<center>Cài đặt map vào</center> <hr>
ID map : <input type="text" placeholder=""  name="id" value=""> <br>
X : <input type="text" placeholder=""  name="x" value=""> <br>
Y : <input type="text" placeholder=""  name="y" value=""> <br>

<hr>
<center>Map ra</center> <hr>

ID map ra : <input type="text" placeholder=""  name="idr" value=""> <br>
X ra : <input type="text" placeholder=""  name="xr" value=""> <br>
Y  ra: <input type="text" placeholder=""  name="yr" value=""> <br>

<br>


</form><button onclick="save()">Lưu</button>
   
   '; 
}
if($m=="tao") {
 
   echo'
       <form method="post" enctype="multipart/form-data" id="crducnghia">
<input type="text"   name="a" value="index" style="display:none;">
<input type="text"   name="b" value="admin" style="display:none;">
<input type="text"   name="p" value="tao" style="display:none;">

<br>

Tên : <input type="text" placeholder=""  name="ten" value="">
<br>
 <select name="code"> <option value="0">Hoạt động</option> <option value="1">Bảo trì</option>  </select>

<br>


</form><button onclick="save()">Lưu</button>
   
   '; 
}
if($m=="menusv") {
    $datam = $mysqli->query("SELECT * FROM server ORDER BY `id` DESC");
                                while ($data_map = $datam->fetch_assoc()){
                             $msg.='<option value="'.$data_map[id].'">#'.$data_map[id].' '.$data_map[ten].'</option>';       
                                }
   echo'
       <form method="post" enctype="multipart/form-data" id="crducnghia">
<input type="text"   name="a" value="index" style="display:none;">
<input type="text"   name="b" value="admin" style="display:none;">
<input type="text"   name="p" value="sv" style="display:none;">


<select name="id"> '.$msg.'</select>
<br>

Tên : <input type="text" placeholder="Bỏ trống nếu ko muốn thay đổi"  name="ten" value="">
<br>
 <select name="code"> <option value="0">Hoạt động</option> <option value="1">Bảo trì</option>  </select>

<br>


</form><button onclick="save()">Lưu</button>
   
   '; 
}
if($m=="baotri") {
        $mysqli->query("UPDATE `server` SET `code`='1' WHERE `id` !='4'");
        echo'Đã bảo trì toàn bộ máy chủ';

}
if($m=="online") {
        $mysqli->query("UPDATE `server` SET `code`='0' WHERE `id` !='4'");
        echo'Đã online tất cả máy chủ';

}


if($m=="sv") {
$ducnghia_kho=$mysqli->query("SELECT * FROM `server` ORDER BY `id`  DESC");
    while($ducnghia_do=$ducnghia_kho->fetch_array()) {
        if($ducnghia_do[code]==0) {
            $f = 'green';
            $n = '[ON]';
        } else {
            $f = 'red';
            $n = '[OFF]';
        }
       echo'<div onclick="doc('.$ducnghia_do[id].')" class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border" onclick="maychu_chon('.$ducnghia_do[id].',\''.$ducnghia_do[ten].'\')"><font color="'.$f.'">'.$n.'S'.$ducnghia_do[id].'.'.$ducnghia_do[ten].' (' .number_format($mysqli->query("SELECT COUNT(*) FROM `users` where `sv`='".$ducnghia_do[id]."'")->num_rows) . ' người</font></form><button onclick="save()">Lưu</button>';
       
    
       
       echo'<code id="ducnghia_'.$ducnghia_do[id].'" style="display:none;">'.$msgx.'</code>';
        
    }
    
    echo'<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><button onclick="menu(\'baotri\')">Bảo trì all</button> <button onclick="menu(\'online\')">Online all</button><button onclick="menu(\'menusv\')">Edit máy chủ</button><button onclick="menu(\'tao\')">New</button></form><button onclick="save()">Lưu</button>';
}
if($m=='map') {
    $datam = $mysqli->query("SELECT * FROM maps ORDER BY `id` DESC");
                                while ($data_map = $datam->fetch_assoc()){
echo ' <div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border" onclick="datamap('.$data_map[id].')">#'.$data_map[id].' '.$data_map[ten].'</form><button onclick="save()">Lưu</button><br>';
}
}



if($m=='npc') {
?>
   
       <form method="post" enctype="multipart/form-data" id="crducnghia">
<input type="text"   name="a" value="index" style="display:none;">
<input type="text"   name="b" value="admin" style="display:none;">
<input type="text"   name="p" value="npc" style="display:none;">

ID MAP : <input type="text" name="id" value=""> <br>
X : <input type="text" name="x" value=""> <br>
Y : <input type="text" name="y" value=""> <br>
Loại :               <select name="type">
                                    <option value="Action Button">Phải ấn x(giao tiếp npc)</option>

                        <option value="On Walk">Đi qua luôn ( qua map)</option>
                                    <option value="X3">X3</option>
</select>
 <br>
DATA :               <select name="data">
                                    <option value="2">Giao tiếp</option>

                        <option value="1">Đến map</option>
</select>
 <br>
<hr><center>CÀI ĐẶT CHUYỂN MAP(chọn data đến map)</center><select name="map">
 <?PHP
             $datam = $mysqli->query("SELECT * FROM maps ORDER BY `id` DESC");
                                while ($data_map = $datam->fetch_assoc()){
echo ' <option value="'.$data_map[id].'">#'.$data_map[id].' '.$data_map[ten].'</option>';
}
?>
                        
                        </select><br>X MAP TỚI: <input type="text" name="xmap" value=""> <br>Y MAP TỚI: <input type="text" name="ymap" value=""> <br><hr>
<hr><center>CÀI ĐẶT GIAO TIẾP(chọn data giao tiếp)</center>Nội dung: <input type="text" name="ten" value=""> <br>Nội dung: <input type="text" name="text" value=""> <br>Onclick 1: <input type="text" name="o1" value=""> <br>Tên Onclick 1: <input type="text" name="n1" value=""> <br>Hiệu ứng :               <select name="movement">

                        <option value="Slow Random">Di chuyển ngẫu nhiên</option>
                                    <option value="Still">Đứng im</option>
</select>
 <br>Hình ảnh: <input type="text" id="style" name="style" value=""> <br>Đứng(1-4) : <select id="direction" name="direction">
                        

                        <option value="0">0 Trên</option>
                           <option value="1">1 Dưới</option>
                        <option value="2">2 Trái</option>
                        <option value="3">3 Phải</option>

</select> <br><hr>Xem trước<b onclick="xemtruoc()">XEM THỬ</b> : <b id="xemtruoc"></b><hr><hr><center>


<br>


</form>
<b onclick="save()">Lưu</b>
   
   <?PHP
}
if($m=='tb') {

     echo'
       <form method="post" enctype="multipart/form-data" id="crducnghia">
<input type="text"   name="a" value="index" style="display:none;">
<input type="text"   name="b" value="admin" style="display:none;">
<input type="text"   name="p" value="thongbao" style="display:none;">

<div class="modal-body">
	  
	 
	  <textarea name="noidung"  id="newpost_txt" class="form-control is-invalid" placeholder="Nội dung (min: 20 ký tự)">'.$maychu[text].'</textarea>
	  <div class="fixtop"><small>Bằng việc ĐĂNG BÀI bạn đã chấp thuận nội quy !</small><br>

<br>


</form><button onclick="save()">Lưu</button>
   
   '; 
}
if($m=="viet") {
     echo'
       <form method="post" enctype="multipart/form-data" id="crducnghia">
<input type="text"   name="a" value="index" style="display:none;">
<input type="text"   name="b" value="admin" style="display:none;">
<input type="text"   name="p" value="viet" style="display:none;">

<div class="modal-body">
	  <div class="input-group">
	  <input class="form-control is-invalid" name="tieude" type="text" placeholder="Tiêu đề (min: 5, max: 100 ký tự, có thể dùng biểu cảm)" id="forum_tieude">
	  </form><button onclick="save()">Lưu</button>
	 
	  <textarea name="noidung" id="newpost_txt" class="form-control is-invalid" placeholder="Nội dung (min: 20 ký tự)"></textarea>
	  <div class="fixtop"><small>Bằng việc ĐĂNG BÀI bạn đã chấp thuận nội quy !</small><br>

<br>


</form><button onclick="save()">Lưu</button>
   
   '; 
}
if($m=="nv"){
     echo'
       <form method="post" enctype="multipart/form-data" id="crducnghia">
<input type="text"   name="a" value="index" style="display:none;">
<input type="text"   name="b" value="admin" style="display:none;">
<input type="text"   name="p" value="nv" style="display:none;">

 Tên  <input type="text" name="tennv"  placeholder=""> <br>
 Text  <textarea rows="2" name="text"></textarea> <br>
 TEXT SONG <textarea rows="2" name="nhiemvu"></textarea> <br>
  ID NPC <input type="text" name="npc"  placeholder=""> <br>



Loại : <select name="loai">
                  <option value="giaotiep">Giao tiếp</option>
                  <option value="pokemon">Chiến pokemon</option>
                  <option value="map">Đến map</option>
                  <option value="level">Lên cấp</option>
                  <option value="bat">Bắt pokemon</option>
                  <option value="muavp">MUA VP</option>
                  <option value="dungvp">dùng VP</option>
                <option value="gym">Đánh gym</option>
                <option value="item">Đánh rơi VP</option>
                <option value="tangqua">Tặng quà</option>
 
</select> <br>
    PokeMon/map đến/ID PKM bắt/ID GYM  <input type="text" name="pokemon"  placeholder=""> <br>
      Yêu cầu/level  <input type="text" name="can"  placeholder=""> <br>
        bạc  <input type="text" name="silver" value="0"  placeholder=""> <br>
             gold  <input type="text" name="gold" value="0"  placeholder=""> <br>
               exp  <input type="text" name="exp" value="0"  placeholder=""> <br>
               item rớt ra đất  <input type="text" name="item"  placeholder=""> <br>
               vatpham  <input type="text" name="vatpham"  placeholder=""> <br>


<br>


</form><button onclick="save()">Lưu</button>
   
   '; 
}
if($m=="menunpc") {
    $datam = $mysqli->query("SELECT * FROM npcs ORDER BY `id` DESC");
                                while ($data_map = $datam->fetch_assoc()){
                             $msg.='<option value="'.$data_map[id].'">#'.$data_map[id].' '.$data_map[name].'</option>';       
                                }
   echo'
       <form method="post" enctype="multipart/form-data" id="crducnghia">
<input type="text"   name="a" value="index" style="display:none;">
<input type="text"   name="b" value="admin" style="display:none;">


<select name="id"> '.$msg.'</select>
<br>
 # : <input type="text" placeholder=""  name="ma" value="">
<br>
Onclick : <input type="text" placeholder=""  name="onclick" value="">
<Br>
   Tên onclick : <input type="text" placeholder=""  name="ten" value="">
 <br>
 <select name="p"> <option value="add">Thêm</option> <option value="xoa">Xóa</option>  </select>

<br>


</form><button onclick="save()">Lưu</button>
   
   '; 
}