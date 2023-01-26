<?PHP
include_once('templates/config.php');
include_once('templates/ducnghia.php');
?>
<!DOCTYPE html>
<html lang="vi">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="keywords" content="Pokemon h5 , pokemon h5 online , pokemon html5 , pokemon h5 viet nam , pkmword , pokmeon , pokemon viet nam , pokemon viet nam online , pokemon onlne , online game , game html5, pkmvn.net , pkmvn.xyz , pkmvietnam , game mmo" />
<meta name="description" content="PokeMon H5 trò chơi đa nền tảng đầu tiên tại Việt Nam với lối chơi tự do." />
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="/images/items/Master ball.png" type="image/x-icon" />
<link rel="apple-touch-icon" href="/images/items/Master ball.png" />
<meta http-equiv="Content-Style-Type" content="text/css" />
<meta http-equiv="Content-Language" content="vi" />
<meta name="geo.placename" content="VIỆT NAM" />
<meta name="HandheldFriendly" content="True" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="referrer" content="origin" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Trang Chủ | PokeMon MMO H5" />
<meta property="og:description" content="PokeMon H5 trò chơi đa nền tảng đầu tiên tại Việt Nam với lối chơi tự do." />
<meta property="og:image" content="/sql/load/pokemmo.png" />
<meta name="author" content="DucNghia" />
<meta name="language" content="Vietnamese" />
<link rel="alternate" href="//pkmvn.xyz" hreflang="vi-vn" />
<meta property="fb:admins" content="100029182389558" />
		<script src="/sql/load.js?abxc"></script>
				<script src="/sql/admin.js?<?=rand(1,999999)?>"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>   
<title>PokeMon MMO Việt Nam </title>
<meta name="robots" content="noodp,index,follow">
<link rel="stylesheet" href="/style/lau.css?<?=rand(1,9999999)?>">
</head>
<body style="max-width:850px;margin: 5px auto;">
<div>

<div  id="header">
<div class="lg text-center">
<a href="/" class="not-tooltip">
<span>
<img src="/sql/load/pokemmo.png" />
</span>
</a>
</div>
</div>


<div class="mainblok font-20">
<div class="list1">
- Trò chơi dành cho người 12+.Chơi quá 180 phút có hại cho sức khỏe. <br>
<a href="https://fb.com/pokevietnam" class="font-20">FANPAGE PokeMon H5</a>
</div>
</div>


<script>
    
 $(document).ready( function () {
    opengame();
    $("#imgsssssss").each(function(){
                    $(this).keyup(function(){
                       console.log('có');
                    $('#show').html('<img src="http://pkmvn.xyz/xml/nhanvat2.php?nhanvat='+$('#imgsssssss').val()+'&nut=1 ">');
      
                        });
                    });
});


function setcookie(key, value) {
            var expires = new Date();
            expires.setTime(expires.getTime() + (100 * 24 * 60 * 60 * 1000));
            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
        }
        
        function ra(){
              return Math.floor(Math.random() * (999999999999999 - 1111111111)) + 1111111111;

        }
        
        
function opengame(){
   var ducnghia_wcs=600;
    var ducnghia_wcw=$("#abcd").innerWidth();;
    
    var axxx = ra();
    setcookie("canvas",axxx);
          var ducnghiacssx = document.getElementsByTagName('ducnghia');

    
    ducnghiacssx[0].innerHTML  = '<iframe src="/game.json?ducnghia&whith='+axxx+'" style="width: '+ducnghia_wcw+'px; height: '+ducnghia_wcs+'px"scrolling="no" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0"></iframe>';
}

function addquai() {
    socket.emit("xoa",1);
 $.nghia({
url : code(),
type : 'POST',
	data : {b : 'admin',a:'quai'},

ducnghia : function(result){
       socket.emit("addquai", result.npc); 
  
}
});   
} 
</script>

<div id="left">
    
    <div class="mainblok" id="abcd">
<div class="phdr">
<span>
<strong>PokeMon World <b onclick="closexxx()"><font color="red">[GIM GAME]</font></b> </strong>
</span>
</div>
<ducnghia>Đang tải dữ liệu trò chơi.</ducnghia>
</div>
</div>

<div id="right"><div class="mainblok">
<div class="phdr">
<span>
<strong>Hưỡng dẫn</strong>
</span>
</div>
<div class="list1 row padding-0 margin-0" id="tin">
 
</div>
</div>
<div class="mainblok">
<div class="phdr">
<span>
<strong onclick="control()" >Thông tin</strong>
</span>
</div>
<div class="list1 row padding-0 margin-0" id="cpanelxxx">
<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border">
Fanpage : <b class="float-right"><a href="//fb.com/pokevietnam">PokeMon H5</a></b>
</div>

<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><a href="/play"><b>Full màn hình</b></a></div>
<?PHP if(isset($_GET[admin])) { ?>
<div class="col-md-12 col-sm-12 col-12 p-t-5 p-b-5 border"><b onclick="control()">Admin</b></div>
<?PHP }?>
</div>
</div>
</div> <div class="clear"></div>


<div class="list" id="footer">
<table width="100%" cellpadding="0" cellspacing="0">
<tbody>
<tr>
<td width="auto" id="timer" style="text-align: left;"></td> <hr>
<td width="auto"><span style="color: red;"><center>PokeMon Việt Nam <br>
Trò chơi PokeMon Đa nền tảng trên web</center></span></td>
</tr>
</tbody>
</table>
</div>
</div>
</body>
</html>
