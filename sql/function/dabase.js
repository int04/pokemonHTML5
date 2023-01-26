/*
Tác giả : DucNghia
https://console-openshift-console.apps.us-west-1.starter.openshift-online.com/k8s/ns/pokemon-ducnghia/buildconfigs/testgame-git0
*/
///canvas///
//var socket = io.connect('//ducnghia.pkmvn.xyz');
//var socket = io.connect('http://testgame-git-pokemon-ducnghia.apps.us-west-1.starter.openshift-online.com/');
var ws ='';
var chologin =0;
 function startWebsocket() {
   ws = new WebSocket('ws://localhost:8080');
 ws.onopen = function(evt) { chologin=1; 
     if(userID >=1) {
              ws.send("login:"+userID+"^");
              c_giaotiep();
     }
 };

  ws.onclose = function(){
      giaotiep(t('Đang kết nối lại... xin chờ ít giây...'));
    // connection closed, discard old websocket and create a new one in 5s
    ws = null;
    setTimeout(startWebsocket, 2000);
    
  };
}

startWebsocket();
function mahoa(code) {
    return jsonpack.pack(code);
}
function giaima(code) {
    return jsonpack.unpack(code);
}
var base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
var userID = '';
var dabase_chat = [];
function setdata(key, value) {
            var expires = new Date();
            expires.setTime(expires.getTime() + (100 * 24 * 60 * 60 * 1000));
            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
        }

        function getdata(key) {
            var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
            return keyValue ? keyValue[2] : null;
        }
        function cookie(key) {
            return getdata(key);
        }
function settimezone(id) {
    timephp.time = id;
}
function date() {
   
    return timephp.time;

}

var caidat = {
    hieuung : cookie('hieuung') !== null ? cookie('hieuung') : 1 ,
    cauhinh : cookie('cauhinh') !== null ? cookie('cauhinh') : 1 , 
    play : cookie('play') !== null ? cookie('cauhinh') : 0 , 
    npc : cookie('npc') !== null ? cookie('npc') : 0 , 
    skill : cookie('skill') !== null ? cookie('skill') : 0 , 
    nhun : cookie('nhun') !== null ? cookie('nhun') : 1 , 
    load : 0 , block : 0 , 
    ngonngu : cookie('ngonngu') !== null ? cookie('ngonngu') : 'vi' , 
    mmo : Date.now()};


function cai_datgame(id) {
    
    if(id==1) {
        if (caidat.hieuung==1)
	{
		caidat.hieuung =0;
}
else
{
		caidat.hieuung =1;

}
    }
    
    if(id==2) {
        if (caidat.cauhinh==1)
	{
		caidat.cauhinh =0;
}
else
{
		caidat.cauhinh =1;

}
    }
    if(id==3) {
        if (caidat.play==1)
	{
		caidat.play =0;
}
else
{
		caidat.play =1;

}
    }
    
    if(id==4) {
        if (caidat.npc==1)
	{
		caidat.npc =0;
}
else
{
		caidat.npc =1;

}
    }
    if(id==5) {
        if (caidat.skill==1)
	{
		caidat.skill =0;
}
else
{
		caidat.skill =1;

}
    }
    
    if(id==6) {
        if (caidat.nhun==1)
	{
		caidat.nhun =0;
}
else
{
		caidat.nhun =1;

}
    }
    setdata('cauhinh',caidat.cauhinh);
    setdata('hieuung',caidat.hieuung);
    setdata('play',caidat.play);
    setdata('npc',caidat.npc);
    setdata('skill',caidat.skill);
    setdata('nhun',caidat.nhun);

    game_hanhtrang(5);
}


function savengonngu() {
  $.nghia({
	url : '/data/vietsub.php',
	type : 'POST',
	data : {duc : JSON.stringify(vietsub)  },
	
ducnghia : function(data){
	    
	  
}
});         
}

function layngonngu(text) {
    for(var c=0;c<vietsub.length;c++) {
      if(vietsub[c].vi == text) {
          return vietsub[c].en;
      } 
     
    }
     return null;
}
function t(text) {
    return vi(text);
}
function hd(text,text2) {
    
 	    huongdan.push({title : text , text : text2 , id : rand(100000,999999)  });

$.nghia({
	url : '/data/huongdan.php',
	type : 'POST',
	data : {duc : JSON.stringify(huongdan)  },
	
ducnghia : function(data){
	    
	  
}
});     


}

var chodich = [];




function ngonngu() {
    giaotiep('What language do you want to choose? You can edit the language in settings when playing games.');
        	$("#npc_menu").html('<b onclick="lau(\'vi\')" class="viptxt nutchat">Tiếng Việt</b><b onclick="lau(\'en\')" class="viptxt nutchat">English</b>');
  
}
function cauinhtrochoi(btn)
{
	if (caidat.cauhinh==1)
	{
		btn.value = "Thấp";
		caidat.cauhinh =0;

	}
	else
	{
		btn.value = "Cao";
		caidat.cauhinh =1;

	}
}
var gameimgload =  [];
 var elem = document.getElementById('cvsGame'),
    elemLeft = elem.offsetLeft,
    elemTop = elem.offsetTop,
    context = elem.getContext('2d'),
    elements = [];
    elem.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
    elements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
            console.log('click id'+element.id);
        }
    });

}, false);
/*
elements.push({
    id : 1,
    colour: '#05EFFF',
    width: 55,
    height: 100,
    top: 50,
    left: 15
});
*/
function checkloadgame(id) {
   for(var k=0;k<gameimgload.length;k++) {
				if( gameimgload[k].img == id ) {
					return gameimgload[k];
				}
			}

return null;
   
}

function check_canvas(id) {
  for(var k=0;k<elements.length;k++) {
				if( elements[k].id == id ) {
					return elements[k];
				}
			}
			return null;       
}

///done
	var charsetLoadedCount = 0;
	var charsets = new Array();

function loadedSprite() {
		charsetLoadedCount++;
	}
function addCharset(imgURL) {
		var newImage = new Image();
		newImage.src = imgURL;
		newImage.onload = loadedSprite;
		charsets.push(newImage);

	}
	
	function game_canvas_key(e) {
	    if(camdi!=1) {
    if(+my.users.pokemon >=1) {
    ///chose skill
    if(e.keyCode == 49 || e.keyCode == 97 && updatekinang(1) !==null) {
      game_chorse(1); 
    }
    if(e.keyCode == 50 || e.keyCode == 98 && updatekinang(2) !==null) {
      game_chorse(2); 
    }
    if(e.keyCode == 51 || e.keyCode == 99 && updatekinang(3) !==null) {
      game_chorse(3); 
    }
    if(e.keyCode == 52 || e.keyCode == 100 && updatekinang(4) !==null) {
      game_chorse(4); 
    }
    if(e.keyCode == 53 || e.keyCode == 101 && updatekinang(5) !==null) {
      game_chorse(5); 
    }
    }
    
    ///done
    ///chorse postion
    if(e.keyCode == 113) {
        timkiem(1);
    }
//chorso enter
    if (e.keyCode == 13) {
        if(my.click.id !==0 && getuser(my.click.id) !== null && my.click.type =="users") {
            pvp(my.click.id);
        } else
        if(my.click.id !==0 && getnpc(my.click.id) !== null && my.click.type =="pokemon") {
            if(+getnpc(my.click.id).hp >=1) {
                att(my.click.id);
              
              
               
            }
            
            else if(+getnpc(my.click.id).idvp >=1) {
                nhatvp(my.click.id);
            }
            
            else if(getnpc(my.click.id).eventData[0].func== "DISPLAY MESSAGE") {
                noichuyen(my.click.id);
            }
             else {
                      keyState.btn1 = true;
 
            }
        } else {
       keyState.btn1 = true;
        }
    }
}
}

document.onkeydown = game_canvas_key;

$.fn.attachDragger = function(){
    var attachment = false, lastPosition, position, difference;
    $( $(this).selector ).on("mousedown mouseup mousemove",function(e){
        if( e.type == "mousedown" ) attachment = true, lastPosition = [e.clientX, e.clientY];
        if( e.type == "mouseup" ) attachment = false;
        if( e.type == "mousemove" && attachment == true ){
            position = [e.clientX, e.clientY];
            difference = [ (position[0]-lastPosition[0]), (position[1]-lastPosition[1]) ];
            $(this).scrollLeft( $(this).scrollLeft() - difference[0] );
            $(this).scrollTop( $(this).scrollTop() - difference[1] );
            lastPosition = [e.clientX, e.clientY];
        }
    });
    $(window).on("mouseup", function(){
        attachment = false;
    });
}

$(document).ready(function(){
 $("#box_center").attachDragger();
  $("#ducnghia_menu_giaotiep").attachDragger();
  $("#ducnghia_giaotiep").attachDragger();
  $("#ducnghia_npc").attachDragger();


});


function vi(text) {
    if(vietsub.length<=0) {
     //   khach();
    }
    
    if(caidat.ngonngu == 'vi') {
        return text;
    }
    if(text.length <=1) {
        return '...';
    }
    if(layngonngu(text) !== null) {
        return layngonngu(text);
    }
     
     for(var c=0;c<chodich.length;c++) {
      if(chodich[c].vi == text) {

          return text;
      } 
     
    }
         chodich.push({vi : text });

 $.nghia({
	url : 'http://translateapi.howtofixthis.com/',
	type : 'GET',
	data : {text : text , sourceLanguage : 'vi' , targetLanguage : 'en'  },
ducnghia : function(data){
    if(layngonngu(text) === null) {
 	    vietsub.push({vi : text , en : data.translateText   });
 	   ws.send("ngonngu:"+text+"^"+data.translateText+"");
 	       	    savengonngu();

for(var c=0;c<chodich.length;c++) {
      if(chodich[c].vi == text) {
          	chodich.splice(c, 1);
      } 
     
    }
}
	  return data.translateText;
}
});   
return text;

}



