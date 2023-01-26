function xem_vp_sk(id){
close_npc();
$.ajax({
url : '/_ajax/sukien.php?xem',
type : 'POST',
data : {id : id},

success : function(result){
  $('#subcenter_data').html(result);
    document.getElementById('subcenter').style.display = "block";

}
});
}  

 function sk_doi(id){

$.ajax({
url : '/_ajax/sukien.php?doi',
type : 'POST',
	data : {id : id},

success : function(result){
notice(result);
}
});
}  

function shop_sukien(){
close_npc();
$.ajax({
url : '/_ajax/sukien.php?shop',
type : 'POST',

success : function(result){
 head_o();
  $('#head_data').html(result);
  $('#end_data').html('anh muốn đổi gì ?');

}
});
}    
function xmenu() {
    document.getElementById('subcenter').style.display = "none";

}
  
  function oketang(loai){
      	var keotang = $('#keotang').val();

$.ajax({
url : '/_ajax/sukien.php?tang',
type : 'POST',
	data : {loai : loai , keotang : keotang},

success : function(result){
notice(result);
}
});
}  
  
  function doikeo(loai){
      	var keo = $('#keo').val();

$.ajax({
url : '/_ajax/sukien.php?doi',
type : 'POST',
	data : {loai : loai , keo : keo},

success : function(result){
notice(result);
}
});
}  
 
 function ghepnl(loai){
close_npc();
$.ajax({
url : '/_ajax/sukien.php?doinl',
type : 'POST',
	data : {loai : loai},

success : function(result){
document.getElementById('giua').style.display = "block";
  $('#data_giua').html(result);
}
});
}  

 function tangkeo(){
close_npc();
$.ajax({
url : '/_ajax/sukien.php?tangkeo',
type : 'POST',

success : function(result){
document.getElementById('giua').style.display = "block";
  $('#data_giua').html(result);
}
});
}  
 
 var b = 0;
		var m = 0;
		var m_reset = 0;
		function quaynao(){
			$('#hide').slideUp();
			$('#error').fadeOut();
			$('#phanthuong').fadeOut();
			$('.active').removeClass('active');
			$.ajax({
				url : '/_ajax/quayso.php?quay',
				type : 'POST',
				success : function (result){
					var getData = $.parseJSON(result);
					if(getData.error == 1){
						$('#error').fadeIn();
					} else {
						$('#quay').attr('onclick','doi').html('<span class="cb_end"><span class="cb_ttl white">Chờ</span></span>');
			m = 0;
			b = 0;
			m_reset = 0;
			wheel(100,getData.vongquay);
					}
				}
			});

		}
        function wheel(d, c)
        {
            var f = 8*3 + c;
            setTimeout(function() {
				if(m >1)
				m_reset = m-1;
			else 
				m_reset = 8;
				$('.m'+m_reset).removeClass('active');
                $('.m'+m).addClass('active');
                m++;
                b++;
				if(m ==9)
					m = 1;
                if (b < f)
                    wheel(d, c);   
				if (b == f){
					$('#quay').attr('onclick','quaynao();').html('<span class="cb_end"><span class="cb_ttl white">Quay</span></span>');
					$('#phanthuong').fadeIn().html('Quay thành công ! Nhận được vật phẩm !');
				
				}
            }, d);
        }
     
////

function map_quayso(){
close_npc();
$.ajax({
url : '/_ajax/quayso.php?show',
type : 'POST',

success : function(result){
 mo_chucnang();
  $('#data_chucnang_map').html(result);

}
});
}  

  function bossw(id){
      close_npc();

$.ajax({
	url : '/_ajax/chucnang.php?boss',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
 if(x.code == '1') {
     notice(x.msg);
 } else {
////
	$('#data_battel_huanluyen').html('');
 	$('#data_battel_vanbuon').html('');
 	$('#data_battel').html('');
 	 	$('#data_boss_mo').html('');

 $('#ducnghia_boss_world').modal('show');
	$('#data_boss_mo').load('/_nodejs/boss.php');

///
 }
			
	}
 
});
} 




function out() {
    $.ajax({
url : '/_ajax/chucnang.php?out',
type : 'POST',

success : function(result){

notice('mat ket noi toi may chu...Vui Long dang nhap lai');
    setTimeout(function(){ 
        
        	window.location.reload();

    }, 2000);

}
});
    
}
//////////socket
 function banbe(){
close_npc();
$.ajax({
url : '/_ajax/banbe.php?banbe',
type : 'POST',

success : function(result){
document.getElementById('giua').style.display = "block";
  $('#data_giua').html(result);
}
});
}  


function xoa_banbe(id) {



         $.ajax({
url : '/_ajax/banbe.php?xoa',
type : 'POST',
data : {id : id},
success : function(result){

notice(result);

}
}); 
      }

function ketban(id) {



         $.ajax({
url : '/_ajax/banbe.php?ketban',
type : 'POST',
data : {id : id},
success : function(result){
notice(result);

}
}); 
      }


function liston(online) {
    var listonx='';
	for (var i=0; i<online.length; i++) {
		var nghiaon = online[i];
	if(nghiaon.id !=0) {	
     listonx+='['+nghiaon['map']+']'+nghiaon['name']+' <font color="green">|</font> ';
	}
	}

           $('#list_online').html(listonx);
}

function chatpkm(){
    var t = Math.floor(Math.random() * 4);

if(t==0) {
    var pkm = 'hihi.';
}
if(t==1) {
    var pkm = 'huhuhu.';
}
if(t==2) {
    var pkm = 'đói.';
}
if(t==3) {
    var pkm = 'Mõi chân quá';
}
if(t==4) {
    var pkm = 'Thèm X';
}



  	var chat_gffd = "/chat/"+pkm+"";

		setTimeout(function(){document.getElementById('chat_pokemon').src = chat_gffd;}, 1);	   
		stopchatpkm();

}

 function stopchatpkm() {
  setTimeout(function(){
     
     	var new_chat = "";
		setTimeout(function(){document.getElementById('chat_pokemon').src = new_chat;}, 1);	 
      
  }, 3000);
}
function chatmap(){
     var id = $('#id').html();

	var text_chatmap = $('#text_chatmap').val();
	     	var chat_gffd = "/chat/"+text_chatmap+"";

		setTimeout(function(){document.getElementById('chat_ducnghia').src = chat_gffd;}, 1);	 
if(text_chatmap == "auto") {
    		  socket.emit("ducnghia_auto",id);

}

	  socket.emit("ducnghia_chat", text_chatmap,id);
 $('#text_chatmap').val('');
web_chat();
stopchat();

if(text_chatmap == "tinnhan") {
mychat();
}

if(text_chatmap == "tuido") {
map_ruong();
}

if(text_chatmap == "giatoc") {
giatoc();
}

if(text_chatmap == "nhiemvu") {
map_nhiemvu();
}
if(text_chatmap == "banbe") {
banbe();
}
}




/////////done













function addc(chatuer) {
    var chatducnghia='';
	for (var i=0; i<chatuer.length; i++) {
		var nghiachatext = chatuer[i];
	if(nghiachatext.id !=0) {	
     chatducnghia+=''+nghiachatext['name']+' : '+nghiachatext['text']+' <br>';
	}
	}

           $('#ducnghia_box_chat').html(chatducnghia);
}



function giatoc_nangcap() {



         $.ajax({
url : '/_ajax/giatoc.php?nangcap',
type : 'POST',
success : function(result){

notice(result);

}
}); 
      }









 function tintuc(trang) {



         $.ajax({
url : '/_ajax/tintuc.php?list',
type : 'POST',
data : {trang : trang},
success : function(result){
   $('#tintuc').html(result);


}
}); 
      }
      
      function tintuc_dang(){
        	    	    	var noidung = $('#newpost_txt').val();
        	    	    	var tieude = $('#forum_tieude').val();

$.ajax({
	url : '/_ajax/tintuc.php?viet',
	type : 'POST',
	data : {noidung : noidung , tieude : tieude},
	success : function(result){
	var x = $.parseJSON(result);
 	ducnghia('success', 'Thông Báo! ', '<br><p> '+x			  
.ducnghia+'</p>', 'DucNghia', '');

			
	}
 
});
} 
      
      
       function doctin(id) {

	$('#ducnghia_tintuc').modal('show');


         $.ajax({
url : '/_ajax/tintuc.php?doctin',
type : 'POST',
data : {id : id},
success : function(result){
    var xx = $.parseJSON(result);
   $('#tintuc_title').html(xx.title);

   $('#tintuc_doc').html(xx.text);


}
}); 
      }
 
 
 
 
 
 
 
 
 
 function giatoc_kick(id) {



         $.ajax({
url : '/_ajax/giatoc.php?kick',
type : 'POST',
data : {id : id},
success : function(result){

notice(result);

}
}); 
      }
      
 function giatoc_roi() {

         $.ajax({
url : '/_ajax/giatoc.php?roi',
type : 'POST',
success : function(result){

notice(result);

}
}); 
      }     
      
 
 function giatoc_dongy(id) {



         $.ajax({
url : '/_ajax/giatoc.php?dongy',
type : 'POST',
data : {id : id},
success : function(result){

notice(result);

}
}); 
      }
      
      
       function giatoc_khong(id) {



         $.ajax({
url : '/_ajax/giatoc.php?huy',
type : 'POST',
data : {id : id},
success : function(result){

notice(result);

}
}); 
      }
 
 
 
 
 function giatoc_danhsachxin(){
        close_npc();
 head_o();
   $('#head_data').html('Đang tải .....');

    $.ajax({
url : '/_ajax/giatoc.php?danhsach',
success : function(result){
 $('#head_data').html(result);
  

}
});
}
 function xin_giatoc(id) {



         $.ajax({
url : '/_ajax/giatoc.php?xin',
type : 'POST',
data : {id : id},
success : function(result){

notice(result);

}
}); 
      }
      
 function giatoc(){
        close_npc();
 head_o();
   $('#head_data').html('Đang tải .....');

    $.ajax({
url : '/_ajax/giatoc.php?giatoc',
success : function(result){
 $('#head_data').html(result);
  

}
});
}
 function taogiatoc(){
        close_npc();
 head_o();
   $('#head_data').html('Đang tải .....');

    $.ajax({
url : '/_ajax/giatoc.php?showtao',
success : function(result){
 $('#head_data').html(result);
  

}
});
}
 
 function ok_taogiatoc() {

	var giatoc = $('#giatoc').val();
	var icon = $('input[name=icon]:checked').val();

         $.ajax({
url : '/_ajax/giatoc.php?tao',
type : 'POST',
data : {giatoc : giatoc , icon : icon},
success : function(result){

notice(result);

}
}); 
      }
 
 
 
 
 
 
  function text_game(){
      var p = Math.floor(Math.random() * 600);
var r =  Math.floor(Math.random() * 5);
if(r == 0) {
    	    	$('#tip_text').html('Chúc bạn chơi game vui vẻ.');
}
if(r ==1) {
    	    	$('#tip_text').html('Trò chơi dành cho người trên 12+.Chơi quá 180 phút sẽ có hại cho sức khỏe.');
}
if(r ==2) {
    	    	$('#tip_text').html('Tham gia vận buôn sẽ có rất nhiều vàng.');
}
if(r ==3) {
    	    	$('#tip_text').html('Vào gia tộc khi up chung sẽ nhận nhiêu exp và bạc hơn.');
}
if(r ==4) {
    	    	$('#tip_text').html('Bảo vệ tài khoản,đề phòng trộm cắp.');
}
  document.getElementById('tip_pokemon').src = "/images/pokemon/"+p+".gif";
$("#ducnghia_tip").show();
$("#ducnghia_loadmap").hide();
  }
  
  function loadgame() {
      setTimeout(function(){ 
        $("#ducnghia_tip").hide();

    $("#ducnghia_loadmap").show();

}, 1000);
  }
  
  function chuyenmap(id,loai) {
         
text_game();

         $.ajax({
url : '/datalog/_map.php?chuyenmap',
type : 'POST',
data : {id : id , loai : loai},
success : function(result){
var xx = $.parseJSON(result);
if(xx.ok==1) {
    	  loadgame();
notice('bạn chưa thể đi đến khu vực này hãy làm nhiệm vụ.');

}else {
	    	$('#ducnghia_loadmap').load('/_ajax/loadmap.php?pay&map='+xx.map+'&ducnghia_x='+xx.xx+'&ducnghia_y='+xx.yy+'');

  socket.disconnect();
console.log('stop connect');
 loadgame();
}


}
}); 
      }
 
 
 
 
 
 setInterval(function(){
 timeonline();
},1000);      

 function node_login(){
      $('#ducnghia_login').toggle('fast','linear');  
      $('#ducnghia_dangki').toggle('fast','linear');  

  }  

     
      function getxxx() {
            var date = new Date();
            var data = 'toDateString(): ' + date.toDateString() + '<br />';
            data += 'toISOString(): ' + date.toISOString() + '<br />';
            data += 'toJSON(): ' + date.toJSON() + '<br />';
            data += 'toLocaleDateString(): ' + date.toLocaleDateString() + '<br />';
            data += 'toLocaleTimeString(): ' + date.toLocaleTimeString() + '';
            data += 'toString(): ' + date.toString() + '<br />';
            data += 'valueOf(): ' + date.valueOf() + '<br />';
            document.getElementById('result').innerHTML = data;
        }
     
     
     
   function timeonline() {
            var date = new Date();
            
         var ducnghia = date.toLocaleTimeString();
              		$("#ducnghia_time").html(ducnghia);

        }   
     
     
     
   function auto(){
    document.getElementById('t_autu').style.display = "block";
    		$("#auto").html('1');

}			

function auto_t(){
    document.getElementById('t_autu').style.display = "none";
    		$("#auto").html('0');

}
function chien_out(){
    		$("#chien").html('0');

}

     //   document.onkeydown = checkKeysUp;



//zxcxzzcx







 setInterval(function(){
 var timeat = $('#time_auto').html();
 var auto = $('#auto').html();
 var chien = $('#chien').html();



  if(auto == '1'){
    if(timeat >= '1') {
            if(chien=='1') {
 auto2();
}
}
}

},1000);      



   setInterval(function(){
 var timeat = $('#time_auto').html();
 var auto = $('#auto').html();
 var chien = $('#chien').html();



  if(auto == '1'){
    if(timeat >= '1') {
            if(chien=='0') {
 //lấy data tạm
 var data_caro_x = $('#ducnghia_map_ok').html();
 $.ajax({
url : '/_ajax/auto.php?map='+data_caro_x+'',
type : 'POST',

success : function(result){
ducnghia_att_pk();
    		$("#chien").html('1');

}

});
}
}
}

},5000);


     
  function follow(id){
         $.ajax({
url : '/_ajax/game.php?follow',
type : 'POST',
data : {id : id},

success : function(result){
notice(result);

}
});
     }         
     
     
     
     
     
     
     
     
     
     
     function log(){
               $( "#dialog" ).dialog( "open" );

     }
     
      function thongbao(){
               $( "#chucnang_bando_gameshow" ).dialog( "open" );
document.getElementById('giaotiep').style.display = "none";

     }
     
       function dongthongbao(){
               $( "#chucnang_bando_gameshow" ).dialog( "close" );

     }
     
  
     
      setInterval(function(){



        $('#nhiemvu').html('');
			
},10000);  
     
     
     
     
     
     
     
     
     
     
function dong_thamhiem(){
      $('#ducnghia_batt').modal('hide');

}



    
 function nhanpokemon(id){
             	  document.getElementById('show_npc').style.display = "none";
             	               	  document.getElementById('show_npc2').style.display = "none";

dongtalk();
         $.ajax({
url : '/_ajax/khoidau.php?nhanpokemon',
type : 'POST',
data : {id : id},

success : function(result){
var xx = $.parseJSON(result);
             	               	  document.getElementById('show_npc2').style.display = "";

		document.getElementById('show_npc').style.display = "";
npctalk(xx.text);


}
});
     }      
    
    function trang(msg) {
            	            	   ducnghia('success', 'ThĂ´ng BĂ¡o! ', '<br><p> '+msg+'</p>', 'DucNghia', '');

    }
 
   
  
  function menu_cmd(){
            $( "#dialog" ).dialog("open");

  }
     

     
     
     
  function nhiemvu(){
	$('#menu_nhiemvu').modal('show');

//	$('#modal_ttnv').modal('hide');

$.ajax({
url : '/datalog/_nhiemvu.php?my',
type : 'POST',
success : function(result){
var x = $.parseJSON(result);

$('#data_nhiemvu').html(x.ducnghia);

}
});
}   
     
     
     
     
     
     
 function tranv(){
     dongtalk();
        $('#nhiemvu').html('');

             	  document.getElementById('show_npc').style.display = "none";
             	               	  document.getElementById('show_npc2').style.display = "none";

         $.ajax({
url : '/datalog/_nhiemvu.php?tranv',
type : 'POST',
success : function(result){
var xx = $.parseJSON(result);
		document.getElementById('show_npc').style.display = "";
             	               	  document.getElementById('show_npc2').style.display = "";

npctalk(xx.text);
capnhat();
					$("#npc_menu").html(xx.menu);

if(xx.npc>=1) {
  document.getElementById('npcc'+xx.npc+'').src = "";
}
if(xx.npc2>=1) {
      document.getElementById('npcc'+xx.npc2+'').src = "/_ajax/button/chuanhan.png";

}
}
});
     }       
     
    function ducnghia_money(){
			capnhat();
}
function ducnghia_tien(){
			capnhat();
}

function capnhat_tien(){
			capnhat();

} 
     
     function capnhat(){
         $.ajax({
url : '/datalog/index.php?capnhat',
type : 'POST',
success : function(result){
var x = $.parseJSON(result);

					$("#tienvang").html(x.vang);
					$("#silver").html(x.silver);


}
});
     }  
     
     
     
     
     
   function nhannv(){
            dongtalk();

             	  document.getElementById('show_npc').style.display = "none";
             	               	  document.getElementById('show_npc2').style.display = "none";

         $.ajax({
url : '/datalog/_nhiemvu.php?nhannv',
type : 'POST',
success : function(result){
var xx = $.parseJSON(result);
		document.getElementById('show_npc').style.display = "";
             	               	  document.getElementById('show_npc2').style.display = "";

npctalk(xx.text);
					$("#npc_menu").html(xx.menu);

if(xx.npc>=1) {
  document.getElementById('npcc'+xx.npc+'').src = "/_ajax/button/danhan.png";
}

}
});
     }  
     
     
     function docnv(){
                     dongtalk();

             	  document.getElementById('show_npc').style.display = "none";
             	               	  document.getElementById('show_npc2').style.display = "none";

         $.ajax({
url : '/datalog/_nhiemvu.php?docnv',
type : 'POST',
success : function(result){
var xx = $.parseJSON(result);
		document.getElementById('show_npc').style.display = "";
		             	               	  document.getElementById('show_npc2').style.display = "";

npctalk(xx.text);
					$("#npc_menu").html(xx.menu);



}
});
     }
    function add_nhiemvu(){
	var tennv = $('#tennv').val();
	var text = $('#text').val();
	var nhiemvu = $('#nhiemvu').val();
	var npc = $('#npc').val();
	var loai = $('#loai').val();
	var pokemon = $('#pokemon').val();
	var can = $('#can').val();
	var silver = $('#silver').val();
	var gold = $('#gold').val();
	var exp = $('#exp').val();
	var item = $('#item').val();
	var hmtm = $('#hmtm').val();
	var vatpham = $('#vatpham').val();


$.ajax({
url : '/datalog/_nhiemvu.php?add',
type : 'POST',
data : {tennv : tennv , text : text , nhiemvu:nhiemvu,npc:npc,loai:loai,pokemon:pokemon,can:can,silver:silver,gold:gold,exp:exp,item:item,hmtm:hmtm,vatpham:vatpham},

success : function(result){
var x=$.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');

}
});
}  

    
     
     
     
     
function tool_data_map(){ $('#show_menu_data_map').toggle('fast','linear');  
}    
     
     
     function close_npc(){
  if(document.getElementById('show_npc').style.display =="") {
                   dongtalk();
        
}
					$("#npc").html('');
             	               	  document.getElementById('show_npc2').style.display = "none";

document.getElementById('show_npc').style.display = "none";

}



     var movements = {
		upleft    : {up: -1, left: -1},
		up        : {up: -1, left:  0},
		upright   : {up: -1, left:  1},
		left      : {up:  0, left: -1},
		right     : {up:  0, left:  1},
		downleft  : {up:  1, left: -1},
		down      : {up:  1, left:  0},
		downright : {up:  1, left:  1},
	};
	window.disable_actions = false;


var keyState = {};    
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
    
},true);
window.addEventListener("keyup", checkKeysUp, false);
function checkKeysUp(evt) {

}



function gameLoop() {
    if (keyState[38]){
Spielerbewegen('up'); 
    }   
     if (keyState[37]){
Spielerbewegen('left'); 

    }   
    
     if (keyState[39]){
Spielerbewegen('right'); 
    }   
    
     if (keyState[40]){
Spielerbewegen('down'); 
    }   
    

    setTimeout(gameLoop, 150);
}    
gameLoop();


function ducnghiadzvc(evt) {
    
    if (evt.keyCode == 13 && $('#show_chatmap').css('display') == 'none') {
web_chat();

} 
}

	///done

  function save_edit(){
	var pass = $('#pass').val();
	var gioithieu2 = $('#gioithieu2').val();

	$('#modal_ttnv').modal('hide');

$.ajax({
url : '/datalog/ducnghia.php?save',
type : 'POST',
data : {gioithieu2 : gioithieu2 , pass : pass},

success : function(result){
var x = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');

}
});
}

  function edit_info(){
	$('#ducnghia_edit').modal('show');

//	$('#modal_ttnv').modal('hide');

$.ajax({
url : '/datalog/ducnghia.php?edit',
type : 'POST',
success : function(result){
var x = $.parseJSON(result);

$('#data_info').html(x.ducnghia);

}
});
}
  
  
   function add_npc(){

	var img = $('#anh').val();
	var namenpc = $('#namenpc').val();
	var onclick = $('#onclick').val();
	var text = $('#textgt').val();
	var nameo = $('#nameo').val();
	var onclick1 = $('#onclick1').val();
	var nameo1 = $('#nameo1').val();
	var onclick2 = $('#onclick2').val();
	var nameo2 = $('#nameo2').val();
	var onclick3 = $('#onclick3').val();
	var nameo3 = $('#nameo3').val();



$.ajax({
url : '/datalog/_map.php?addnpc',
type : 'POST',
data : {nameo: nameo,img : img , namenpc : namenpc , text : text , nameo3 : nameo3, nameo2 : nameo2 , nameo1 : nameo1, onclick : onclick,onclick1 : onclick1,onclick2:onclick2,onclick3:onclick3},
success : function(result){
var x = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');

}
});
}

  function checkKeysUp2(evt) {
      if (evt.keyCode == 46) {
     var id = $('#ducnghia_map_ok').html();
          var x = $('#xmap').html(); //lấy data tạm
          var y = $('#ymap').html(); //lấy data tạm

     
$.ajax({
url : '/datalog/_map.php?cam',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

//	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');
$('#conlog').html(xx.msg);

}
});
}
      if($('#modal_chatbox').css('display') == 'none' && $('#sk').css('display') == 'none' && $('#t20_modal').css('display') == 'none' && !$('#newpost_txt').val()) {
//if (evt.keyCode == 66) {
//bag();

//} 
//if (evt.keyCode == 13) {
//mo_menu();

//} 

//if (evt.keyCode == 78) {
//mychat();
//} 

//if (evt.keyCode == 77) {
//sukien();
//}

//if (evt.keyCode == 86) {
//allthongbao();
//}


}
}

window.addEventListener('keyup', checkKeysUp2);


     function add_data(){
	var id = $('#idddddddd').val();
		var x = $('#x').val();
	var y = $('#y').val();
	var loai = $('#loai').val();
	var idnew = $('#idnew').val();
	var id_pokemon = $('#id_pokemon').val();
	var npc = $('#npc').val();
	var level = $('#level').val();



$.ajax({
url : '/datalog/_map.php?data',
type : 'POST',
data : {id : id , x : x , y : y , loai : loai , idnew : idnew , id_pokemon : id_pokemon , npc : npc , level : level},
success : function(result){
var x = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');

}
});
}

 function edit_data(a){
	var id = $('#idddddddd').val();
		var x = $('#x').val();
	var y = $('#y').val();
	var loai = $('#loai').val();
	var idnew = $('#idnew').val();
	var id_pokemon = $('#id_pokemon').val();
	var npc = $('#npc').val();



$.ajax({
url : '/datalog/_map.php?dataedit',
type : 'POST',
data : {a : a,id : id , x : x , y : y , loai : loai , idnew : idnew , id_pokemon : id_pokemon , npc : npc},
success : function(result){
var x = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');

}
});
}

function npc1(id,x,y){
$.ajax({
url : '/datalog/_map.php?npc1',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}
function npc2(id,x,y){
$.ajax({
url : '/datalog/_map.php?npc2',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}

function npc3(id,x,y){
$.ajax({
url : '/datalog/_map.php?npc3',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}
function npc4(id,x,y){
$.ajax({
url : '/datalog/_map.php?npc4',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}

function map1(id,x,y){
$.ajax({
url : '/datalog/_map.php?map1',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}

function map3(id,x,y){
$.ajax({
url : '/datalog/_map.php?map3',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}

function map4(id,x,y){
$.ajax({
url : '/datalog/_map.php?map4',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}

function map2(id,x,y){
$.ajax({
url : '/datalog/_map.php?map2',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}


function map_pokemon(id,x,y){
$.ajax({
url : '/datalog/_map.php?pokemon',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}

function map_nuoc(id,x,y){
$.ajax({
url : '/datalog/_map.php?nuoc',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}









function add_map(){
	var tenmap = $('#tenmap').val();
		var anh = $('#anhmap').val();
		var nhiemvu = $('#nhiemvu').val();


$.ajax({
url : '/datalog/_map.php?add',
type : 'POST',
data : {tenmap : tenmap , anh : anh , nhiemvu : nhiemvu},
success : function(result){
var x = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');

}
});
}





function editmap_cam(id,x,y){
$.ajax({
url : '/datalog/_map.php?cam',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 //	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}

function editmap_xoa( id , x , y){

  $.ajax({
url : '/datalog/_map.php?xoa',
type : 'POST',
data : {x : x , y : y , id : id},
success : function(result){
var x = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');

}
});  
    

}




function map(){
	var x = $('#x').val();
	var y = $('#y').val();
	var code = $('#code').val();
	var id = $('#map').val();

$.ajax({
url : '/datalog/_map.php?edit',
type : 'POST',
data : {x : x , y : y , id : id , code : code},
success : function(result){
var x = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');

}
});
}



function user(id,mod){

$.ajax({
url : '/datalog/ducnghia.php?thongtin',
type : 'POST',
data : {id : id , mod : mod},
success : function(result){
var x = $.parseJSON(result);

  $('#them').html(x.chucnang);

}
});
}

function kinang(ten){
    	$('#pokemonttnv').modal('hide');

	$('#ducnghia_kinang').modal('show');

$.ajax({
url : '/datalog/ducnghia.php?xemkn',
type : 'POST',
data : {ten : ten},
success : function(result){
var x = $.parseJSON(result);

$('#data_kinang').html(x.ducnghia);

}
});
}


function tha_sll(){
	var chkArray = [];
	
	$("#pkm:checked").each(function() {
		chkArray.push($(this).val());
	});
	
	var selected;
	selected = chkArray.join(' ') ;
	
var vatpham;
 id = selected;
$.ajax({
	url : '/datalog/_1.php?tha',
		type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
node('/admin.php?ducnghia=_trochoi/tha');

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+x.ducnghia+'</p>', 'DucNghia', '');


	}

});
    
}




function open_pokemon(){
	$('#menu_pokemon').modal('show');

    	$('#list_pkm').load('/datalog/ajax.php?pokemon');

    
}

function mo_menu(){
	$('#ducnghia_menu_nut').html('<img onclick="dong_menu()" src="/images/button/ducnghia_close.png">');

    	$('#ducnghia_mod').load('/datalog/_1.php?ducnghia');

    
}

function dong_menu(){
	$('#ducnghia_menu_nut').html('<img onclick="mo_menu()" src="/images/button/ducnghia_menu.png">');
	$('#ducnghia_mod').html('');


    
}


function open_menu(){
	$('#menu_chucnang').modal('show');

    	$('#list_mn').load('/datalog/menu.php?ducnghiait');

    
}

function dangki(){
    GDloading('Xin chờ ....',function(){
	var day = $('#day').val();
	var month = $('#month').val();
	var year = $('#year').val();
	var character = $('#character').val();
	var wereld = $('#wereld').val();
	var tennhanvat = $('#tennhanvat').val();
	var ducnghiaMail = $('#ducnghiaMail').val();
	var passwordx = $('#passwordx').val();
	var usernamex = $('#usernamex').val();
	

$.ajax({
	url : '/request/reg.php',
	type : 'POST',
	data : {day : day , month : month , year : year , character : character , wereld : wereld , tennhanvat : tennhanvat ,ducnghiaMail : ducnghiaMail ,  passwordx : passwordx ,usernamex : usernamex },
	success : function(result){
	var x = $.parseJSON(result);
 	ducnghia('success', 'Thông Báo! ', '<br><p> '+x			  
.ducnghialoi+'</p>', 'DucNghia', '');

    	            	    $('#wait_div').fadeOut();
			
	}
});  
 
    	        	
    });
    
}
function show_main(ducnghia){
if(ducnghia ==1) { /// 1 là đăng kí
var ducnghiadz = '';
ducnghiadz +='<div class="input-group des_w50pt"> <span class="input-group-addon" style="border-radius: 50px 0px 0px 50px;"><i class="fa fa-user fa-fw"></i></span><input type="text" id="usernamex" class="form-control" placeholder="Tên tài khoản" style="border-radius: 0px 50px 50px 0px;" value=""></div>';
ducnghiadz +='<div class="input-group des_w50pt"> <span class="input-group-addon" style="border-radius: 50px 0px 0px 50px;"><i class="fa fa-lock fa-fw"></i></span><input type="text" id="passwordx" class="form-control" placeholder="Mật Khẩu" style="border-radius: 0px 50px 50px 0px;" value=""></div>';

ducnghiadz +='<div class="input-group des_w50pt"> <span class="input-group-addon" style="border-radius: 50px 0px 0px 50px;"><i class="fa fa-envelope"></i></span><input type="text" id="ducnghiaMail" class="form-control" placeholder="Email để quên mật khẩu" style="border-radius: 0px 50px 50px 0px;" value=""></div>';

ducnghiadz +='<div class="input-group des_w50pt"> <span class="input-group-addon" style="border-radius: 50px 0px 0px 50px;"><i class="fa fa-id-card-o"></i></span><input type="text" id="tennhanvat" class="form-control" placeholder="Tên Nhân Vật" style="border-radius: 0px 50px 50px 0px;" value=""></div>';


         	$('#ducnghia_main').html(ducnghiadz);
document.getElementById("hide_reg").style.display = 'block';

} else {
    
 document.getElementById("hide_reg").style.display = 'none';
var ducnghiadz = '';
ducnghiadz += '<div class="input-group des_w50pt"> <span class="input-group-addon" style="border-radius: 50px 0px 0px 50px;"> <i class="fa fa-user fa-fw"></i></span> <input type="text" id="email" class="form-control" placeholder="Tên đăng nhập" style="border-radius: 0px 50px 50px 0px;"></div><div class="input-group fixtop des_w50pt"> <span class="input-group-addon" style="border-radius: 50px 0px 0px 50px;"><i class="fa fa-lock fa-fw"></i>  </span><input type="password" id="pass" class="form-control" placeholder="Mật khẩu" style="border-radius: 0px 50px 50px 0px;" > </div><button type="submit" class="btn btn-primary fixtop" onclick="login();" id="bsw" style="border-radius: 50px;"><i class="fa fa-sign-in-alt"></i> ĐĂNG NHẬP</button><br><font color="red"><b onclick="show_main(1)"><i class="fa fa-user-plus"></i> Chưa có tài khoản ?</b></font>';
         	$('#ducnghia_main').html(ducnghiadz);

}

    
}








function pvp_tran(ducnghia2){

$.ajax({
	url : '/datalog/_chapnhan.php?ok',
		type : 'POST',
	data : {ducnghia2 : ducnghia2},
	success : function(result){
	var x = $.parseJSON(result);
 if(x.ok == '1') {
node('/_nodejs/pvp.php');
}
         	$('#thongbao_tran').html(x.ducnghia);


	}

});
    
}


function pvp_a(){

$.ajax({
	url : '/datalog/_pvp.php',
	success : function(result){
	var x = $.parseJSON(result);
 if(x.chuyentrang == '1') {
node('/_nodejs/pvp.php');
}
         	$('#thongbao_pvp').html(x.ducnghia);


	}

});
    
}





function pvp_thuong(){

$.ajax({
	url : '/datalog/_a.php',
	success : function(result){
	var x = $.parseJSON(result);
 if(x.xx == 'ok') {
node('/_nodejs/pvp.php');
}

	}

});
    
}



function boss(){

$.ajax({
	url : '/datalog/_tancong.php?boss',
	success : function(result){
node('/_nodejs/trainer.php');
	}

});
} 












function chon_cap_do(){
        	    	    	var lvl = $('#lvl').val();

$.ajax({
	url : '/datalog/_pokemon.php?choncapdo',
	type : 'POST',
	data : {lvl : lvl},
	success : function(result){
	var x = $.parseJSON(result);
 	ducnghia('success', 'Thông Báo! ', '<br><p> '+x			  
.ducnghia+'</p>', 'DucNghia', '');

			
	}
 
});
} 





function forum_dangbai(){
        	    	    	var noidung = $('#newpost_txt').val();
        	    	    	var tieude = $('#forum_tieude').val();

$.ajax({
	url : '/datalog/forum.php?dangbai',
	type : 'POST',
	data : {noidung : noidung , tieude : tieude},
	success : function(result){
	var x = $.parseJSON(result);
 	ducnghia('success', 'Thông Báo! ', '<br><p> '+x			  
.ducnghia+'</p>', 'DucNghia', '');

			
	}
 
});
} 


function forum_binhluan(id){
        	    	    	var noidung = $('#newpost_txt').val();

$.ajax({
	url : '/datalog/forum.php?binhluan',
	type : 'POST',
	data : {noidung : noidung , id : id},
	success : function(result){
	var x = $.parseJSON(result);
 

			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.ducnghia+'</p>', 'DucNghia', '');
			  node('/admin.php?ducnghia=php/nghia&id='+id+'#title');

	}
 
});
} 


function ok_tienhoa(item){
        	    	    	var pokemonid = $('#pokemonid').val();
        	    	    	var levelenid = $('#levelenid').val();

$.ajax({
	url : '/datalog/_datienhoa.php?tienhoa',
	type : 'POST',
	data : {levelenid : levelenid , item : item , pokemonid : pokemonid},
	success : function(result){
	var x = $.parseJSON(result);
 
 if(x.ducnghia2) {
     	$('#nodejs_ducnghia').html(x.ducnghia2);
} else {
			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.ducnghia+'</p>', 'DucNghia', '');
}
	}
 
});
} 


function hienthi_tienhoa(item){
        	    	    	var levelenid = $('#levelenid').val();
        	    	    	var pokemonid = $('#pokemonid').val();
        	    	    	var pokemonnaam = $('#pokemonnaam').val();

$.ajax({
	url : '/datalog/_datienhoa.php?hienthi',
	type : 'POST',
	data : {levelenid : levelenid , item : item , pokemonid : pokemonid , pokemonnaam : pokemonnaam},
	success : function(result){
	var x = $.parseJSON(result);
 
 if(x.ducnghia2) {
     	$('#nodejs_ducnghia').html(x.ducnghia2);
} else {
			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.ducnghia+'</p>', 'DucNghia', '');
}
	}
 
});
} 


function tienhoa(id){
$.ajax({
	url : '/datalog/_tancong.php?tienhoa',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
 
dong_chucnang();

	}
 
});
} 





function pokemon_skill(id){
$.ajax({
	url : '/datalog/_tancong.php?skill',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
 
dong_chucnang();

	}
 
});
} 








function pokemon_start(){
var id = $('input[id=id]:checked').val();

    	
$.ajax({
	url : '/datalog/_tancong.php?chon',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
 if(x.ducnghia == "chọn PokeMon Thành Công,Xin Đợi.") {
     	    node('/_nodejs/index.php');

 }
			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.ducnghia+'</p>', 'DucNghia', '');
	

	}
 
});
} 





function benhvien(){
dongtalk();



$.ajax({
	url : '/datalog/_tancong.php?hp',
	success : function(result){
	var x = $.parseJSON(result);
		npctalk(x.ducnghia);
				
	  	capnhat_tien();	       
	}

});
} 


function gyms(name){

    	
$.ajax({
	url : '/datalog/_tancong.php?gyms',
	type : 'POST',
	data : {name : name},
	success : function(result){
	var x = $.parseJSON(result);
	if(x.ducnghia ==1) {
	    node('/_nodejs/trainer.php');

	} else {
			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.ducnghia+'</p>', 'DucNghia', '');
	}

	}
 
});
} 

function tancong(){

$.ajax({
	url : '/datalog/_tancong.php?wild',
	success : function(result){
node('/_nodejs/wild.php');
	}

});
} 





///Nodejs PHP By DucNghia
function node(ducnghia) {
    if (ducnghia) {
			    GDloading('Đang Tải Dữ Liệu...',function(){

    	$('#nodejs_ducnghia').load(''+ducnghia+'');
    	
    					$('#duc_nghia').html(' <a href="javascript:node(\''+ducnghia+'\')"><i class="fa fa-refresh fa-2x"></i></a>');
dulieu_get();
    				$('#wait_div').fadeOut();
	$('.modal').modal('hide');

	});
	 if(document.getElementById('show_npc').style.display =="") {
                   dongtalk();
        
}

}
}
///Kết thúc nodejs
function dulieu_get() {
	$.ajax({
		url : '/datalog/php.php',
		success : function(result){
			$('#wait_div').fadeOut();
				var x = $.parseJSON(result);
      $("#exp_nghia2").width(''+x.ducnghia_ptexp+'%')

		$('#exp_nghia').html(x.ducnghia_ptexp);
				$('#level_ducnghia').html(x.ducnghia_lv);
								$('#ducnghia_new').html(x.ducnghia_tinnhan);
																$('#index_newmailall').html(x.ducnghia_tinnhan);

	  $('#chat_tg').html(x.ctg);

								$('#index_thongbao').html(x.ducnghia_thongbao);


		}
		});
    
}

function nodejs(obj) {
if (obj) {
			    GDloading('Đang tải bản đồ ...',function(){
		$.ajax({
		url : ''+obj+'',
		success : function(result){
			$('#wait_div').fadeOut();
				var x = $.parseJSON(result);

		$('#nodejs_ducnghia').html(x.msg);
		}
		});
			    });
    }
}


function nodejs_(obj) {
if (obj) {
		$.ajax({
		url : ''+obj+'',
		success : function(result){
			$('#wait_div').fadeOut();
				var x = $.parseJSON(result);

		$('#nodejs_head').html(x.msg);
		}
		});
				
    }
}








function markt(id,ducnghiait){
    	var soluong_mua = $('#soluong_mua').val();
    	    ///hiển thị mark
    	    if(ducnghiait == "item") {
    	        thongbao();
	      $.ajax({
	url : '/datalog/_shop.php?markt',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
		    						  		       


				$('#dulieu_thongbao').html(x.ducnghia);

	}

});  }

if(ducnghiait == "vatpham") {
        	        thongbao();

	      $.ajax({
	url : '/datalog/_shop.php?vatpham',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
		    						  		       


				$('#dulieu_thongbao').html(x.ducnghia);

	}

});  }
///song

/// mua markt //
 if(ducnghiait == "muamarkt") {
         	        thongbao();

	      $.ajax({
	url : '/datalog/_shop.php?muamarkt',
	type : 'POST',
	data : {id : id , soluong_mua : soluong_mua},
	success : function(result){
	var x = $.parseJSON(result);
		    						  		      
 				$('#dulieu_thongbao').html(x.ducnghia);

						capnhat_tien();

	}

});  }


if(ducnghiait == "muavatpham") {
        	        thongbao();

	      $.ajax({
	url : '/datalog/_shop.php?muavatpham',
	type : 'POST',
	data : {id : id , soluong_mua : soluong_mua},
	success : function(result){
	var x = $.parseJSON(result);
		    						  		      
 				$('#dulieu_thongbao').html(x.ducnghia);
						capnhat_tien();

	}

});  }

//song
    	    
    	   

} 










function rename(){
    	    	    	var tenre = $('#tenre').val();

    	    

$.ajax({
	url : '/datalog/shopvatpham.php?ten',
	type : 'POST',
	data : {tenre : tenre},
	success : function(result){
	var x = $.parseJSON(result);
	typing("#chat1_nghia","#chat2_nghia",""+x.a+"");	    								
	  		       
	}

});
} 

function bank(ducnghiait){
    	var sotien = $('#sotien').val();
    	    
    	    if(ducnghiait == "gui") {
	      $.ajax({
	url : '/datalog/ajax.php?gui',
	type : 'POST',
	data : {sotien : sotien},
	success : function(result){
	var x = $.parseJSON(result);
		    						  		       
			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');
						capnhat_tien();

				$('#tienbank').html(x.tienbank);


	}

});

    	    }
    	    
    	    if(ducnghiait == "rut") {
    	   $.ajax({
	url : '/datalog/ajax.php?rut',
	type : 'POST',
	data : {sotien : sotien},
	success : function(result){
	var x = $.parseJSON(result);
		    						  		       
			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');
						capnhat_tien();

				$('#tienbank').html(x.tienbank);


	}

});      
    	    }

} 


function ducnghia_map() {
	$('#nodejs_ducnghia').load('/bank.php'); 

}
function taochat(){
    	var key = $('#key').val();
    	    	    	var traloi = $('#traloi').val();

    	    

$.ajax({
	url : '/datalog/ad.php?tao',
	type : 'POST',
	data : {key : key , traloi : traloi},
	success : function(result){
	var x = $.parseJSON(result);
		    						  		       
			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');
	}

});
} 

function nhapcode(){
    	var macode = $('#macode').val();
    	    
$.ajax({
	url : '/datalog/giftcode.php',
	type : 'POST',
	data : {macode : macode},
	success : function(result){
	var x = $.parseJSON(result);
		    						  		       
		$('#tb_giftcode').html(x.thongbao);

	}

});
} 

function ducnghia(tipo, titulo, texto, bottom, callback) {
    $().nabNotifica('showToast', {
        title: titulo,
        text: texto,
        type: tipo,
        buttons: bottom,
        close: function () {
            callback
        }
    });
}


function hoi_nek(){
        	var cauhoi = $('#cauhoi').val();
        	var a = $('#a').val();
        	var b = $('#b').val();
        	var c = $('#c').val();
        	var d = $('#d').val();
        	var dung = $('#dung').val();

$.ajax({
url : '/datalog/cauhoi.php?add',
type : 'POST',
data : {cauhoi : cauhoi , a : a , b : b , c : c , d : d , dung : dung},
success : function(result){
    var x = $.parseJSON(result);

			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.thongbao+'</p>', 'DucNghia', '');

			
				$('#msg').html(x.thongbao);

   		$('#cauhoi').val('');
    		$('#a').val('');
    		$('#b').val('');
    		$('#c').val('');     		$('#d').val('');
    		$('#dung').val('');


}
});    
    
} 

function traloi(id,ducnghia){
$.ajax({
url : '/datalog/cauhoi.php?traloi',
type : 'POST',
data : {id : id , ducnghia : ducnghia},
success : function(result){
    var x = $.parseJSON(result);
    				$('#menu_cauhoi').html(x.data);

capnhat_tien();

    
}
});    
    
} 
function ducnghia_game(){
    				$('#menu_cauhoi').html('Đang lấy câu hỏi');

$.ajax({
	url : '/datalog/cauhoi.php?cauhoi',

	success : function(result){
	var x = $.parseJSON(result);
				$('#menu_cauhoi').html(x.data);


	}
});
}


function ad_ok(){
    	var tentaikhoan = $('#tentaikhoan').val();
    	    	var loai = $('#loai').val();
    	    	var thoigian = $('#thoigian').val();
    	    	var lido = $('#lido').val();

$.ajax({
	url : '/datalog/ad.php?ok',
	type : 'POST',
	data : {loai : loai , tentaikhoan : tentaikhoan , thoigian : thoigian , lido : lido},
	success : function(result){
	var x = $.parseJSON(result);
		    						  		       
notice(x.msg);
	}

});
} 




function admin(){
$('.modal').modal('hide');
$('#admin_nghia').modal('show');
$.ajax({
	url : '/datalog/ad.php?ad',

	success : function(result){
	var x = $.parseJSON(result);
				$('#noidungadmin').html(x.caidat);


	}
});
}


function addchat(){
$('.modal').modal('hide');
$('#add_chat').modal('show');
$.ajax({
	url : '/datalog/ad.php?chat',

	success : function(result){
	var x = $.parseJSON(result);
				$('#noidungadd').html(x.caidat);


	}
});
}


function uoc(id){
$.ajax({
url : '/datalog/goirong.php?uoc',
type : 'POST',
data : {id : id},
success : function(result){
    var x = $.parseJSON(result);
    				$('#menu_nr').html(x.data);

capnhat_tien();

    
}
});    
    
} 
function goirong(){
    				$('#menu_nr').html('Đang Gọi Ngọc rồng');

$.ajax({
	url : '/datalog/goirong.php?goi',

	success : function(result){
	var x = $.parseJSON(result);
				$('#menu_nr').html(x.data);


	}
});
}
///sử dụng vật phẩm
function sudung(id,soluong){
$.ajax({
url : '/datalog/shopvatpham.php?sudung',
type : 'POST',
data : {id : id , soluong: soluong},
success : function(result){
    var x = $.parseJSON(result);
   notice(x.thongbao);
map_ruong();
}
});    
    
} 
///song
function ban_vp(id,ducnghiait){
    
    ///////xem VP ĐỂ BÁN
$.ajax({
url : '/datalog/shopvatpham.php?ban',
type : 'POST',
data : {id : id},
success : function(result){
    var x = $.parseJSON(result);
       $('#nutbanvp').html('<center><big> '+x.ten+' </big></center> <br>   Số Lượng<input id="sl_ban" class="form-control" type="number" value="0" style="width: 91%;"> Giá Bạc :<input id="gia_ban_bac" class="form-control" type="number" value="0" style="width: 91%;">   <br> '+x.nut+' ');
				$('#show_ban_vp').html(x.nut);
				$('#vp_ten_show').html(x.ten);

}


});
}




/////////
function okban_vp_shop(id){
    	var sl_ban = $('#sl_ban').val();
    	var gia_ban_bac = $('#gia_ban_bac').val();
    	var gia_ban_vang = $('#gia_ban_vang').val();

 ///sử lí dữ liệu bán lun
$.ajax({
url : '/datalog/shopvatpham.php?okban',
type : 'POST',
data : {id : id , sl_ban : sl_ban , gia_ban_bac : gia_ban_bac , gia_ban_vang : gia_ban_vang},
success : function(result){
    var x = $.parseJSON(result);
			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.thongbao+'</p>', 'DucNghia', '');

}
});    
    

}




///online
function tvonline(){
$('.modal').modal('hide');
$('#openonline').modal('show');
$.ajax({
	url : '/datalog/ajax.php?online',

	success : function(result){
	var x = $.parseJSON(result);
				$('#online_ak').html(x.online);


	}
});
}
///song
function bandomoi(vung){
$.ajax({
	url : '/datalog/pokemon.php',
	type : 'POST',
	data : {vung : vung},
	success : function(result){
var res = jQuery.parseJSON(result);

				////hiển thị PokeMon khi gặp by DucNghia DZ VC
					var html = '';
					html += '<div class="list-group-item" style="background: rgba(116, 128, 191, 0.33); font-size: smaller;">';
					html += '<img src="images/pokemon/'+res.id+'.gif" style="max-width: 100px;max-height: 100px;" /><br />';
					html += '<i>'+res.name+' [lv.'+res.level+']<Br>'+vung+'</i><br/>';
					html += '<a href="javascript:tancong();"><button  class="button">Đánh</button></a>&nbsp;';
										html += '</div>';

					$("#result").html(html);
							$('#ducnghiadzxxx').html(html);

	}

});
}

function savecaidat(){
    	var auto = $('#auto').val();
    	    	var vung = $('#vung').val();

$.ajax({
	url : '/datalog/caidat.php?bat',
	type : 'POST',
	data : {auto : auto , vung : vung},
	success : function(result){
	var x = $.parseJSON(result);
			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');

setting();
	}

});
} 
///mua thẻ tháng
function setting(){
$('.modal').modal('hide');
$('#caidat').modal('show');
$.ajax({
	url : '/datalog/caidat.php',

	success : function(result){
	var x = $.parseJSON(result);
				$('#noidungcaidat').html(x.caidat);


	}
});
}
$(function () {
    $("*#tabs").tabs();
});
function tatsukien(){
$.ajax({
url : '/datalog/ajax.php?tat',
success : function(result){
    var x = $.parseJSON(result);

			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');

ducnghia_tien();
$('#sk').modal('hide');
}
});
} 
///
function nhanquathang(){
$.ajax({
url : '/datalog/ajax.php?nhanquathang',
success : function(result){
    var x = $.parseJSON(result);
			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');

ducnghia_tien();
sukien();
}
});
} 
function muathethang(){
$.ajax({
url : '/datalog/ajax.php?muathe',
success : function(result){
    var x = $.parseJSON(result);
			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');

ducnghia_tien();
sukien();
}
});
} 
///
function sukien(){
$('.modal').modal('hide');
$('#sk').modal('show');
$.ajax({
	url : '/datalog/sukien.php',

	success : function(result){
	var x = $.parseJSON(result);
	$('#tabs-1').html(x.sukien1);
		$('#tabs-2').html(x.sukien2);
		$('#tabs-3').html(x.sukien3);
		$('#tabs-4').html(x.sukien4);


	}
});
}

function nhanqua(){
$.ajax({
url : '/datalog/ajax.php?nhanqua',
success : function(result){
    var x = $.parseJSON(result);
					ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');
		$('#text_nav_online').html(x.time);


ducnghia_tien();
}
});
} 
function menu(id){
$('.modal').modal('hide');
$('#menu_show').modal('show');
$.ajax({
	url : '/datalog/menu.php',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
			$('#title_menu').html(x.title);
						$('#viewak').html(x.msg);

	}
});
}
///aaaa
function pokemon_ducnghia(){

$.ajax({
url : '/datalog/ajax.php?pokemon',
		success : function(result){
		var getData = $.parseJSON(result);
			$('#team').html(getData.msg);
}
});

}






///haizzzz


///haizzzz
$(function(){
$('input[name=menu]').on('click',function(){
window.location.href = $(this).val();
});
var nav_online = setInterval(function(){
$('#text_nav_online').html($('#text_nav_online').html()-1);
if($('#text_nav_online').html() <=0){
$('#div_nav_online').attr('class','index_status sprite_1');
$('#text_nav_online').html(0);
clearInterval(nav_online);
}
},1000);
});
/* $(window).focus(function(){
    alert('Tuyệt đối không thoát !');
	window.location.href = '/';
}); */
var aE = 'webkitAnimationEnd mozAnimationEnd msAnimationEnd oanimationend animationend';
var chatnotice = 0;
var bc = 0;

setInterval(function(){
bc++;
$('.ngu2').hide();
$('.bieucam'+bc).show();

if(bc ==2)
	bc = 0;

},800);
	function animation(flag,time,element,patch,forever,restart,fo, pet, holy) {
    pet = 0;
if(restart ==1){
pet = 0;
$(element).hide();
}
	holy =  setInterval(function(){
pet++;
$(element).hide();
$(element+''+patch+''+pet).show();
	if(pet == flag){
		if(forever == 0){
			if(restart !=2){
				if(!fo)
		$(element).hide();
	else
		$(element).fadeOut();
			}
		 clearInterval(holy);
		} else {
			$(patch+''+pet).show();
		pet = 0;
		}
	}
},time);

}

$(function(){
  function id(v){ return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0,
        tot = img.length;
    if(tot == 0) return doneLoading();

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
	  $('#progstat').html("Đang lấy dữ liệu từ PokeMon "+ perc);
      $('#progress').css('width',perc);
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      setTimeout(function(){
		  $('#overlay').fadeOut(1000,function(){
		  $('#DUCNGHIAVH').show();
		  });
		  $('#progstat').html('Lấy dữ liệu thành công,Đang Kết Nối...');
	  },1000);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());

function htmlspecialchars (string, quoteStyle, charset, doubleEncode) {
  var optTemp = 0
  var i = 0
  var noquotes = false
  if (typeof quoteStyle === 'undefined' || quoteStyle === null) {
    quoteStyle = 2
  }
  string = string || ''
  string = string.toString()

  if (doubleEncode !== false) {
    // Put this first to avoid double-encoding
    string = string.replace(/&/g, '&amp;')
  }

  string = string
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  var OPTS = {
    'ENT_NOQUOTES': 0,
    'ENT_HTML_QUOTE_SINGLE': 1,
    'ENT_HTML_QUOTE_DOUBLE': 2,
    'ENT_COMPAT': 2,
    'ENT_QUOTES': 3,
    'ENT_IGNORE': 4
  }
  if (quoteStyle === 0) {
    noquotes = true
  }
  if (typeof quoteStyle !== 'number') {
    // Allow for a single string or an array of string flags
    quoteStyle = [].concat(quoteStyle)
    for (i = 0; i < quoteStyle.length; i++) {
      // Resolve string input to bitwise e.g. 'ENT_IGNORE' becomes 4
      if (OPTS[quoteStyle[i]] === 0) {
        noquotes = true
      } else if (OPTS[quoteStyle[i]]) {
        optTemp = optTemp | OPTS[quoteStyle[i]]
      }
    }
    quoteStyle = optTemp
  }
  if (quoteStyle & OPTS.ENT_HTML_QUOTE_SINGLE) {
    string = string.replace(/'/g, '&#039;')
  }
  if (!noquotes) {
    string = string.replace(/"/g, '&quot;')
  }

  return string
}

function notice(text,callback){
	$('#notice_div').fadeIn(function(){
	$('#notice_text').html(text).removeClass('fadeInUp animated').addClass('fadeInUp animated').show().one(aE,function(){
		$('#notice_div').fadeOut();
		$('#notice_text').hide();
			if(callback)
	callback();
	});
	});
}

function updateGD(type){
	$('#index_'+type).load('/request/users.php?'+type);
	$('.count-vp-'+type).load('/request/users.php?'+type);
}

function checklevel(){
	$.ajax({
	url : '/request/users.php?level',
	success : function(result){
	var x = $.parseJSON(result);
	if(x.level){
	notice('LEVEL UP !!!',function(){
	notice(x.plus, function(){
		if(x.percent >=100)
		checklevel();
	else
		$('#exp_percent').css('width',x.percent+'%');
	});
	});
	$('#index_level').html(x.level);
	updateGD('sm');
	} else {
		$('#exp_percent').css('width',x.percent+'%');
	}
	}
	});
}

function GDloading(text,callback){
	$('#wait_text').html('<i class="fa fa-pulse fa-spinner"></i> '+text);
	$('#wait_div').fadeIn();
	if(callback)
	callback();
}


	function switchb(type){
if(type ==1){
	$('#asw').html('Chưa Có Tài Khoản ?').attr('href','javascript:switchb(2);');
	$('#bsw').attr('class','btn btn-primary fixtop').html('<i class="fa fa-sign-in-alt"></i> ĐĂNG NHẬP').attr('onclick','login();');
	$('#pass').attr('type','password');
} else {
	$('#asw').html('Chưa Có Tài Khoản ?').attr('href','javascript:switchb(2);');
	$('#bsw').attr('class','btn btn-primary fixtop').html('<i class="fa fa-sign-in-alt"></i> ĐĂNG NHẬP').attr('onclick','login();');
	$('#pass').attr('type','password');
}
}
function register(){
	var email = $('#email').val();
    pass = $('#pass').val();
	ref = $('#ref').val();
	if(email.trim() != '' && pass.trim() != ''){
	GDloading('Đang tạo tài khoản...',function(){
	$('#asw').hide();
	$('#notice').html('');
$.ajax({
url : '/request/register.php',
type : 'POST',
data : {email : email, pass : pass, ref : ref},
success : function(result){
var getData = $.parseJSON(result);
$('#wait_div').fadeOut();
$('#asw').show();
if(getData.error){
	$('#notice').html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>ERROR !</strong> '+getData.error+'</div>');
} else {
$('#notice').html('<div class="alert alert-success alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>OK !</strong> '+getData.success+'</div>');
switchb(1);
}
}
});
	});
}
}
function ban(id){
$('.modal').modal('hide');
$('#t24_modal').modal('show');
$('#t24_button').attr('onclick','banned('+id+')');

}
function banned(id){
	var time = $('#t24_time').val();
	    reason = $('#t24_reason').val();
		block2 = $('#t24_block2').is(':checked');
		block3 = $('#t24_block3').is(':checked');
		block4 = $('#t24_block4').is(':checked');
		if(reason.trim() != ''){
$.ajax({
url : '/request/users.php?ban',
type : 'POST',
data : {id : id, time : time, reason : reason, block2 : block2, block3 : block3, block4 : block4},
success : function(result){
var x = $.parseJSON(result);
if(x.error)
	notice(x.error);
else
	notice('Thao tác thành công !',function(){
	$('#t24_modal').modal('hide');
	$('#t24_reason').val('');
	$('#t24_block1').removeAttr('checked');
	$('#t24_block2').removeAttr('checked');
	$('#t24_block3').removeAttr('checked');
	$('#t24_block4').removeAttr('checked');
	ttnv(id);
	});
}
});
		} else {
		notice('Hãy ghi rõ lý do !');
		}
}
function typing(div,divball,texxxt,callback){
	var lengthx = texxxt == undefined ? '' : texxxt.trim();
	if(lengthx != ''){
	$(divball).html('');
	if(texxxt.length > 50){
	$(div).fadeIn(function(){
	var i = 1;
	var ii = 1;
	var daucham = 0;
	var chieudai = texxxt.length;
	var typingp = setInterval(function(){
		if(i < chieudai){
		setTimeout(function(){
		$(divball).html(texxxt.substring(0,ii));
		},80);
		}
		if($(divball).css('height') == '50px'){
			texxxt = texxxt.slice(ii,chieudai);
		ii = 1;
		}
	    i++;
		ii++;
		if(i >= chieudai){
			clearInterval(typingp);
		if(callback)
			callback();
		else
			$(div).fadeOut();
		}
	},90);
	});
	} else {
	$(div).fadeIn(function(){
	$(divball).html(texxxt);
	var typingpp = setTimeout(function(){
	$(div).fadeOut(function(){
	if(callback)
		callback();
	});
	},3000);
	});
	}
	} else {
	if(callback)
		callback();
	}
}

function login(){
	var email = $('#email').val();
    pass = $('#pass').val();
	if(email.trim() != '' && pass.trim() != ''){
GDloading('Đang Kết Nối Máy Chủ ...',function(){
	$('#asw').hide();
	$('#notice').html('');
$.ajax({
url : '/request/login.php',
type : 'POST',
data : {email : email, pass : pass},
success : function(result){
	var getData = $.parseJSON(result);
	$('#wait_div').fadeOut();
if(getData.error){
			notice(getData.error);

} else {
         text_game()

     loadgame();

notice('Chào mừng bạn quay lại.');
	 	$('#ducnghia_loadmap').html('');
	$('#ducnghia_loadmap').load('/_ajax/loadmap.php?thongbao&map='+getData.map_num+'&ducnghia_x='+getData.ducnghia_x+'&ducnghia_y='+getData.ducnghia_y+'');
//setTimeout(function(){
//window.location.reload();
//},1000);

	

}
$('#asw').show();
}
});
});
	}
}

function napthe(){
var txtpin = $('#txtpin').val();
    txtseri = $('#txtseri').val();
	chonmang = $('#chonmang').val();
	if(txtpin.trim() != '' && txtseri.trim() != ''){
GDloading('Đang kiểm tra...',function(){
$.ajax({
	url : '/request/transaction.php',
	type : 'POST',
	data : {txtpin : txtpin, txtseri : txtseri, chonmang : chonmang},
	success : function(result){
	var getData = $.parseJSON(result);
	$('#wait_div').fadeOut();
	if(getData.ok ==1){
	$('#notice_napthe').html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>ERROR !</strong> Thông tin thẻ nạp sai !</div>');
	} else {
	$('#notice_napthe').html('<div class="alert alert-success alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+getData.ok+'</div>');
	updateGD('xu');
	}
	$('#napthe').removeAttr('disabled','disabled').html('NẠP THẺ');
	}
});
});
	}
}

/* MENU */

function modalbefore(vitri){
var x = document.querySelectorAll(".modal");
var allx = $('.modal').length;
for(i = 0; i < allx; i++){
if(x[i].style.display == 'block'){
	if($(vitri).attr('onclick') == null)
$(vitri).attr('onclick','$(\'#'+x[i].getAttribute('id')+'\').modal(\'show\');$(\''+vitri+'\').removeAttr(\'onclick\');');
} 
}
}
///cho,ban pokemon
function okban(id){
var bac = $('#giabac').val();

$.ajax({
	url : '/datalog/ducnghia.php?banpkmok',
	type : 'POST',
	data : {id : id ,  bac : bac},
	success : function(result){
	var x = $.parseJSON(result);


	$('#end_data').html(x.msg);

	}

});
}

///hết

//song
///xu li thanh toan
function okmuaitemthoi(id){
$.ajax({
	url : '/datalog/ducnghia.php?dangmua',
	type : 'POST',
	data : {id : id},
	success : function(result){

	var x = $.parseJSON(result);

  $('#end_data').html(x.msg);

	}
});
}
//song

///song
///hết
function xemdemua(id,modal){
  
$.ajax({
url : '/datalog/ducnghia.php?xemdemua',
type : 'POST',
data : {id : id},
success : function(result){
    var x = $.parseJSON(result);
  $('#end_data').html(x.aaaa);


}
});
} 

function banitem(id){
   
       $('#nut_banditmemay').html('<center><big> Bán vật phẩm </big></center> Giá bạc : <input id="bac_ban" class="form-control" type="number" value="0" style="width: 91%;">Số lượng : <input id="sl" class="form-control" type="number" value="1" style="width: 91%;"><button class="btn btn-primary" onclick="okbanitem('+id+')" id="nutban">Bán</button>');


} 


///cho,ban pokemon
function okbanitem(id){
	$('#nutban').attr('disabled','disabled').html('<i class="fa fa-pulse fa-spinner"></i> Đang Bán');
var vang_ban = $('#vang_ban').val();
var bac_ban = $('#bac_ban').val();
var soluong = $('#sl').val();

$.ajax({
	url : '/datalog/ducnghia.php?banitemok',
	type : 'POST',
	data : {id : id , vang_ban : vang_ban , bac_ban : bac_ban , soluong : soluong},
	success : function(result){

	var x = $.parseJSON(result);
			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');

	$('#nutban').removeAttr('disabled').html('Đang Bán Đợi Xíu');

	}

});
}
//song


///hết
function gopkm(id){

$.ajax({
url : '/datalog/ducnghia.php?thao',
type : 'POST',
data : {id : id},
success : function(result){
    var x = $.parseJSON(result);
$('.modal').modal('hide');
$('#pokemon').modal('hide');
			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');

}
});
} 
//song





//song
///thongtinvp






//////////
function muapkm(id){

$.ajax({
url : '/datalog/ducnghia.php?muapkm',
type : 'POST',
data : {id : id},
success : function(result){
    var x = $.parseJSON(result);

$('#end_data').html(x.msg);

}
});
} 




function tui(){
$('.modal').modal('hide');
$('#modal_bag').modal('show');
$.ajax({
url : '/datalog/ducnghia.php?vp',
success : function(result){
var x = $.parseJSON(result);
$('#monpoke').html(x.a);
	$('#ahahhaa').html(x.a);

  

}
});

///vp khac
$.ajax({
url : '/datalog/ducnghia.php?vpkhac',
success : function(result){
var x = $.parseJSON(result);
		$('#vatphamkhaca').html(x.a);


}
});

///vp khac
$.ajax({
url : '/datalog/shopvatpham.php?ruong',
success : function(result){
var x = $.parseJSON(result);
		$('#shopvatpham').html(x.a);


}
});


///tui pokemon
$.ajax({
url : '/datalog/ducnghia.php?ruong',
success : function(result){
var x = $.parseJSON(result);
		$('#pokemonruong').html(x.a);


}
});

///tui pokemon


}

function chora(id){
$.ajax({
	url : '/datalog/ducnghia.php?layra',
	type : 'POST',
	data : {id : id},
	success : function(result){
		var x = $.parseJSON(result);
  $('#end_data').html(x.thongbao);

ruongdo();
	}
});
}

function bo(id){
$.ajax({
	url : '/datalog/ducnghia.php?cat',
	type : 'POST',
	data : {id : id},
	success : function(result){
		var x = $.parseJSON(result);
head_c()

	}
});
}



/* pet */

function tachpett(id){
$.ajax({
	url : '/request/pet/request.php?tachpet',
	type : 'POST',
	data : {id : id, tach : 1},
	success : function(result){
		var x = $.parseJSON(result);
		if(x.error){
			notice(x.error);
		} else {
			updateGD('xu');
		notice('Tách thành công !',function(){
		$('#petimg_'+id).attr('src',x.img);
		$('#petstar_'+id).html(x.star);
		$('.modal').modal('hide');
		thongtindo(id,'pet');
		updateGD('sm');
		});
		}
	}
});
}

function tachpet(id){
modalbefore('#t14_close');
$('.modal').modal('hide');
$('#t14_modal').modal('show');
$.ajax({
	url : '/request/pet/request.php?tachpet',
	type : 'POST',
	data : {id : id},
	success : function(result){
		var x = $.parseJSON(result);
		if(x.error){
			notice(x.error);
		} else {
		$('#t14_vp').html(x.success);
		$('#t14_button').attr('onclick','tachpett('+id+');');
		}
	}
});
}

function thapettt(id){
$.ajax({
	url : '/request/pet/request.php?thapett',
	type : 'POST',
	data : {id : id},
	success : function(){
		notice('Thả PET thành công !', function(){
		$('.modal').modal('hide');
		$('#petitem_'+id).hide();
		updateGD('sm');
		});
	}
});
}
function thapett(id){
modalbefore('#t13_close');
$('.modal').modal('hide');
$('#t13_modal').modal('show');
$('#t13_button').attr('onclick','thapettt('+id+');');
}

function chopetan(id,type){
	if(type == 1){
var sl = $('#t12_thucan').val();
var aurl = '/request/pet/request.php?chopetan';
	}
	if(type ==2){
var sl = $('#t12_nlsao').val();
var aurl = '/request/pet/request.php?tangsao';
	}
	if(type ==3){
var sl = $('#t12_nltienhoa').val();
var aurl = '/request/pet/request.php?tienhoa';
	}
$.ajax({
url : aurl,
type : 'POST',
data : {id : id, sl : sl},
success : function(result){
var x = $.parseJSON(result);
if(x.error){
	notice(x.error);
} else {
notice(x.success,function(){thongtindo(id,'pet');});
if(type ==2)
	$('#petstar_'+id).html(x.star);
if(type ==3)
	$('#petimg_'+id).attr('src',x.tienhoa);
}
}
});
}

function nhanpet(){
$('#modal_petopen').modal('hide');
$.ajax({
url : '/request/pet/request.php?nhanpet',
type : 'POST',
success : function(result){
var x = $.parseJSON(result);
if(x.error){
	notice(x.error);
} else {
notice('Nhận PET thành công !');
$('#allpet').append(x.ok);
}
}
});
}

function petopen2(){
$('#modal_petopen').modal('hide');
$.ajax({
url : '/request/pet/request.php?openpet&thapet',
type : 'POST',
success : function(result){
var x = $.parseJSON(result);
if(x.error){
	notice(x.error);
} else {
$('#modal_petopen').modal('show');
$('#t11_avatar').html(x.avatar);
$('.count-vp-44').html(x.conlai);
$('#t11_getpet').html(x.getpet);
}
}
});
}

function petopen(){
$('.modal').modal('hide');
$.ajax({
url : '/request/pet/request.php?openpet',
type : 'POST',
success : function(result){
var x = $.parseJSON(result);
if(x.error){
	notice(x.error);
} else {
$('#modal_petopen').modal('show');
$('#t11_avatar').html(x.avatar);
$('.count-vp-44').html(x.conlai);
$('#t11_getpet').html(x.getpet);
}
}
});
}
/* using item */

function useitem(id){
	var sl = $('#t23_sl').val();
	GDloading('Đợi chút...',function(){
	$.ajax({
	url : '/request/shop/bagrequest.php?useitem',
	type : 'POST',
	data : {id : id, sl : sl},
	success : function(result){
		var x = $.parseJSON(result);
		$('#wait_div').fadeOut();
		if(!x.error){
		if(x.id_shop == 43){ 
		updateGD('hoatbat');
		}
		if(x.id_shop == 50){
		notice(x.success);
		updateGD('sm');
		$('#t23_i19').html(x.i19);
		}
		if(x.id_shop == 49) $('#t23_success').html(x.success);
		$('#t23_have').html('<font color=red>ĐÃ SỬ DỤNG HẾT !</font>');
		if(x.conlai >0){
			$('#t23_have').html(x.conlai);
			$('.count-vp-'+x.id_shop).html(x.conlai);
		}
		} else {
		notice('Thao tác không thành công !');
		}
	}
	});
	});
}

/* thongtindo */

function thongtindo(id,type,fix){

if(type == 'shop'){
	modalbefore('#t2_close');
	$('#t2_content').removeClass('fadeIn animated');
$('.modal').modal('hide');
$('#modal_ttd').modal('show');
$.ajax({
	url : '/request/shop/request.php',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
	$('#t2_avatar').html(x.avatar);
	$('#t2_have').html(x.have);
	$('#t2_ten').html(x.ten);
	$('#t2_tien').html(x.gia);
	$('#t2_chiso').html(x.chiso);
	$('#t2_star').html(x.star);
	$('#t2_content').addClass('fadeIn animated');
	$('#t2_button').attr('onclick','thanhtoan('+id+',\'shop\');');
	}
});
}
if(type == 'vukhi'){
	$('#t3_content').removeClass('fadeIn animated');
$('.modal').modal('hide');
$('#t3_modal').modal('show');
$.ajax({
	url : '/request/shop/requestvk.php',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
	$('#t3_avatar').html(x.avatar);
	$('#t3_have').html(x.have);
	$('#t3_ten').html(x.ten);
	$('#t3_tien').html(x.gia);
	$('#t3_chiso').html(x.chiso);
	$('#t3_star').html(x.star);
	$('#t3_content').addClass('fadeIn animated');
	$('#t3_button').attr('onclick','thanhtoan('+id+',\'vukhi\');');
	}
});
}
if(type == 'item'){
modalbefore('#t4_close');
$('#t4_content').removeClass('fadeIn animated');
$('.modal').modal('hide');
$('#t4_modal').modal('show');
$.ajax({
	url : '/request/shop/requestvp.php',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
	$('#t4_avatar').html(x.avatar);
	$('#t4_have').html(x.have);
	$('#t4_ten').html(x.ten);
	$('#t4_tien').html(x.gia);
	$('#t4_chiso').html(x.chiso);
	$('#t4_content').addClass('fadeIn animated');
	$('#t4_button').attr('onclick','thanhtoan('+id+',\'vatpham\');');
	}
});
}
if(type == 'banitem'){
	var sl = $('#t23_slban').val();
$.ajax({
	url : '/request/shop/bagrequest.php?banitem',
	type : 'POST',
	data : {id : id, sl : sl},
	success : function(result){
	var x = $.parseJSON(result);
	$('#t23_slban').val('');
	if(x.error){
		notice(x.error);
	} else {
		$('.count-vp-'+x.ids).html(x.conlai);
		if(x.conlai >0){
		notice(x.success,function(){
		thongtindo(id,'bagitem');
		});
		} else {
		$('#t23_modal').modal('hide');
		$('#bagitem'+id).hide();
		notice(x.success,function(){
		tui();
		});
		}
		updateGD('xukhoa');
	}
	}
});
}
if(type == 'bagitem'){
$('#t23_close').attr('onclick','tui()');
$('#t23_sl').val('');
$('#t23_success').html('');
$('#t23_content').removeClass('fadeIn animated');
$('.modal').modal('hide');
$('#t23_modal').modal('show');
$('#t23_sell').hide();
$.ajax({
	url : '/request/shop/bagrequest.php?bagitem',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
	$('#t23_avatar').html(x.avatar);
	$('#t23_have').html(x.have);
	$('#t23_ten').html(x.ten);
	$('#t23_info').html(x.info);
	$('#t23_html').html(x.html);
	$('#t23_button').attr('onclick','thongtindo('+id+',\'banitem\')');
	$('#t23_content').addClass('fadeIn animated');
	}
});
}
if(type == 'petinfo'){
modalbefore('#t27_close');
$('.modal').modal('hide');
$('#t27_modal').modal('show');
$.ajax({
	url : '/request/pet/request.php?petinfo',
	type : 'POST',
	data : {id : id},
	success : function(result){
	$('#t27_content').html(result).addClass('fadeIn animated');
	}
});
}
if(type == 'pet'){
modalbefore('#t12_close');
if(!fix)
$('#t12_title').html('<i class="fa fa-shopping-cart"></i> Thông Tin PET');
$('#t12_content').removeClass('fadeIn animated');
$('.modal').modal('hide');
$('#t12_modal').modal('show');
$.ajax({
	url : '/request/pet/request.php?my',
	type : 'POST',
	data : {id : id, bag : fix},
	success : function(result){
	var x = $.parseJSON(result);
	if(fix)
		$('#t12_title').html(x.owner);
	if(x.error)
		notice(x.error);
	else
	$('#t12_content').html(x.content).addClass('fadeIn animated');
	}
});
}

/* Túi Trang Bị */

if(type == 'bag'){
modalbefore('#t5_close');
if(!fix)
	$('#t5_title').html('<i class="fa fa-shopping-cart"></i> Thông Tin Trang Bị');
$('#t5_content').removeClass('fadeIn animated');
$('.modal').modal('hide');
$('#t5_modal').modal('show');
$.ajax({
	url : '/request/shop/bagrequest.php?trangbi',
	type : 'POST',
	data : {id : id, bag : fix},
	success : function(result){
	var x = $.parseJSON(result);
	if(fix)
	$('#t5_title').html(x.owner);
	$('#t5_avatar').html(x.avatar);
	$('#t5_ten').html(x.ten);
	$('#t5_chiso').html(x.chiso);
	$('#t5_star').html(x.star);
	$('#t5_hsd').html(x.hsd);
	$('#t5_button').attr('onclick','thanhtoan('+id+',\'macquanao\');');
	$('#t5_content').addClass('fadeIn animated');
	}
});
}

if(type == 'bagvk'){
modalbefore('#t6_close');
if(!fix)
	$('#t6_title').html('<i class="fa fa-shopping-cart"></i> Thông Tin Vũ Khí');
$('#t6_content').removeClass('fadeIn animated');
$('.modal').modal('hide');
$('#t6_modal').modal('show');
$.ajax({
	url : '/request/shop/bagrequest.php?vukhi',
	type : 'POST',
	data : {id : id, bag : fix},
	success : function(result){
	var x = $.parseJSON(result);
	if(fix)
	$('#t6_title').html(x.owner);
	$('#t6_avatar').html(x.avatar);
	$('#t6_ten').html(x.ten);
	$('#t6_chiso').html(x.chiso);
	$('#t6_star').html(x.star);
	$('#t6_hsd').html(x.hsd);
	$('#t6_button').attr('onclick','thanhtoan('+id+',\'macvukhi\');');
	$('#t6_content').addClass('fadeIn animated');
	}
});
}
}

function thanhtoan(id,type,sl){
if(type == 'shop'){
	var mac = $('#t2_tbskm').prop('checked');
	var tien = $('#t2_hsd').val();
	GDloading('Đang thanh toán...',function(){
$.ajax({
	url : '/request/users_bag.php?shop_mua',
	type : 'POST',
	data : {id : id, tien : tien},
	success : function(result){
	var x = $.parseJSON(result);
	$('#wait_div').fadeOut();
	if(x.error){
	notice(x.error);
	} else {
	updateGD('xu');
	updateGD('xukhoa');
	notice(x.success, function(){
		if(mac == true)
		thanhtoan(x.id,'macquanao');
	});
	$('#t2_have').html(x.have);
	}
	}
});
	});
}
if(type == 'vukhi'){
	var tien = $('#t3_hsd').val();
	var mac = $('#t3_tbskm').prop('checked');
	GDloading('Đang thanh toán...',function(){
$.ajax({
	url : '/request/users_bag.php?vukhi_mua',
	type : 'POST',
	data : {id : id, tien : tien},
	success : function(result){
	var x = $.parseJSON(result);
	$('#wait_div').fadeOut();
	if(x.error){
	notice(x.error);
	} else {
	updateGD('xu');
	updateGD('xukhoa');
	notice(x.success, function(){
		setTimeout(function(){
		if(mac == true)
		thanhtoan(x.id,'macvukhi');},1200);
	}
	);
	$('#t3_have').html(x.have);
	}
	}
});
	});
}
if(type == 'vatpham'){
	var tien = $('#t4_hsd').val();
	GDloading('Đang thanh toán...',function(){
$.ajax({
	url : '/request/users_bag.php?vatpham_mua',
	type : 'POST',
	data : {id : id, tien : tien},
	success : function(result){
	var x = $.parseJSON(result);
	$('#wait_div').fadeOut();
	if(x.error){
	notice(x.error);
	} else {
	updateGD('xu');
	updateGD('xukhoa');
	notice(x.success);
	$('#t23_have').html(x.have);
	$('#t4_have').html('(Đã có '+x.have+')');
	$('.count-vp-'+id).html(x.have);
	}
	}
});
	});
}
if(type == 'macvukhi'){
$.ajax({
	url : '/request/shop/bagrequest.php?macvukhi',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
	if(x.error){
	notice('Có lỗi xảy ra !');
	} else {
	notice(x.success);
	updateGD('sm');
	if(x.success == 'Trang Bị Thành Công !')
	$('#t6_button').html('Dỡ Trang Bị');
else
	$('#t6_button').html('Trang Bị');
	}
	}
});
}
if(type == 'macquanao'){
$.ajax({
	url : '/request/shop/bagrequest.php?macquanao',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
	if(x.error){
	notice('Có lỗi xảy ra !');
	} else {
	notice(x.success);
	if(x.success == 'Trang Bị Thành Công !')
	$('#t5_button').html('Dỡ Trang Bị');
else
	$('#t5_button').html('Trang Bị');
updateGD('sm');
	}
	}
});
}
if(type == 'macpet'){
$.ajax({
	url : '/request/pet/request.php?equippet',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
	if(x.error){
	notice('Có lỗi xảy ra !');
	} else {
	notice(x.success);
	updateGD('sm');
	if(x.success == 'PET đã tham chiến !')
	$('#t12_button').html('Nghỉ Chiến');
else
	$('#t12_button').html('Tham Chiến');
	}
	}
});
}
}

/* cường hóa */

function cuonghoa(id,type){
	
if(type == 'cuonghoavk'){
	$('#t7_button').attr('disabled','disabled');
	var lientuc;
	if($('#t7_lientuc').prop('checked') == true)
		var lientuc = 1;
$.ajax({
	url : '/request/ren/request.php?cuonghoavk',
	type : 'POST',
	data : {id : id, lientuc : lientuc},
	success : function(result){
	var x = $.parseJSON(result);
	if(x.error){
	notice('Có lỗi xảy ra !');
	} else {
		updateGD('sm');
		$('.count-vp-1').html(x.have);
		$('#t7_exp').show();
		if($('#t7_percent').html() ==0)
			$('#t7_ren_percent').addClass('loading');
			$('#t7_ren_percent').css('animationPlayState','running');
			$('#t7_button').attr('disabled','disabled').html('Đợi Chút');
			if(x.percent >0){
			var time = (x.percent-$('#t7_percent').html())*25;
			} else {
			var time = (102-$('#t7_percent').html())*25;
			}
			setTimeout(function(){
				$('#t7_ren_percent').css('animationPlayState','paused');
			if(x.win){
			$('#t7_ren_percent').removeClass('loading').css('width',0);
			$('#t7_percent').html(0);
			}
			if(time > 1040)
			$('#t7_button').removeAttr('disabled').html('Cường Hóa');
			},time);
	setTimeout(function(){
		if(time < 1040)
			$('#t7_button').removeAttr('disabled').html('Cường Hóa');
		$('#t7_exp').hide();
	},1040);
	if(x.percent >0)
		$('#t7_percent').html(x.percent);
	else
		$('#t7_percent').html(100);
	if(x.win == 1){
	notice(x.notice);
	var css = 'sprite_5 1330ms steps(32) 1';
	$('#t7_cong').attr('class','upgrade strength'+x.cap);
	if(x.cap == 16){
		$('#t7_status').html('<div style="margin-top: 25px;"><font color=red><b><i class="fa fa-lock"></i> ĐẠT CẤP TỐI ĐA</b></font></div>');
		$('#t7_button').hide();
	}
			$('#t7_win').show().css({'animation':css,'WebkitAnimation':css,'MozAnimation':css,'OAnimation':css});
		setTimeout(function(){
			$('#t7_win').removeAttr('css').hide();
		},1330);
	updateGD('sm');
	}
	}
	}
});
}
if(type == 'cuonghoa'){
	$('#t8_button').attr('disabled','disabled');
	var lientuc;
	if($('#t8_lientuc').prop('checked') == true)
		var lientuc = 1;
$.ajax({
	url : '/request/ren/request.php?cuonghoa',
	type : 'POST',
	data : {id : id, lientuc : lientuc},
	success : function(result){
	var x = $.parseJSON(result);
	if(x.error){
	notice('Có lỗi xảy ra !');
	} else {
		updateGD('sm');
		$('.count-vp-1').html(x.have);
		$('#t8_exp').show();
		if($('#t8_percent').html() ==0)
			$('#t8_ren_percent').addClass('loading');
			$('#t8_ren_percent').css('animationPlayState','running');
			$('#t8_button').attr('disabled','disabled').html('Đợi Chút');
			if(x.percent >0){
			var time = (x.percent-$('#t8_percent').html())*25;
			} else {
			var time = (102-$('#t8_percent').html())*25;
			}
			setTimeout(function(){
				$('#t8_ren_percent').css('animationPlayState','paused');
			if(x.win){
			$('#t8_ren_percent').removeClass('loading').css('width',0);
			$('#t8_percent').html(0);
			}
			if(time > 1040)
			$('#t8_button').removeAttr('disabled').html('Cường Hóa');
			},time);
	setTimeout(function(){
		if(time < 1040)
			$('#t8_button').removeAttr('disabled').html('Cường Hóa');
		$('#t8_exp').hide();
	},1040);
	if(x.percent >0)
		$('#t8_percent').html(x.percent);
	else
		$('#t8_percent').html(100);
	if(x.win == 1){
	notice(x.notice);
	var css = 'sprite_5 1330ms steps(32) 1';
	$('#t8_cong').attr('class','upgrade strength'+x.cap);
	if(x.cap == 16){
		$('#t8_status').html('<div style="margin-top: 25px;"><font color=red><b><i class="fa fa-lock"></i> ĐẠT CẤP TỐI ĐA</b></font></div>');
		$('#t8_button').hide();
	}
			$('#t8_win').show().css({'animation':css,'-webkit-animation':css,'-moz-animation':css,'-o-animation':css});
		setTimeout(function(){
			$('#t8_win').removeAttr('css').hide();
		},1330);
	updateGD('sm');
	}
	}
	}
});
}
}
function dotpha(id){
$.ajax({
url : '/request/ren/request.php?dotpha',
type : 'POST',
data : {id : id},
success : function(result){
var x = $.parseJSON(result);
if(x.error){
	notice(x.error);
} else {
	$('#t16_move').attr('href','?move&id='+id);
	$('#t16_button').attr('disabled','disabled');
	$('#t16_avatar').attr('src',x.win);
	$('#t16_nl1').html(x.nl1);
	$('#t16_nl2').html(x.nl2);
	$('#t16_capdotpha').html(x.dotpha);
	$('.count-vp-48').html(x.conlai);
	updateGD('xu');
	updateGD('sm');
	var css = 'sprite_5 1330ms steps(32) 1';
	$('#t16_win').show().css({'animation':css,'-webkit-animation':css,'-moz-animation':css,'-o-animation':css});
	setTimeout(function(){
			$('#t16_win').removeAttr('css').hide();
			$('#t16_button').removeAttr('disabled');
	},1330);
	if(x.dotpha ==x.dotphamax)
		$('#t16_dotpha').html('<b style="color:red;"><i class="fa fa-lock"></i> ĐÃ ĐỘT PHÁ TỐI ĐA</b>');
}
}
});
}
function dotphavk(id){
$.ajax({
url : '/request/ren/request.php?dotphavk',
type : 'POST',
data : {id : id},
success : function(result){
var x = $.parseJSON(result);
if(x.error){
	notice(x.error);
} else {
	$('#t15_move').attr('href','?move&vukhi&id='+id);
	$('#t15_button').attr('disabled','disabled');
	$('#t15_avatar').attr('src',x.win);
	$('#t15_nl1').html(x.nl1);
	$('#t15_nl2').html(x.nl2);
	$('#t15_capdotpha').html(x.dotpha);
	$('.count-vp-48').html(x.conlai);
	updateGD('xu');
	updateGD('sm');
	var css = 'sprite_5 1330ms steps(32) 1';
	$('#t15_win').show().css({'animation':css,'-webkit-animation':css,'-moz-animation':css,'-o-animation':css});
	setTimeout(function(){
			$('#t15_win').removeAttr('css').hide();
			$('#t15_button').removeAttr('disabled');
	},1330);
	if(x.dotpha ==x.dotphamax)
		$('#t15_dotpha').html('<b style="color:red;"><i class="fa fa-lock"></i> ĐÃ ĐỘT PHÁ TỐI ĐA</b>');
}
}
});
}
function hopthanh(id,type){
if(type == 'hopthanhvk'){
	$('#t9_button').attr('disabled','disabled');
		var loaida = $('#t9_value').val();
	var percent = $('#t9_percent').html();
	var percentx;
	$('#t9_'+loaida).removeClass('pulse animated')
	$.ajax({
	url : '/request/ren/request.php?hopthanhvk',
	type : 'POST',
	data : {id : id, loaida : loaida},
	success : function(result){
	var x = $.parseJSON(result);
	if(x.error){
	notice(x.error);
	} else {
		$('#t9_percent').html(x.percent);
	if(x.win){
		$('#t9_'+loaida).attr('onclick','change('+loaida+','+x.win+')');
	if(x.win == 1)
		percentx = 20;
	if(x.win ==2)
		percentx = 13;
	if(x.win ==3)
		percentx = 5;
	if(x.win ==4)
		percentx = 4;
	if(x.win ==5){
		percentx = 0;
	$("#t9_button").attr("disabled","disabled").html("Đạt Cấp Tối Đa");
	} else {
		$('#t9_button').removeAttr('disabled').html('Hợp Thành');
	}
	notice(x.notice, function(){
		$('#t9_percent').fadeOut(function(){
		$('#t9_percent').html(percentx).fadeIn();
	});
	});
	$('#t9_'+loaida).css({'background':'url('+x.img+')','background-size':'30px 30px'}).addClass('pulse animated');
	} else {
	notice('Hợp thành thất bại !');
	$('#t9_button').removeAttr('disabled');
	}
$('.count-vp-'+loaida).html(x.have);
	}
	}
	});
}
if(type == 'hopthanh'){
	$('#t10_button').attr('disabled','disabled');
		var loaida = $('#t10_value').val();
	var percent = $('#t10_percent').html();
	var percentx;
	$('#t10_'+loaida).removeClass('pulse animated')
	$.ajax({
	url : '/request/ren/request.php?hopthanh',
	type : 'POST',
	data : {id : id, loaida : loaida},
	success : function(result){
	var x = $.parseJSON(result);
	if(x.error){
	notice(x.error);
	} else {
		$('#t10_percent').html(x.percent);
	if(x.win){
		$('#t10_'+loaida).attr('onclick','change('+loaida+','+x.win+')');
	if(x.win == 1)
		percentx = 20;
	if(x.win ==2)
		percentx = 13;
	if(x.win ==3)
		percentx = 5;
	if(x.win ==4)
		percentx = 4;
	if(x.win ==5){
		percentx = 0;
	$("#t10_button").attr("disabled","disabled").html("Đạt Cấp Tối Đa");
	} else {
		$('#t10_button').removeAttr('disabled').html('Hợp Thành');
	}
	notice(x.notice, function(){
		$('#t10_percent').fadeOut(function(){
		$('#t10_percent').html(percentx).fadeIn();
	});
	});
	$('#t10_'+loaida).css({'background':'url('+x.img+')','background-size':'30px 30px'}).addClass('pulse animated');
	} else {
	notice('Hợp thành thất bại !');
	$('#t10_button').removeAttr('disabled').html('Hợp Thành');
	}
$('.count-vp-'+loaida).html(x.have);
	}
	}
	});
}
}


function _modal(gelement){
	$('.modal').modal('hide');
	$(gelement).modal('show');
}

function ttnv(id,modal){

$.ajax({
url : '/datalog/ducnghia.php?thongtin',
type : 'POST',
data : {id : id},
success : function(result){
var x = $.parseJSON(result);


 mo_chucnang();
  $('#data_chucnang_map').html(x.html);
  $('#them').html(x.chucnang);

$('#t24_point').html(x.point);
$('#t19_link').attr('href','/screen/images/avatar/'+id+'.gif?'+Math.random());
}
});
}
////MOD ĐỔI TÊN POKEMON



function xacnhan_chatthegioi(){
	$('#dangchat').attr('disabled','disabled').html('<i class="fa fa-pulse fa-spinner"></i> Đang Chát Thế giới');
var ducnghia_a = $('#ducnghi_a').val();

$.ajax({
	url : '/datalog/ajax.php?dang',
	type : 'POST',
	data : {ducnghia_a : ducnghia_a},
	success : function(result){

		$('#ducnghia_a').val('');
				$('#ducnghia_a').removeAttr('disabled');
dulieu_get();

	var x = $.parseJSON(result);
			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');
		  	    		ducnghia_tien();

	$('#dangchat').removeAttr('disabled').html('Chát');

	}

});
}
function chatthegioi_t(){

	modalbefore('#list_close');
	$('.modal').modal('hide');
	$('#mochatthegioi').modal('show');

} 

///hết






///hết

function info_move(id){


$.ajax({
	url : '/datalog/_pokemon.php?hm',
		type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
	$('#end_data').html(x.msg);


	}

});
} 



///hết







function info(id , modal){
if(!modal){
$('#pokemondex').removeAttr('onclick');
modalbefore('#pokemondex');
}
$.ajax({
url : '/datalog/ducnghia.php?info',
type : 'POST',
data : {id : id},
success : function(result){
var x = $.parseJSON(result);
$('.modal').modal('hide');
$('#pokemondex').modal('show');
$('#thongtin').html(x.thongtin);
$('#tienhoa').html(x.tienhoa);
$('#tienhoa2').html(x.tienhoa2);

$('#kinang').html(x.kinang);
$('#move').html(x.move);


}
});
}





function smile(text,gelement) {
	var t1_default = $(gelement).val();
	if(t1_default.trim() != '') text = ' '+text;
                $(gelement).val(t1_default + text);
				$(gelement).focus();
            }
			function smileys(){
			$('#t1_smileys').slideToggle();
			}
function ChangeService(obj) {
	$('#info_shop').html('Nếu không hiển thị hãy thử reload lại');
			$("#reload_shop").attr("onclick","reload('"+obj.value+"');");
		if (obj.value) {
			    GDloading('Đang lấy dữ liệu...',function(){
		$.ajax({
		url : obj.value,
		success : function(result){
			$('#wait_div').fadeOut();
		$('#html').html(result);
		}
		});
				});
    }
}
function reload(x){
			$('#info_shop').html('Nếu không hiển thị hãy thử reload lại');
			GDloading('Đang thử lại...',function(){
		$.ajax({
		url : x,
		success : function(result){
			$('#wait_div').fadeOut();
		$('#html').html(result);
		}
		});
			});
}

/* MSG */
function historymsg(id){
$.ajax({
url : '/datalog/msg.php?user='+id+'&all',
success : function(result){
var x = $.parseJSON(result);
if(!x.error){
	modalbefore('#t21_close');
	$('.modal').modal('hide');
	$('#t21_modal').modal('show');
	$('#t21_display').html(x.msg);
}
}
});
}

function editor(id){
	var text = $('#text_editor').val();
	$.ajax({
	url : '/request/users.php?editored',
	type : 'POST',
	data : {id : id, text : text},
	success : function(result){
		var x = $.parseJSON(result);
		$('#modal_editor').modal('hide');
		notice('Thao tác thành công');
		if(x.text)
			$('#content_'+id).html(x.text);
		if(x.delete == 2)
			$('#ltp'+id).hide();
		if(x.delete == 1)
			window.location.href='index.php';
	}
	});
}

function thaotac(url,type){
	if(type == 'editor')
	$('#modal_editor').modal('show');
	$.ajax({
		url : '/request/'+url,
		success : function(result){
			if(type == 'editor'){
				var x = $.parseJSON(result);
				if(x.result != '')
				$('#text_editor').val(x.result);
			if(!x.result){
				$('#modal_editor').modal('hide');
				notice('Có lỗi xảy ra !');
			}
			$('#button_te').attr('onclick','editor('+x.id+');');
			}
if(type == 'war'){
	var x = $.parseJSON(result);
	if(!x.error){
	window.location.href = '/request/war/hunter/war.php?id='+x.id+'#exit';
	} else {
	notice(x.error);
	}
}	
            if(!type){
			if(url != 'war/hunter/realtime.php')
			notice('Thao tác thành công !');
			if(url == 'users.php?ufaf')
				$('#ufaf').attr('disabled','disabled');
			}
		}
	});
}


function thongbaonek(){
	$('.modal').modal('hide');
	$('#thongbao_modal').modal('show');
$.ajax({
url : '/request/users.php?thongbao',
success : function(result){
$('#thongbao_html').html(result);
}
});
}





/* END MSG */

/* PUSHER MORE TECH */
function historychat(){
$.ajax({
url : '/datalog/chat.php?all',
success : function(result){
var x = $.parseJSON(result);
if(!x.error){
	modalbefore('#t22_close');
	$('.modal').modal('hide');
	$('#t22_modal').modal('show');
	$('#t22_display').html(x.msg);
}
}
});
}

function allthongbao(){
$.ajax({
url : '/datalog/thongbao.php?thongbao',
success : function(result){
var x = $.parseJSON(result);
if(!x.error){
	modalbefore('#t30_close');
	$('.modal').modal('hide');
	$('#t30_modal').modal('show');
	$('#t30_display').html(x.msg);
}
}
});
}

function xoathongbao(){
$.ajax({
url : '/datalog/thongbao.php?xoatb',
success : function(result){

var x = $.parseJSON(result);
	modalbefore('#t30_close');
	$('.modal').modal('hide');
	$('#t30_modal').modal('hide');
			ducnghia('success', 'Thông Báo! ', '<br><p> '+x.xoa+'</p>', 'DucNghia', '');

	$('#t30_display').html(x.msg);


}
});
}


const title = $('title').html();


	function chat(){
	    	    	                      $('title').html('PokeMon Việt Nam - Trò Chơi Hay Nhất Trên Trình Duyệt');

		chatnotice = 0;
		$('#index_chatboxall').hide();
		$('#index_chatbox').html();
				$('#aaaaaaaaa').html();

		$('#t1_btchat').html('<i class="fa fa-spinner fa-pulse"></i>');
		var text = $('#t1_chat').val();
		if(text.trim() != '' || $('#t1_display').html() == ''){
			$('#t1_chat').attr('disabled','disabled');
    $.ajax({
	url : '/datalog/chat.php',
	type : 'POST',
	data : {type : 1, text : text},
	success : function(result){

		$('#t1_chat').val('');
		$('#t1_btchat').html('<i class="fa fa-paper-plane"></i>');
		$('#t1_chat').removeAttr('disabled');
		if(result)
			notice(result);
	}
	});

		} else {
		$('#t1_btchat').html('<i class="fa fa-paper-plane"></i>');
		}
	}
	
	
	Pusher.logToConsole = true;

    var pusher = new Pusher('6ae3e0f9fa72f10ca830', {
      cluster: 'ap1',
      encrypted: true
    });

    var channel = pusher.subscribe('GUNNY_DEV');

    channel.bind('_GD', function(data) {
        
       
        
        
      if(data.type == 1){
	  $('#t1_display').html(data.display);
	  $('#t1_online').html(data.online);
	  if(data.insertchat && $('#modal_chatbox').css('display') == 'none'){
	  chatnotice = chatnotice+1;

	  $('#index_chatbox').html(chatnotice);
	  $('#index_chatboxall').show();
	  	$('title').html(''+chatnotice+' Tin Nhắn Mới - PokeMon Việt Nam');

	  } 
	  
	   
	  
	  
	  
	  }
	  
	  
	  

    });
    
    ////////ducnghiait
   
    
      
    function chat_tg(){

$.ajax({
	url : '/datalog/ajax.php?chat',
	success : function(result){
	var x = $.parseJSON(result);
 
	  $('#chat_tg').html(x.msg);


	}
 
});
}  
      
 
      
      
       function giaotiep(id,loai) {
dongtalk();
        $.ajax({
url : '/datalog/_map.php?npc',
type : 'POST',
data : {id : id , loai : loai},
success : function(result){
var xx = $.parseJSON(result);
		document.getElementById('show_npc').style.display = "";
		             	               	  document.getElementById('show_npc2').style.display = "";

npctalk(xx.map);
					$("#npc_menu").html(xx.menu);


}
});
      }
      
      
      function stopchat() {
  setTimeout(function(){
     
     	var new_chat = "";
		setTimeout(function(){document.getElementById('chat_ducnghia').src = new_chat;}, 1);	 
      
  }, 5000);
}
  
  function web_chat(){
      $('#show_chatmap').toggle('fast','linear');  

  }  
  
  function web_dichuyen(){
      $('#ziehen').toggle('fast','linear');  

  }  
  
   function web_caidat(){
      $('#ducnghia_sessing').toggle('fast','linear');  

  }  
  function caidat_nut(){
      $('#nut_settting').toggle('fast','linear');  

  }  
  
  function button_phai() {
      document.getElementById('ziehen').style.left = "240px";
            document.getElementById('ziehen').style.top = "403px";


  }
  
  
   function chieurong(val) {
             document.getElementById('nut_set1').style.width = ""+val+"px";
             document.getElementById('nut_set2').style.width = ""+val+"px";
             document.getElementById('nut_set3').style.width = ""+val+"px";
             document.getElementById('nut_set4').style.width = ""+val+"px";
  $('#rong').html(val);

        }
        
          function chieucao(val) {
             document.getElementById('nut_set1').style.height = ""+val+"px";
     document.getElementById('nut_set2').style.height = ""+val+"px";
             document.getElementById('nut_set3').style.height = ""+val+"px";
             document.getElementById('nut_set4').style.height = ""+val+"px";
  $('#cao').html(val);

        }

    
    
      function dong_chucnang(){

document.getElementById('chucnang_map').style.display = "none";

}

 function mo_chucnang(){
document.getElementById('giaotiep').style.display = "none";

document.getElementById('chucnang_map').style.display = "block";
  $('#them').html('');

}


function shopmap(){
close_npc();
$.ajax({
url : '/_ajax/cuahang.php?shop',
type : 'POST',

success : function(result){
 mo_chucnang();
  $('#data_chucnang_map').html(result);

}
});
}  


function map_moveskill(){
close_npc();
dong_chucnang();
$.ajax({
url : '/_nodejs/kinang.php',
type : 'POST',

success : function(result){
 mo_chucnang();
  $('#data_chucnang_map').html(result);

}
});
} 

function map_movelevel(){
close_npc();
dong_chucnang();
$.ajax({
url : '/_nodejs/tienhoa.php',
type : 'POST',

success : function(result){
 mo_chucnang();
  $('#data_chucnang_map').html(result);

}
});
} 
    

function npctalk(x){
   var content = x;

//find the length of the content
var contentLength = content.length;
var char = 0;
(function ducnghai_Dz_takl() { 
  dxxx = setTimeout(function() {
        char++;
        var type = content.substring(0, char);
  $('#npc').html(type + '<span class="typing-cursor">|</span>');
  //recursive
        ducnghai_Dz_takl();
    }, 20);
}());
}

function dongtalk() {
  clearTimeout(dxxx);

     }
     
     
     
     
     
  function tienhoamap() {
   close_npc();
dong_chucnang();
$.ajax({
url : '/_ajax/tienhoa.php?chonpokemon',
type : 'POST',
success : function(result){
 mo_chucnang();
  $('#data_chucnang_map').html(result);

}
});   
  }   
  
  
function tienhoatiep(id) {
   close_npc();
dong_chucnang();
$.ajax({
url : '/_ajax/tienhoa.php?chon&id='+id+'',
type : 'GET',
success : function(result){
 mo_chucnang();
  $('#data_chucnang_map').html(result);

}
});   
  }     
  
  
  function tienhanh(id,idmy) {
   close_npc();
dong_chucnang();
$.ajax({
url : '/_ajax/tienhoa.php?tienhanh&id='+id+'&idmy='+idmy+'',
type : 'GET',
success : function(result){
 mo_chucnang();
  $('#data_chucnang_map').html(result);

}
});   
  }     
  
  
  function tienhoapokemon(id,idmy) {
$.ajax({
url : '/_ajax/tienhoa.php?tienhoa&id='+id+'&idmy='+idmy+'',
type : 'GET',
success : function(result){
  $('#tienhoamap').html(result);
capnhat();
}
});   
  }     
  
     
     
     $(function() {
	$("#ziehen").draggable({
	containment: 'document',
		stop: function( event, ui ) {
		var offset = $(this).offset(),
		pos_x = offset.left,
		pos_y = offset.top;
			
		}
	}); 
});

function dichuyen(ducnghia){
   Spielerbewegen(ducnghia); 


}
     
     
  
function removeUsersFromMap() {
	var mapImgs = document.querySelectorAll('#ducnghia_nv img:not([id="mySprite"])');

	for (var i=0; i<mapImgs.length; i++) {
		mapImgs[i].parentNode.removeChild(mapImgs[i]);

	}
	
	var ducnghia_pkm_theo = document.querySelectorAll('#ducnghia_pkm_theo img:not([id="ducnghiapkm"])');

	for (var i=0; i<ducnghia_pkm_theo.length; i++) {
		ducnghia_pkm_theo[i].parentNode.removeChild(ducnghia_pkm_theo[i]);

	}
	
		var ducnghia_profile = document.querySelectorAll('#ducnghia_users img:not([id="ten_users"])');

	for (var i=0; i<ducnghia_profile.length; i++) {
		ducnghia_profile[i].parentNode.removeChild(ducnghia_profile[i]);

	}
	
		var ducnghia_gt_g = document.querySelectorAll('#ducnghia_gt img:not([id="icon_giatoc"])');

	for (var i=0; i<ducnghia_gt_g.length; i++) {
		ducnghia_gt_g[i].parentNode.removeChild(ducnghia_gt_g[i]);

	}
	
		var ducnghia_chiendau = document.querySelectorAll('#ducnghia_img_chien img:not([id="chiendau"])');

	for (var i=0; i<ducnghia_chiendau.length; i++) {
		ducnghia_chiendau[i].parentNode.removeChild(ducnghia_chiendau[i]);

	}
	
	
	var chat_dz = document.querySelectorAll('#ducnghia_p_chat img:not([id="chat_ducnghia"])');

	for (var i=0; i<chat_dz.length; i++) {
		chat_dz[i].parentNode.removeChild(chat_dz[i]);

	}
	

}

function addUsersToMap(users) {
	for (var i=0; i<users.length; i++) {
		var user = users[i];
	if(user.id !=0) {	
/////////name
var ducnghiausers = document.createElement('img');
ducnghiausers.src = '/ten/'+user.name+'';
ducnghiausers.style.position = 'absolute';
ducnghiausers.style.top = ((user.y*14)-5) + 'px';
ducnghiausers.style.left = ((user.x*14)+7) + 'px';
///done name

////gt
if(user.icon>0){
var ducnghiagt = document.createElement('img');
ducnghiagt.src = '/icon/giatoc/'+user.icon+'.png';
ducnghiagt.style.position = 'absolute';
ducnghiagt.style.top = (((user.y*14)-5)+4) + 'px';
ducnghiagt.style.left = (((user.x*14)+7)-15) + 'px';
}
///gt

////pokemon
if(user.pokemon>=1 && user.buon==0) {
    ///xử lí ảnh
u_top = ((user.y*16)-4);
	u_left = (user.x*16);    
					u_pet = (user.x*14)-10;

		if(user.direction == "right") {
                top_pet = u_top;
                left_pet = u_pet;
            } else
              if(user.direction == "left") {
                top_pet = u_top;
                left_pet = u_left+32;
            }else
             if(user.direction == "down") {
                top_pet = u_top-40;
                left_pet = u_left;
            }else
             if(user.direction == "up") {
                top_pet = u_top+32;
                left_pet = u_left;
            }
            
    
    //ducnghia
    
var ducnghiaimg = document.createElement('img');
ducnghiaimg.src = '/_ajax/ducnghia/pokemon.php?nut='+ user.direction +'&nghia='+user.nut+'&pokemon='+user.pokemon+'';
ducnghiaimg.style.position = 'absolute';
ducnghiaimg.style.top = top_pet + 'px';
ducnghiaimg.style.left = left_pet + 'px';
}
if(user.buon!=0) {
    var ducnghiaimg = document.createElement('img');

    ducnghiaimg.src = '/_ajax/buon/'+user.buon+'/'+ user.direction +'/'+user.nut+'.png'; 
ducnghiaimg.style.position = 'absolute';
ducnghiaimg.style.top = ((user.y*15)-5) + 'px';
ducnghiaimg.style.left = ((user.x*14)-10) + 'px';
} 
///done pokemon

////chiến đấu
if(user.chiendau) {
var ducnghiachiendauimg = document.createElement('img');
ducnghiachiendauimg.src = '/icon/chiendau.gif';
ducnghiachiendauimg.style.position = 'absolute';
ducnghiachiendauimg.style.top = ((user.y*16)-17) + 'px';
ducnghiachiendauimg.style.left = ((user.x*15)-0) + 'px';
}
///done chiến đấu

////chat
if(user.timechat >1) {
var ducnghiachat = document.createElement('img');
ducnghiachat.src = '/chat/'+user.chat+'';
ducnghiachat.style.position = 'absolute';
ducnghiachat.style.top = ((user.y*15)+50) + 'px';
ducnghiachat.style.left = ((user.x*14)-13) + 'px';
} else {
    var ducnghiachat = document.createElement('img');

ducnghiachat.src = '';

}
///done chat

	/// nhanvat
var image = document.createElement('img');


image.src = '/_ajax/ducnghia/nhanvat.php?nhanvat='+user.nhanvat+'&nut='+ user.direction +'&nghia='+user.nut+''; 

	image.title = user.username;
		image.style.position = 'absolute';
		image.style.top = ((user.y*16)-4) + 'px';
		image.style.left = (user.x*16) + 'px';
		image.onclick = function(user) {
      			return function() {
      				var html = '';
      				html += '<img src="ducnghia/nhanvat/'+ user.direction +'/trainer'+user.nhanvat+''+user.direction+'.png"/><br />';
      				html += 'Người chơi <a onclick="ttnv('+user.id+')">'+user.username+'</a> ';      				
      			
      								$('#nguoichoi').html(html);

      				ttnv(user.id);

      			};
   		}(user);
	
		$(image).insertAfter('#mySprite');
				$(ducnghiaimg).insertAfter('#ducnghiapkm');
		$(ducnghiagt).insertAfter('#icon_giatoc');

								$(ducnghiausers).insertAfter('#ten_users');
								$(ducnghiachiendauimg).insertAfter('#chiendau');
								$(ducnghiachat).insertAfter('#chat_ducnghia');


	}
	}
}

function tron(n, c, d, t) {
  var c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "." : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;

  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) ;
};



function npc5(id,x,y){
$.ajax({
url : '/datalog/_map.php?npc5',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}


function npc6(id,x,y){
$.ajax({
url : '/datalog/_map.php?npc6',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}


function npc7(id,x,y){
$.ajax({
url : '/datalog/_map.php?npc7',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}


function npc8(id,x,y){
$.ajax({
url : '/datalog/_map.php?npc8',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}



function map5(id,x,y){
$.ajax({
url : '/datalog/_map.php?map5',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}


function map6(id,x,y){
$.ajax({
url : '/datalog/_map.php?map6',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}


function map7(id,x,y){
$.ajax({
url : '/datalog/_map.php?map7',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}

function map8(id,x,y){
$.ajax({
url : '/datalog/_map.php?map8',
type : 'POST',
data : {id : id , x : x , y : y},
success : function(result){
var xx = $.parseJSON(result);

 	ducnghia('success', 'Thông Báo! ', '<br><p> '+xx.msg+'</p>', 'DucNghia', '');

}
});
}




function map_c() {
 $('#map_button_nut_x').toggle('fast','linear');  
      $('#map_button_xxx').toggle('fast','linear');  
}

 function map_b(){
      $('#map_button_nut_x').toggle('fast','linear');  
      $('#map_button_xxx').toggle('fast','linear');  

  }  


function map_nhiemvu(){
    $.ajax({
url : '/datalog/_nhiemvu.php?my',
success : function(result){
var x = $.parseJSON(result);
 mo_chucnang();
  $('#data_chucnang_map').html(x.ducnghia);
  

}
});
}

 function head_o(){
document.getElementById('giaotiep').style.display = "none";

document.getElementById('map_head').style.display = "block";
document.getElementById('map_end').style.display = "block";
  $('#end_data').html('');

  $('#head_data').html('');

}
function head_c(){

document.getElementById('map_end').style.display = "none";
document.getElementById('map_head').style.display = "none";
 $('#end_data').html('');

  $('#head_data').html('');

}

function mo_giaotiep(map,id){
document.getElementById('giaotiep').style.display = "block";

				    	        		$("#onclick").html('<b onclick="giaotiep('+map+',\''+id+'\')">Giao tiếp</b> ');

$('#ducnghia_gt_npc').attr('onclick','giaotiep('+map+',\''+id+'\')');

	$("#ducnghia_gt_npc").html('NÓI');

}

function shop_skin(){
close_npc();
$.ajax({
url : '/_ajax/cuahang.php?shopskin',
type : 'POST',

success : function(result){
 head_o();
  $('#head_data').html(result);
  $('#end_data').html('Bạn muốn mua gì ?');

}
});
}  


function xem_skin(id){
close_npc();
$.ajax({
url : '/_ajax/cuahang.php?xemskin',
type : 'POST',
data : {id : id},

success : function(result){
  $('#end_data').html(result);

}
});
}  

function mua_skin(id){
close_npc();
$.ajax({
url : '/_ajax/cuahang.php?muaskin',
type : 'POST',
data : {id : id},

success : function(result){
  $('#end_data').html(result);

}
});
}  


function doiskin(){
close_npc();
$.ajax({
url : '/_ajax/cuahang.php?doiskin',
type : 'POST',

success : function(result){
 head_o();
  $('#head_data').html(result);
  $('#end_data').html('Ấn vào trang phục để đổi !');

}
});
} 


function ok_skin(id){
close_npc();
$.ajax({
url : '/_ajax/cuahang.php?okdoi',
type : 'POST',
data : {id : id},

success : function(result){
    var x = $.parseJSON(result);

  $('#end_data').html(x.ok);

 node('/admin.php?ducnghia=attack/map&map');   
}
});
}  


function ruongdo(){
close_npc();
$.ajax({
url : '/_ajax/game.php?ruongdo',
type : 'POST',

success : function(result){
 head_o();
  $('#head_data').html(result);
 // $('#end_data').html('Bạn muốn làm gì ?');

}
});
}  

function ruongdo_lay(id){

  $('#end_data').html(' <button onclick="chora(\''+id+'\')">Lấy ra</button> ');

}


function giftcode(){
close_npc();
$.ajax({
url : '/_ajax/m.php?giftcode',
type : 'POST',

success : function(result){
document.getElementById('giua').style.display = "block";
  $('#data_giua').html(result);

}
});
}  
  
  function topgame(id){
close_npc();
$.ajax({
url : '/_ajax/m.php?top',
type : 'POST',
data : {id : id},

success : function(result){
 head_o();
  $('#head_data').html(result);
  $('#end_data').html('Bảng xếp hạng...');

}
});
}  
  
  
  function thongbaosua(){
        	    	    	var noidung = $('#newpost_txt').val();

$.ajax({
	url : '/_ajax/chucnang.php?edit',
	type : 'POST',
	data : {noidung : noidung},
	success : function(result){
 	ducnghia('success', 'Thông Báo! ', '<br><p> '+result+'</p>', 'DucNghia', '');

			
	}
 
});
} 

  
  function cuahang_pokemon() {
      close_npc();
 head_o();
  $('#end_data').html('Đang tải dữ liệu....');

      $.ajax({
url : '/datalog/ducnghia.php?cuahang',
success : function(result){
var x = $.parseJSON(result);

 $('#head_data').html(x.a);
  $('#end_data').html('Bạn muốn mua gì');
}
});


  }
  
  function cuahang_item(){
        close_npc();
 head_o();
  $('#end_data').html('Đang tải dữ liệu....');
      ///tui pokemon
$.ajax({
url : '/datalog/ducnghia.php?choitems',
success : function(result){
var x = $.parseJSON(result);
 $('#head_data').html(x.a);
  $('#end_data').html('Bạn muốn mua gì');

}
});
  }
  
  function map_ruong(){
        close_npc();
 head_o();
   $('#head_data').html('Đang tải tải túi đồ....');

    $.ajax({
url : '/_ajax/game.php?tui',
success : function(result){
var x = $.parseJSON(result);

 $('#head_data').html(x.a);
  

}
});
}

function thongtin(id,modal){	
  $.ajax({
url : '/datalog/ducnghia.php?ivp',
type : 'POST',
data : {id : id},
success : function(result){
    
    var x = $.parseJSON(result);
    $('#end_data').html('<div class="list-group-item fixbot" style="background: #fff;border: 2px solid green;  color: green;" id="ltp47">'+x.img+' <br> '+x.msg+' <br>  '+x.gioithieu+' <Br> '+x.muaban+'<div id="nut_banditmemay"></div></div>');
    



}
});
} 
  
  
  function xemshopvatpham(id,modal){	
$.ajax({
url : '/datalog/shopvatpham.php?info',
type : 'POST',
data : {id : id},
success : function(result){
    

    var x = $.parseJSON(result);
        $('#end_data').html('<div class="list-group-item fixbot" style="background: #fff;border: 2px solid green;  color: green;" id="ltp47">'+x.img+' <br> '+x.msg+' <br>  '+x.gioithieu+' <Br> '+x.sudung+' '+x.ban+'<div id="nutbanvp"></div></div>');

	$('#shopvp_ten').html(x.msg);
	$('#shopvp_img').html(x.img);
	$('#shopvp_thongtin').html(x.gioithieu);
	$('#shopvp_ban').html(x.ban);

	$('#shopvp_sudung').html(x.sudung);

}
});
} 




function banpkm(id){

$.ajax({
url : '/datalog/ducnghia.php?showban',
type : 'POST',
data : {id : id},
success : function(result){
    var x = $.parseJSON(result);
  $('#end_data').html('<div style="background-color: #fff;background: #fff;border: 2px solid green;">'+x.aaaa+'</div>');


}
});
} 
  
  
  function info_doiten(id){

$.ajax({
	url : '/datalog/ducnghia.php?ducnghia',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
	$('#end_data').html(x.msg);



	}

});	

} 

function pokemon2(id , modal){
 
$.ajax({
url : '/datalog/ducnghia.php?pokemon',
type : 'POST',
data : {id : id},
success : function(result){
var x = $.parseJSON(result);
  $('#head_data').html('<br><div>'+x.gioithieu+'</div>');


}
});
}

function doitenok(id){
var tenmoi = $('#tenmoi').val();

$.ajax({
	url : '/datalog/ducnghia.php?doiten',
	type : 'POST',
	data : {tenmoi : tenmoi , id : id},
	success : function(result){

	var x = $.parseJSON(result);


		  	    		pokemon2(id);
  $('#end_data').html(x.msg);

	}

});
}


function info_vatpham(id){

$.ajax({
	url : '/datalog/_pokemon.php?item',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
	$('#end_data').html(x.msg);


	}

});
} 

function dungvp(pokemon){
	
var vatpham = $('#vatpham').val();

$.ajax({
	url : '/datalog/ducnghia.php?vatpham',
	type : 'POST',
	data : {vatpham : vatpham , pokemon : pokemon},
	success : function(result){

	var x = $.parseJSON(result);
		    			//	notice(x.msg);
		//	ducnghia('success', 'Thông Báo! ', '<br><p> '+x.msg+'</p>', 'DucNghia', '');
			$('#end2_data').html(x.msg);

		pokemon2(pokemon);


	}

});
}





function thapokemon(id_p){

$.ajax({
	url : '/datalog/_pokemon.php?tha',
	type : 'POST',
	data : {id_p : id_p},
	success : function(result){
	var x = $.parseJSON(result);
head_c();

	}
 
});
} 

function pokemon(id , modal){
  close_npc();
 head_o();
   $('#head_data').html('Đang lấy thông tin....');
$.ajax({
url : '/datalog/ducnghia.php?pokemon',
type : 'POST',
data : {id : id},
success : function(result){
var x = $.parseJSON(result);
  $('#head_data').html('<br><div>'+x.gioithieu+'</div>');
  $('#end_data').html('<div style="background-color: #fff;background: #fff;border: 2px solid green;">'+x.ducnghia+'</div>');


}
});
}

function mychat(){
 close_npc();
 head_o();
   $('#head_data').html('Đang lấy thông tin....');
     $('#end_data').html('');

$.ajax({
url : '/request/users.php?mychat',
success : function(result){
  $('#head_data').html('Tin Nhắn <hr>'+result+'');
}
});
}



function sendmsg(id){
    	$('#head_data').html('Đang gửi.....');

	$('#t20_btchat').html('<i class="fa fa-spinner fa-pulse"></i>');
	var text = $('#t20_chat').val();
			if(text.trim() != '' || $('#t20_display').html().trim() == ''){
				if(text.trim() == '' && id != 2) text = '';
				$('#t20_chat').attr('disabled','disabled');
$.ajax({
url : '/datalog/msg.php?user='+id,
type : 'POST',
data : { text : text },
success : function(result){
var x = $.parseJSON(result);
		$('#t20_chat').val('');
		$('#t20_btchat').html('<i class="fa fa-paper-plane"></i>');
		$('#t20_chat').removeAttr('disabled');
if(!x.error)
	$('#head_data').html('<hr><center>Trò Chuyện </center><hr> '+x.msg+'');
else
	notice('Thành cong...'+x.error+'');
}
});
			} else {
				$('#t20_btchat').html('<i class="fa fa-paper-plane"></i>');
			}
}

function info_vatpham(id){

$.ajax({
	url : '/datalog/_pokemon.php?item',
	type : 'POST',
	data : {id : id},
	success : function(result){
	var x = $.parseJSON(result);
	$('#end_data').html(x.msg);


	}

});
} 


function shiny(id){
$.ajax({
	url : '/datalog/ducnghia.php?shiny',
	type : 'POST',
	data : {id : id},
	success : function(result){
		var x = $.parseJSON(result);
	$('#end_data').html(x.thongbao);
			//	$('.modal').modal('hide');

	pokemon2(id); 

	}
});
}


function movetm_ok(pokemon){
	
var tm = $('#tm').val();
var stt = $('#stt').val();


$.ajax({
	url : '/datalog/ducnghia.php?move',
	type : 'POST',
	data : {stt : stt , pokemon : pokemon , tm : tm},
	success : function(result){

	var x = $.parseJSON(result);
			$('#end3_data').html(x.msg);
		pokemon2(pokemon);


	}

});
}


function pk1() {

$.ajax({
	url : '/datalog/_tancong.php?wild',
	success : function(result){
 // ducnghia_battel.style.display = "block";
 $('#ducnghia_batt').modal('show');

	$('#ducnghia_text').html('Tiếp tục trận đấu');

	}

});
}




function ducnghia_att_pk() {
 	$('#data_battel_huanluyen').html('');
 	$('#data_battel_vanbuon').html('');
 	$('#data_battel').html('');

$.ajax({
	url : '/datalog/_tancong.php?wild',
	success : function(result){
 // ducnghia_battel.style.display = "block";
 $('#ducnghia_batt').modal('show');

	$('#data_battel').load('/_nodejs/wild.php');
	$('#ducnghia_text').html('Tiếp tục trận đấu');

	}

});
}
function huanluyen(){
	$('#data_battel_huanluyen').html('');
 	$('#data_battel_vanbuon').html('');
 	$('#data_battel').html('');
                   dongtalk();
 close_npc();

$.ajax({
	url : '/datalog/_tancong.php?trainer',
	success : function(result){
$('#ducnghia_huanluyen').modal('show');
var n =Math.floor(Math.random() * 1000000000) + 1;
	$('#data_battel_huanluyen').load('/_nodejs/trainer.php?n='+n+'');
	}

});
}

function buon(){
	$('#data_battel_huanluyen').html('');
 	$('#data_battel_vanbuon').html('');
 	$('#data_battel').html('');
                   dongtalk();
 close_npc();

$.ajax({
	url : '/datalog/_tancong.php?trainer',
	success : function(result){
$('#ducnghia_vanbuon').modal('show');
var n =Math.floor(Math.random() * 1000000000) + 1;
	$('#data_battel_vanbuon').load('/_nodejs/trainer.php?n='+n+'');
	}

});
}

function mo_huanluyen() {
  $('#ducnghia_huanluyen').modal('show');
	$('#data_battel_huanluyen').load('/_nodejs/trainer.php');  
}
function dong_huanluyen(){
      $('#ducnghia_huanluyen').modal('hide');

}



function daupk(username){
     	$('#data_battel').html('');
     	$('#data_battel_huanluyen').html('');

                   dongtalk();
 close_npc();
  dong_chucnang();


$.ajax({
	url : '/datalog/_tancong.php?pk',
		type : 'POST',
	data : {username : username},
	success : function(result){
$('#ducnghia_huanluyen').modal('show');
	$('#data_battel_huanluyen').load('/_nodejs/trainer.php');
	}

});
} 


function moipk(id){
     	$('#data_battel').html('');
     	$('#data_battel_huanluyen').html('');
     	$('#data_battel_pvp').html('');

                   dongtalk();
 close_npc();
  dong_chucnang();


$.ajax({
	url : '/datalog/_tancong.php?moi',
		type : 'POST',
	data : {id : id},
	success : function(result){
$('#ducnghia_pvp').modal('show');
	$('#data_battel_pvp').load('/_nodejs/pvp.php');
	}

});
} 

function dongy(){
     	$('#data_battel').html('');
     	$('#data_battel_huanluyen').html('');
     	$('#data_battel_pvp').html('');

                   dongtalk();
 close_npc();
  dong_chucnang();


$.ajax({
	url : '/datalog/_tancong.php?dongy',
		type : 'POST',
	success : function(result){
$('#ducnghia_pvp').modal('show');
	$('#data_battel_pvp').load('/_nodejs/pvp.php');
	}

});
} 

function msg(id,modal){
  $('#end_data').html('<span class="input-group-btn"></span><input class="form-control" type="text" placeholder="Nhập tin nhắn" id="t20_chat"> <span class="input-group-btn"> <button class="btn btn-info" type="button" id="t20_btchat"><i class="fa fa-paper-plane"></i></button></span>	<ul class="NB_list-group deschat" id="t20_display"></ul>');

$('#t20_btchat').attr('onclick','sendmsg('+id+')');
$('#t20_display').attr('MSGufr',id);
sendmsg(id);


}

function openchat(id,user){
	$('.modal').modal('hide');

 close_npc();
 head_o();
   dong_chucnang();

   msg(id);
}


 function trabuon() {
     
dongtalk();
        $.ajax({
url : '/_ajax/buon.php?trabuon',
type : 'POST',
success : function(result){
var xx = $.parseJSON(result);

npctalk(xx.ducnghia);
	$('#buon').html('0');

}
});
      }
      
      function nhanbuon() {
dongtalk();
        $.ajax({
url : '/_ajax/buon.php?nhanbuon',
type : 'POST',
success : function(result){
var xx = $.parseJSON(result);

npctalk(xx.ducnghia);

}
});
      }


 

 function web_online(){
      $('#show_online').toggle('fast','linear');  

  }  
  
   function napthe() {
dongtalk();
close_npc();
 head_o();
   $('#head_data').html('Đang lấy thông tin....');
     $('#end_data').html('');
	$('#head_data').load('/_ajax/napthe.php');

      }
  
  
  
  function dctt(){
close_npc();
$.ajax({
url : '/_ajax/chucnang.php?dichuyen',
type : 'POST',

success : function(result){
document.getElementById('giua').style.display = "block";
var xx = $.parseJSON(result);

  $('#data_giua').html(xx.msg);

}
});
}  





  function di_map(id) {
         
text_game();

         $.ajax({
url : '/_ajax/chucnang.php?dithoi',
type : 'POST',
data : {id : id},
success : function(result){
var xx = $.parseJSON(result);
if(xx.st==1) {
    	  loadgame();
    notice(xx.msg);

}else {
    notice(xx.msg);

	    	$('#ducnghia_loadmap').load('/_ajax/loadmap.php?pay&map='+xx.map+'&ducnghia_x='+xx.xx+'&ducnghia_y='+xx.yy+'');
console.log('/_ajax/loadmap.php?pay&map='+xx.map+'&ducnghia_x='+xx.xx+'&ducnghia_y='+xx.yy+'');

  socket.disconnect();
console.log('stop connect');
 loadgame();
}


}
}); 
      }


function auto_pkm(id){
  close_npc();
 head_o();
   $('#head_data').html('Đang lấy thông tin....');
$.ajax({
url : '/_ajax/chucnang.php?auto',
type : 'POST',
data : {id : id},
success : function(result){
  $('#head_data').html('<hr>Cài Kĩ năng tự động <hr>'+result+'');


}
});
}

function cai_auto(id,name){
  close_npc();
 head_c();
$.ajax({
url : '/_ajax/chucnang.php?okecai',
type : 'POST',
data : {id : id , name : name},
success : function(result){
notice(result);

}
});
}


function map_thongbao(){
close_npc();
$.ajax({
url : '/_ajax/chucnang.php?thongbao',
type : 'POST',

success : function(result){
 mo_chucnang();
  $('#data_chucnang_map').html(result);

}
});
}  

 function dichchuyentucthoi(id) {
text_game();
         $.ajax({
url : '/_ajax/banbe.php?dichchuyen',
type : 'POST',
data : {id : id},
success : function(result){
var xx = $.parseJSON(result);
if(xx.st==1) {
    	  loadgame();
    notice(xx.msg);

}else {
    notice(xx.msg);

	    	$('#ducnghia_loadmap').load('/_ajax/loadmap.php?pay&map='+xx.map+'&ducnghia_x='+xx.xx+'&ducnghia_y='+xx.yy+'');

  socket.disconnect();
console.log('stop connect');
 loadgame();
}

}
}); 
}



