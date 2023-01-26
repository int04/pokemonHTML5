function myIcon(str) {
    var a = '<img src="/img/app/bbcode/';
    var b = '.gif" >';


str = str.replace(/\:d/g,	 a + "=)"  + b);
str = str.replace(/\:D/g,	 a + "=D"  + b);
str = str.replace(/\:p/g,	 a + "=D"  + b);

  	return str;
}

function MakeArray(n){
  this.length=n;
  for(var i=1; i<=n; i++) this[i]=i-1;
  return this
}

hex=new MakeArray(16);
hex[11]="A"; hex[12]="B"; hex[13]="C"; hex[14]="D";
hex[15]="E"; hex[16]="F";

function ToHex(x){   // Changes a int to hex (in the range 0 to 255)
  var high=x/16;
  var s=high+"";        //1
  s=s.substring(0,2);   //2 the combination of these = trunc funct.
  high=parseInt(s,10);  //3
  var left=hex[high+1]; // left part of the hex-value
  var low=x-high*16;    // calculate the rest of the values
  s=low+"";             //1
  s=s.substring(0,2);   //2 the combination of these = trunc funct.
  low=parseInt(s,10);   //3
  var right=hex[low+1]; // right part of the hex-value
  var string=left+""+right; // add the high and low together
  return string;
}

function fadeout(text){
stringcolor = '';
  text=text.substring(3,text.length-4);
                         // gets rid of the HTML-comment-tags
  color_d1=255;          // any value in 'begin' 0 to 255
  mul=color_d1/text.length;
  var j=1;
for(i=0;i<text.length;i++){
   color_d1=255*Math.sin(i/(text.length/3));
   // some other things you can try>>
   // "=255-mul*i" to fade out, "=mul*i" to fade in,
   // or try "255*Math.sin(i/(text.length/3))"
   color_h1=ToHex(color_d1);
   color_d2=mul*i;
   color_h2=ToHex(color_d2);
   color_d3=mul*(text.length-i);
   color_h3=ToHex(color_d3);

      j = i;

  if (text.substring(i,i+1) == '&')
  {
        for (j = i+1; j < text.length; j++)
        {
               if (text.substring(j,j+1) == ';') { break; }
        }
        if (j == text.length) { j = i; }
  }

  if (text.substring(i,i+1) == '<')
  {
        for (j = i+1; j < text.length; j++)
        {
               if (text.substring(j,j+1) == '>') { break; }
        }
        if (j == text.length) { j = i; }
  }

   stringcolor += "<FONT COLOR='#"+color_h3+color_h1+color_h2+"' >"+
                  text.substring(i,j+1)+'</FONT>';
         i = j;
}
return stringcolor;
}
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
$(document).on('click',function(event){
    playSFX("click");
     var button = event.target;
    
 var ducnghia_n = button.id;
if(ducnghia_n =="cvsGame") {
    c_box();
    camdi =0;
    
}

if(ducnghia_n == "messageBox") {
    camdi=1;
}else{
   camdi=0; 
}

if(button.type == "text") {
    camdi=1;
} else
if(button.type == "number") {
    camdi=1;
} else {
camdi=0;
}
 
});



function chatMsg(ct) {
	ct = '<div class="menu list">' + myIcon(ct) + '</div>';
chat_1=	''+ct+''+chat_1+'';

	$("#chatConsole").html(chat_1);

}

function fixloi(ct) {

		ct = '<div class="menu list">' + myIcon(ct) + '</div>';
chat_2=	''+ct+''+chat_2+'';

	$("#fixloi").html(chat_2);
	
}

function chatm(ct) {


		ct = '<div class="menu list">' + myIcon(ct) + '</div>';
chat_3=	''+ct+''+chat_3+'';

	$("#playerList").html(chat_3);
	
}

function chatm0(ct) {
  if(ct.map==mapID) {
	$("#playerList").html(ct + $("#playerList").html());
	
	ct = '<div class="menu list">' + ct.username + ' : ' + ct.noidung + '</div>';
chat_3=	''+ct+''+chat_3+'';

	$("#playerList").html(chat_3);
	
  }
	
}
  ////chat




///ducnghia
var tatc = 0;
var boxchat = 0;
var tipchung = 0;
var tipmap = 0;
var tipfix = 0;

function doichat(idb) {
    boxchat = idb;
    game_chat(boxchat);
   if(idb == 0 && tipchung <= 0) {
       
           chatMsg("<font color='red'>Admin</font> : <b>Vui lòng nói chuyện văn minh, lịch sự.Tuyệt đối không cung cấp tài khoản mật khẩu cho người chơi khác..</b> ");
    tipchung =1;
   } 
   
    if(idb == 1 && tipmap <= 0) {
       
           chatm("<font color='red'>Admin</font> : <b>Chỉ những người chơi trong bản đồ mới thấy bạn chát.</b> ");
    tipmap =1;
   } 
   
   
   if(idb == 3 && tipfix <= 0) {
      
           fixloi("<font color='red'>Admin</font> : <b>Kênh này hiển thị chát riêng tư,tin nhắn từ kênh thế giới v.v </b> ");
    tipfix =1;
   } 
    
}

function chatMessage() {
    cl();
        camdi =0;

    var t = new Date();
    var time = t.toLocaleDateString() + "/" + t.toLocaleTimeString();
    //alert(time);
    var txt = $("#messageBox").val();
     txt2 = txt.split(" ");
     txt3 = txt.split("_");
     if(txt2[0]=="kick") {
   ws.send("kick:"+txt2[1]+"");
                      fixloi("<font color='red'>DucNghia</font> : <b>Đã đuổi người chơi.</b>");
 
     }else   
    
     if(txt2[0]=="quai") {
  addquai();
  } else
     if(txt2[0]=="fix") {

  if(admin==1) {
      admin=0;
  } else {
      admin=1;
  }
}else    
if(txt2[0]=="box") {

 users();
}else    
if(txt2[0]=="pet") {

 pet(txt2[1]);   
}else    
if(txt2[0]=="caidat") {
caidat();    
}else 
if(txt2[0]=="game") {
control();    
}else 
if(txt2[0]=="admin") {
cp();    
}else         
if(txt2[0]=="menux") {
goirong(3);    
}else     
if(txt2[0]=="menu") {
    testo();
}else
    if(boxchat==3) {
 if(txt3[0]=="#") {
     
      $.ajax({
url : '/datalog/modu.php?sua',
type : 'POST',
data : {text : txt3[1]},
success : function(result){

}
});     
 }    else    
         if(txt2[0]=="load") {
    	        	loadMapEvents();

 } else  
  if(txt2[0]=="chat") {
     c(txt2[1])

 } else       
 
   if(txt2[0]=="map") {
     map(txt2[1],30,30,txt2[2])

 } else       
         if(txt2[0]=="admin") {

     admin =1;
 } else      
          if(txt2[0]=="pokemon") {

     mappokemon();
 } else      
         if(txt2[0]=="tao") {

     taodata();
 } else      
   if(txt2[0]=="data") {

     datamap();
 } else      
      if(txt2[0]=="/tat") {
          tatc=1;
           $('#chat_show').toggle('fast','linear');  
	          $('#chat_an').toggle('fast','linear');  
      fixloi("<font color='red'>DucNghia</font> : <b>Ẩn chát thành công.</b>"); } else
 if(txt2[0]=="/gohome") {
     if(tagAlong=="tho") {
              fixloi("<font color='red'>DucNghia</font> : <b>Không thể thực hiện lệnh này</b>");
 
     }else {
     map('t2',30,30,'t2a')
      fixloi("<font color='red'>DucNghia</font> : <b>Bạn đã về nhà.</b>");
     }
     
 } else {
     fixloi("<b><font color='red'>Hệ thống:</font> không thể chát.</b>");
 }
        
    } else {
    
    if(txt.length <1) {
      if(boxchat==0) {
        chatMsg("<b><font color='red'>DucNghia:</font> Xin hãy viết dài hơn.</b>");
} else {
     chatm("<b><font color='red'>DucNghia:</font> Xin hãy viết dài hơn.</b>");
}  
    } else {

    var data = {
        "id": userID,
          "username": userName,
           "mapid": mapID,
            "server": server,
    
        "txt": txt,
        "time": time
    };
    
    $("#messageBox").val("");
    if(boxchat==0) {
        chatMsg(""+userName+": " + txt);

    ws.send("sendchat:"+userID+"^"+userName+"^"+mapID+"^"+server+"^"+txt+"")
} else {
     chatm(""+userName+": " + txt);

    ws.send("chatmap:"+userID+"^"+userName+"^"+mapID+"^"+server+"^"+txt+"")
    updateChat('^2|'+userID+'|'+userName+'|'+txt+'|DUCNGHIA');
}

}
}
}

    ws.onmessage = function(evt) { 
        
        var dulieu = evt.data.split(":");
        if(dulieu[0] == "ping") {
            time_connect = Date.now()+250000;
            ping =tron((Date.now()-dulieu[1])/1000)+'s';
            
        }
        if(dulieu[0] == "nguoichoi") {
            if(dulieu[1].length <=0) {
                return false;
            }
            var mmo_player = dulieu[1].split("/");
            var send_ws = '';
           for(var i=1;i<mmo_player.length;i++) {
               var nguoichoithat = mmo_player[i].split("^");
               if(getusers(nguoichoithat[0]) === null) {
    nguoichoi.push({id : nguoichoithat[0]});  
   } else {
       getusers(nguoichoithat[0]).hp = nguoichoithat[11];
        getusers(nguoichoithat[0]).mapid = nguoichoithat[2];
    getusers(nguoichoithat[0]).x = nguoichoithat[3];
        getusers(nguoichoithat[0]).y = nguoichoithat[4];
                getusers(nguoichoithat[0]).skin = nguoichoithat[6];

        getusers(nguoichoithat[0]).username = nguoichoithat[1];

   }
               if (nguoichoithat[0]>=1 && nguoichoithat[2] == mapID  && nguoichoithat[0] != userID) {
		send_ws+='^'+nguoichoithat[0]+'|'+nguoichoithat[1]+'|'+nguoichoithat[6]+'|'+nguoichoithat[2]+'|'+nguoichoithat[3]+'|'+nguoichoithat[4]+'|'+nguoichoithat[5]+'|'+nguoichoithat[7]+'|'+nguoichoithat[8]+'|'+nguoichoithat[9]+'|'+nguoichoithat[11]+'|'+nguoichoithat[12]+'|'+nguoichoithat[13]+'';		
			}
           } 
           updateMMOEvents('DUCNGHIA'+send_ws);

        }
        
        if(dulieu[0] == "vatpham") {
            if(dulieu[1].length <=0) {
                return false;
            }
            var mmo_item = dulieu[1].split("/");
             for(var i=1;i<mmo_item.length;i++) {
                 var data = mmo_item[i].split("^");
                 	if(getnpc(data[0]) ==null && mapID == data[1]  && data[0] && shopvatpham(data[4]) !== null) {
                 	     events.push(new gameEvent({ 
            "id": data[0],
            "name": shopvatpham(data[4]).ten,
            "x": data[2],
            "y": data[3],
            "type": "Action Button",
            "style":shopvatpham(data[4]).img+".png",
            "direction": 0,
            "idvp" : data[4],
            "movement": "Still",
            "hp": 0,
            "hpfull": 0,
            "level": shopvatpham(data[4]).level,
            "tancong" : 0,
		 "giap" : 0,
		 "chimang" : 0,
             "time": 0,
              "msg": 0,
            "script": [
                {
                    "line": 1,
                    "function": "item",
                    "arguments": {
                        "@cdata": "80"
                    }
                }
            ],
            "chuanhan": "0",
            "danhan": "0",
            "hoanthanh": "0",
            "quest": 0
        }));   
                 	}
             }

        }
        
        
        if(dulieu[0] == "xoavp") {
           var data = dulieu[1].split("^");
            if(getnpc(data[0]) != null) {
                  xoanpc(data[0]);
            }
        }
        
        if(dulieu[0]=="donenhat") {
           var data = dulieu[1].split("^");
           if(data[2] == userID) {
               if(data[3] !=1) {
                setdrawn('Không phải của bạn',0);
                return false;
               }
               if(shopvatpham(data[0]) !== null) {
              setdrawn(''+shopvatpham(data[0]).ten+'*'+data[1]+'',0); 
       vatpham(data[0],data[1]);
             lichsu('Nhặt '+shopvatpham(data[0]).ten+'*'+data[1]+' từ đất. ');
           ws.send("xoavp:"+data[4]+"");
           }
           }
        }
        
        if(dulieu[0]=="chat") {
            var data = dulieu[1].split("^");
 	updateChat('DUCNGHIA^2|'+data[0]+'|'+data[1]+'|'+data[4]+'|DUCNGHIA');
chatm0({map : data[2] , username : data[1] , noidung : data[4]});
        }
        
        if(dulieu[0]=="sendchat") {
            var data = dulieu[1].split("^");
chatMsg('<b onclick="ttnv('+data[0]+')">S'+data[3]+'.'+data[1]+'</b> : '+data[4]+' ');
 count_chat++;
         	$("#count_chat").html(count_chat);  
        }
        
        if(dulieu[0] =="pvp_moi") {
                       var data = dulieu[1].split("^");
         if(userID >=1) {
     
          if(data[1] == userID && getusers(data[0]) !== null) {
         if(+my.users.level <5) {
             return false;
         }
         giaotiep(' '+getusers(data[0]).username+' muốn mời bạn thách đấu với mức cược  '+data[2]+' xu. ');
         $("#npc_menu").html('<b onclick="pvp_dongy('+data[0]+','+data[2]+')" class="viptxt nutchat">Đồng ý</b>');

     }
     
     
     }
        }
        
        
        if(dulieu[0]=="pvp_ok") {
                        var data = dulieu[1].split("^");
 if(userID >=1) {
    if(data[0] == userID) {
        xu(-data[2]);
        game_co(1);
        my.pk.id = data[1];
        my.pk.cuoc = data[2];
        my.pk.time = date()+300000;
        ketnoi();
        lichsu(''+getusers(data[0]).username+' thách đấu  '+getusers(data[1]).username+' với mức cược '+data[2]+' xu ');
    }
    
    if(data[1] == userID) {
                lichsu(''+getusers(data[0]).username+' thách đấu  '+getusers(data[1]).username+' với mức cược '+data[2]+' xu ');

        xu(-data[2]);
        game_co(2);
        my.pk.id = data[0];
        my.pk.cuoc = data[2];
                my.pk.time = date()+900000;
ketnoi();
    }
     
     
     }          
        }
        
        if(dulieu[0] == "kick") {
        outkick(dulieu[1]);
        }
        
        if(dulieu[0] == "truke") {
                var data = dulieu[1].split("^");
if(mapquai(data[0]) == false) {
        return false;
    }
    if(+mapquai(data[0]).hp <=0) {
        return false;
    }
    if(+mapquai(data[0]).hp > +data[1]) {
            if(getnpc(data[0])) {
		getnpc(data[0]).hp = getnpc(data[0]).hp-data[1];
		 getnpc(data[0]).msghp = '-'+data[1];
	getnpc(data[0]).timehp = date()+500;   
}
    
        mapquai(data[0]).hp = +mapquai(data[0]).hp - +data[1];
        return false;
    }
    
    if(+mapquai(data[0]).hp <= +data[1]) {
        mapquai(data[0]).hp =0;
mapquai(data[0]).time = +time + +mapquai(data[0]).hoisinh;
if(getnpc(data[0]) != null) {
     xoanpc(data[0]);
    }
    }
        }
        
        if(dulieu[0] == "damepvp") {
                            var data = dulieu[1].split("^");
          if(userID >=1) {
     if(data[0] == userID) {
         
         if(+my.chiso.hp > +data[2]) {
         my.chiso.hp = +my.chiso.hp - +data[2];
              setdrawn('-'+data[2]+'');  
              ketnoi();
    } else {
             my.chiso.hp =0;
         ws.send("gietnguoi:"+data[1]+"^"+userID+"");
     
         }
         ketnoi();
     }
     
     
     }  
        }
        
        if(dulieu[0] == "gietnguoi") {
                            var data = dulieu[1].split("^");
        
         if(userID >=1) {
     if(data[0] == userID) {
         ///pvp////
  if(my.users.co ==7) {
      if(my.users.dosat = undefined) {
          my.users.dosat =1;
      } else {
          my.users.dosat = +my.users.dosat+1;
      }
  }
         
         if(my.pk.id >0 && my.pk.id == data[1] && my.pk.time > date()) {
        xu(my.pk.cuoc*1.9);
        
     chat(''+getusers(userID).username+' chiến thắng  '+getusers(my.pk.id).username+' nhận được '+my.pk.cuoc*1.9+' xu  ','TG','0');
        lichsu(''+getusers(userID).username+' chiến thắng  '+getusers(my.pk.id).username+' nhận được '+my.pk.cuoc*1.9+' xu  ');
        my.pk.id = 0;
        my.pk.cuoc = 0; 
        my.users.co =0;
         }
      
          
     }
     if(+my.chiso.hp <=0) {
        my.pk.id = 0;
        my.pk.cuoc = 0;  
        if(my.users.co == 1) {
            my.users.co =0;
        }
     }
     if(data[1] == userID) {
         /// bị giết////
         if(my.users.dosat >=1) {
             my.users.dosat =+my.users.dosat -1;
         }
         
         if(my.users.dosat >=10) {
             lichsu('Điểm đồ sát lớn hơn 10 nên bị mất '+(my.users.xu/100*1)+' xu. , '+(my.users.exp/100*1)+', 5% xp pokemon  ');
             my.users.xu = +my.users.xu - (+my.users.xu/100*1);
             my.users.exp = +my.users.exp - (+my.users.exp/100*1);
              my.users.exp = +my.users.exp - (+my.users.exp/100*1);
           if(+my.users.pokemon >=1) {
               my.chiso.exp = +my.chiso.exp - (+my.chiso.exp/100*1);
           }
             
         }
         return false;
         if(my.kethu === undefined ) {
        my.kethu = [];
    }
    if(my.kethu.length <=0) {
        my.kethu.push({ id : data[0] , name : getusers(data[0]).username , skin : getusers(data[0]).skin , thoigian : ''+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()+' '+new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear()+' ' , tg : Date.now()  });     
    }
       for(i=0;i<my.kethu.length;i++) {
           if(my.kethu[i].uid == data[0] ) {
               my.kethu[i].thoigian = ''+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()+' '+new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear()+' ';
               my.kethu[i].tg = Date.now();
           } else {
               my.kethu.push({ id : data[0] , name : getusers(data[0]).username , skin : getusers(data[0]).skin , thoigian : ''+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()+' '+new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear()+' ' , tg : Date.now()  });     
           }
        
       }
     }
     
    
     
     } 
        
        }
        
       
   if(dulieu[0] == "ngonngu") {
                            var data = dulieu[1].split("^");
          if(userID >=1) {
    
    if(layngonngu(data[0]) !== null) {
        return false;
    }
   	    vietsub.push({vi : data[0] , en : data[1] });
     
     
     }  
        }
        
        if(dulieu[0] == "buff") {
                            var data = dulieu[1].split("^");
          if(userID >=1) {
    
     if(data[1] == "pokemon") {
       if(getnpc(data[0]) !== null) {
          
          for(var k=0;k<getnpc(data[0]).buff.length;k++) {
				if( getnpc(data[0]).buff[k].buff == data[2] ) {
					return false;
				}
			}
  getnpc(data[0]).buff.push({ time : date()+ +data[4] , buff : data[2] , tacdung : data[5] , timetacdung : 0 , load :0 , uid : data[3]  });
       }
       
   } else
   
   if(data[1] == "users") {
    
   
       if(data[0] == userID) {
          
          for(var k=0;k<my.buff.length;k++) {
				if( my.buff[k].buff == data[2] ) {
					return false;
				}
			}
			 

  my.buff.push({ time : date()  + +data[4] , buff : data[2] , tacdung : data[5] , timetacdung : 0 , load :0 , uid : data[3]  });
       } else {
           if(getuser(data[0]) !== null) {
  
  for(var k=0;k<getuser(data[0]).buff.length;k++) {
				if( getuser(data[0]).buff[k].buff == data[2] ) {
					return false;
				}
			}
			 

  getuser(data[0]).buff.push({ time : date()  + +data[4] , buff : data[2] , tacdung : data[5] , timetacdung : 0 , load :0 , uid : data[3]  });         
           
           
       }
       

   }
   }
   
     
     
     }  
        }
        
    if(dulieu[0] == "ban_1") {
                            var data = dulieu[1].split("^");
          if(userID >=1) {
              
              if(data[2] == userID) {
       if(getuser(data[1]) !== null) {
       giaotiep(' '+getuser(data[1]).name+' muốn bán cho bạn vật phẩm '+shopvatpham(data[0]).ten+'*'+data[5]+' với giá '+data[4]+' ruby và '+data[3]+' xu. Bạn có đồng ý không ?  ');
          $("#npc_menu").html('<b onclick="dongymua('+data[0]+','+data[5]+','+data[3]+','+data[4]+','+data[1]+')" class="viptxt nutchat">Đồng ý</b>');
      
       
       }
   }
              
          }
    }
    
    if(dulieu[0] == "ban_2") {
                            var data = dulieu[1].split("^");
          if(userID >=1) {
          
          if(data[1] == userID) {
       if(getuser(data[2]) !== null) {
       
       if(+soluong(data[1]).soluong < data[5]) {
           return false;
       }
ws.send("ban_3:"+dulieu[1]);
       }
   }    
            
              
          }
    }
    
    if(dulieu[0] == "ban_3") {
                            var data = dulieu[1].split("^");
          if(userID >=1) {
      
       if(data[1] == userID) {
       vatpham(data[0],-data[5]);
      xu(data[3]);
      ruby(data[4]);
      giaotiep('Bán thành công. Bạn nhận được '+data[3]+' xu,'+data[4]+' ruby ');
      lichsu('Bán '+shopvatpham(data[0])+'*'+data[5]+'  nhận được : '+data[3]+' xu,'+data[4]+' ruby từ '+data[2]+'  ');
   }
   if(data[2] == userID) {
       vatpham(data[0],data[5]);
      xu(-data[3]);
      ruby(-data[4]);
      giaotiep('Mua thành công, bạn nhận được : '+shopvatpham(data[0]).ten+'*'+data[5]+' ');
            lichsu('Mua '+shopvatpham(data[0])+'*'+data[5]+'   mất : '+data[3]+' xu,'+data[4]+' ruby từ '+data[1]+'  ');

   }    
        
    }
    }
    
     
  
  if(dulieu[0] == "pokemon_1") {
                            var data = dulieu[1].split("^");
          if(userID >=1) {
              
           if(data[2] == userID) {
       if(getuser(data[1]) !== null) {
           var st = json(base64.decode(data[5]));
       giaotiep(' '+getuser(data[1]).name+' muốn bán cho bạn pokemon  với giá '+data[4]+' ruby và '+data[3]+' xu. <br> Chỉ số PokeMon : <br> +  '+st.chiso.ten+'  ');
          $("#npc_menu").html('<b onclick="dongymua2('+data[0]+','+data[3]+','+data[4]+','+data[1]+')" class="viptxt nutchat">Đồng ý</b>');
      
       
       }
   }   
              
          }
    }      
        
        
        if(dulieu[0] == "pokemon_2") {
                            var data = dulieu[1].split("^");
          if(userID >=1) {
       
       if(data[1] == userID) {
       if(getuser(data[2]) !== null) {
       
       if(mypokemon(data[0]) === null) {
           
           return false;
       }
  	ws.send("pokemon_3:"+data[0]+"^"+data[1]+"^"+data[2]+"^"+data[3]+"^"+data[4]+"^"+base64.encode(JSON.stringify(mypokemon(data[0]))) +"");	
 
       }
   }       
           
              
          }
    } 
    
    if(dulieu[0] == "pokemon_3") {
                            var data = dulieu[1].split("^");
          if(userID >=1) {
         if(data[1] == userID) {
      xu(data[3]);
      ruby(data[4]);
      xoapokemon(data[0]);
      giaotiep('Bán thành công. Bạn nhận được '+data[3]+' xu,'+data[4]+' ruby ');
   }
   if(data[2] == userID) {
      xu(-data[3]);
      ruby(-data[4]);

       my.pokemon.push(json(base64.decode(data[5])));
      giaotiep('Mua thành công.Bạn nhận được pokemon. ');
   }
           
              
          }
    } 
    
    if(dulieu[0] == "chatthegioi") {
                            var data = dulieu[1].split("^");
          if(userID >=1) {
        if(data[1] ==0) {
     dabase_chat.push( { type : data[2] , msg : data[0]   });
     } else if(data[1] == userID) {
              dabase_chat.push( { type : data[2] , msg : data[0]   });

     } 
    } 
    }
      
    if(dulieu[0] == "kinang") {
     var data2 = dulieu[1].split("^");
     var data = dulieu[1].split("^");
     if(userID >=1 && data2[2] == +mapID) {
         var hu_my = kinang(data[6]);

         if(data[6] >=28 && data[6] <=32) {
             var xxx =0;
             var yyy =0;
         } else {
              var xxx =20;
             var yyy =10;
         }
     if(data[3]=="pokemon") {
          var rtoo = getnpc(data[0]);
          if(rtoo !==null) {
          var cx = (rtoo.X)-xxx;
         var cy = (rtoo.Y)-yyy;
          } else {
               var cx = data[4];
         var cy = data[5];
          }
     } else {
         if(+data[0] == +userID) {
             cx = userEvent.X - 20;
             cy = userEvent.Y -20; } else {
                 if(getuser(data[0]) !== null) {
         var rtoo = getuser(data[0]);
         var cx = (rtoo.drawPosX)-xxx;
         var cy = (rtoo.drawPosY)-yyy+10;
                 } else {
          var cx = 0-xxx;
         var cy = 0-yyy+10;           
                 }
             }
     }
     
     if(hu_my.pk=="ok") {
      if(getnpc(data[7]) !== null) {
         var   mxx = getnpc(data[7]).X ;
          var    myy = getnpc(data[7]).Y;   
      }    else
     if(+data[2] == +userID) {
          var   mxx = userEvent.X ;
          var    myy = userEvent.Y; 
     } 
          else {
              if(getuser(data[2]) !== null) {
         var mxx = getuser(data[2]).drawPosX;
         var myy = getuser(data[2]).drawPosY;
              } else {
            var mxx = 0;
         var myy = 0;      
              }
             } 
        
             
     } else {
         var mxx = 0;
         var myy = 0; 
     }
    
     if(+data[2] == +mapID) {
     players.info.push({
		ten : hu_my.img,
		rong : hu_my.rong,
		cao : hu_my.cao,
		sohinh : hu_my.sohinh,
		load :0,
		myx : mxx,
		myy : myy,
		type : data[3],
		id : data[0],
		pk : hu_my.pk,
		max : hu_my.sohinh,
		thoigian : hu_my.sohinh,
		tinh : (hu_my.rong/hu_my.sohinh),
		canvas_x : cx,
		canvas_y : cy
			});
     }
     }
    }  
        
        
    };






