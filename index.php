<?php
header('Location: http://pokeburn.com/forum/?pokemon=forum');
exit();
include('templates/header.php');

// $_COOKIE[taikhoan];


$_SESSION[duc] = 'ducnghia';
$decode = base64_encode($_SESSION[ducnghia_game]);
?>
<noscript>
    <style type="text/css">
        .pagecontainer {display:none;}
    </style>
    <div class="noscriptmsg">
    Trò chơi yêu cầu bạn phải bật Javascript lên.
    Truy cập : // chrome://settings/content/siteDetails?site=http%3A%2F%2Fpkmvn.xyz để bật
    </div>
</noscript>

<script type='text/javascript' src='sql/game.js?null'></script>

<style>
html{background-color: rgba(246, 220, 161, 0.5);
    background-image: url("/sql/load/cae01ab5cce960db0d7819cc96e97ce8.png");
			background-size: cover;

}
body,p,form,table,img,td,tr,li,ul{margin:0;padding:0;border:0;}
body{	
 max-width: auto;
   margin: auto;
    margin-top: 0;
    font-size: 13px;
    font-family: Comfortaa;
    line-height: 20px;
}
</style>
<center><ducnghia>Đang tải dữ liệu trò chơi.</ducnghia></center>
        </body>
        </html>
   