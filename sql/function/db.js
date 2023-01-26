/*PokeMon Adventure
Author: Duc Nghia
Date of writing: January 19, 2020
contact :
Email: Trandoducnghia@gmail.com
facebook: https://fb.com/ducnghiast
Copyright by DucNghia.
*/

/*
Ta có bài toán : cho kĩ năng thời gian hồi 100000 milis
tính công thức ta có :
40*thời gian hồi giảm / thời gian hồi gốc.

bài Toán về nhóm : 

*/
///https://pokemondb.net/item/all
var loadquai_json = [];
function checkloadquai(id) {
    for(var q=0;q<loadquai_json.length;q++) {
        if(loadquai_json[q] == id) {
            return loadquai_json[q];
        }
    }
    return null;
}
var chat_1 = '';
var chat_2 = '';
var chat_3 = '';
var mmo = [];
var loadimg = 0;
var data_pokemon = [];
var time_connect = 0;
var button = {};
var my = {
    users : '',
    chiso : '',
    attack : {vitri : 0},
    vatpham : [{ab : '2'}],
    danhlan : [], 
    pk : {},
    kn : [{ab : '2'}],
        click : {id : 0 , type : '' , buoc : 9},
     setkinang : [{ab : '2'}],
     pokemon : [],
    
};
var game = {
    gym : {id : 0 , time : 0, soluong : 0},
};
var data_co = [{ id : 1 , cy : 0   } , { id : 2 , cy : 36   } , { id : 3 , cy : 72   } , { id : 4 , cy : 108   } , { id : 5 , cy : 144   } , { id : 6 , cy : 180   } , { id : 7 , cy : 216   }];
var data_nhiemvu = [];
var nguoichoi = [{admin : 'ducnghia'}];
function save() {
  //   
  my.save.map = mapCode;
  my.save.x = userEvent.mapPosition.X;
  my.save.y = userEvent.mapPosition.Y;
  giaotiep(t('Lưu tòa độ thành công. Khi chết hồi sinh sẽ về đây.'));

}
function velang() {
map( my.save.map,+my.save.x,+my.save.y,my.save.map); 
c_giaotiep();
if(+my.users.pokemon >=1) {
    my.chiso.hp = my.chiso.hpfull;
    my.chiso.mp = my.chiso.mpfull;
}
}
function pokemon(id) {
  for(var k=0;k<data_pokemon.length;k++) {
				if( data_pokemon[k].id == id ) {
					return data_pokemon[k];
				}
			}
			return null;       
}
function imgpkm(id) {
  for(var k=0;k<data_pokemon.length;k++) {
				if( data_pokemon[k].img == id ) {
					return data_pokemon[k];
				}
			}
			return null;       
}
function lichsu(text) {
 
           
           my.lichsu.push({ id : rand(10000000000,999999999999) , time : date()+604800000 , thoigian : ''+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()+' '+new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear()+' ' , noidung : text , xoa : date()+500000  });
     
}
function thaopokemon(id) {
    if(mypokemon(id) === null) {
        giaotiep('Bạn không có pokemon này.');
        return false;
    }
    c_canvas();
    c_box();
    my.users.skin = my.users.thoitrang;
    doitrang(my.users.thoitrang);
  my.users.pokemon = 0;
  if(my.setkinang.length >=1) {
               my.setkinang.splice(0);

   }
   my.chiso = {hp:0};
}
function doipokemon(id) {
    if(mypokemon(id) === null) {
        giaotiep(t('Bạn không có pokemon này.'));
        return false;
    }
    c_canvas();
    c_box();
    
    doitrang(mypokemon(id).chiso.img);
  my.users.pokemon = id;
    my.users.skin = mypokemon(id).chiso.img;

    my.chiso = mypokemon(id).chiso;
   
   if(my.setkinang.length >=1) {
               my.setkinang.splice(0);

   }

for(var k2=0;k2<mypokemon(id).setkinang.length;k2++) {
		my.setkinang.push(
		    {
		   "vitri" : mypokemon(id).setkinang[k2].vitri,
		   "id" : mypokemon(id).setkinang[k2].id,
		 }
);		
}			
			
    ketnoi();
}

function xoapokemon(id) {
     for(var k=0;k<my.pokemon.length;k++) {
				if( my.pokemon[k].id == id ) {
				my.pokemon.splice(k, 1);

				}
			}
			return null;       
}

function mypokemon(id) {
     for(var k=0;k<my.pokemon.length;k++) {
				if( my.pokemon[k].id == id ) {
					return my.pokemon[k];
				}
			}
			return null;       
}

function checkskill(id) {
   for(var k=0;k<mypokemon(my.users.pokemon).kinang.length;k++) {
				if( mypokemon(my.users.pokemon).kinang[k].id == id ) {
					return mypokemon(my.users.pokemon).kinang[k];
				}
			}
			return null;        
}

function addkn(idkn) {
    if(mypokemon(my.users.pokemon) === null) {
        giaotiep(t('Hãy biến hình thành pokemon trước.'));
        return false;
    } 
    if(kinang(idkn) === null) {
        giaotiep(t('Không tồn tại kĩ năng này.'));
        return false;
    }
   mypokemon(my.users.pokemon).kinang.push(
       { 
           id : kinang(idkn).id,
           level : 0,
           exp : 0,
           expmax : 0
           
       }
       
       );
}

function addpkm(id) {
    if(pokemon(id) === null) {
        giaotiep(t('PokeMon Không tồn tại'));
    } else {
        var cg = rand(1000000,99999999999999999);
       my.pokemon.push(
          {
          "id" : cg,
          "chiso" :  {
            "img": pokemon(id).img,
                "id": pokemon(id).id,
                "level": 0,
                "exp": 0,
                "gym" : 0,
                "expmax": 0,
                "ten":pokemon(id).ten,
                "hp": pokemon(id).hp,
                "hpfull": pokemon(id).hp,
                "hpgoc" : pokemon(id).hp,
                "giapgoc" : pokemon(id).giap,
                "mpgoc": pokemon(id).mp,
                "xuyengiapgoc": pokemon(id).xuyengiap,
                "tocdogoc": pokemon(id).tocdo,
                "phepgoc": pokemon(id).phep,
                "chimanggoc": pokemon(id).chimang,
                "vatligoc": pokemon(id).vatli,
                "giap": pokemon(id).giap,
                "mp": pokemon(id).mp,
                "mpfull": pokemon(id).mp,
                "xuyengiap": pokemon(id).xuyengiap,
                "tocdo": pokemon(id).tocdo,
                "phep": pokemon(id).phep,
                "chimang": pokemon(id).chimang,
                "vatli": pokemon(id).vatli,
                "kinang" : 0,
                "kinanggoc" :0,
                 "tiemnang": 0,
                 "tiemnanggoc": 0,
                 "sucmanh": 0,
                 "tritue": 0,
                 "theluc": 0,
                 "kheoleo": 0,
                 "thanphap": 0
           
                
          },
         "kinang" : [],
         "setkinang" : [],
          }
          );
          
          mypokemon(cg).kinang.push(
        {
            id: 33,
            level: 0,
            exp: 0,
            expmax: 0
        });
          
          return cg;
    }
}
function time(thoigian) {
    return (thoigian-date())/1000;
}
function chat(msg,type,id) {
ws.send("chatthegioi:"+msg+"^"+id+"^"+type+"");

}
function nhiemvu(idnv) {
 for(var k=0;k<data_nhiemvu.length;k++) {
				if( data_nhiemvu[k].nhiemvu == idnv ) {
				    data_nhiemvu[k].ducnghia.ten = t(data_nhiemvu[k].ducnghia.ten);
     data_nhiemvu[k].ducnghia.text = t(data_nhiemvu[k].ducnghia.text);
      data_nhiemvu[k].ducnghia.text2 = t(data_nhiemvu[k].ducnghia.text2);
					return data_nhiemvu[k];
				}
			}
			return null;     
}
function mapquai(id) {
    for(var i=0;i<quai.length;i++) {
        if(+quai[i].hp <=0 && +quai[i].time <= time) {
            quai[i].hp = +quai[i].hpfull;
        }
        if(quai[i].id == id) {
            return quai[i];
        }
       
    }
     return false;
}

function quaist(id,dame) {
    if(mapquai(id) == false) {
        return false;
    }
    if(+mapquai(id).hp <=0) {
        return false;
    }
    if(+mapquai(id).hp > dame) {
    var kdfjgk45 = dame/mapquai(id).hpfull*100;
         var klgltyrty =kdfjgk45*mapquai(id).thuong.split("^")[1];
         if(klgltyrty > mapquai(id).thuong.split("^")[1]) {
             klgltyrty = mapquai(id).thuong.split("^")[1];
         }
         var ieoteroijdfg = rand(klgltyrty,klgltyrty*1.5);
          my.users.exp = +my.users.exp + +ieoteroijdfg;
    my.chiso.exp = +my.chiso.exp + +ieoteroijdfg;
         setdrawn('+'+ieoteroijdfg+'xp');       
        mapquai(id).hp = +mapquai(id).hp - +dame;
        return false;
    }
    
    if(+mapquai(id).hp <= dame) {
      if(nhiemvu(my.users.nhiemvu.id) !== null) {
    if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "pokemon" && nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon == mapquai(id).nhom) {
     my.users.nhiemvu.song = +my.users.nhiemvu.song +1;
    }
    
 if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "item" && nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon == mapquai(id).nhom) {
        if(rand(1,100) <=nhiemvu(my.users.nhiemvu.id).ducnghia.item.split(":")[1]) {
            mapvpo(nhiemvu(my.users.nhiemvu.id).ducnghia.item.split(":")[0],1);
        }
    } 
    
}



if(mapquai(id).thuong.split("^")[2] != undefined) {
    for (var i=0; i<mapquai(id).thuong.split("^")[2].split(",").length; i++) {
 if(mapquai(id).thuong.split("^")[2].split(",")[i].split(":")[1] >= rand(1,100)) {
     if(shopvatpham(mapquai(id).thuong.split("^")[2].split(",")[i].split(":")[0]) !== null) {
   mapvpo(mapquai(id).thuong.split("^")[2].split(",")[i].split(":")[0],1);
   
 
     }
 }
	 }   
    }

if(mapquai(id).thuong.split("^")[0].split(":")[0] >=0 && mapquai(id).thuong.split("^")[0].split(":")[0] != undefined) {
    
    if(rand(1,100) <= mapquai(id).thuong.split("^")[0].split(":")[1]) {
         	var ranexp = rand(mapquai(id).thuong.split("^")[1],mapquai(id).thuong.split("^")[1]*1.5);
         	var ranxu = rand(mapquai(id).thuong.split("^")[0].split(":")[0],mapquai(id).thuong.split("^")[0].split(":")[0]*1.5);
  my.users.exp = +my.users.exp + +ranexp;
    my.chiso.exp = +my.chiso.exp + +ranexp;

 my.users.xu = +my.users.xu + + ranxu ;
 
           	setdrawn('+'+ranxu+' xu','+'+tron(ranexp)+'xp');
           
    } else {
                 	var ranexp = rand(mapquai(id).thuong.split("^")[1],mapquai(id).thuong.split("^")[1]*1.5);
    my.chiso.exp = +my.chiso.exp + +ranexp;

     setdrawn('+'+ranexp+'xp');   
      my.users.exp = +my.users.exp+ +ranexp;

    }
    
}
mapquai(id).hp =0;
mapquai(id).time = +time + +mapquai(id).hoisinh;
if(getnpc(id) != null) {
     xoanpc(id);
    }
        return false;
    }
    
    
}
function gym(id) {
    for(i=0;i<data_gym.length;i++) {
        if(+id == +data_gym[i].id) {
            return data_gym[i];
        }
    }
    return false;
}
function ketnoi() {
    
    
    ///nhiệm vụ giao tiếp ////
    if(userID >=1) {
        ///check battel gym///
        if(+game.gym.id >=1) {
            if(game.gym.time <= Date.now()) {
               game.gym.id = 0;
              dabase_chat.push({ type : 'ADMIN' , msg : t('Hết thời gian đấu gym, bạn thua.')   });
      
            }
        game.gym.code =0;
        for(var i0=0;i0<quai.length;i0++) {
        if(quai[i0].gym && +quai[i0].hp >=1) {
           game.gym.code=1;
        }
    }
     if(game.gym.code == 0 ) {
         if(nhiemvu(my.users.nhiemvu.id) !== null) {
    if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "gym" && nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon == game.gym.id) {
     my.users.nhiemvu.song = +my.users.nhiemvu.song +1;
    }
}
     dabase_chat.push({ type : 'ADMIN' , msg : t('Xin chúc mừng bạn đã chiến thắng.')   });
    game.gym.id =0;
    c_giaotiep();
    
    for(var k=0;k<quai.length;k++) {
				if(quai[k].gym) {
					quai.splice(k, 1);
				}
			}    
     } 
        }
        ///done gym///
        ////add quái toooo map////
        for (var i=0; i<quai.length; i++) {
            if(+quai[i].hp <=0 && +quai[i].time <= time) {
            quai[i].hp = +quai[i].hpfull;
        }
        
		var npcid = quai[i];
		if(quai[i].gym && game.gym.id <=0) {
		    npcid = quai[i].id;
					quai.splice(i, 1);
				}
		if(getnpc(npcid.id) ==null && mapID == npcid.map  && npcid.id && +npcid.hp >=1) {
		    if(userID==1) {
		        var nameer = '['+npcid.nhom+']'+t(npcid.name)+'';
		    } else {
		        var nameer = t(npcid.name);
		    }
		      events.push(new gameEvent({ 
            "id": npcid.id,
            "name": nameer,
            "x": npcid.x,
            "y": npcid.y,
            "type": "Action Button",
            "style": npcid.img,
            "bosss": 1,
             "bat": 1,

            "direction": 0,
            "movement": "Slow Random",
            "hp": npcid.hp,
            "hpfull": npcid.hpfull,
            "level": npcid.level,
            "tancong" : npcid.tancong,
		 "giap" : npcid.giap,
		 "chimang" : npcid.chimang,
             "time": 0,
              "msg": 0,
            "script": [
                {
                    "line": 1,
                    "function": "attack",
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
        ///////////////////////////
        if(nhiemvu(my.users.nhiemvu.id) !== null) {
    if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "item") {
        if(soluong(nhiemvu(my.users.nhiemvu.id).ducnghia.item.split(":")[0])) {
               my.users.nhiemvu.song = soluong(nhiemvu(my.users.nhiemvu.id).ducnghia.item.split(":")[0]).soluong;
  
        } else {
                my.users.nhiemvu.song = 0;
           
        }
    }
    
    if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "tangqua") {
        if(soluong(nhiemvu(my.users.nhiemvu.id).ducnghia.item.split(":")[0])) {
               my.users.nhiemvu.song = soluong(nhiemvu(my.users.nhiemvu.id).ducnghia.item.split(":")[0]).soluong;
  
        } else {
                my.users.nhiemvu.song = 0;
           
        }
    }
}
       if(nhiemvu(my.users.nhiemvu.id) !== null) {
    if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "level") {
     my.users.nhiemvu.song = +my.users.level;
    }
}
       if(nhiemvu(my.users.nhiemvu.id) !== null) {
    if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "map" && nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon == mapID) {
     my.users.nhiemvu.song = +my.users.nhiemvu.song +1;
    }
}
       
       if(+my.users.xu > 2000000000) {
           my.users.xu = 2000000000;
       }
       if(my.users.free === undefined) {
           my.users.free=1;
           vatpham(12,1);
           game_doiten();
       }
       if(my.users.freeat <= date() || my.users.freeat === undefined) {
           my.users.freeat = date() + 86400000;
          if(+my.users.autotime > date()) {
               my.users.autotime = +my.users.autotime+ 3600000*4;
           } else {
           my.users.autotime =+date() + 3600000*4;    }
           my.users.tauto = 0;
           giaotiep('Bạn nhận được 4 tiếng tự động luyện tập ! Bạn sẽ nhận được sau 23h59 phút nữa.');
       }
       
       if(caidat.block ===0 && userID !=1) {
           document.addEventListener('contextmenu', event => event.preventDefault());
caidat.block=1;
       } 
        
        if(+time_connect+50000 < Date.now()) {
            sql();
          giaotiep('Bạn bị ngắt kết nối tới máy chủ,Tự động đăng nhập lại sau 3s.');
         setTimeout(function() {
              window.location="/play.php";

    }, 3000);         
        }
        if(+my.users.pokemon >=1) {
            if(+my.chiso.hp <=0) {
                my.chiso.hp=0;
            }
        }
       
            
            
    if(nhiemvu(my.users.nhiemvu.id) !== null) {
        if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "giaotiep" && my.users.nhiemvu.code!=1) {
            my.users.nhiemvu.code =1;
        my.users.nhiemvu.tennpc =nhiemvu(my.users.nhiemvu.id).npcname;

            my.users.nhiemvu.npc =nhiemvu(my.users.nhiemvu.id).ducnghia.npc;
            my.users.nhiemvu.ten =nhiemvu(my.users.nhiemvu.id).ducnghia.ten;
            my.users.nhiemvu.text =nhiemvu(my.users.nhiemvu.id).ducnghia.text;
            my.users.nhiemvu.song =0;
            my.users.nhiemvu.can =0;
        }
        if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "tangqua" && my.users.nhiemvu.code!=1) {
            my.users.nhiemvu.code =1;
        my.users.nhiemvu.tennpc =nhiemvu(my.users.nhiemvu.id).npcname;

            my.users.nhiemvu.npc =nhiemvu(my.users.nhiemvu.id).ducnghia.npc;
            my.users.nhiemvu.ten =nhiemvu(my.users.nhiemvu.id).ducnghia.ten;
            my.users.nhiemvu.text =nhiemvu(my.users.nhiemvu.id).ducnghia.text;
            my.users.nhiemvu.song =0;
            my.users.nhiemvu.can =nhiemvu(my.users.nhiemvu.id).ducnghia.can;
        }
    }
    }
    ///song
    
    if(data_nhiemvu.length <=0) {
      taidulieu();   
    }
    
    if(data_pokemon.length <=0) {
      taidulieu2();   
    }
    	my.click.buoc++;
    	if(my.click.buoc>=6) {
    	    my.click.buoc =0;
    	    my.click.id=0;
    	     if(my.danhlan.length) {
               my.danhlan.splice(0);
	 }  
    	}
    	
  timkiem(0);
    chaybo = chaybo+1;
if(userID >=0 && my.users.skin ) {
    if(my.users.nhiemvu.id === undefined) {
           my.users.nhiemvu.id = 1;
       }
		ws.send("ketnoi:0^"+userID+"^" + mapID +"^"  + userEvent.mapPosition.X +"^"  + userEvent.mapPosition.Y +"^"  + userEvent.direction +"^"+userName+"^"+my.users.skin+"^"+setexp+"^"+setxu+"^"+camxuc+"^"+server+"^"+my.chiso.hp+"^"+my.users.co+"^0");

}
}



function co(id) {
    	for(var k=0;k<data_co.length;k++) {
				if( data_co[k].id == id ) {
					return data_co[k].cy;
				}
			}
			return null;  
}

function dlkgdkfgdfg(id) {
    	for(var k=0;k<my.danhlan.length;k++) {
				if( my.danhlan[k].id == id ) {
					return my.danhlan[k].id;
				}
			}
			return null;  
}

function reokfsd(id) {
    	for(var k=0;k<my.auto.length;k++) {
    	    
				if(my.auto[k].id ==id) {
				    
					return my.auto[k];
				}
				if(getnpc(my.auto[k].id) === null || +getnpc(my.auto[k].id).hp <=0 ) {
				       my.auto.splice(k, 1); 
				    }
			}
			return null;  
}
function timkiem(type) {
    if(type <=0) {
    
 if(userID >=1) {
      if(my.nhatvatpham.length) {
               my.nhatvatpham.splice(0);
	 }
 }
    
     for(var i=0;i< events.length;i++) {
			
				if( userEvent.X+60 > events[i].X && userEvent.X < events[i].X +60 ) {
					if( userEvent.Y+60 > events[i].Y && userEvent.Y < events[i].Y +60 ) {
						my.click.id = events[i].id;
						my.click.type = 'pokemon';
						my.click.buoc = 0;
						if(getnpc(events[i].id) !== null) {
						    if(+getnpc(events[i].id).idvp >=1) {
						      my.nhatvatpham.push({id : events[i].id});    
						    }
						}
		 
           
           
	    	
						
					}
				}
			} 
			
			
			
for(var ixxx=0;ixxx< mmoUsers.length;ixxx++) {
				var user = mmoUsers[ixxx];
				if( userEvent.mapPosition.X+6 > user.x && userEvent.mapPosition.X < user.x +6 ) {
					if( userEvent.mapPosition.Y+6 > user.y && userEvent.mapPosition.Y < user.y +6 ) {
				my.click.id = user.id;
						my.click.type = 'users';
						my.click.buoc = 0;		
					}
				}
			}		
    
    }
    
     if(type <=1) {
    
     for(var i=0;i< events.length;i++) {
			
				if( userEvent.X+rand(40,70) > events[i].X && userEvent.X < events[i].X +rand(40,70) ) {
					if( userEvent.Y+rand(40,70) > events[i].Y && userEvent.Y < events[i].Y +rand(40,70) ) {
						my.click.id = events[i].id;
						my.click.type = 'pokemon';
						my.click.buoc = 0;
					}
				}
			}   
    
    }
    
  
}



function noichuyen(scriptData) {
    if(getnpc(scriptData)) {
        var csmmdfsdf='';
giaotiep(t(getnpc(scriptData).giaotiep));

	 
	 if(nhiemvu(my.users.nhiemvu.id)) {
	     
		if(my.users.nhiemvu.code !=1 && +nhiemvu(my.users.nhiemvu.id).ducnghia.npc == scriptData) {
  csmmdfsdf+= '<b onclick="game_docnv()" class="viptxt nutchat">Nv.'+nhiemvu(my.users.nhiemvu.id).ducnghia.ten+'</b>';

					}

	
					
	if( my.users.nhiemvu.code !=0 && +nhiemvu(my.users.nhiemvu.id).ducnghia.npc == scriptData && my.users.nhiemvu.song >= my.users.nhiemvu.can ) {
  csmmdfsdf+= '<b onclick="game_tranv()" class="viptxt nutchat">Nv.'+nhiemvu(my.users.nhiemvu.id).ducnghia.ten+'</b>';
					}						
				}	
	 
	 for (var i=0; i<getnpc(scriptData).button.length; i++) {
 
 csmmdfsdf+= '<b onclick="'+getnpc(scriptData).button[i].onclick+'" class="viptxt nutchat"> '+(userID<=10 ? '['+getnpc(scriptData).button[i].id+']' : '')+' '+t(getnpc(scriptData).button[i].name)+'</b>';
	 }
					$("#npc_menu").html(csmmdfsdf);
}
}

// register the handler 
//document.addEventListener('keyup', doc_keyUp, false);


function getusers(id) {
    	for(var k=0;k<nguoichoi.length;k++) {
				if( nguoichoi[k].id == id ) {
					return nguoichoi[k];
				}
			}
			return null;  
}

function updatekinang(vitri) {
    	for(var k=0;k<my.setkinang.length;k++) {
				if( my.setkinang[k].vitri == vitri ) {
					return my.setkinang[k];
				}
			}
			return null;  
}
function xu(mount) {
    my.users.xu = +my.users.xu + mount;
    return my.users.xu;
}
function xutru(mount) {
    my.users.xu = +my.users.xu - mount;
    return my.users.xu;
}
function ruby(mount) {
    my.users.ruby = +my.users.ruby + mount;
    return my.users.ruby;
}
function rubytru(mount) {
    my.users.ruby = +my.users.ruby - mount;
    return my.users.ruby;
}
function imgskill(id) {
    
    var kdfkgkg = kinang(id);
    
    return kdfkgkg;
}
function ruongtrangbi(id) {
  	for(var k=0;k<my.trangbi.length;k++) {
  	     my.trangbi[k].chiso.ten = shoptrangbi(my.trangbi[k].chiso.id).ten;
				if(my.trangbi[k].id === id ) {
				    
				   ///new item////
				
				   ////done////
				    
if(my.trangbi[k].chiso.hpgoc ==undefined) {
    my.trangbi[k].chiso.hpgoc=my.trangbi[k].chiso.hp;
}
if(my.trangbi[k].chiso.phepgoc ==undefined) {
    my.trangbi[k].chiso.phepgoc=+my.trangbi[k].chiso.phep;
}
if(my.trangbi[k].chiso.vatligoc ==undefined) {
    my.trangbi[k].chiso.vatligoc=+my.trangbi[k].chiso.vatli;
}
if(my.trangbi[k].chiso.xuyengiapgoc ==undefined) {
    my.trangbi[k].chiso.xuyengiapgoc=+my.trangbi[k].chiso.xuyengiap;
}
if(my.trangbi[k].chiso.mpgoc ==undefined) {
    my.trangbi[k].chiso.mpgoc=+my.trangbi[k].chiso.mp;
}
if(my.trangbi[k].chiso.giapgoc ==undefined) {
    my.trangbi[k].chiso.giapgoc=+my.trangbi[k].chiso.giap;
}
if(my.trangbi[k].chiso.tocdogoc ==undefined) {
    my.trangbi[k].chiso.tocdogoc=+my.trangbi[k].chiso.tocdo;
}
if(my.trangbi[k].chiso.chimanggoc ==undefined) {
    my.trangbi[k].chiso.chimanggoc=+my.trangbi[k].chiso.chimang;
}
if(+my.trangbi[k].chiso.chimang >=1) {
		 my.trangbi[k].chiso.chimang = +my.trangbi[k].chiso.chimanggoc* +my.trangbi[k].nangcap + +my.trangbi[k].tile/10;
}
if(+my.trangbi[k].chiso.xuyengiap >=1) {
		 my.trangbi[k].chiso.xuyengiap = +my.trangbi[k].chiso.xuyengiapgoc* +my.trangbi[k].nangcap + +my.trangbi[k].tile/10;
}
if(+my.trangbi[k].chiso.hp >=1) {
		 my.trangbi[k].chiso.hp = +my.trangbi[k].chiso.hpgoc + +my.trangbi[k].chiso.hpgoc/100*+my.trangbi[k].tile + +my.trangbi[k].nangcap *+my.trangbi[k].tile;
}
if(+my.trangbi[k].chiso.phep >=1) {
		 my.trangbi[k].chiso.phep = +my.trangbi[k].chiso.phepgoc + +my.trangbi[k].chiso.phepgoc/100*+my.trangbi[k].tile + +my.trangbi[k].nangcap *+my.trangbi[k].tile;
}
if(+my.trangbi[k].chiso.vatli >=1) {
		 my.trangbi[k].chiso.vatli = +my.trangbi[k].chiso.vatligoc + +my.trangbi[k].chiso.vatligoc/100*+my.trangbi[k].tile + +my.trangbi[k].nangcap *+my.trangbi[k].tile;
}

if(+my.trangbi[k].chiso.mp >=1) {
		 my.trangbi[k].chiso.mp = +my.trangbi[k].chiso.mpgoc + +my.trangbi[k].chiso.mpgoc/100*+my.trangbi[k].tile + +my.trangbi[k].nangcap *+my.trangbi[k].tile;
}
if(+my.trangbi[k].chiso.giap >=1) {

		 my.trangbi[k].chiso.giap = +my.trangbi[k].chiso.giapgoc + +my.trangbi[k].chiso.giapgoc/100*+my.trangbi[k].tile + +my.trangbi[k].nangcap *+my.trangbi[k].tile;
}

if(+my.trangbi[k].chiso.tocdo >=1) {

		 my.trangbi[k].chiso.tocdo = +my.trangbi[k].chiso.tocdogoc + +my.trangbi[k].chiso.tocdogoc/100*+my.trangbi[k].tile + +my.trangbi[k].nangcap *+my.trangbi[k].tile;
}
				    
				    
					return my.trangbi[k];
				}
			}
			return null;  
}
function ruongthoitrang(ten) {
  	for(var k=0;k<my.thoitrang.length;k++) {
				if( my.thoitrang[k].ten == ten ) {
					return shopthoitrang(ten);
				}
			}
			return null;  
}
function shopthoitrang(id) {
  	for(var k=0;k<data_shopskin.length;k++) {
				if( data_shopskin[k].ten == id ) {
					return data_shopskin[k];
				}
			}
			return null;  
}
function shoptrangbi(id) {
  	for(var k=0;k<data_trangbi.length;k++) {
  	    data_trangbi[k].ten = t(data_trangbi[k].ten);
				if( data_trangbi[k].id == id ) {
					return data_trangbi[k];
				}
			}
			return null;  
}
function shopvatpham(id) {
  	for(var k=0;k<data_shopvatpham.length;k++) {
  	   
				if( data_shopvatpham[k].id == id ) {
				    data_shopvatpham[k].thongtin = t(data_shopvatpham[k].thongtin);
			   data_shopvatpham[k].ten = t(data_shopvatpham[k].ten);
					return data_shopvatpham[k];
				}
			}
			return null;  
}
function soluong(id) {
    	for(var k=0;k<my.vatpham.length;k++) {
    	      if(my.vatpham[k].soluong <=0) {
    	       my.vatpham.splice(k, 1);
                  }
				if( my.vatpham[k].id == id ) {
					return my.vatpham[k];
				}
			}
			return null;
}

function vatpham(idvp,soluongz) {
    for(var k=0;k<my.vatpham.length;k++) {
    	      if(my.vatpham[k].soluong <=0) {
    	       my.vatpham.splice(k, 1);
                  }
			}
    if(+soluongz >=1 && soluong(idvp) === null) {
        if(+my.vatpham.length >= +my.khodo.ruong){
            setdrawn(t('Hành trang đầy'),t('Đầy túi'));
            mapvpo(idvp,soluongz);
           lichsu('Đầy hành trang rơi vật phẩm '+shopvatpham(idvp).ten+', số lượng '+soluongz+' '); 
            ketnoi();
            return false;
        }
    }
    if(soluong(idvp) === null ) {
       my.vatpham.push({id : +idvp , soluong : +soluongz});   
    } else {
        soluong(idvp).soluong =soluong(+idvp).soluong + +soluongz;
    
    }
}

function ruongdo(id) {
    for(var i=0;i<my.ruong.length;i++) {
        if(my.ruong[i].soluong <=0) {
    	       my.ruong.splice(i, 1);
                  }
        if(my.ruong[i].id == id) {
            return my.ruong[i];
        }
        
    }
    return null;
}

function catvao(id,soluongz) {
    if(soluong(id) === null) {
        return false;
    }
    if(soluong(id).soluong < soluongz) {
        giaotiep(t('Vui lòng nhập số lượng hợp lệ.'));
        return false;
    }
    if(soluongz <=0) {
        giaotiep(t('Vui lòng nhập số lượng'));
        return false;
    }
    
    if(ruongdo(id) === null && my.khodo.kho <=  my.ruong.length ) {
        giaotiep(t('Kho đồ đã quá đầy rồi'));
        return false;
    }
    if(ruongdo(id) === null) {
        my.ruong.push({ id : id , soluong : soluongz   });
    } else {
        ruongdo(id).soluong = +ruongdo(id).soluong + +soluongz;
    }
    giaotiep(t('Cất thành công.'));
    
    vatpham(id,-soluongz);
    
    
}

function layra(id,soluongz) {
    if(ruongdo(id) === null) {
        return false;
    }
    if(ruongdo(id).soluong < soluongz) {
        giaotiep(t('Vui lòng nhập số lượng hợp lệ.'));
        return false;
    }
    if(soluongz <=0) {
        giaotiep(t('Vui lòng nhập số lượng'));
        return false;
    }
    
    
  ruongdo(id).soluong = +ruongdo(id).soluong - +soluongz;
    
    giaotiep(t('Lấy thành công.'));
    
    vatpham(id,+soluongz);
    
    
}


function sd(id) {
    if(+my.users.pokemon <=0) {
        return false;
    }
  
    
    	for(var k=0;k<mypokemon(my.users.pokemon).kinang.length;k++) {
    	    ///
    	    if(my.loadgame == undefined) {
mypokemon(my.users.pokemon).kinang[k].time = 0;
my.loadgame=1;
    	    }
				if(+mypokemon(my.users.pokemon).kinang[k].id == id ) {
				    var d_ty;
				     var sdt ;
				    ///update kĩ năng ///
			
			
				    
				    if(my.users.att ==1) {
			mypokemon(my.users.pokemon).kinang[k].exp = +mypokemon(my.users.pokemon).kinang[k].exp + +rand(1,2);
			my.users.att =0;
				    }
				    
	if(+mypokemon(my.users.pokemon).kinang[k].level <=2) {
	    mypokemon(my.users.pokemon).kinang[k].danhlan = 0;
	}
	if(+mypokemon(my.users.pokemon).kinang[k].level >=3 && +mypokemon(my.users.pokemon).kinang[k].level <=5) {
	    mypokemon(my.users.pokemon).kinang[k].danhlan = 1;
	}
	
	if(+mypokemon(my.users.pokemon).kinang[k].level >=6 && +mypokemon(my.users.pokemon).kinang[k].level <=8) {
	    mypokemon(my.users.pokemon).kinang[k].danhlan =2;
	}
	
	if(+mypokemon(my.users.pokemon).kinang[k].level >=9 && +mypokemon(my.users.pokemon).kinang[k].level <=12) {
	    mypokemon(my.users.pokemon).kinang[k].danhlan =3;
	}
	
	if(+mypokemon(my.users.pokemon).kinang[k].level >=13 ) {
	    mypokemon(my.users.pokemon).kinang[k].danhlan =4;
	}
	if(kinang(mypokemon(my.users.pokemon).kinang[k].id).buff != undefined) {
 mypokemon(my.users.pokemon).kinang[k].buff = kinang(mypokemon(my.users.pokemon).kinang[k].id).buff;
  mypokemon(my.users.pokemon).kinang[k].tile = +kinang(mypokemon(my.users.pokemon).kinang[k].id).tile + +mypokemon(my.users.pokemon).kinang[k].level*2;
  
  mypokemon(my.users.pokemon).kinang[k].timebuff = +kinang(mypokemon(my.users.pokemon).kinang[k].id).time + (+mypokemon(my.users.pokemon).kinang[k].level*500);
   mypokemon(my.users.pokemon).kinang[k].tacdung = kinang(mypokemon(my.users.pokemon).kinang[k].id).tacdung;
 

	} else {
 mypokemon(my.users.pokemon).kinang[k].buff = null;
	    
	}
				    
 mypokemon(my.users.pokemon).kinang[k].ten = kinang(mypokemon(my.users.pokemon).kinang[k].id).ten;
				 mypokemon(my.users.pokemon).kinang[k].mp = +mypokemon(my.users.pokemon).kinang[k].level * kinang(id).mp;
				 if(kinang(id).phep>=1) {
				      d_ty = kinang(mypokemon(my.users.pokemon).kinang[k].id).phep;
				      sdt = my.chiso.phep;
				 } else {
				    d_ty = kinang(mypokemon(my.users.pokemon).kinang[k].id).vatli;
				      sdt = my.chiso.vatli;  
				 }
				 if(+mypokemon(my.users.pokemon).kinang[k].exp >= +mypokemon(my.users.pokemon).kinang[k].expmax && +mypokemon(my.users.pokemon).kinang[k].level <16) {
				     c('Kĩ năng '+mypokemon(my.users.pokemon).kinang[k].ten+' đã lên cấp. ','ADMIN');
				     
				     lichsu('Kĩ năng '+mypokemon(my.users.pokemon).kinang[k].ten+' đã lên cấp. pokemon '+my.chiso.ten+'  ');
				     
				mypokemon(my.users.pokemon).kinang[k].exp = +mypokemon(my.users.pokemon).kinang[k].exp - level_skill[+mypokemon(my.users.pokemon).kinang[k].level];
			     mypokemon(my.users.pokemon).kinang[k].expmax = level_skill[+mypokemon(my.users.pokemon).kinang[k].level+1];
			      mypokemon(my.users.pokemon).kinang[k].level = +mypokemon(my.users.pokemon).kinang[k].level+1;
}

				    mypokemon(my.users.pokemon).kinang[k].satthuong = +d_ty*+mypokemon(my.users.pokemon).kinang[k].level+ sdt;
				    mypokemon(my.users.pokemon).kinang[k].hoichieu = +kinang(mypokemon(my.users.pokemon).kinang[k].id).thoigian- +my.chiso.tocdo;
  if(+mypokemon(my.users.pokemon).kinang[k].hoichieu <600) {
      mypokemon(my.users.pokemon).kinang[k].hoichieu = 600;
  }

					return mypokemon(my.users.pokemon).kinang[k];
				}
			}
			return null;
}

function kinang(id) {
    	for(var k=0;k<data_kinang.length;k++) {
    	    				    data_kinang[k].mota = t(data_kinang[k].mota);

				if( data_kinang[k].id == id ) {
				    
				    if(data_kinang[k].img1 != undefined) {
				     if(+userEvent.direction == 3)   {
				        data_kinang[k].img = data_kinang[k].img0; 
				     } else {
				     data_kinang[k].img = data_kinang[k].img1; 
    
				     }
				        
				    }
				    
				    data_kinang[k].ten = t(data_kinang[k].ten);
				    
				    
					return data_kinang[k];
				}
			}
			return null;
}

function kinang2(id) {
    	for(var k=0;k<data_kinang.length;k++) {
				if( data_kinang[k].img == id ) {
					return data_kinang[k];
				}
					if( data_kinang[k].img1 == id ) {
				    data_kinang[k].img = data_kinang[k].img1;
					return data_kinang[k];
				}
				
			if( data_kinang[k].img0 == id ) {
				    data_kinang[k].img = data_kinang[k].img0;
					return data_kinang[k];
				}	
			}
			
		
		
			
			
			return null;
}


function getnpc(id) {
    	for(var k=0;k<events.length;k++) {
				if( events[k].id == id ) {

					return events[k];
				}
			}
			return null;
}

function getname(id) {
    	for(var k=0;k<nguoichoi.length;k++) {
				if( nguoichoi[k].username == id ) {
					return nguoichoi[k];
				}
			}
			return null;
}
function getuser(id) {
    	for(var k=0;k<mmoUsers.length;k++) {
				if( mmoUsers[k].id == id ) {
					return mmoUsers[k];
				}
			}
			return null;
}

function xoanpc(id) {
    for(var k=0;k<events.length;k++) {
				if( events[k].id == id ) {
					events.splice(k, 1);
				}
			}
		
}
function bar(min,max,mau) {
 
  if(!mau) {
      mau = '060';
  }
  return '<div style="background: #868e96;height: 13px;margin: 2px 0;width: 80px;max-width: 90px;border: 1px solid #000;overflow: hidden;-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;display: inline-table;"><div style="height: 14px;background: #'+mau+';width: '+(min/max*100)+'%;" >'+min+'</div></div>';
}


function type(id) {
    var countx ='';
    if(pokemon(id)) {
        if(pokemon(id).type1) {
            countx+= '<b class="type '+pokemon(id).type1+'">'+pokemon(id).type1+'</b>';
        }
        if(pokemon(id).type2) {
            countx+= '<b class="type '+pokemon(id).type2+'">'+pokemon(id).type2+'</b>';
        }
        
        
    }
    return countx;
}



function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
   
   if(userID >=1) {
       
       if(my.pk.id >0  && my.pk.time < date()) {
        xu(my.pk.cuoc);
       
         giaotiep('Kết thúc trận đấu với kết quả hòa.Bạn nhận được '+my.pk.cuoc+' ');
          my.pk.id = 0;
        my.pk.cuoc = 0; 
                    my.users.co =0;

         lichsu('Kết thúc trận đấu với kết quả hòa.Bạn nhận được '+my.pk.cuoc+'');
        
       
         }
       
       if(+my.users.exp>= +my.users.expmax && +my.users.level <65) {
              
              my.users.exp = +my.users.exp - level_my[+my.users.level];
              my.users.expmax = level_my[+my.users.level+1];
              
              my.users.level = +my.users.level+1;
             
              setdrawn('LÊN CẤP');
          }
          
      if(+my.users.pokemon>=1) {
           if(+my.chiso.hp > +my.chiso.hpfull) {
               my.chiso.hp = my.chiso.hpfull;
           }
           if(+my.chiso.mp > +my.chiso.mpfull) {
               my.chiso.mp = my.chiso.mpfull;
           }
           
           if(my.chiso.lv5 == undefined) {
               my.chiso.lv5 = 1;
           }
           if(my.chiso.lv10 == undefined) {
               my.chiso.lv10 = 1;
           }
           if(my.chiso.lv15 == undefined) {
               my.chiso.lv15 = 1;
           }
           if(my.chiso.lv20 == undefined) {
               my.chiso.lv20 = 1;
           }
           if(my.chiso.lv25 == undefined) {
               my.chiso.lv25 = 1;
           }
           if(my.chiso.lv30 == undefined) {
               my.chiso.lv30 = 1;
           }
           if(my.chiso.lv35 == undefined) {
               my.chiso.lv35 = 1;
           }
           if(my.chiso.lv40 == undefined) {
               my.chiso.lv40 = 1;
           }
           if(my.chiso.lv45 == undefined) {
               my.chiso.lv45 = 1;
           }
           if(my.chiso.lv50 == undefined) {
               my.chiso.lv50 = 1;
           }
           if(my.chiso.lv55 == undefined) {
               my.chiso.lv55 = 1;
           }
           if(my.chiso.lv65 == undefined) {
               my.chiso.lv65 = 1;
           }
           if(my.chiso.lv60 == undefined) {
               my.chiso.lv60 = 1;
           }
           if(my.chiso.lv70 == undefined) {
               my.chiso.lv70 = 1;
           }
           
           /// DEFULE GAME///
                      var tt = 1;
           

           if(pokemon(my.chiso.id)) {
              
    if(pokemon(my.chiso.id).tangtruong == "Erratic") tt =1;
    else if(pokemon(my.chiso.id).tangtruong == "Fast") tt =1.3;
    else if(pokemon(my.chiso.id).tangtruong == "Medium Fast") tt =1.5;
    else if(pokemon(my.chiso.id).tangtruong == "Medium Slow") tt =1.7;
    else if(pokemon(my.chiso.id).tangtruong == "Slow") tt =2.0;
    else tt = 2.5;              
              
           }
           //END DEFULE ///

          if(+my.chiso.exp>= +my.chiso.expmax &&  +my.chiso.gym < level_gym[+my.chiso.level] ) {
              my.chiso.exp =+my.chiso.expmax - +my.chiso.expmax/100*0.01;
          }
           
          if(+my.chiso.exp>= +my.chiso.expmax && +my.chiso.level <65 && +my.chiso.gym >= level_gym[+my.chiso.level]) {
              my.chiso.exp = my.chiso.exp - level_my[+my.chiso.level]*tt;
              my.chiso.expmax = level_my[+my.chiso.level+1]*tt;
              my.chiso.level = +my.chiso.level+1;
              my.chiso.tiemnang = +my.chiso.tiemnang +10;
              my.chiso.tiemnanggoc = +my.chiso.tiemnanggoc +10;
              my.chiso.kinang = +my.chiso.kinang +1;
              my.chiso.kinanggoc = +my.chiso.kinanggoc +1;

              my.chiso.mpfull = my.chiso.mpfull;
              my.chiso.hp = my.chiso.hpfull;

              setdrawn('LÊN CẤP POKEMON');
              ////////////TIẾN HÓA POKEMON////////////
              for(var i=0;i<data_tienhoa.length;i++) {
                  if(+data_tienhoa[i].pokemon == +my.chiso.id && data_tienhoa[i].da == "" && +data_tienhoa[i].level <= +my.chiso.level) {
                      
                      if(pokemon(data_tienhoa[i].new) !== null) {
                       my.chiso.id = pokemon(data_tienhoa[i].new).id;
                       my.chiso.img = pokemon(data_tienhoa[i].new).img;
                       doitrang(my.chiso.img);
                       my.users.skin = my.chiso.img;    
                       lichsu('PokeMon '+my.chiso.ten+' tiến hóa thành '+pokemon(data_tienhoa[i].new).ten+'   ');
                     my.chiso.ten = pokemon(data_tienhoa[i].new).ten;
                 setdrawn('TIẾN HÓA '+my.chiso.ten+' ');
                  
                      }
                      
                  }
        
                  }
              
              ///////////////////END CODE/////////////////////
              
               ///// HỆ POKEMON  /////
               var type1_pokemon = {hp :0, giap :0, tocdo :0, vatli : 0, phep :0, mp : 0, chimang :0, xuyengiap : 0};
               var type2_pokemon = {hp :0, giap :0, tocdo :0, vatli : 0, phep :0, mp : 0, chimang :0, xuyengiap : 0};
               if(pokemon(my.chiso.id).type1) {
               if(pokemon(my.chiso.id).type1 == "Normal") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.3);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.0);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type1_pokemon.chimang = +my.chiso.level* 0;
                type1_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type1 == "Fire") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*2.3);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.5);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type1_pokemon.chimang = +my.chiso.level* 0.2;
                type1_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type1 == "Water") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*1.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*2.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*1.1);
                type1_pokemon.chimang = +my.chiso.level* 0;
                type1_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type1 == "Electric") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*1.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*3.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*1.1);
                type1_pokemon.chimang = +my.chiso.level* 0;
                type1_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               if(pokemon(my.chiso.id).type1 == "Grass") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*1.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*1.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type1_pokemon.chimang = +my.chiso.level* 0;
                type1_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               if(pokemon(my.chiso.id).type1 == "Ice") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*1.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*3.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type1_pokemon.chimang = +my.chiso.level* 0;
                type1_pokemon.xuyengiap = +my.chiso.level* 0.3;
                  
               }
               if(pokemon(my.chiso.id).type1 == "Fighting") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*1.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*2.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*4.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type1_pokemon.chimang = +my.chiso.level* 0;
                type1_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type1 == "Poison") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*1.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*4.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type1_pokemon.chimang = +my.chiso.level* 0;
                type1_pokemon.xuyengiap = +my.chiso.level* 0.3;
                  
               }
               
               if(pokemon(my.chiso.id).type1 == "Ground") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*1.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type1_pokemon.chimang = +my.chiso.level* 0.2;
                type1_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type1 == "Flying") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*3.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*3.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type1_pokemon.chimang = +my.chiso.level* 0;
                type1_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type1 == "Psychic") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*2.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*3.6);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*3.1);
                type1_pokemon.chimang = +my.chiso.level* 0;
                type1_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type1 == "Bug") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*2.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*2.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type1_pokemon.chimang = +my.chiso.level* 0;
                type1_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               if(pokemon(my.chiso.id).type1 == "Rock") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*2.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*2.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type1_pokemon.chimang = +my.chiso.level* 0.2;
                type1_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type1 == "Ghost") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*2.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*3.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*5.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type1_pokemon.chimang = +my.chiso.level* 0;
                type1_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type1 == "Dragon") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*2.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*3.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*6.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*1.1);
                type1_pokemon.chimang = +my.chiso.level* 0;
                type1_pokemon.xuyengiap = +my.chiso.level* 0.3;
                  
               }
               
               if(pokemon(my.chiso.id).type1 == "Dark") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*3.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*5.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*1.1);
                type1_pokemon.chimang = +my.chiso.level* 0;
                type1_pokemon.xuyengiap = +my.chiso.level* 0.2;
                  
               }
               
               if(pokemon(my.chiso.id).type1 == "Steel") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*3.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*3.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*1.1);
                type1_pokemon.chimang = +my.chiso.level* 0.2;
                type1_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type1 == "Fairy") {
                type1_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*4.1);
                type1_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type1_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*3.1);
                type1_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type1_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*6.1);
                type1_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*3.1);
                type1_pokemon.chimang = +my.chiso.level* 0;
                type1_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
                   
               }
               ////////////HỆ 2///////////
  if(pokemon(my.chiso.id).type2) {
               if(pokemon(my.chiso.id).type2 == "Normal") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.3);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.0);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type2_pokemon.chimang = +my.chiso.level* 0;
                type2_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type2 == "Fire") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*2.3);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.5);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type2_pokemon.chimang = +my.chiso.level* 0.2;
                type2_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type2 == "Water") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*1.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*2.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*1.1);
                type2_pokemon.chimang = +my.chiso.level* 0;
                type2_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type2 == "Electric") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*1.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*3.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*1.1);
                type2_pokemon.chimang = +my.chiso.level* 0;
                type2_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               if(pokemon(my.chiso.id).type2 == "Grass") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*1.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*1.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type2_pokemon.chimang = +my.chiso.level* 0;
                type2_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               if(pokemon(my.chiso.id).type2 == "Ice") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*1.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*3.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type2_pokemon.chimang = +my.chiso.level* 0;
                type2_pokemon.xuyengiap = +my.chiso.level* 0.3;
                  
               }
               if(pokemon(my.chiso.id).type2 == "Fighting") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*1.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*2.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*4.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type2_pokemon.chimang = +my.chiso.level* 0;
                type2_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type2 == "Poison") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*1.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*4.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type2_pokemon.chimang = +my.chiso.level* 0;
                type2_pokemon.xuyengiap = +my.chiso.level* 0.3;
                  
               }
               
               if(pokemon(my.chiso.id).type2 == "Ground") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*1.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type2_pokemon.chimang = +my.chiso.level* 0.2;
                type2_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type2 == "Flying") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*3.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*3.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type2_pokemon.chimang = +my.chiso.level* 0;
                type2_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type2 == "Psychic") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*2.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*3.6);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*3.1);
                type2_pokemon.chimang = +my.chiso.level* 0;
                type2_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type2 == "Bug") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*2.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*2.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type2_pokemon.chimang = +my.chiso.level* 0;
                type2_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               if(pokemon(my.chiso.id).type2 == "Rock") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*2.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*2.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type2_pokemon.chimang = +my.chiso.level* 0.2;
                type2_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type2 == "Ghost") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*2.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*3.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*5.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*0.1);
                type2_pokemon.chimang = +my.chiso.level* 0;
                type2_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type2 == "Dragon") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*2.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*3.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*6.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*1.1);
                type2_pokemon.chimang = +my.chiso.level* 0;
                type2_pokemon.xuyengiap = +my.chiso.level* 0.3;
                  
               }
               
               if(pokemon(my.chiso.id).type2 == "Dark") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*0.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*3.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*5.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*1.1);
                type2_pokemon.chimang = +my.chiso.level* 0;
                type2_pokemon.xuyengiap = +my.chiso.level* 0.2;
                  
               }
               
               if(pokemon(my.chiso.id).type2 == "Steel") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*3.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*3.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*0.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*3.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*0.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*1.1);
                type2_pokemon.chimang = +my.chiso.level* 0.2;
                type2_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
               
               if(pokemon(my.chiso.id).type2 == "Fairy") {
                type2_pokemon.hp = +my.chiso.level* (+pokemon(my.chiso.id).hp/5*4.1);
                type2_pokemon.giap = +my.chiso.level* (+pokemon(my.chiso.id).giap/5*0.1);
                type2_pokemon.tocdo = +my.chiso.level* (+pokemon(my.chiso.id).tocdo/5*3.1);
                type2_pokemon.vatli = +my.chiso.level* (+pokemon(my.chiso.id).vatli/5*0.1);
                type2_pokemon.phep = +my.chiso.level* (+pokemon(my.chiso.id).phep/5*6.1);
                type2_pokemon.mp = +my.chiso.level* (+pokemon(my.chiso.id).mp/5*3.1);
                type2_pokemon.chimang = +my.chiso.level* 0;
                type2_pokemon.xuyengiap = +my.chiso.level* 0;
                  
               }
                   
               }
               ///////////END TYPE2///////////

              my.chiso.hpgoc = +pokemon(my.chiso.id).hp + (50*+my.chiso.level) + type1_pokemon.hp + + type2_pokemon.hp;
              my.chiso.giapgoc = +pokemon(my.chiso.id).giap + (30*+my.chiso.level)+type1_pokemon.giap+type2_pokemon.giap;
              my.chiso.tocdogoc = +pokemon(my.chiso.id).tocdo + (10*+my.chiso.level)+type1_pokemon.tocdo+type2_pokemon.tocdo;
              my.chiso.vatligoc = +pokemon(my.chiso.id).vatli + (5*+my.chiso.level)+type1_pokemon.vatli+type2_pokemon.vatli;
              my.chiso.phepgoc = +pokemon(my.chiso.id).phep + (30*+my.chiso.level)+type1_pokemon.phep+type2_pokemon.phep;
              my.chiso.mpgoc = +pokemon(my.chiso.id).mp + (15*+my.chiso.level)+type1_pokemon.mp+type2_pokemon.mp;
              my.chiso.chimanggoc = +pokemon(my.chiso.id).chimang + (0.2*+my.chiso.level)+type1_pokemon.chimang+type2_pokemon.chimang;
              my.chiso.xuyengiapgoc = +pokemon(my.chiso.id).xuyengiap + (0.3*+my.chiso.level)+type1_pokemon.xuyengiap+type2_pokemon.xuyengiap;
             
              ///EFF POKEMON ////
          }
          var binhnuoc ={hp :0,mp :0,giap :0,tocdo :0,vatli :0,chimang :0,phep :0,xuyengiap :0};
          if(+my.chiso.binhnuoc >=1) {
             binhnuoc.hp = +ruongtrangbi(my.chiso.binhnuoc).chiso.hp;
             binhnuoc.giap = +ruongtrangbi(my.chiso.binhnuoc).chiso.giap;
             binhnuoc.tocdo = +ruongtrangbi(my.chiso.binhnuoc).chiso.tocdo;
             binhnuoc.vatli = +ruongtrangbi(my.chiso.binhnuoc).chiso.vatli;
             binhnuoc.phep = +ruongtrangbi(my.chiso.binhnuoc).chiso.phep;
             binhnuoc.mp = +ruongtrangbi(my.chiso.binhnuoc).chiso.mp;
              binhnuoc.chimang = +ruongtrangbi(my.chiso.binhnuoc).chiso.chimang;
             binhnuoc.xuyengiap = +ruongtrangbi(my.chiso.binhnuoc).chiso.xuyengiap;
            
          }
          
          var binhthuoc ={hp :0,mp :0,giap :0,tocdo :0,vatli :0,chimang :0,phep :0,xuyengiap :0};
          if(+my.chiso.binhthuoc >=1) {
             binhthuoc.hp = +ruongtrangbi(my.chiso.binhthuoc).chiso.hp;
             binhthuoc.giap = +ruongtrangbi(my.chiso.binhthuoc).chiso.giap;
             binhthuoc.tocdo = +ruongtrangbi(my.chiso.binhthuoc).chiso.tocdo;
             binhthuoc.vatli = +ruongtrangbi(my.chiso.binhthuoc).chiso.vatli;
             binhthuoc.phep = +ruongtrangbi(my.chiso.binhthuoc).chiso.phep;
             binhthuoc.mp = +ruongtrangbi(my.chiso.binhthuoc).chiso.mp;
              binhthuoc.chimang = +ruongtrangbi(my.chiso.binhthuoc).chiso.chimang;
             binhthuoc.xuyengiap = +ruongtrangbi(my.chiso.binhthuoc).chiso.xuyengiap;
            
          }
          var da ={hp :0,mp :0,giap :0,tocdo :0,vatli :0,chimang :0,phep :0,xuyengiap :0};
          if(+my.chiso.da >=1) {
             da.hp = +ruongtrangbi(my.chiso.da).chiso.hp;
             da.giap = +ruongtrangbi(my.chiso.da).chiso.giap;
             da.tocdo = +ruongtrangbi(my.chiso.da).chiso.tocdo;
             da.vatli = +ruongtrangbi(my.chiso.da).chiso.vatli;
             da.phep = +ruongtrangbi(my.chiso.da).chiso.phep;
             da.mp = +ruongtrangbi(my.chiso.da).chiso.mp;
              da.chimang = +ruongtrangbi(my.chiso.da).chiso.chimang;
             da.xuyengiap = +ruongtrangbi(my.chiso.da).chiso.xuyengiap;
            
          }
          var voxo ={hp :0,mp :0,giap :0,tocdo :0,vatli :0,chimang :0,phep :0,xuyengiap :0};
          if(+my.chiso.voxo >=1) {
             voxo.hp = +ruongtrangbi(my.chiso.voxo).chiso.hp;
             voxo.giap = +ruongtrangbi(my.chiso.voxo).chiso.giap;
             voxo.tocdo = +ruongtrangbi(my.chiso.voxo).chiso.tocdo;
             voxo.vatli = +ruongtrangbi(my.chiso.voxo).chiso.vatli;
             voxo.phep = +ruongtrangbi(my.chiso.voxo).chiso.phep;
             voxo.mp = +ruongtrangbi(my.chiso.voxo).chiso.mp;
              voxo.chimang = +ruongtrangbi(my.chiso.voxo).chiso.chimang;
             voxo.xuyengiap = +ruongtrangbi(my.chiso.voxo).chiso.xuyengiap;
            
          }
          var qua ={hp :0,mp :0,giap :0,tocdo :0,vatli :0,chimang :0,phep :0,xuyengiap :0};
          if(+my.chiso.qua >=1) {
             qua.hp = +ruongtrangbi(my.chiso.qua).chiso.hp;
             qua.giap = +ruongtrangbi(my.chiso.qua).chiso.giap;
             qua.tocdo = +ruongtrangbi(my.chiso.qua).chiso.tocdo;
             qua.vatli = +ruongtrangbi(my.chiso.qua).chiso.vatli;
             qua.phep = +ruongtrangbi(my.chiso.qua).chiso.phep;
             qua.mp = +ruongtrangbi(my.chiso.qua).chiso.mp;
              qua.chimang = +ruongtrangbi(my.chiso.qua).chiso.chimang;
             qua.xuyengiap = +ruongtrangbi(my.chiso.qua).chiso.xuyengiap;
            
          }
          
          var theluc = {hp :40*+my.chiso.theluc,mp :6*+my.chiso.theluc,giap :0,tocdo :0,vatli :0,chimang :0,phep :0,xuyengiap :0};
          var sucmanh = {hp :0,mp :0,giap :0,tocdo :0,vatli :1*+my.chiso.sucmanh,chimang :0.01*+my.chiso.sucmanh,phep :0,xuyengiap :0};
          var tritue = {hp :30*+my.chiso.tritue,mp :0,giap :0,tocdo :0,vatli :0,chimang :0,phep :0,xuyengiap :0.01*+my.chiso.tritue};
           var kheoleo = {hp :0,mp :8*+my.chiso.kheoleo,giap :0,tocdo :3*+my.chiso.kheoleo,vatli :0,chimang :0,phep :0,xuyengiap :0};
            var thanphap = {hp :0,mp :0,giap :30*+my.chiso.thanphap,tocdo :0,vatli :0,chimang :0,phep :2*+my.chiso.thanphap,xuyengiap :0};
         my.chiso.hpfull = +my.chiso.hpgoc + binhnuoc.hp + qua.hp + voxo.hp + binhthuoc.hp + da.hp +theluc.hp + sucmanh.hp + tritue.hp + kheoleo.hp + thanphap.hp;
              my.chiso.giap = +my.chiso.giapgoc +  binhnuoc.giap+qua.giap + voxo.giap + binhthuoc.giap + da.giap + theluc.giap + sucmanh.giap + tritue.giap + kheoleo.giap + thanphap.giap;
              my.chiso.tocdo = +my.chiso.tocdogoc + binhnuoc.tocdo+ qua.tocdo + voxo.tocdo + binhthuoc.tocdo + da.tocdo + theluc.tocdo + sucmanh.tocdo + tritue.tocdo + kheoleo.tocdo + thanphap.tocdo;
              my.chiso.vatli = +my.chiso.vatligoc + binhnuoc.vatli + qua.vatli + binhthuoc.vatli + voxo.vatli + da.vatli + theluc.vatli + sucmanh.vatli + tritue.vatli + kheoleo.vatli + thanphap.vatli;
              my.chiso.phep = +my.chiso.phepgoc + binhnuoc.phep+ qua.phep + binhthuoc.phep + voxo.phep + da.phep + theluc.phep + sucmanh.phep + tritue.phep + kheoleo.phep + thanphap.phep;
              my.chiso.mpfull = +my.chiso.mpgoc + binhnuoc.mp + qua.mp + binhthuoc.mp + voxo.mp + da.mp + theluc.mp + sucmanh.mp + tritue.mp + kheoleo.mp + thanphap.mp;
            my.chiso.xuyengiap = +my.chiso.xuyengiapgoc + binhnuoc.xuyengiap + qua.xuyengiap + binhthuoc.xuyengiap + voxo.xuyengiap + da.xuyengiap + theluc.xuyengiap + sucmanh.xuyengiap + tritue.xuyengiap + kheoleo.xuyengiap + thanphap.xuyengiap;
           my.chiso.chimang = +my.chiso.chimanggoc + binhnuoc.chimang+qua.chimang+ qua.chimang + binhthuoc.chimang + voxo.chimang + da.chimang + theluc.chimang + sucmanh.chimang + tritue.chimang + kheoleo.chimang + thanphap.chimang;

          
          
          mypokemon(my.users.pokemon).chiso = my.chiso;
          
          
      }
  }
  
  
  return Math.floor(Math.random() * (max - min)) + min;
  
}

function att(id) {
    ///danh lan //
    var sucdanh = sd(my.attack.vitri);
    var npcid = getnpc(id);
    var att_msg='';
    if(my.camdanh !=0) {
        return false;
    }
   
    if(my.attack.vitri <=0) {
     setdrawn('Chọn kĩ năng để tấn công.');
return false;

    } 
    if(sucdanh === null) {
        setdrawn('Hãy biến hình thành pokemon, hoặc chưa chọn kĩ năng. Hãy dán kĩ năng ra màn hình nhé.');
        return false;

    } 
    if(sucdanh.time >Date.now()) {
     return false;
  
    }  
    if(npcid===null) {
      return false;
 
    }

 
  
    if(npcid.hp<=0) {
     return false;
   
    }
    
    if(my.chiso.hp <=0) {
              setdrawn('Bạn đã kiệt sức.');
return false;

    }
    
    if(my.chiso.mp < sucdanh.mp) {
                setdrawn('Bạn đã hết mp');
return false;
    }
    if(my.users.autobat !=1) {
    if(kinang(my.attack.vitri).pk !="ok" && +kinang(my.attack.vitri).goto !=1) {
  if(userEvent.Y - npcid.Y <=-15 ||  npcid.Y-userEvent.Y <=-15) {
    if(userEvent.X - npcid.X <=-15 ||  npcid.X-userEvent.X <=-15) {
     return false;
     
  } 
  }
  }
    }
  
  if(+kinang(my.attack.vitri).goto ==1) {
      dctt();
      userEvent.mapPosition.Y=npcid.mapPosition.Y+1-1;
userEvent.mapPosition.X=npcid.mapPosition.X+1-1;
bum();
  }
    
        ////////////YOU ATTACK/////////////
    var dame = rand(sucdanh.satthuong,sucdanh.satthuong*3);
  
   dame = khache(my.chiso.id,getnpc(id).spriteName.split(".")[0],dame);
   
   if(rand(1,100) <= my.chiso.chimang) {
       dame = dame*2;
       	att_msg+='CHÍ MẠNG';
       	

   } else
   
   if(rand(1,100) <= my.chiso.xuyengiap) {
       dame = dame;
       	       
  	att_msg+=' XUYÊN GIÁP';
   } else {
       dame = dame - npcid.giap;
   } 
    
    if(dame <=0) {
     
     dame =0;
    }
    my.users.att = 1;
    if(+sucdanh.id==58) {
        return false;
    }
    if(sucdanh.buff != null && +sucdanh.id !=8) {
        
        if(sucdanh.tile >= rand(1,100)) {
        ws.send("buff:"+npcid.id+"^pokemon^"+sucdanh.buff+"^"+userID+"^"+sucdanh.timebuff+"^"+sucdanh.tacdung+"");
   
        }
        
    }
    my.chiso.mp = my.chiso.mp - sucdanh.mp;
sucdanh.time = Date.now()+ +sucdanh.hoichieu;

 if(+sucdanh.id ==8) {
        ws.send("buff:"+userID+"^users^"+sucdanh.buff+"^"+userID+"^"+sucdanh.timebuff+"^"+sucdanh.tacdung+"");

   return false;
 }


    /////////SEND DATA TO SOCKET.IO/////
    npcid.msghp = '-'+dame;
	npcid.timehp = date()+500;    
	npcid.pk =1;
	npcid.timepk = date()+rand(1000,15000);    
	
		npcid.hp = npcid.hp-dame;
		if(mapquai(npcid.id)) {
		    quaist(npcid.id,dame);
  ws.send("truke:"+npcid.id+"^"+dame+"");
		    
		} else {
 // socket.emit("dame",{id : npcid.id , dame : dame ,  });		
}
     //////chueyern đoi cam giac
     if(userEvent.X < npcid.X ) {
         userEvent.direction = 3;
      
  } else {
              userEvent.direction = 2;
 
  }
  

  

/////////////////HIỆU ỨNG/////////////
var hu_my = kinang(sucdanh.id);

if(sucdanh.id >= 28 &&  sucdanh.id <= 32) {
    var xxx = 0;
    var yyy = 0;
} else {
    var xxx = 20;
    var yyy = 10;
}

///của tôi -  client ///
bum();
	players.info.push({
		ten : hu_my.img,
		rong : hu_my.rong,
		cao : hu_my.cao,
		sohinh : hu_my.sohinh,
		load :0,
		pk : hu_my.pk,
		id : npcid.id,
		type : "pokemon",
   myx : userEvent.X ,
myy : userEvent.Y,
		thoigian : hu_my.sohinh,
		max : hu_my.sohinh,
		tinh : (hu_my.rong/hu_my.sohinh),
		canvas_x : (npcid.X),
		canvas_y : (npcid.Y)
			});
   
///của tôi - server ///
ws.send("kinang:"+id+"^"+userID+"^"+mapID+"^pokemon^"+((npcid.X)-20)+"^"+((npcid.Y)-10)+"^"+sucdanh.id+"");

			
  
  if(sucdanh.danhlan >=1) {
      var lan = [];
  
  for(var i=0;i< events.length;i++) {
			
				if( userEvent.X+160 > events[i].X && userEvent.X < events[i].X +160 ) {
					if( userEvent.Y+160 > events[i].Y && userEvent.Y < events[i].Y +160 ) {
						
		 
           if(+events[i].hp >=1 && events[i].id != my.click.id) {
             lan.push({id : events[i].id });  
           }
           
	    	
						
					}
				}
			}
		if(sucdanh.danhlan < lan.length){
		    var lanmax = sucdanh.danhlan;
		} else {
		 		    var lanmax = lan.length;
   
		}

for(var k=0 ; k < lanmax;k++) {
    if(dlkgdkfgdfg(lan[k].id) === null) {
                var npcid = getnpc(lan[k].id);

 
 var dame = rand(sucdanh.satthuong,sucdanh.satthuong*3);
     dame = khache(my.chiso.id,getnpc(lan[k].id).spriteName.split(".")[0],dame);

   
   if(rand(1,100) <= my.chiso.chimang) {
       dame = dame*2;
       	att_msg+='CHÍ MẠNG';
       	

   } else
   
   if(rand(1,100) <= my.chiso.xuyengiap) {
       dame = dame;
       	       
  	att_msg+=' XUYÊN GIÁP';
   } else {
       dame = dame - npcid.giap;
   } 
    
    if(dame <=0) {
     
     dame =0;
    }
    my.users.att = 1;
    
    /////////SEND DATA TO SOCKET.IO/////
    npcid.msghp = '-'+dame;
	npcid.timehp = date()+500;     
	npcid.pk =1;
	npcid.timepk = date()+500;    
		npcid.hp = npcid.hp-dame;
	if(mapquai(npcid.id)) {
		    quaist(npcid.id,dame);
  ws.send("truke:"+npcid.id+"^"+dame+"");
		    
		} else {
  //socket.emit("dame",{id : npcid.id , dame : dame ,  });		
}
     
   /////////////////POKEMON ATTACK///////////////////  
   //////atttack ////////
   if(sucdanh.buff != null && +sucdanh.id !=8) {
        
        if(sucdanh.tile >= rand(1,100)) {
        ws.send("buff:"+npcid.id+"^pokemon^"+sucdanh.buff+"^"+userID+"^"+sucdanh.timebuff+"^"+sucdanh.tacdung+"");
   
        }
        
    }
   
   
   
   ////////////////
   
  /////////////////HIỆU ỨNG/////////////
var hu_my = kinang(sucdanh.id);

if(sucdanh.id >= 28 &&  sucdanh.id <= 32) {
    var xxx = 0;
    var yyy = 0;
} else {
    var xxx = 20;
    var yyy = 10;
}

	players.info.push({
		ten : hu_my.img,
		rong : hu_my.rong,
		cao : hu_my.cao,
		sohinh : hu_my.sohinh,
		load :0,
		pk : hu_my.pk,
		id : npcid.id,
		type : "pokemon",
   myx : userEvent.X ,
myy : userEvent.Y,
		thoigian : hu_my.sohinh,
		max : hu_my.sohinh,
		tinh : (hu_my.rong/hu_my.sohinh),
		canvas_x : (npcid.X),
		canvas_y : (npcid.Y)
			});
   
///của tôi - server ///
ws.send("kinang:"+id+"^"+userID+"^"+mapID+"^pokemon^"+((npcid.X)-20)+"^"+((npcid.Y)-10)+"^"+sucdanh.id+"");


			
			
            
            

           }
}
			
			
    
  }
    
}


function attpkm(id) {
    if(+my.users.pokemon <=0) {
        return false;
    }
    var npcid = getnpc(id);
    if(npcid === null) {
        return false;
    }
   /////////////////POKEMON ATTACK///////////////////  
   var dame_quai = rand(npcid.tancong,npcid.tancong*5);
  
       dame = khache(my.chiso.id,getnpc(id).spriteName.split(".")[0],dame_quai);
 
   
   var chimang_quai = npcid.chimang;
   if(chimang_quai >= rand(1,100)) {
       dame_quai = dame_quai*2;
        npcid.msgn = 'CHÍ MẠNG';
		npcid.timen = date()+1000;    
   }
   
   dame_quai = dame_quai - my.chiso.giap;
   if(dame_quai <=0) {
      npcid.msgn = 'HỤT';
		npcid.timen = date()+1000;   
		dame_quai = 0;
   }
   
   	setdrawn('-'+dame_quai);
my.chiso.hp = +my.chiso.hp - dame_quai;
/////////////////HIỆU ỨNG/////////////
var boss_pk = kinang(56);
		
///pokemon - client ///
	 players.info.push({
		ten : boss_pk.img,
		rong : boss_pk.rong,
		cao : boss_pk.cao,
		sohinh : boss_pk.sohinh,
		load :0,
	id : userID,
       pk : 'ok',
		type : "users",
   myx : npcid.X ,
myy : npcid.Y,
max : 2,
		thoigian : boss_pk.sohinh,
		tinh : (boss_pk.rong/boss_pk.sohinh),
		canvas_x : (userEvent.X)-20,
		canvas_y : (userEvent.Y)-10
			});	
ws.send("kinang:"+userID+"^"+userID+"^"+mapID+"^users^"+((userEvent.X)-20)+"^"+((userEvent.Y)-10)+"^56^"+id+"");
		 

	var boss_pk = kinang(57);
		
 players.info.push({
		ten : boss_pk.img,
		rong : boss_pk.rong,
		cao : boss_pk.cao,
		sohinh : boss_pk.sohinh,
		load :0,
	       id : userID,
		type : "users",
		thoigian : boss_pk.sohinh,
		tinh : (boss_pk.rong/boss_pk.sohinh),
		canvas_x : (userEvent.X)-20,
		canvas_y : (userEvent.Y)-10
			});	
		 
ws.send("kinang:"+userID+"^"+userID+"^"+mapID+"^users^"+((userEvent.X)-20)+"^"+((userEvent.Y)-10)+"^57^"+id+"");



    }
    
    
    




//var socket = io.connect('//localhost:3000');


  
  

function addquai() {
 $.nghia({
url : '/data/nhiemvu/quai.json',
type : 'POST',
ducnghia : function(result){
    var bimc = [];
    for(i=0;i<result.npc.length;i++) {
        if(+result.npc[i].hoisinh >= 600000 ) {
            bimc.push(result.npc[i]);
        }
    }


}
});   
} 


setInterval(function(){
  sql();

  ///DELETE ITEM MAP
  for(var i=0;i<events.length;i++) {
  if( events[i].id.split("#")[0] == "ITEM" ) {
        if(+events[i].id.split("^")[2]+90000 <= Date.now()) {
       events.splice(i, 1);
        }
       
     } 
  }
  
  ///SUSERS
 },10000);
 
 setInterval(function(){
 ketnoi();
 
 
    
if(userID >=10) {
    //	console.clear();
//	console.log("%c game viết trên nền tảng javascript không MYSQL ! Đề nghị không lợi dụng viết 90% trên js mà bug nhá :3 fb.com/ducnghiast %c", 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:24px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;', "font-size:12px;color:#999999;");
}

if(+caidat.mmo <= Date.now()) {
    caidat.mmo = Date.now()+300000;
    onlineupdate();
}
 
 },3000);
 


function sql() {
    if(mapID>=1  && userID >=1) {

my.users.x = userEvent.mapPosition.X;
my.users.y = userEvent.mapPosition.Y;
my.users.map = mapID;
my.users.mapname = mapCode;

 $.nghia({
	url : code(),
	type : 'POST',
	data : {a : 'users' , uid : my.users.taikhoan , sv : server, users : JSON.stringify(my)  },
	
	
	ducnghia : function(data){
	    my.lichsu = [];
	  
}
});        
  }   

}

function pvp(id) {
    var sucdanh = sd(my.attack.vitri);
    var att_msg;
    if(!id) {
        return false;
    }
    if(my.camdanh !=0) {
        return false;
    }
    if(getuser(id) === null) {
        return false;
    }
    if( +sucdanh.id ==58) {
        
          my.chiso.mp = my.chiso.mp - sucdanh.mp;
my.chiso.hp = my.chiso.hpfull;
        ws.send("buff:"+id+"^users^"+sucdanh.buff+"^"+userID+"^"+sucdanh.timebuff+"^"+sucdanh.tacdung+"");
   
        return false;
        
    }
    if(+getuser(id).co == +my.users.co && getuser(id).co <=0) {
        mmouser_info(id);
        return false;
    }
    
    if(+getuser(id).co != +my.users.co && +getuser(id).co >=1  &&  my.users.co >0 ||  +getuser(id).co ==7  || +my.users.co ==7) {
       
    
    if(my.attack.vitri <=0) {
     setdrawn('Chọn kĩ năng để tấn công.');
return false;
    } 
    if(sucdanh === null) {
        setdrawn('Hãy biến hình thành pokemon.');
        return false;
    } 
    if(sucdanh.time >Date.now()) {
        return false;
    }  
    if(getusers(id)===null) {
 return false;
    }
    
    if(getusers(id).hp<=0) {
       return false;
    }
    
    if(+my.chiso.hp <=0) {
              setdrawn(t('Bạn đã kiệt sức.',t('quay về')));
return false;
    }
    
    if(my.chiso.mp < sucdanh.mp) {
              setdrawn(t('Bạn đã hết mp.',t('Hết mana')));
return false;
    } 
    
    my.chiso.mp = my.chiso.mp - sucdanh.mp;
sucdanh.time = Date.now()+ +sucdanh.hoichieu;
     if(kinang(my.attack.vitri).pk !="ok" && +kinang(my.attack.vitri).goto !=1) {
  if(userEvent.Y - getuser(id).drawPosY <=-15 ||  npcid.Y-getuser(id).drawPosY <=-15) {
    if(userEvent.X - getuser(id).drawPosX <=-15 ||  npcid.X-getuser(id).drawPosX <=-15) {
     return false;
     
  } 
  }
  }
  
  
   if(+kinang(my.attack.vitri).goto ==1) {
      dctt();
      userEvent.mapPosition.Y=getuser(id).y+1-1;
userEvent.mapPosition.X=npcidgetuser(id).x+1-1;
bum();
  }
    
    if(sucdanh.buff != null && +sucdanh.id !=8) {
        
        if(sucdanh.tile >= rand(1,100)) {
        ws.send("buff:"+id+"^users^"+sucdanh.buff+"^"+userID+"^"+sucdanh.timebuff+"^"+sucdanh.tacdung+"");
   
        }
        
    }
    
    if(+sucdanh.id ==8) {
        ws.send("buff:"+userID+"^users^"+sucdanh.buff+"^"+userID+"^"+sucdanh.timebuff+"^"+sucdanh.tacdung+"");

   return false;
 }
    
        ////////////YOU ATTACK/////////////
    var dame = rand(sucdanh.satthuong,sucdanh.satthuong*3);
   if(rand(1,100) <= my.chiso.chimang) {
       dame = dame*2;
       	att_msg+='CHÍ MẠNG';
       
   }
      dame = khache(my.chiso.id,getusers(id).skin.split(".")[0],dame);

   
  
    if(dame <=0) {
     
     dame =0;
    }
    
    /////////SEND DATA TO SOCKET.IO/////
  bum();
     ws.send("damepvp:"+id+"^"+userID+"^"+dame+"");
/////////////////HIỆU ỨNG/////////////
var hu_my = kinang(sucdanh.id);
if(getuser(id) !== null) {
    if(sucdanh.id >= 28 &&  sucdanh.id <= 32) {
    var xxx = 0;
    var yyy = 0;
} else {
    var xxx = 20;
    var yyy = 10;
}



	 players.info.push({
		ten : hu_my.img,
		rong : hu_my.rong,
		cao : hu_my.cao,
		sohinh : hu_my.sohinh,
		load :0,
		pk : hu_my.pk,
		id : id,
		type : "users",
   myx : userEvent.X ,
myy : userEvent.Y,
max : +hu_my.sohinh,
		thoigian : hu_my.sohinh,
		tinh : (hu_my.rong/hu_my.sohinh),
		canvas_x : (getuser(id).drawPosX)-xxx,
		canvas_y : (getuser(id).drawPosY)-yyy
			});	
			
			ws.send("kinang:"+id+"^"+userID+"^"+mapID+"^users^"+((userEvent.X)-20)+"^"+((userEvent.Y)-10)+"^"+sucdanh.id+"");


///////////văwng másu lồn ///
var hu_my = kinang(57);

players.info.push({
		ten : hu_my.img,
		rong : hu_my.rong,
		cao : hu_my.cao,
		sohinh : hu_my.sohinh,
		load :0,
		pk : hu_my.pk,
		id : id,
		type : "users",
   myx : userEvent.X ,
myy : userEvent.Y,
max : +hu_my.sohinh,
		thoigian : hu_my.sohinh,
		tinh : (hu_my.rong/hu_my.sohinh),
		canvas_x : (getuser(id).drawPosX)-xxx,
		canvas_y : (getuser(id).drawPosY)-yyy
			});	
	ws.send("kinang:"+id+"^"+userID+"^"+mapID+"^users^"+((userEvent.X)-20)+"^"+((userEvent.Y)-10)+"^57");


///song///
}


    }
    
    
    
}

function bum() {
    var boss_pk = kinang(32);
///pokemon - client ///
	 players.info.push({
		ten : boss_pk.img,
		rong : boss_pk.rong,
		cao : boss_pk.cao,
		sohinh : boss_pk.sohinh,
		load :0,
		thoigian : boss_pk.sohinh,
		tinh : (boss_pk.rong/boss_pk.sohinh),
		canvas_x : userEvent.X,
		canvas_y : userEvent.Y+10
			});	
	
	ws.send("kinang:"+userID+"^"+userID+"^"+mapID+"^users^"+((userEvent.X)-20)+"^"+((userEvent.Y)-10)+"^32");
	 


}

function ch() {
    var boss_pk = kinang(34);
///pokemon - client ///
	 players.info.push({
		ten : boss_pk.img,
		rong : boss_pk.rong,
		cao : boss_pk.cao,
		sohinh : boss_pk.sohinh,
		load :0,
		thoigian : boss_pk.sohinh,
		tinh : (boss_pk.rong/boss_pk.sohinh),
		canvas_x : userEvent.X,
		canvas_y : userEvent.Y
			});	
	ws.send("kinang:"+userID+"^"+userID+"^"+mapID+"^users^"+((userEvent.X)-20)+"^"+((userEvent.Y)-10)+"^34");
		 

}

function dctt() {
    var boss_pk = kinang(35);
///pokemon - client ///
	 players.info.push({
		ten : boss_pk.img,
		rong : boss_pk.rong,
		cao : boss_pk.cao,
		sohinh : boss_pk.sohinh,
		load :0,
		thoigian : boss_pk.sohinh,
		tinh : (boss_pk.rong/boss_pk.sohinh),
		canvas_x : userEvent.X,
		canvas_y : userEvent.Y+10
			});	
		 
	ws.send("kinang:"+userID+"^"+userID+"^"+mapID+"^users^"+((userEvent.X)-20)+"^"+((userEvent.Y)-10)+"^35");


}

function dcttuserskhac(uid,map) {
        var boss_pk = kinang(35);
	ws.send("kinang:"+uid+"^"+userID+"^"+mapID+"^users^"+((userEvent.X)-20)+"^"+((userEvent.Y)-10)+"^35");

}
function mapvpo(id,soluong) {
    events.push(new gameEvent({ 
            "id": "ITEM#"+soluong+"#"+Date.now(),
            "name": shopvatpham(id).ten,
            "x": userEvent.mapPosition.X+1,
            "y": userEvent.mapPosition.Y+1,
            "type": "Action Button",
            "style":shopvatpham(id).img+".png",
            "direction": 0,
            "idvp" : id,
            "movement": "Still",
            "hp": 0,
            "hpfull": 0,
            "level": shopvatpham(id).level,
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
function mapvp(idvp,soluong) {
ws.send("vatpham:"+rand(1000000,999999999)+"#^"+userID+"^"+idvp+"^"+soluong+"^"+mapID+"^"+(userEvent.mapPosition.X+1)+"^"+(userEvent.mapPosition.Y+1)+"");
}

function nhatvp(id) {
    if(getnpc(id)) {
     if( getnpc(id).id.split("#")[0] == "ITEM" ) {
        
setdrawn(''+shopvatpham(getnpc(id).idvp).ten+'*'+getnpc(id).id.split("#")[1]+'',0); 
       vatpham(getnpc(id).idvp,getnpc(id).id.split("#")[1]);
             lichsu('Nhặt '+shopvatpham(getnpc(id).idvp).ten+'*'+getnpc(id).id.split("#")[1]+' từ đất. '); 
           xoanpc(id);
               my.click = { id: 0,type: "users",buoc: 0};

             return 1;
     }   
    }
ws.send("nhatvatpham:"+id+"^"+userID+"");

}

function nhatall() {
    for(var k=0;k<my.nhatvatpham.length;k++) {
			nhatvp(my.nhatvatpham[k].id);
					my.nhatvatpham.splice(k, 1);
        
			}
}

function pokeball(id) {
    c_canvas();
    c_giaotiep();
    c_box();
    if(my.click.id <=0 && my.click.type !== "pokemon") {
        giaotiep(t('Chưa chọn mục tiêu để sử dụng.'));
        return false;
    }
    
    if(mapquai(my.click.id)) {
        if(+mapquai(my.click.id).gym >=1) {
            giaotiep('Không thể bắt đấu gym');
            return false;
        }
    }
    
    if(mapquai(my.click.id)) {
        if(getnpc(my.click.id)) {
             if(my.users.dabat === undefined) {
            my.users.dabat =1;
             giaotiep('Bắt thành công');
                     vatpham(id,-1);
mypokemon(addpkm(getnpc(my.click.id).spriteName.split(".")[0])).chiso.pokeball=+id;
///update///
if(nhiemvu(my.users.nhiemvu.id) !== null) {
    if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "bat") {
     my.users.nhiemvu.song = +my.users.nhiemvu.song +1;
    }
}
///update///
return false;
        }
         var data = {};
         data.info = getnpc(my.click.id);
          vatpham(id,-1);
lichsu('Bắt pokemon mất '+shopvatpham(id).ten+'*1 ');
     if(getnpc(data.info.id) !== null) {
        var hu_my = kinang(32);
        players.info.push({
		ten : hu_my.img,
		rong : hu_my.rong,
		cao : hu_my.cao,
		sohinh : hu_my.sohinh,
		load :0,
		
		thoigian : hu_my.sohinh,
		tinh : (hu_my.rong/hu_my.sohinh),
		canvas_x : (getnpc(data.info.id).X)-0,
		canvas_y : (getnpc(data.info.id).Y)-0
			});

        
             }
    
    var tile1 = +data.info.hpfull/+data.info.hp*1;
    if(tile1 >=60) {
        tile1 =40;
    }
    
    if(rand(1,100)  <=  (+tile1 + +shopvatpham(id).tile)){
        giaotiep('Bắt thành công');
        
mypokemon(addpkm(getnpc(my.click.id).spriteName.split(".")[0])).chiso.pokeball=+id;
if(nhiemvu(my.users.nhiemvu.id) !== null) {
    if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "bat") {
     my.users.nhiemvu.song = +my.users.nhiemvu.song +1;
    }
}
    } else {
        setdrawn('Bắt hụt');
    }      
            
        }
        return false;
    }
    
   
   
   if(getnpc(my.click.id)) {
                var data = {};

         data.info = getnpc(my.click.id);
          vatpham(id,-1);
lichsu('Bắt pokemon mất '+shopvatpham(id).ten+'*1 ');
     if(getnpc(data.info.id) !== null) {
        var hu_my = kinang(32);
        players.info.push({
		ten : hu_my.img,
		rong : hu_my.rong,
		cao : hu_my.cao,
		sohinh : hu_my.sohinh,
		load :0,
		
		thoigian : hu_my.sohinh,
		tinh : (hu_my.rong/hu_my.sohinh),
		canvas_x : (getnpc(data.info.id).X)-0,
		canvas_y : (getnpc(data.info.id).Y)-0
			});

        
             }
    
    var tile1 = +data.info.hpfull/+data.info.hp*1;
    if(tile1 >=60) {
        tile1 =40;
    }
    if(rand(1,100)  <=  (+tile1 + +shopvatpham(id).tile)){
        giaotiep('Bắt thành công');
        
mypokemon(addpkm(getnpc(my.click.id).spriteName.split(".")[0])).chiso.pokeball=+id;
if(nhiemvu(my.users.nhiemvu.id) !== null) {
    if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "bat") {
     my.users.nhiemvu.song = +my.users.nhiemvu.song +1;
    }
}
    } else {
        setdrawn('Bắt hụt');
    }      
            
        }
        return false; 
 //   socket.emit("pokeball",{uid : userID , idpkm : my.click.id , idvp : id });	
     c_box();
    c_box();
    c_box();
    c_box();


}

function die() {
    
    if(  my.users.loadxxx <=0 && +my.chiso.hp <=0 && my.users.set !=1) {
         my.chiso.hs =+date()+20000;
         my.users.loadxxx =1;
    }
    if(+my.chiso.hs <= date() && my.users.loadxxx ==1) 
    {
      my.users.set=1;   
      my.users.loadxxx =0;
    }
    
    
    
    

                button.thoisinh='';
				giaotiep(t('Bạn đã kiệt sức.'));
				    button.thoisinh+='<b onclick="velang()" class="viptxt nutchat">'+t('Quay về')+'</b>';
					button.thoisinh+='<b onclick="game_hoisinh(1)" class="viptxt nutchat">'+t('Hồi sinh 100 xu')+'</b>';		
		            button.thoisinh+='<b onclick="game_hoisinh(2)" class="viptxt nutchat">'+t('Hồi sinh 1 ruby')+'</b>';		
				$("#npc_menu").html(button.thoisinh);
}


function auto() {
var id=0;
var chorse = [];
var at = [];
               at.push({id : 0});  

for (var i=0; i<my.setkinang.length; i++) {
           if(+sd(my.setkinang[i].id).time < date()) {
           chorse.push({id : my.setkinang[i].id});    
           }
	 }
			
		for(var i=0;i< events.length;i++) {
			
				if( userEvent.X+170 > events[i].X && userEvent.X < events[i].X +170 ) {
					if( userEvent.Y+170 > events[i].Y && userEvent.Y < events[i].Y +170 ) {
					if(+events[i].hp >= 1 ) {

               at.push({id : events[i].id});  

           
           			
				}
					}
				}
			}   	
			
if(+my.users.pokemon <=0) {
     return false;
} 
if(+my.chiso.hp <=0) {

    return false;
}
if(+my.chiso.mp <=10) {

    return false;
} 
if(chorse.length <=0) {
    return false;
}
			id = at[rand(0,at.length)];

if(getnpc(id.id) === null) {
    return false;
}  

    my.attack.vitri = chorse[rand(0,chorse.length)].id;

ketnoi();

if(my.users.muctieu <=0 ) {
my.users.muctieu = id.id;
}

if(getnpc(my.users.muctieu) === null) {
    my.users.muctieu = id.id;
}
    att(my.users.muctieu);
 

    
    
    
}


