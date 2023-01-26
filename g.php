<!DOCTYPE html>
  <meta charset="utf-8" />
  <title>WebSocket Test</title>
  <script language="javascript" type="text/javascript">
ws = new WebSocket("ws://localhost:8080/");
    ws.onmessage = function(evt) { 
        
        var dulieu = evt.data.split(":");
        
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
  
           }
           }
        }
        
        if(dulieu[0]=="chat") {
            var data = dulieu[1].split("^");
 	updateChat('DUCNGHIA^2|'+data[0]+'|'+data[1]+'|'+data[4]+'|DUCNGHIA');
chatm0({map : data[2] , username = data[1] , noidung : data[4]});
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
     chat(''+getusers(data[0]).username+' thách đấu  '+getusers(data[1]).username+' với mức cược '+data[2]+' xu  ','TG','0');
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
         ws.send("gietnguoi:"+id+"^"+userID+"");
     
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
       giaotiep(' '+getuser(data[1]).name+' muốn bán cho bạn pokemon  với giá '+data[4]+' ruby và '+data[3]+' xu. <br> Chỉ số PokeMon : <br> + '+data[5].chiso.ten+'  ');
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
  	ws.send("pokemon_3:"+data[0]+"^"+data[1]+"^"+data[2]+"^"+data[3]+"^"+data[4]+"^"+mypokemon(data[0]) +"");	
 
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
       my.pokemon.push(data[5]);
      giaotiep('Mua thành công.Bạn nhận được pokemon. ');
   }
           
              
          }
    } 
    
    if(dulieu[0] == "chatthegioi") {
                            var data = dulieu[1].split("^");
          if(userID >=1) {
        if(data[1] ==0) {
     dabase_chat.push( { type : data[2] , msg : data[1]   });
     } else if(data[1] == userID) {
              dabase_chat.push( { type : data[2] , msg : data[1]   });

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
		ten : hu_my.ten,
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


</script>
  