function sudung(id) {
    var checksl = soluong(id);
    var checkvp = shopvatpham(id);
    
    if(+checksl.soluong <1) {
        giaotiep('Bạn đã hết vật phẩm rồi.');
       
    } else {
        if(nhiemvu(my.users.nhiemvu.id) !== null) {
    if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "dungvp" && nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon == id) {
     my.users.nhiemvu.song = +my.users.nhiemvu.song +1;
    }
}
if(checkvp.loai2 == "rand") {
    var kkkgkk334 = [];
    var listbuttonx = '';
    for(var q=0;q<data_pokemon.length;q++) {
        if(data_pokemon[q].type1 == shopvatpham(id).pokemon) {
      kkkgkk334.push(data_pokemon[q].id);  
        }
    }
    for(e=0;e<3;e++) {
        var rtkkrl63 = kkkgkk334[rand(0,kkkgkk334.length)];
listbuttonx+= '<b onclick="chonrandpokemon2('+pokemon(rtkkrl63).id+','+id+')" class="viptxt nutchat"><img height="32" src="/xml/nhanvat.php?nhanvat='+pokemon(rtkkrl63).img+'&nut=1"><br>'+pokemon(rtkkrl63).ten+'</b>';  
    }
    
giaotiep('Bạn muốn chọn pokemon gì ?');
$("#npc_menu").html(listbuttonx);
lichsu('sử dụng '+shopvatpham(id).ten+' ');    
                           vatpham(id,-1);
} else
if(checkvp.loai2 == "chorse") {
    var rtkkrl6 = shopvatpham(id).pokemon.split("-");
    var listbutton = '';
for(var i=0;i<rtkkrl6.length;i++) {
    if(pokemon(rtkkrl6[i]) !== null ) {
      listbutton+= '<b onclick="chonrandpokemon('+pokemon(rtkkrl6[i]).id+','+id+')" class="viptxt nutchat"><img height="32" src="/xml/nhanvat.php?nhanvat='+pokemon(rtkkrl6[i]).img+'&nut=1"><br>'+pokemon(rtkkrl6[i]).ten+'</b>';  
    }
}
giaotiep('Bạn muốn chọn pokemon gì ?');
$("#npc_menu").html(listbutton);
} else
if(checkvp.loai2 == "taykn") {
if(+my.users.pokemon <=0 ) {
    giaotiep(t('Vui lòng biến hình thành pokemon'));
    return false;
}
my.chiso.kinang = my.chiso.kinanggoc;

for(i=0;i<mypokemon(my.users.pokemon).kinang.length;i++) {
    mypokemon(my.users.pokemon).kinang[i].level =0;
    mypokemon(my.users.pokemon).kinang[i].exp =0;
    mypokemon(my.users.pokemon).kinang[i].expmax =0;
  
}
giaotiep(t('Toàn bộ điểm kĩ năng đã được tẩy.'));
      lichsu('sử dụng '+shopvatpham(id).ten+' ');
                           vatpham(id,-1);

} else
if(checkvp.loai2 == "taytn") {
if(+my.users.pokemon <=0 ) {
    giaotiep(t('Vui lòng biến hình thành pokemon'));
    return false;
}
my.chiso.tiemnang = my.chiso.tiemnanggoc;
my.chiso.sucmanh = 0;
my.chiso.thanphap = 0;
my.chiso.theluc = 0;

my.chiso.tritue = 0;
my.chiso.kheoleo = 0;
giaotiep(' '+t('Tẩy điểm tiềm năng thành công pokemon bạn có')+' '+my.chiso.tiemnang+' '+t('Điểm tiềm năng')+'  ');
      lichsu('sử dụng '+shopvatpham(id).ten+' ');
                           vatpham(id,-1);

} else
if(checkvp.loai2 == "open") {
           if(+my.users.pokemon <=0) {
               giaotiep(t('Vui lòng biến hình thành pokemon để mở rương'));
               return false;
           }
      var domo = [];
      var leveldo =0;
      if(+my.chiso.level <=9)leveldo=0;
      else if(+my.chiso.level >=10 && +my.chiso.level <=19)leveldo=10;
      else if(+my.chiso.level >=20 && +my.chiso.level <=29)leveldo=29;
      else if(+my.chiso.level >=30 && +my.chiso.level <=39)leveldo=30;
      else if(+my.chiso.level >=40 && +my.chiso.level <=49)leveldo=40;
      else if(+my.chiso.level >=50 && +my.chiso.level <=59)leveldo=50;
      else if(+my.chiso.level >=60 && +my.chiso.level <=69)leveldo=60;
      else leveldo =70;
      
      for(i=0;i<data_trangbi.length;i++) {
          if(+data_trangbi[i].level == leveldo) {
              domo.push({id : data_trangbi[i].id });
          }
      }
      
      if(domo.length <=0) {
          giaotiep(t('Hiện tại không có món đồ nào ở cấp độ của bạn ! Vui lòng thử lại sau !'));
          return false;
      }
      var iddo = rand(0,domo.length);
     
     var idvaaaa = rand(100000,99999999999);
               	my.trangbi.push(
		    {
		   "id" : idvaaaa,
		   "tile" : rand(1,40),
		   "pokemon" : 0,
		   "nangcap" : 0,
		   "chiso" : shoptrangbi(domo[iddo].id),
		 }
		 );	

           
           
            lichsu('sử dụng  '+shopvatpham(id).ten+' nhận được '+shoptrangbi(domo[iddo].id).ten+' + '+shopvatpham(id).cong+'   ');
                                vatpham(id,-1);
            chat(' '+userName+' sử dụng '+shopvatpham(id).ten+' nhận được '+shoptrangbi(domo[iddo].id).ten+' +'+shopvatpham(id).cong+'  ','CTG',0);
giaotiep(t(' bạn nhận được '+shoptrangbi(domo[iddo].id).ten+' + '+shopvatpham(id).cong+'  ') );
        }else

if(checkvp.loai2 == "khodo") {
            my.khodo.kho = +my.khodo.kho +1;
                    vatpham(id,-1);
            lichsu('sử dụng  '+shopvatpham(id).ten+' ');
giaotiep(t('Kho đồ đã được mở rộng thêm một ô'));
        }else
        if(checkvp.loai2 == "moruong") {
            my.khodo.ruong = +my.khodo.ruong +1;
                    vatpham(id,-1);
            lichsu('sử dụng  '+shopvatpham(id).ten+' ');
giaotiep(t('Mở rộng thêm một ô trống của hành trang.'));
        }else
        if(checkvp.loai == "kinang") {
           if(+my.users.pokemon <=0) {
               giaotiep('Hãy biến hình thành pokemon để học.');
               return false;
           }
           if(checkskill(checkvp.sach) !== null) {
               giaotiep('Bạn đã học kĩ năng này rồi.');
               return false;
           }
            if(+my.chiso.level <  +checkvp.level) {
               giaotiep('Pokemon phải đạt cấp độ '+checkvp.level+' mới có thể học.');
               return false;
           }
           c_giaotiep();
           game_pokemon(my.users.pokemon,2);
           addkn(checkvp.sach);
           giaotiep('Học kĩ năng thành công.');
                           vatpham(id,-1);
           lichsu('Học sách  '+shopvatpham(id).ten+' ');

          
       } else
       if(checkvp.loai == "pokeball") {
           
            pokeball(id);
            c_giaotiep();
            c_canvas();
            c_box();
       } else
       if(checkvp.loai2 == "auto") {
           if(+my.users.autotime > date()) {
               my.users.autotime = +my.users.autotime+ +checkvp.time;
           } else {
           my.users.autotime =+date() + +checkvp.time;    }
           my.users.tauto = 0;
           giaotiep('Sử dụng thành công.');
                      lichsu('Sử dụng '+shopvatpham(id).ten+' ');

                vatpham(id,-1);
       } else
       if(checkvp.loai == "thucan") {
           if(+my.users.level <  +checkvp.level) {
               giaotiep('Cấp độ nhân vật chính phải đạt '+checkvp.level+' mới có thể ăn vật phẩm này.');
               return false;
           }
           
if(+my.users.thucan.thoigian > date() && my.users.thucan.id == id) {
               my.users.thucan.thoigian = +my.users.thucan.thoigian+ +checkvp.time;
           } else {
           my.users.thucan.thoigian =+date() + +checkvp.time;   } 
            my.users.thucan.id=id;

          my.users.datathucan=1;
           my.users.thucan.ten = checkvp.ten;
          
           my.users.thucan.hoi =+checkvp.hp;   
           my.users.thucan.load=0;
           
           giaotiep('Sử dụng thành công.');
                                 lichsu('Sử dụng '+shopvatpham(id).ten+' ');

                vatpham(id,-1);
       }
       
       else 
              if(checkvp.loai == "trangbi") {
               	my.trangbi.push(
		    {
		   "id" : rand(100000,99999999999),
		   "tile" : rand(1,40),
		   "pokemon" : 0,
		   "active" : 1,
		   "nangcap" : 0,
		   "chiso" : shoptrangbi(checkvp.trangbi),
		 }
		 );	   
		
		 
                                        lichsu('Sử dụng '+shopvatpham(id).ten+' ');

                vatpham(id,-1);
giaotiep('Vào hành trang pokemon để kiểm tra.');
}


       
       else {
           giaotiep('Không thể sử dụng vật phẩm này.');
       }
        
        
                    game_hanhtrang(2); 
                    game_hanhtrang(2); 
  
    }
    
}