function dichchuyen() {
    
    var ac='';

for(var i=0;i<data_map.length;i++) {
    if(+data_map[i].nhiemvu <= +my.users.nhiemvu.id) {
ac+='<div class="menu list">'+data_map[i].ten+' <b style="padding: 10px 15px 2px 1px;float: right; margin-top: -13px;" onclick="toingay('+data_map[i].id+')">Tới ngay</b></div>';
}
}
     

         
        
       box(t('Bạn muốn đi đâu ? '),''+t('Bay')+':dichchuyen(2)',ac); 
     
       
}

function toingay(id) {
    for(var i=0;i<data_npc.length;i++) {
        if(data_npc[i].map == id) {
            if(!getmap(id)) {
                giaotiep('eror');
                return false;
            }
            map(getmap(id).name,+data_npc[i].x,+data_npc[i].y,getmap(id).name);
            c_box();
            return false;
        }
        
    }
    
}

function game_gym(id) {
    var rand_gym = [];
    //quai
    if(!gym(id)) {
        giaotiep(t('Không tìm thấy trận chiến.'));
        return false;
    }
    if(+my.users.pokemon<=0) {
        giaotiep(t('Vui lòng biến hình thành pokemon.'));
        return false;
    }
    
    if(game.gym.id <=0) {
        /////FUNCTION NO GYM/////
     dabase_chat.push({ type : 'ADMIN' , msg : t('Trận chiến bắt đầu, chúc bạn may mắn.')   });
        
        for(var a=0;a<data_pokemon.length;a++) {
                if(data_pokemon[a].type1 ==gym(id).he ) {
                    rand_gym.push(data_pokemon[a].id);
                }
            }
        
        for(var i=0;i<gym(id).soluong;i++) {
           var in_pkm =  pokemon(rand_gym[rand(0,rand_gym.length)]);
          quai.push( {
              "gym" : 1,
              "id" : rand(100000,999999),
              "name" : "gym_"+in_pkm.ten,
              "map" : mapID,
              "hoisinh" : 5000000,
              "level" : gym(id).level,
              "x" : userEvent.mapPosition.X+1,
              "y" : userEvent.mapPosition.Y+1,
              "thuong" : ""+gym(id).level*10+":30^"+gym(id).level*50+"",
              "hp" : (my.chiso.hpfull+my.chiso.hpfull/100*50+my.chiso.hpfull/100*gym(id).level),
              "hpfull" : (my.chiso.hpfull+my.chiso.hpfull/100*50+my.chiso.hpfull/100*gym(id).level),
              "nhom" : "gym"+rand(100000,999999),
              "img" : in_pkm.img,
              "tancong" : (my.chiso.vatli+my.chiso.vatli/100*50+my.chiso.vatli/100*gym(id).level+my.chiso.phep+my.chiso.phep/100*50+my.chiso.phep/100*gym(id).level)/2,
              "giap" : (my.chiso.giap+my.chiso.giap/100*50+my.chiso.giap/100*gym(id).level),
              "chimang" : (my.chiso.chimang+my.chiso.chimang/100*50+my.chiso.chimang/100*gym(id).level),
              
          });  
        }
        game.gym.id = id;
        game.gym.time =+Date.now() + 300000;
        ketnoi();
        return false;
    }
    
if(game.gym.id >=1) {
    if(game.gym.id != id) {
        giaotiep(t('Hãy gặp lại ta khi cậu hoàn thành một trận chiến với ai đó.'));
        return null;
    } 
    
   


}
    
    
    
}

function chonrandpokemon(id,vp) {
    $("#npc_menu").html('');
    if(!soluong(vp)) {
        giaotiep(t('Bạn đã hết vật phẩm này rồi.'));
        return false;
    }
    if(+soluong(vp).soluong <=0) {
        giaotiep(t('Bạn đã hết vật phẩm này rồi.'));
        return false;
    }
  if(!pokemon(id))
 {
     giaotiep('Không tìm thấy pokemon này.');
     return false;
 }  
 
 mypokemon(addpkm(pokemon(id).img.split(".")[0])).chiso.pokeball=+vp;
giaotiep(t('Bạn nhận được')+' '+pokemon(id).ten+'');
   lichsu('sử dụng '+shopvatpham(vp).ten+' chọn pokemon '+pokemon(id).ten+' ');
                           vatpham(vp,-1);  
                        game_hanhtrang(2); 

}

function chonrandpokemon2(id,vp) {
    $("#npc_menu").html('');
    
  if(!pokemon(id))
 {
     giaotiep('Không tìm thấy pokemon này.');
     return false;
 }  
 
 mypokemon(addpkm(pokemon(id).img.split(".")[0])).chiso.pokeball=+vp;
giaotiep(t('Bạn nhận được')+' '+pokemon(id).ten+'');
   lichsu('sử dụng '+shopvatpham(vp).ten+' chọn pokemon '+pokemon(id).ten+' ');

}