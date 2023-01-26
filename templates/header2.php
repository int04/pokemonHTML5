
<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-5691486748156196",
          enable_page_level_ads: true
     });
</script>
<noscript><meta http-equiv="refresh" content="1;url=/error.php"></noscript>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="apple-mobile-web-app-capable" content="no" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="theme-color" content="#F2462E">
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no,maximum-scale=1" />

<meta name="keywords" content="Pokemon X,Pokemon Y,Pokemon Black, Pokemon White,Pokemon RPG,MMORPG, Pokemon MMORPG, Pokemon Online, Pokemon MMO, Pokemon Game, Online Pokemon Game, Pokemon, RPG"/>
<meta name="description" content="Pokemon Việt Nam ! Trò chơi RPG MMO Nhiều người chơi trên web dành cho điện thoại,máy tính." />

<!-- Required Stylesheets -->

<!-- Demo and Plugin Stylesheets -->


<meta property="og:title" content="PokeMon World Online Việt Nam" />
<meta property="og:description" content="Pokemon Việt Nam ! Trò chơi RPG MMO Nhiều người chơi trên web dành cho điện thoại,máy tính." />

<!-- Update your html tag to include the itemscope and itemtype attributes -->
<html itemscope itemtype="http://schema.org/Product">

<!-- Add the following three tags inside head -->
<meta itemprop="name" content="PokeMon World Online Việt Nam">
<meta itemprop="description" content="Pokemon Việt Nam ! Trò chơi RPG MMO Nhiều người chơi trên web dành cho điện thoại,máy tính">


<!-- Theme Stylesheet -->

<!-- JavaScript Plugins -->

<script type="text/javascript" src="/js/jquery-1.7.1.min.js"></script>

<script type="text/javascript" src="/js/jquery-ui.js"></script>

<script src="https://js.pusher.com/4.1/pusher.min.js"></script>
	<link rel="stylesheet" type="text/css" href="/style/ducnghia.php?versio=1.2&t=<?=time()?>"/>



	<link rel="stylesheet" type="text/css" href="/css/fluid.css?<?=rand(1,10)?>"/>


<script type="text/javascript" src="/js/jquery.hotkeys.min.js"></script>
<script type="text/javascript" src="/js/jsGif/gif.js"></script>
	 <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>    
<script src="/js/original-popper.min.js"></script>
    <script src="/js/originaltheme.min.js"></script>
    <script src="/js/original-holder.min.js"></script>
    <script src="/js/originalie10-bug-around.js"></script>

<title>PokeMon H5 Online</title>
<link rel="shortcut icon" type="image/png" href="/images/items/Master ball.png"/>

</head>

<body>



<!----------------->
<div class="modal fadeIn animated" id="pk" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div style="position: relative;
    background-color: #fff;
    border: 1px solid #999;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    background-clip: padding-box;
    outline: 0;">
	<button style="    position: absolute;
    right: 10px;
    top: 10px;
	z-index: 11;"type="button" class="close" data-dismiss="modal" aria-label="Close" id="aaaaa">
          <span aria-hidden="true"><img src="/screen/images/game/close.png"></span>
        </button>
        
        <div class="modal-header" id="DMheader">Chiến đấu</div>
        
      <div class="modal-body" id="DMbody">
	          
	 <div id="data_pk"></div>



		</div>
    </div>
  </div>
</div>

<div class="modal fadeIn animated" id="ducnghia_huanluyen" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div style="position: relative;
    background-color: #fff;
    border: 1px solid #999;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    background-clip: padding-box;
    outline: 0;">
	<button style="    position: absolute;
    right: 10px;
    top: 10px;
	z-index: 11;"type="button" class="close" data-dismiss="modal" aria-label="Close" id="aaaaa">
          <span aria-hidden="true"><img src="/screen/images/game/close.png"></span>
        </button>
        
        <div class="modal-header" id="DMheader">Huấn Luyện</div>
        
      <div class="modal-body" id="DMbody">
	          
	 <div id="data_battel_huanluyen"></div>



		</div>
    </div>
  </div>
</div>



<div class="modal fadeIn animated" id="ducnghia_boss_world" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div style="position: relative;
    background-color: #fff;
    border: 1px solid #999;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    background-clip: padding-box;
    outline: 0;">
	<button style="    position: absolute;
    right: 10px;
    top: 10px;
	z-index: 11;"type="button" class="close" data-dismiss="modal" aria-label="Close" id="aaaaa">
          <span aria-hidden="true"><img src="/screen/images/game/close.png"></span>
        </button>
        
        <div class="modal-header" id="DMheader">BOSS</div>
        
      <div class="modal-body" id="DMbody">
	          
	 <div id="data_boss_mo"></div>



		</div>
    </div>
  </div>
</div>
<div class="modal fade" id="ducnghia_tintuc" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div style="position: relative;
    background-color: #BFE48D;
    border: 1px solid #999;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    background-clip: padding-box;
    outline: 0;">
		<button style="    position: absolute;
    right: 10px;
    top: 10px;
	z-index: 11;"type="button" class="close" data-dismiss="modal" aria-label="Close" id="aaaaa">
          <span aria-hidden="true"><img src="/screen/images/game/close.png"></span>
        </button>
        
        <div class="modal-header" id="DMheader"><h4 class="modal-title" id="tintuc_title" style="font-size: 15px;font-family: ducnghiait;">Nhiệm Vụ</h4></div>
        
      <div class="modal-body" id="DMbody" style="max-height: 350px;
    overflow: auto;">
	          
	 <div id="tintuc_doc"></div>



		</div>
    </div>
  </div>
</div>



<div class="modal fadeIn animated" id="ducnghia_vuotai" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div style="position: relative;
    background-color: #fff;
    border: 1px solid #999;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    background-clip: padding-box;
    outline: 0;">
	<button style="    position: absolute;
    right: 10px;
    top: 10px;
	z-index: 11;"type="button" class="close" data-dismiss="modal" aria-label="Close" id="aaaaa">
          <span aria-hidden="true"><img src="/screen/images/game/close.png"></span>
        </button>
        
        <div class="modal-header" id="DMheader">Vượt ải</div>
        
      <div class="modal-body" id="DMbody">
	          
	 <div id="data_vuotai"></div>



		</div>
    </div>
  </div>
</div>

<?PHP
$chat = '
<div class="modal fade" id="modal_chatbox" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Chát Cộng Đồng</span></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><img src="/screen/images/game/close.png"></span>
        </button>
      </div>
      <div class="modal-body">
	  <div class="input-group">
      <span class="input-group-btn">
        <button class="btn btn-secondary" onclick="smileys();">Icon</button>
      </span>
          <input  type="text" placeholder="Nhập tin nhắn" id="t1_chat">
      <span class="input-group-btn">
        <button class="btn btn-info" type="button" onclick="chat()" id="t1_btchat">Chát</button>
      </span>
    </div><div class="fixtop" id="t1_smileys" style="display: none;">'.smileys('#t1_chat');
	  $chat .= '</div></div><ul class="NB_list-group deschat" id="t1_display">';
	 
	  $chat .='</ul>
<div class="modal-footer">Xin vui lòng viết dấu,không spam,quảng cáo,văng tục.Cám ơn.</a> 
      </div>
    </div>
  </div>
</div>';

echo $chat;
