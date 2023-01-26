function sub_nap(){
    
    giaotiep('Đang nạp thẻ xin chờ...');
    $.nghia({
            	       	url         : '/t/postcard.php',
    	            	type        : 'POST',
    	            	data        : $("#admin").find("select, textarea, input").serialize(),
                  	ducnghia : function(result){
                  	    var data = json(result);
giaotiep(data.msg);
var napx2 = 1;
if(data.chia==1) {
    if(+data.code == 10000 ) {
        my.users.ruby = +my.users.ruby + 25*napx2;
    }
    if(+data.code == 20000 ) {
        my.users.ruby = +my.users.ruby + 50*napx2;
    }
    if(+data.code == 50000 ) {
        my.users.ruby = +my.users.ruby + 150*napx2;
    }
    if(+data.code == 100000 ) {
        my.users.ruby = +my.users.ruby + 450*napx2;
    }
    if(+data.code == 200000 ) {
        my.users.ruby = +my.users.ruby + 1000*napx2;
    }
    if(+data.code == 500000 ) {
        my.users.ruby = +my.users.ruby + 3500*napx2;
    }
    giaotiep('Tài khoản bạn có '+my.users.ruby+' Ruby. ');
}
    	            	}
    	        	});
}
function napthecao() {
    var am = '';
    am+= '<br><center>Nhập đầy đủ thông tin ! Nếu bạn nạp sai mệnh giá sẽ bị trừ 50% giá trị nạp.</center>';
    am+='<div id="admin">';
    am+='<br><div class="form-group"><label>Loại thẻ:</label><select class="form-control" name="telco"><option value="">Chọn loại thẻ</option><option value="VIETTEL">Viettel</option><option value="MOBIFONE">Mobifone</option>option value="VINAPHONE">Vinaphone</option><option value="GATE">Gate</option><option value="ZING">Zing</option></select></div>';
    am+='<div class="form-group"><label>Mệnh giá:</label><select class="form-control" name="amount"><option value="">Chọn mệnh giá</option><option value="10000">10.000 - 25 ruby.</option><option value="20000">20.000 - 70 ruby</option><option value="50000">50.000 - 150 ruby</option><option value="100000">100.000 - 450 ruby</option>option value="200000">200.000 - 1000 ruby</option><option value="500000">500.000 - 3500 ruby</option></select></div>';
    am+='<div class="form-group"><label>Số seri:</label><input type="text" class="form-control" name="serial"/></div>';
    am+='<div class="form-group"><label>Mã thẻ:</label><input type="text" class="form-control" name="code"/></div>';
    am+='<center><div class="canvas_menu" onclick="sub_nap()">Nạp thẻ</div></center>';
    am+='</div>';
    
    canvas('Nạp thẻ',am);
}

function game_qua(id) {
    
    if(+id ==10) {
        
        if(my.qua.lv10 === undefined) {
            my.users.xu =  +my.users.xu + 100000;
            my.qua.lv10=1;
            giaotiep(t('Bạn nhận được 100.000 xu'));
        } else {
            giaotiep(t('Bạn đã nhận quà rồi.'));
        }
        
    }
    if(+id ==20) {
        
        if(my.qua.lv20 === undefined) {
            my.users.ruby =  +my.users.ruby + 20;
            my.qua.lv20=1;
            giaotiep(t('Bạn nhận được 20 ruby'));
        } else {
                     giaotiep(t('Bạn đã nhận quà rồi.'));
   
        }
        
    }
}
function game_vongquay() {
   
    c_giaotiep();
        c_box();
        c_canvas();
document.getElementById('menu_nho').style.display = "block";
  $('#menu_nho').html('<b><center><font color="red" onclick="cl()">[ĐÓNG]</font></center></b><center><div id="phanthuong" class="none"></div><div id="error" class="error none">Bạn không có vé quay may mắn</div><ul class="play"><li class="mm m1 box"><font size="1">Ruby</font></li><li class="mm m2 box"><img src="/sql/item/Small2090.png"></li><li class="mm m3 box"><img src="/sql/item/giayvun.png" ></li><div><li class="mm m8 box"><font size="1">Xu</font></li><span class="canvas_menu" id="quay" onclick="quaynao()" style="margin-top:20px;margin-right: 11px;margin-left: 20px; width: 56.43px">Quay</span>	<li class="mm m4 box"><img src="/sql/item/Small1194.png" ></li></div><li class="mm m7 box"><img src="/sql/item/Small1133a.png"></li><li class="mm m6 box"><font size="1"><img src="/sql/item/sach6.png" ></font></li><li class="mm m5 box active"><img src="/sql/item/Small2091.png"></li><div class="result"></div></ul></center>');
}
var b = 0;
		var m = 0;
		var m_reset = 0;
		function quaynao(){
			$('#hide').slideUp();
			$('#error').fadeOut();
			$('#phanthuong').fadeOut();
			$('.active').removeClass('active');
			
				       if(soluong(46) === null ) {
				         giaotiep(t('Bạn không có vé quay may mắn'));  
				         return false;
				       }
vatpham(46,-1);
						$('#quay').attr('onclick','doi').html('<span class="cb_end"><span class="cb_ttl white">Chờ</span></span>');
			m = 0;
			b = 0;
			m_reset = 0;
			////adđ////
		var mm = rand(1,5000)	
		var stt =0;
		if(mm <=10) {
		    stt = 6;
		    vatpham(44,1);
		}
		if(mm >=11 && mm <=50) {
		    stt = 3;
		    		    vatpham(43,1);
   lichsu(' '+shopvatpham(43).ten+' từ VQMM ');
   chat(' '+userName+' tham gia vòng quay may mắn nhận được '+shopvatpham(43).ten+'  ','CTG',0);
		}
		if(mm >=51 && mm <=500) {
		    stt = 4;
		    		    		    vatpham(40,1);
   lichsu(' '+shopvatpham(40).ten+' từ VQMM ');
   chat(' '+userName+' tham gia vòng quay may mắn nhận được '+shopvatpham(40).ten+'  ','CTG',0);

		}
		if(mm >=501 && mm <=1000) {
		    stt = 2;
		    		   ruby(rand(1,3));
   lichsu(' ít ruby  từ VQMM ');

		}
		if(mm >=1001 && mm <=2000) {
		    stt = 1;
		    		xu(rand(10000,300000));
   lichsu(' ít xu từ VQMM ');

		}
		if(mm >=2001 && mm <=2500) {
		    stt = 7;
		    		    		    vatpham(37,1);
   lichsu(' '+shopvatpham(37).ten+' từ VQMM ');

		}
		if(mm >=2001 && mm <=4500) {
		    stt = 5;
		    		 vatpham(42,1);
   lichsu(' '+shopvatpham(42).ten+' từ VQMM ');
   chat(' '+userName+' tham gia vòng quay may mắn nhận được '+shopvatpham(42).ten+'  ','CTG',0);

		}
		if(mm >=4501) {
		    stt = 8;
		    		    		 vatpham(41,1);
   lichsu(' '+shopvatpham(41).ten+' từ VQMM ');
   chat(' '+userName+' tham gia vòng quay may mắn nhận được '+shopvatpham(41).ten+'  ','CTG',0);

		}
			
			///duc////
			
			
			wheel(100,stt);
					
				
		

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
        function info_wild(id) {
            var ac='';
if(!pokemon(id)) {giaotiep('Không tìm thấy pokemon này.');return false;}
var tt =0;var countxp = 0;for(var i=0;i<level_my.length;i++) {countxp = countxp+  +level_my[i]; }
if(pokemon(id).tangtruong == "Erratic") tt =1;else if(pokemon(id).tangtruong == "Fast") tt =1.3;else if(pokemon(id).tangtruong == "Medium Fast") tt =1.5;else if(pokemon(id).tangtruong == "Medium Slow") tt =1.7;else if(pokemon(id).tangtruong == "Slow") tt =2.0;else tt = 2.5;      
var porw = +pokemon(id).giap + +pokemon(id).hp + +pokemon(id).mp + +pokemon(id).tocdo + +pokemon(id).giap + +pokemon(id).phep + +pokemon(id).vatli;
         ac+= '<span style="left:10%;position: absolute">';
            ac+='<center><font color="red">'+t('Chỉ số cơ bản')+'</font></center>';  
ac+=''+t('HP')+' : '+bar(pokemon(id).hp,porw,'f00')+'';
ac+='<br> '+t('Phép')+' : '+bar(pokemon(id).phep,porw,'1b0eda')+' ';
ac+='<br> '+t('Vật lí')+' : '+bar(pokemon(id).vatli,porw,'0095ff')+' ';
ac+='<br> '+t('Giáp')+' : '+bar(pokemon(id).giap,porw,'795548')+' ';
ac+='<br> '+t('MP')+' : '+bar(pokemon(id).mp,porw,'cddc39')+' ';
ac+='<br> '+t('Tốc độ')+' : '+bar(pokemon(id).tocdo,porw,'4caf50')+' ';
ac+='<br> '+t('Chí mạng')+' : '+pokemon(id).chimang+' ';
ac+='<br> '+t('Xuyên giáp')+' : '+pokemon(id).xuyengiap+' ';
ac+='<br> '+t('Thông số cơ bản')+' : '+porw+' ';
ac+='<br> '+t('Tốc độ phát triển')+': '+pokemon(id).tangtruong+' ';
ac+='<br> '+t('Tổng kinh nghiệm phát triển')+': '+tron(countxp*tt)+' ';
ac+='<br> '+t('Hệ')+': '+type(id)+' ';
ac+='<center><font color="red">'+t('Tiến hóa')+'</font></center>';  

for(var i=0;i<data_tienhoa.length;i++) {
    if(data_tienhoa[i].pokemon == id && data_tienhoa[i].da == "") {
  ac+=''+pokemon(id).ten+'<img height="32" src="/xml/nhanvat.php?nhanvat='+pokemon(id).img+'&nut=1"> => <b onclick="info_wild('+data_tienhoa[i].new+')">'+pokemon(data_tienhoa[i].new).ten+'<img height="32" src="/xml/nhanvat.php?nhanvat='+pokemon(data_tienhoa[i].new).img+'&nut=1"></b> Lv.'+data_tienhoa[i].level+'<br>';      
    }
}

ac+='<center><font color="red">'+t('Đánh giá')+'</font></center>';  
ac+='Độ khó :';
ac+=''+porw <100 ? 'Rất khó.' : ''+' '+porw >=100 && porw <200 ? 'Khó' : ''+' '+porw >=200 && porw <400 ? 'Trung bình' : ''+' '+porw >=400 && porw <=600 ? 'Dễ' : ''+' '+porw >=600 ? 'Rất dễ' : ''+' ';
ac+='<br>Nơi xuất hiện :  ';
var vitri_xh = [];
for(var i=0;i<quai.length;i++) {
    if(quai[i].img == pokemon(id).img) {
        if(vitri_xh.length <=0) {
                         vitri_xh.push({id : quai[i].id , map : quai[i].map});
        }
        for(i2=0;i<vitri_xh.length;i2++) {
          if(vitri_xh[i2].id != quai[i].id && vitri_xh[id2].map != quai[i].map) {
             vitri_xh.push({id : quai[i].id , map : quai[i].map});
          }    
        }
        
    }
}
if(vitri_xh.length >=1) {
    for(i=0;i<vitri_xh.length;i++) {
        if(mapquai(vitri_xh[i].id)) {
ac+='<br>+ '+mapquai(vitri_xh[i].id).map+' - level: '+mapquai(vitri_xh[i].id).level+'  ';  
            
        }
    }
    
} else {
    ac+=t('<br> Chưa có vị trí chính xác của pokemon này.');
}

ac+='</span>';

box(t('Poke DEX : '+pokemon(id).ten+'<br> <img height="32" src="/xml/nhanvat.php?nhanvat='+pokemon(id).img+'&nut=1"> '),''+t('Thông tin')+':info_wild('+id+');'+t('Quay lại')+':wild(1)',ac); 

        }
    function wild(id) {
    var ac='';


        ac+=' <div class="border row"> <input id="idpkm" class="form-control" type="text" value="" onkeydown="if(event.keyCode == 13) timkiempkm();" style="width: 70%;" placeholder="VD:113, grass, pikachu, slow..."> <div class="canvas_menu" onclick="timkiempkm()">'+t('TÌM')+'</div> </div>';
                    
     
     ac+='<div id="ketqua"></div>';
            
         
        
       box(t('Bạn cần tra cứu thông tin pokemon'),''+t('Tìm kiếm')+':wild(2)',ac); 
     
    }   
    
    function timkiempkm() {
        var list = '';
        var tukhoa = $('#idpkm').val().charAt(0).toUpperCase() + $('#idpkm').val().slice(1);
 list= data_pokemon.filter(function(person) {
     var code3 = person.id.indexOf(tukhoa) > -1;
      code3+=person.ten.indexOf(tukhoa) > -1;
      code3+=person.type1.indexOf(tukhoa) > -1;
      code3+=person.type2.indexOf(tukhoa) > -1;
       code3+=person.tangtruong.indexOf(tukhoa) > -1;
  
  return code3;
});

        var code2 = ''+t('Tìm thấy')+' <font color="red">'+list.length+'</font> '+t('kết quả với từ khóa')+' <font color="blue">'+$('#idpkm').val()+'</font><hr>';

for(var k=0;k<(list.length >10 ? '10' : list.length);k++) {
 code2+='<div class="border" onclick="info_wild('+list[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img height="32" src="/xml/nhanvat.php?nhanvat='+list[k].img+'&nut=1"></div>#'+list[k].id+' '+list[k].ten+' '+type(list[k].id)+' </div> ';
    
}
          $('#ketqua').html(code2);

    
    }
        
function bxh(id) {
    
    var ac='';

            if(id==1) {
        
         mmo.sort(function(a, b){return b.xu -  a.xu });
 
   for(k=0;k< mmo.length;k++) {
       if(k<20) {
           if(+mmo[k].id >=100) {
ac+='<div class="border" onclick="mmouser_info('+mmo[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img height="32" src="/xml/nhanvat.php?nhanvat='+mmo[k].skin+'&nut=1"></div>'+mmo[k].username+' - '+tron(mmo[k].xu)+' XU </div> ';
}
}
   }
                
            }
            
            if(id==2) {
        
         mmo.sort(function(a, b){return b.ruby -  a.ruby });
 
   for(k=0;k< mmo.length;k++) {
       if(k<20) {
           if(+mmo[k].id >=100) {
ac+='<div class="border" onclick="mmouser_info('+mmo[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img height="32" src="/xml/nhanvat.php?nhanvat='+mmo[k].skin+'&nut=1"></div>'+mmo[k].username+' - '+tron(mmo[k].ruby)+' RUBY </div> ';
}
}
   }
                
            }
            
            if(id==3) {
        
         mmo.sort(function(a, b){return b.level -  a.level || b.exp -  a.exp });
 
   for(k=0;k< mmo.length;k++) {
       if(k<20) {
           if(+mmo[k].id >=100) {
ac+='<div class="border" onclick="mmouser_info('+mmo[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img height="32" src="/xml/nhanvat.php?nhanvat='+mmo[k].skin+'&nut=1"></div>'+mmo[k].username+' - lv.'+tron(mmo[k].level)+' + '+tron(mmo[k].exp)+'/'+tron(mmo[k].expmax)+'  </div> ';
}
}
   }
                
            }
            

       box(t('Tích cực luyện tập để được vinh danh nhé !'),''+t('TOP XU')+':bxh(1);'+t('TOP RUBY')+':bxh(2);'+t('TOP CẤP')+':bxh(3)',ac); 

}

function game_co(id) {
    c_canvas();
    c_box();
    my.users.co = id;
    c_giaotiep();
}
function game_nhiemvu() {
    	$('#box_center').html('đang cập nhậttttttt');	

}


function gamedocvp(id) {
    if(shopvatpham(id) === null) {
        giaotiep(t('không tồn tại vật phẩm này.'));
        
    } else {
      giaotiep(''+shopvatpham(id).ten+'*'+soluong(id).soluong+' <br> '+shopvatpham(id).thongtin+'  ');  
      
      	$("#npc_menu").html('<b onclick="sudung('+id+',\'1\')" class="viptxt nutchat">'+t('Sử dụng')+'</b><b onclick="gamkskfsd('+id+')" class="viptxt nutchat">'+t('Cất')+'</b><b onclick="vutbo('+id+')" class="viptxt nutchat">'+t('Vứt bỏ')+'</b><b onclick="game_hanhtrang(6,'+id+')" class="viptxt nutchat">'+t('Bán')+'</b>');
    }
}

function vutbo(id) {
    if(+soluong(id).soluong  <1) {
        giaotiep(''+t('Không thể vứt')+'');
        return false;
    }
    if(+soluong(id).soluong ==1) {
        mapvp(id,1);
        lichsu('Vứt bỏ vật phẩm '+shopvatpham(id).ten+'*1 ra đất. ');
        soluong(id).soluong=0;
        c_giaotiep();
        c_box();
        c_canvas();
    } else {
        menu_vut(id);
    }
}

function game_doiten() {
    c_giaotiep();
        c_box();
        c_canvas();
document.getElementById('menu_nho').style.display = "block";
  $('#menu_nho').html('<center>'+t('Tên bạn là gì ?')+' : <input id="tennew" class="form-control" type="text" value="" style="width: 50%;" onFocus="this.select()" autofocus="autofocus"> <button class="btn btn-primary" onclick="sub_doiten()" id="nutban">'+t('Đổi tên')+'</button></b> <button class="btn btn-primary" onclick="cl()" id="nutban">'+t('Hủy')+'</button></b></center> ');
}

function sub_doiten() {
    if(+soluong(12) === null) {
        giaotiep(''+t('Bạn cần vật phẩm thẻ đổi tên')+'');
        return false;
    } 
    
    if($('#tennew').val().length <=5) {
        giaotiep(''+t('Tên nhân vật quá ngắn.')+'');
        return false;
    }
    if($('#tennew').val().length >17) {
        giaotiep(''+t('Tên nhân vật quá dài')+'');
        return false;
    }

    
    
    cl();
var input = $('#tennew').val().replace(/\s/g, '_');
//make string lower
input = input.toLowerCase();
    my.users.username = input;
    userName = my.users.username;
    giaotiep(t('Đổi tên thành công.'));
    vatpham(12,-1);
    lichsu('Đổi tên thành '+input+' mất '+shopvatpham(12).ten+'*1. ');
sql();
}

function menu_vut(id) {
    c_giaotiep();
        c_box();
        c_canvas();
document.getElementById('menu_nho').style.display = "block";
  $('#menu_nho').html('<center>'+shopvatpham(id).ten+'*'+soluong(id).soluong+' <Br><input id="soluong" class="form-control" type="number" value="0" style="width: 50%;"> <button class="btn btn-primary" onclick="vut('+id+')" id="nutban">'+t('Bỏ ra đất')+'</button></b> <button class="btn btn-primary" onclick="cl()" id="nutban">'+t('Hủy')+'</button></b></center> ');
}

function vut(id) {
    if($('#soluong').val() > +soluong(id).soluong) {
      giaotiep(t('Vui lòng xem lại số lượng.'));
        return false;  
    }
    if($('#soluong').val() <1) {
        giaotiep(t('Bạn chưa nhập số lượng.'));
        return false;
    }
    mapvp(id,$('#soluong').val());
    vatpham(id,-$('#soluong').val());
       lichsu('Vứt  '+shopvatpham(id).ten+'*'+$('#soluong').val()+'. ');

    cl();
    ketnoi();
}


function game_xemvp(id) {
    if(shopvatpham(id).hienthi !=="0") {
        giaotiep(t('Không tìm thấy vật phẩm này'));
    } else {
        giaotiep(''+shopvatpham(id).ten+' <br>'+shopvatpham(id).thongtin+' <br> Giá : '+shopvatpham(id).gia+' '+shopvatpham(id).loaitien+'  ');
              	$("#npc_menu").html('<b onclick="game_muavp('+id+')" class="viptxt nutchat">'+t('Mua')+'</b>');

    }
}

function game_muavp(id) {
    var dklsdkf;
    var dkdlgdlgldf;
    if(shopvatpham(id).loaitien == "giayvun") {
         dklsdkf = +soluong(40).soluong;
         dkdlgdlgldf = 3;
    } else
    if(shopvatpham(id).loaitien == "ruby") {
         dklsdkf = +my.users.ruby;
         dkdlgdlgldf = 1;
    } else {
        dkdlgdlgldf =2;
         dklsdkf = +my.users.xu;
    }
    if(+shopvatpham(id).hienthi !==0) {
        giaotiep('Không tìm thấy vật phẩm này');
    } else
    if(dklsdkf < +shopvatpham(id).gia) {
        giaotiep(t('Bạn không đủ tiền để thanh toán món hàng này.'));
    } else {
        if(nhiemvu(my.users.nhiemvu.id) !== null) {
    if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "muavp" && nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon == id) {
     my.users.nhiemvu.song = +my.users.nhiemvu.song +1;
    }
}
        giaotiep(t('thanh toán thành công.'));
        vatpham(shopvatpham(id).id,1);
        lichsu('mua '+shopvatpham(id).ten+'*1 mất '+shopvatpham(id).gia+' '+shopvatpham(id).loaitien+' ');
        $("#npc_menu").html('<b onclick="game_muavp('+id+')" class="viptxt nutchat">'+t('Mua nữa')+'</b>');
        if(dkdlgdlgldf==3) {
            vatpham(40,-+shopvatpham(id).gia);
        } else
        if(dkdlgdlgldf==1) {
            ruby(-+shopvatpham(id).gia);
        } else {
           xu(-+shopvatpham(id).gia);
        }

    }
}

function game_benhvien() {
    if(+my.users.pokemon <1) {
        giaotiep(t('Hãy biến hình thành pokemon để hồi phục.'));
    } else if(my.users.xu <=100) {
        giaotiep(t('Bạn phải có 100 xu để hồi phục'));
    } else {
        giaotiep(t('Hồi phục thành công.'));
        my.chiso.hp = my.chiso.hpfull;
        my.chiso.mp = my.chiso.mpfull;
    }
}


function game_dan(id,num) {
    if(sd(id) === null) {
        giaotiep(t('Lỗi chọn kĩ năng'));
    } else {
        giaotiep(t('Dán thành công.'));
        
				if(updatekinang(num) !== null ) {
					updatekinang(num).id = id;
				} else {
				 my.setkinang.push({ vitri : num , id : id    });
mypokemon(my.users.pokemon).setkinang.push({ vitri : num , id : id    });
				}
			
    }
}

function game_chorse(idx) {
    my.attack.vitri = updatekinang(idx).id;
    if(my.click.id !==0 && getnpc(my.click.id) !== null && my.click.type =="pokemon" ) {
            if(+getnpc(my.click.id).hp >=1) {
                att(my.click.id);
               
                for (var i=0; i<my.danhlan.length; i++) {
           if(i <=-1 && my.danhlan[i].id != my.click.id && getnpc( my.danhlan[i].id) !== null) {
               att(my.danhlan[i].id);
           }
	 }   
               
            } }
            
            if(my.click.id !==0 && getuser(my.click.id) !== null && my.click.type =="users" ) {
            if(getusers(my.click.id).hp >=1) {
                pvp(my.click.id);
               
            } }
}

function game_hoisinh(n) {
    if(n===0) {
      if(my.users.set ===0) {
          giaotiep('Vui lòng đợi '+(my.chiso.hs- date())+' milis nữa');
      } else {
          c_giaotiep();
          $("#npc_menu").html('');
          my.users.set=0;
          my.chiso.hp = +my.chiso.hpfull;
 } 
    }
    
    if(n==1) {
      if(+my.users.xu < 100) {
          giaotiep(t('Bạn không có đủ 100 xu.'));
      } else {
          c_giaotiep();
          $("#npc_menu").html('');
          my.chiso.hp = +my.chiso.hpfull/2;
          xu(-100);
          lichsu('Hồi sinh mất 100 xu');
 } 
    }
    
    if(n==2) {
      if(+my.users.ruby < 1) {
          giaotiep(t('Bạn không có đủ 1 ruby.'));
      } else {
          c_giaotiep();
          $("#npc_menu").html('');
          my.chiso.hp = +my.chiso.hpfull;
          ruby(-1);
          lichsu('Hồi sinh mất 1 ruby');
 } 
    }
    
    
}

function moipk(id,cuoc) {
    if(getusers(id) === null) {
        giaotiep(t('Người chơi không online.'));
        return false;
    }
    if(my.users.pokemon <=0) {
        giaotiep(t('Hãy biến hình thành pokemon để tiếp tục'));
    } else
    if(my.chiso.hp <=0) {
        giaotiep(t('Bạn đã hết HP'));
        return false;
    }
    
    if(+getusers(id).mapid != +mapID) {
        giaotiep(t('Người chơi này không ở cùng bản đồ với bạn'));
        return false;
    } 
    if(cuoc > +my.users.xu) { 
        giaotiep(t('Bạn không có đủ xu để cược.')); 
        return false;
    }
    if(cuoc <=10) {
        giaotiep(t('Số xu cược phải lớn hơn 10 xu'));
        return false;
    }
    if(my.pk.timemoi > date()) {
        giaotiep('Vui lòng chờ '+(my.pk.timemoi - date())+'milis nữa. ');
        return false;
    }
      my.pk.timemoi = date()+15000;
            ws.send("pvp_moi:"+userID+"^"+id+"^"+cuoc+"");

    giaotiep(t('Mời thành công.Vui lòng chờ đối thủ chấp nhận.'));
}

function pvp_dongy(id,cuoc) {
    if(id == userID) {
        giaotiep(t('Người chơi không online.'));
        return false;
    }
    if(my.users.pokemon <=0) {
        giaotiep(t('Hãy biến hình thành pokemon để tiếp tục'));
    } else
    if(my.chiso.hp <=0) {
        giaotiep(t('Bạn đã hết HP'));
        return false;
    }
    if(getusers(id) === null) {
        giaotiep(t('Người chơi không online.'));
        return false;
    }
    
    if(+getusers(id).mapid != +mapID) {
        giaotiep(t('Người chơi này không ở cùng bản đồ với bạn'));
        return false;
    } 
    if(cuoc > +my.users.xu) { 
        giaotiep(t('Bạn không có đủ xu để đồng ý.')); 
        return false;
    }
    
 		ws.send("pvp_ok:"+id+"^"+userID+"^"+cuoc+"");
 c_giaotiep();
 ketnoi();

}

function game_docnv() {
     if(nhiemvu(my.users.nhiemvu.id) !== null) {
         giaotiep(nhiemvu(my.users.nhiemvu.id).ducnghia.text);
$("#npc_menu").html('<b onclick="game_nhannv()" class="viptxt nutchat">'+t('Nhận')+'</b>');

     } else {
         giaotiep(t('Lỗi tình trạng dữ liệu'));
     }
}

function game_nhannv() {
   if(nhiemvu(my.users.nhiemvu.id) !== null) {
       if(my.users.nhiemvu.code!=0) {
           giaotiep(t('Hình như có nhiệm vụ mình quên chưa làm.'));
           return false;
       }
            my.users.nhiemvu.code =1;
         my.users.nhiemvu.tennpc =nhiemvu(my.users.nhiemvu.id).npcname;

            my.users.nhiemvu.npc =nhiemvu(my.users.nhiemvu.id).ducnghia.npc;
            my.users.nhiemvu.ten =nhiemvu(my.users.nhiemvu.id).ducnghia.ten;
            my.users.nhiemvu.text =nhiemvu(my.users.nhiemvu.id).ducnghia.text;
            my.users.nhiemvu.song =0;
            my.users.nhiemvu.can =+nhiemvu(my.users.nhiemvu.id).ducnghia.can;
           giaotiep(t('Nhận nhiệm vụ thành công. Hãy nhanh chóng hoàn thành để nhận thưởng nhé.'));
       
       
       
         

     } else {
         giaotiep('Lỗi tình trạng dữ liệu');
     }
} 

function game_tranv() {
   if(nhiemvu(my.users.nhiemvu.id) !== null) {
       if(my.users.nhiemvu.code!=1) {
           giaotiep(t('Hình như mình chưa làm nhiệm vụ gì..'));
           return false;
       } 
       
        if(my.users.nhiemvu.song < my.users.nhiemvu.can) {
           giaotiep(t('Quên mất là mình chưa hoàn thành nhiệm vụ.'));
           return false;
       } 
       if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "item") {
        if(soluong(nhiemvu(my.users.nhiemvu.id).ducnghia.item.split(":")[0])) {
        soluong(nhiemvu(my.users.nhiemvu.id).ducnghia.item.split(":")[0]).soluong = +soluong(nhiemvu(my.users.nhiemvu.id).ducnghia.item.split(":")[0]).soluong - +nhiemvu(my.users.nhiemvu.id).ducnghia.can;
  
        }
    }
    if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "tangqua") {
        if(soluong(nhiemvu(my.users.nhiemvu.id).ducnghia.item.split(":")[0])) {
        soluong(nhiemvu(my.users.nhiemvu.id).ducnghia.item.split(":")[0]).soluong = +soluong(nhiemvu(my.users.nhiemvu.id).ducnghia.item.split(":")[0]).soluong - +nhiemvu(my.users.nhiemvu.id).ducnghia.can;
  
        }
    }
       my.users.msg = '';
       for (var i=0; i<nhiemvu(my.users.nhiemvu.id).ducnghia.vatpham.split(",").length; i++) {
 
if(nhiemvu(my.users.nhiemvu.id).ducnghia.vatpham.split(",")[i].split(":")[0] >0) {
 vatpham(nhiemvu(my.users.nhiemvu.id).ducnghia.vatpham.split(",")[i].split(":")[0],nhiemvu(my.users.nhiemvu.id).ducnghia.vatpham.split(",")[i].split(":")[1]);
   my.users.msg+=''+shopvatpham(nhiemvu(my.users.nhiemvu.id).ducnghia.vatpham.split(",")[i].split(":")[0]).ten+'*'+nhiemvu(my.users.nhiemvu.id).ducnghia.vatpham.split(",")[i].split(":")[1]+',';
 
	 }   
       }
        giaotiep(' '+nhiemvu(my.users.nhiemvu.id).ducnghia.text2+' <br>  '+t('Bạn nhận được')+' : <br> '+nhiemvu(my.users.nhiemvu.id).ducnghia.xu+' '+t('xu')+','+nhiemvu(my.users.nhiemvu.id).ducnghia.ruby+' ruby, '+nhiemvu(my.users.nhiemvu.id).ducnghia.exp+'xp. <br> '+my.users.msg+' ');
         my.users.xu = +my.users.xu + +nhiemvu(my.users.nhiemvu.id).ducnghia.xu ;
         my.users.ruby = +my.users.ruby + +nhiemvu(my.users.nhiemvu.id).ducnghia.ruby ;
         my.users.exp = +my.users.exp + +nhiemvu(my.users.nhiemvu.id).ducnghia.exp ;


            my.users.nhiemvu.code =0;
            my.users.nhiemvu.npc =0;
            my.users.nhiemvu.id =+my.users.nhiemvu.id +1 ;
      
            
          
       
       
       
         

     } else {
         giaotiep('Lỗi tình trạng dữ liệu');
     } 
}

function dochd(id) {
                $('#hd_'+id).toggle('fast','linear');  

}

function game_hanhtrang(id,idvp) { 
    var ac ='';
    if(id==9) {
        for(var i=0;i<huongdan.length;i++) {
     ac+='<div class=" menu list" onclick="dochd('+huongdan[i].id+')">>> '+t(huongdan[i].title)+' <<</div><div class="border" id="hd_'+huongdan[i].id+'" style="display:none;">'+t(huongdan[i].text)+'</div> ';
        }
    }
    if(id==10) {
my.kethu.sort(function(a, b){return b.tg -  a.tg  });

        for(var i=0;i<my.kethu.length;i++) {
            if(getusers(my.kethu[i].id) !== null) {
                my.kethu[i].skin = getusers(my.kethu[i].id).skin;
                my.kethu[i].name = getusers(my.kethu[i].id).username;
                var clor_x = 'green';
            } else {
                var clor_x = 'red';
            }
            ac+='<div class="border" onclick="mmouser_info('+my.kethu[i].id+',1)"> <div  class="showitem" style="border: 2px solid;"><img height="32" src="/xml/nhanvat.php?nhanvat='+my.kethu[i].skin+'&nut=1"></div><font color="'+clor_x+'">'+my.kethu[i].name+' ('+my.kethu[i].thoigian+')</font></div> ';
        }
    }
    if(id==8) {
        for(var i=0;i<my.banbe.length;i++) {
            if(getusers(my.banbe[i].id) !== null) {
                my.banbe[i].skin = getusers(my.banbe[i].id).skin;
                my.banbe[i].name = getusers(my.banbe[i].id).username;
                var clor_x = 'green';
            } else {
                var clor_x = 'red';
            }
            
     ac+='<div class="border" onclick="mmouser_info('+my.banbe[i].id+',1)"> <div  class="showitem" style="border: 2px solid;"><img height="32" src="/xml/nhanvat.php?nhanvat='+my.banbe[i].skin+'&nut=1"></div><font color="'+clor_x+'">'+my.banbe[i].name+'</font></div> ';
        }
    }
    if(id==7) {
     ac+='<div class="border" onclick="game_co(2)"> <div  class="showitem" style="border: 2px solid;"><div style="background: url(/sql/load/img/app/img.png) no-repeat top left; width: 12px; height: 12px;background-position: 0 -36px;"></div></div>'+t('Đỏ')+'</div> ';
    ac+='<div class="border" onclick="game_co(3)"> <div  class="showitem" style="border: 2px solid;"><div style="background: url(/sql/load/img/app/img.png) no-repeat top left; width: 12px; height: 12px;background-position: 0 -72px;"></div></div> '+t('Xanh lá')+'</div> ';
    ac+='<div class="border" onclick="game_co(4)"> <div  class="showitem" style="border: 2px solid;"><div style="background: url(/sql/load/img/app/img.png) no-repeat top left; width: 12px; height: 12px;background-position: 0 -108px;"></div></div>'+t('Xanh dương')+'</div> ';
    ac+='<div class="border" onclick="game_co(5)"> <div  class="showitem" style="border: 2px solid;"><div style="background: url(/sql/load/img/app/img.png) no-repeat top left; width: 12px; height: 12px;background-position: 0 -144px;"></div></div>'+t('Vàng')+'</div> ';
    ac+='<div class="border" onclick="game_co(6)"> <div  class="showitem" style="border: 2px solid;"><div style="background: url(/sql/load/img/app/img.png) no-repeat top left; width: 12px; height: 12px;background-position: 0 -180px;"></div></div>'+t('Vàng cam')+'</div> ';
    ac+='<div class="border" onclick="game_co(7)"> <div  class="showitem" style="border: 2px solid;"><div style="background: url(/sql/load/img/app/img.png) no-repeat top left; width: 12px; height: 12px;background-position: 0 -216px;"></div></div>'+t('Đồ sát')+'</div> ';
    ac+='<div class="border" onclick="game_co(0)"> <div  class="showitem" style="border: 2px solid;"></div>'+t('Tháo cờ')+'</div> ';
    }
    if(id==6) {
        c_giaotiep();
ac+= '<center>'+shopvatpham(idvp).ten+'*'+soluong(idvp).soluong+'</center>';
ac+=''+t('Số lượng')+' : <input id="soluong" class="form-control" type="number" value="0" style="width: 50%;"> <br> ';
ac+=''+t('Tên người nhận')+' : <input id="nguoinhan" class="form-control" type="text" value="" style="width: 50%;"> <br> ';
ac+=''+t('Giá xu')+' : <input id="xu" class="form-control" type="text" value="0" style="width: 50%;"> <br> ';
ac+=''+t('Giá ruby')+' : <input id="ruby" class="form-control" type="text" value="0" style="width: 50%;"> <br> ';
ac+='<center><button class="btn btn-primary" onclick="ban1('+idvp+')" id="nutban">'+t('Bán')+'</button></center>';

    }
    
    if(id==1) {
        
        if(my.users.nhiemvu.code ==1) {
            if(nhiemvu(my.users.nhiemvu.id) !== null) {
        ac+= '<center>'+nhiemvu(my.users.nhiemvu.id).ducnghia.ten+'</center><br>';
       // ac+= '<br>- '+nhiemvu(my.users.nhiemvu.id).ducnghia.text+'';
       
        if(my.users.nhiemvu.can > my.users.nhiemvu.song) {
      
      if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai =="pokemon") {
          ac+='- '+t('Tới')+' <b>'+t(getmap(checkquai(nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon).map).ten)+'</b> '+t('Hạ gục')+' '+my.users.nhiemvu.can+'  <b onclick="info_wild('+checkquai(nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon).img.split(".")[0]+')">'+checkquai(nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon).name+'</b>.   ';
      }
      
      if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai =="map") {
          ac+='- '+t('Bạn hãy đi tới ')+' <b>'+t(getmap(nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon).ten)+'</b>   ';
      }
      
      if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai =="level") {
          ac+='- '+t('Trình độ của bạn còn quá thấp, hãy tăng cấp độ nhân vật chính lên cấp ')+'  <b>'+nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon+'</b>   ';
      }
      
      if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai =="bat") {
          ac+='- '+t('Bắt pokemon bất kì, bạn có chạm vào các pokemon trên bãi cỏ, sau đó vào rương đồ chọn bóng pokemon để sử dụng. HP Pokemon bãi cỏ càng thấp tỉ lệ bắt càng cao.')+'   ';
      }
      
      if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai =="muavp") {
          ac+='- '+t('Bạn hãy vào cửa hàng mua vật phẩm')+' <b>'+shopvatpham(nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon).ten+'</b><font color="red">*'+nhiemvu(my.users.nhiemvu.id).ducnghia.can+'</font>   ';
      }
      
      if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai =="dungvp") {
          ac+='- '+t('Bạn hãy vào hành trang sử dụng')+' <b>'+shopvatpham(nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon).ten+'</b><font color="red">*'+nhiemvu(my.users.nhiemvu.id).ducnghia.can+'</font>   ';
      }
      
      if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai =="gym") {
          ac+='- '+nhiemvu(my.users.nhiemvu.id).ducnghia.text+'   ';
      }
       
      if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai =="item") {
          ac+='- '+t('Tới')+' <b>'+t(getmap(checkquai(nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon).map).ten)+'</b> '+t('Hạ gục')+'   <b onclick="info_wild('+checkquai(nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon).img.split(".")[0]+')">'+checkquai(nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon).name+' </b>'+t('và nhặt')+' <b>'+my.users.nhiemvu.can+' '+shopvatpham(nhiemvu(my.users.nhiemvu.id).ducnghia.item.split(":")[0]).ten+' </b>.   ';
      }
      ac+='<br>- '+t('Tiến độ nhiệm vụ')+' '+my.users.nhiemvu.song+'/'+my.users.nhiemvu.can+' ';

        } else {
            if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai =="item") {
     ac+='- '+t('Mang vật phẩm ')+' <b>'+shopvatpham(nhiemvu(my.users.nhiemvu.id).ducnghia.item.split(":")[0]).ten+'</b> '+t('đến')+' <b>'+datanpc(nhiemvu(my.users.nhiemvu.id).ducnghia.npc).name+'</b> '+t('Tại')+' <b>'+t(getmap(datanpc(nhiemvu(my.users.nhiemvu.id).ducnghia.npc).map).ten)+'</b>.'; }
     else if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai =="giaotiep") {
     ac+='- '+t('Tới nói chuyện với ')+' : <b>'+datanpc(nhiemvu(my.users.nhiemvu.id).ducnghia.npc).name+'</b> '+t('Tại')+' <b>'+t(getmap(datanpc(nhiemvu(my.users.nhiemvu.id).ducnghia.npc).map).ten)+'</b>  '; }      

 else {
     ac+='- '+t('Tới gặp')+' : <b>'+datanpc(nhiemvu(my.users.nhiemvu.id).ducnghia.npc).name+'</b> '+t('Tại')+' <b>'+t(getmap(datanpc(nhiemvu(my.users.nhiemvu.id).ducnghia.npc).map).ten)+'</b> '+t('để nhận thưởng.')+' '; }      
            
        }
    ac+='<br>- '+t('Thưởng')+' : ';
    ac+='<br>+ '+nhiemvu(my.users.nhiemvu.id).ducnghia.xu+' xu  ';
    ac+='<br>+ '+nhiemvu(my.users.nhiemvu.id).ducnghia.ruby+' ruby ';
    ac+='<br>+ '+nhiemvu(my.users.nhiemvu.id).ducnghia.exp+' exp ';
    
    for (var i=0; i<nhiemvu(my.users.nhiemvu.id).ducnghia.vatpham.split(",").length; i++) {
 
if(nhiemvu(my.users.nhiemvu.id).ducnghia.vatpham.split(",")[i].split(":")[0] >0) {
   ac+='+ '+shopvatpham(nhiemvu(my.users.nhiemvu.id).ducnghia.vatpham.split(",")[i].split(":")[0]).ten+'*'+nhiemvu(my.users.nhiemvu.id).ducnghia.vatpham.split(",")[i].split(":")[1]+'';
 
	 }   
       }

            }  else {
            ac+= '<center>'+t('Tạm thời chưa có nhiệm vụ')+'</center>';

            }
        }
        
   if(my.users.nhiemvu.code ==0) {
            if(nhiemvu(my.users.nhiemvu.id) !== null) {
        ac+= '<center>'+nhiemvu(my.users.nhiemvu.id).ducnghia.ten+'</center>';
        
    ac+='<br>-  '+t('Tới gặp')+' : <b>'+datanpc(nhiemvu(my.users.nhiemvu.id).ducnghia.npc).name+'</b> '+t('Tại')+' <b>'+t(getmap(datanpc(nhiemvu(my.users.nhiemvu.id).ducnghia.npc).map).ten)+'</b> ';


            }  else {
            ac+= '<center>'+t('Tạm thời chưa có nhiệm vụ')+'.</center>';

            }
        }     
        
        
        
    }
    
    if(id==2) {
       
    for(var k=0;k<my.vatpham.length;k++) {
        
		if(my.vatpham[k].soluong >=1) {
ac+='<div class="border" onclick="gamedocvp('+my.vatpham[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="/sql/item/'+shopvatpham(my.vatpham[k].id).img+'.png" ><div class="count count-vp-1">'+my.vatpham[k].soluong+' </div></div>'+shopvatpham(my.vatpham[k].id).ten+'</div>';
		} else {
		     my.vatpham.splice(k, 1);
		}
			}
			 
			
	for(var a=0;a<my.khodo.ruong-my.vatpham.length;a++ ) {
ac+='<div class="border"> <div  class="showitem" style="border: 2px solid;"></div></div>';
	    
	}		
    }
    
    if(id==3) {
         for(var k=0;k<my.pokemon.length;k++) {
             if(+mypokemon(my.pokemon[k].id).id == +my.users.pokemon) 
                 var tenpkm = '<font color="red">'+mypokemon(my.pokemon[k].id).chiso.ten+'</font>';
              else var tenpkm = ''+mypokemon(my.pokemon[k].id).chiso.ten+'';
              if(mypokemon(my.pokemon[k].id).kho !=1  ) {
		ac+='<div class="border" onclick="game_pokemon('+mypokemon(my.pokemon[k].id).id+')"> <div  class="showitem" style="border: 2px solid;"><img height="32" src="/xml/nhanvat.php?nhanvat='+mypokemon(my.pokemon[k].id).chiso.img+'&nut=1" ><div class="count count-vp-1">lv.'+mypokemon(my.pokemon[k].id).chiso.level+'</div></div>'+tenpkm+'  HP : '+tron(mypokemon(my.pokemon[k].id).chiso.hp)+'  </div>';
			}
         }
    }
    if(id==4) {
       ac+='<div class=" menu list" onclick="dichchuyen()">'+t('Bay nhanh')+'</div>';
       
      ac+='<div class=" menu list" onclick="game_hanhtrang(9)"><font color="red">'+t('Hưỡng dẫn chơi')+'</font></div>';
             ac+='<div class=" menu list" onclick="game_cttg()">'+t('Kênh thế giới')+'</div>';
  
        ac+='<div class=" menu list" onclick="game_ib()">'+t('Tin nhắn riêng')+'</div>';
             ac+='<div class=" menu list" onclick="napthecao()">'+t('Nạp thẻ cào')+'</div>';
             ac+='<div class=" menu list" onclick="velang()">'+t('Về làng')+'</div>';
 
        ac+='<div class=" menu list" onclick="game_auto()">'+t('Bật/ Tắt tự động')+'</div>';
        ac+='<div class=" menu list" onclick="game_hanhtrang(7)">'+t('Đổi cờ')+'</div>';
              ac+='<div class=" menu list" onclick="game_hanhtrang(10)">'+t('Danh sách kẻ thù')+'</div>';
  
        ac+='<div class=" menu list" onclick="game_hanhtrang(8)">'+t('Bạn bè')+'</div>';
        ac+='<div class=" menu list" onclick="game_hanhtrang(5)">'+t('Cài đặt')+'</div>';
        ac+='<div class=" menu list" onclick="game_doiten()">'+t('Đổi tên')+'</div>';
        ac+='<div class=" menu list" onclick="wild()">'+t('Danh sách PokeMon')+'</div>';

        ac+='<div class=" menu list" onclick="out()">'+t('Thoát trò chơi')+'</div>';
    ac+='<div class=" menu list" onclick="ngonngu()">'+t('Ngôn ngữ')+'</div>';

       
        ac+=' <center>'+t('Tài khoản')+' : '+my.users.taikhoan+' <br> '+t('Nhân vật')+' : '+my.users.username+' <br> '+t('Máy chủ')+' : '+checksv(server).name+'</center>';
    }
    
    if(id==5) {
        ac+='<div class=" menu list">'+t('Âm thanh')+' : <button onclick="game_amthanh()">'+t('tắt/bật')+'</button></div>';
        ac+='<div class=" menu list">'+t('Hiệu ứng âm thanh')+' : <input type="button"  onclick = "cai_datgame(1)" value="'+(caidat.hieuung ==1  ? 'ON' : 'OFF')+'"></div>';
        ac+='<div class=" menu list">'+t('Hiệu ứng thời tiết')+' : <input type="button"  onclick = "cai_datgame(2)" value="'+(caidat.cauhinh ==1  ? 'ON' : 'OFF')+'"></div>';
        ac+='<div class=" menu list">'+t('Ẩn người chơi')+' : <input type="button"  onclick = "cai_datgame(3)" value="'+(caidat.play ==1  ? 'ON' : 'OFF')+'"></div>';
        ac+='<div class=" menu list">'+t('Ẩn NPC')+' : <input type="button"  onclick = "cai_datgame(4)" value="'+(caidat.npc ==1  ? 'ON' : 'OFF')+'"></div>';
        ac+='<div class=" menu list">'+t('Ẩn hiệu ứng kĩ năng')+' : <input type="button"  onclick = "cai_datgame(5)" value="'+(caidat.skill ==1  ? 'ON' : 'OFF')+'"></div>';
        ac+='<div class=" menu list">'+t('Hiệu ứng nhân vật')+' : <input type="button"  onclick = "cai_datgame(6)" value="'+(caidat.nhun ==1  ? 'ON' : 'OFF')+'"></div>';

         ac+='<div class=" menu list"><b onclick="phimao()" class="viptxt"> '+t('Phím ảo cho ti-vi thông minh')+'</div>';
       
        
    }
    
    
    box('<img height="32" src="/xml/nhanvat.php?nhanvat='+my.users.skin+'&nut=1"> '+my.users.username+' #'+my.users.id+' <br> '+t('Cấp độ')+' : '+my.users.level+'<span class="trai">('+tron(my.users.exp)+'/'+tron(my.users.expmax)+')</span>',''+t('Nhiệm vụ')+':game_hanhtrang(1);'+t('Túi')+':game_hanhtrang(2);Pokemon:game_hanhtrang(3);'+t('Cài đặt')+':game_hanhtrang(4)',ac); 

}



function game_doctrangbi2(idpkm,idtb) {
    
    if(ruongtrangbi(idtb) === null) {
        giaotiep('Không tìm thấy vật phẩm này');
        return false;
    }
    var ty = ''+t('Yêu cầu pokemon cấp')+' '+ruongtrangbi(idtb).chiso.level+' <br>';
if(+ruongtrangbi(idtb).chiso.hp >=1) 
        ty+='<b><font color="red">+ '+tron(ruongtrangbi(idtb).chiso.hp)+' HP</b></font><br>';
    if(+ruongtrangbi(idtb).chiso.phep >=1) 
        ty+='<b><font color="38610B">+ '+tron(ruongtrangbi(idtb).chiso.phep)+' '+t('Sát thương phép')+'</font></b><br>';    
    if(+ruongtrangbi(idtb).chiso.vatli >=1) 
        ty+='<b><font color="088A68">+ '+tron(ruongtrangbi(idtb).chiso.vatli)+' '+t('Sát thương vật lí')+'</font></b><br>';
if(+ruongtrangbi(idtb).chiso.chimang >0) 
        ty+='<b><font color="8A0829">+ '+ruongtrangbi(idtb).chiso.chimang.toFixed(2)+' % '+t('Chí mạng')+'</font></b><br>'; 
 if(+ruongtrangbi(idtb).chiso.xuyengiap >0) 
        ty+='<b><font color="DF013A">+ '+ruongtrangbi(idtb).chiso.xuyengiap.toFixed(2)+' % '+t('Xuyên giáp')+'</font></b><br>';
if(+ruongtrangbi(idtb).chiso.mp >=1) 
        ty+='<b><font color="0B2F3A">+ '+tron(ruongtrangbi(idtb).chiso.mp)+' Mp</font></b><br>';
        if(+ruongtrangbi(idtb).chiso.giap >=1) 
        ty+='<b><font color="0B2F3A">+ '+tron(ruongtrangbi(idtb).chiso.giap)+' '+t('Giáp')+'</font></b><br>';
        
 if(+ruongtrangbi(idtb).chiso.tocdo >=1) 
        ty+='<b><font color="blue">+ '+tron(ruongtrangbi(idtb).chiso.tocdo)+' '+t('Tốc độ')+'</font></b><br>';
    
        ty+='<center><div class="canvas_menu" onclick="game_thaotv('+idpkm+','+idtb+')">'+t('Tháo')+'</div></center>';
    
        $('#trangbi2_'+idtb).html(''+ruongtrangbi(idtb).chiso.ten+' + '+ruongtrangbi(idtb).nangcap+' <br> '+ty+'');  

              $('#trangbi2_'+idtb).toggle('fast','linear');  

     
}
function game_doctrangbi(idpkm,idtb) {
    
    if(ruongtrangbi(idtb) === null) {
        giaotiep('Không tìm thấy vật phẩm này');
        return false;
    }
     var ty = ''+t('Yêu cầu pokemon cấp')+' '+ruongtrangbi(idtb).chiso.level+' <br>';
if(+ruongtrangbi(idtb).chiso.hp >=1) 
        ty+='<b><font color="red">+ '+tron(ruongtrangbi(idtb).chiso.hp)+' HP</b></font><br>';
    if(+ruongtrangbi(idtb).chiso.phep >=1) 
        ty+='<b><font color="38610B">+ '+tron(ruongtrangbi(idtb).chiso.phep)+' '+t('Sát thương phép')+'</font></b><br>';    
    if(+ruongtrangbi(idtb).chiso.vatli >=1) 
        ty+='<b><font color="088A68">+ '+tron(ruongtrangbi(idtb).chiso.vatli)+' '+t('Sát thương vật lí')+'</font></b><br>';
if(+ruongtrangbi(idtb).chiso.chimang >0) 
        ty+='<b><font color="8A0829">+ '+ruongtrangbi(idtb).chiso.chimang.toFixed(2)+' % '+t('Chí mạng')+'</font></b><br>'; 
 if(+ruongtrangbi(idtb).chiso.xuyengiap >0) 
        ty+='<b><font color="DF013A">+ '+ruongtrangbi(idtb).chiso.xuyengiap.toFixed(2)+' % '+t('Xuyên giáp')+'</font></b><br>';
if(+ruongtrangbi(idtb).chiso.mp >=1) 
        ty+='<b><font color="0B2F3A">+ '+tron(ruongtrangbi(idtb).chiso.mp)+' Mp</font></b><br>';
        if(+ruongtrangbi(idtb).chiso.giap >=1) 
        ty+='<b><font color="0B2F3A">+ '+tron(ruongtrangbi(idtb).chiso.giap)+' '+t('Giáp')+'</font></b><br>';
        
 if(+ruongtrangbi(idtb).chiso.tocdo >=1) 
        ty+='<b><font color="blue">+ '+tron(ruongtrangbi(idtb).chiso.tocdo)+' '+t('Tốc độ')+'</font></b><br>';
    
    if(+idpkm == +my.users.pokemon) {
        ty+='<center><div class="canvas_menu" onclick="game_settrangbi('+idtb+')">'+t('Trang bị')+'</div></center>';
    }
        $('#trangbi_'+idtb).html(''+ruongtrangbi(idtb).chiso.ten+' + '+ruongtrangbi(idtb).nangcap+' <br> '+ty+'');  

              $('#trangbi_'+idtb).toggle('fast','linear');  

     
}
function game_thaotv(idpkm,id) {
     var ltb = ruongtrangbi(id);
     if(ruongtrangbi(id) === null) {
        giaotiep('Không tìm thấy vật phẩm này');
        return false;
    }
    if(ruongtrangbi(id).pokemon <=0) {
        giaotiep('Vật phẩm chưa trang bị/');
        return false;
    }
   
   ltb.pokemon =0;
    
    if(+ltb.chiso.type==1) {
        mypokemon(idpkm).chiso.binhnuoc = 0;
    }
    if(+ltb.chiso.type==2) {

         mypokemon(idpkm).chiso.binhthuoc = 0;
    }
    if(+ltb.chiso.type==3) {
         mypokemon(idpkm).chiso.da = 0;
                      

    }
    if(+ltb.chiso.type==4) {
         mypokemon(idpkm).chiso.voxo = 0;

    }
    if(+ltb.chiso.type==5) {
         mypokemon(idpkm).chiso.qua = 0;
    }
    rand(1,10);
    game_pokemon(idpkm,4); 
    
}
function game_settrangbi(id) {
        var ltb = ruongtrangbi(id);

   if(ruongtrangbi(id) === null) {
        giaotiep('Không tìm thấy vật phẩm này');
        return false;
    }
    if(+my.users.pokemon ==0) {
        giaotiep(t('Không tìm thấy pokemon của bạn.'));
        return false;
    }
    if(+my.chiso.level < +ltb.chiso.level) {
        giaotiep(t('Pokemon của bạn chưa đủ cấp độ để sử dụng.'));
    } else
    if(+ltb.pokemon !=0) {
        giaotiep(t('lỗi trang bị này đã dùng cho pokemon khác.'));
        return false;
    }
    ltb.pokemon =+my.users.pokemon;
    
    if(+ltb.chiso.type==1) {
        if(+my.chiso.binhnuoc >=1) {
        ruongtrangbi(my.chiso.binhnuoc).pokemon=0; }
        my.chiso.binhnuoc = id;
    }
    if(+ltb.chiso.type==2) {
        if(my.chiso.binhthuoc>=1) {
                ruongtrangbi(my.chiso.binhthuoc).pokemon=0;
}
        my.chiso.binhthuoc = id;
    }
    if(+ltb.chiso.type==3) {
        if(my.chiso.da>=1) {
          ruongtrangbi(my.chiso.da).pokemon=0;
        }
        my.chiso.da = id;
                      

    }
    if(+ltb.chiso.type==4) {
        if(my.chiso.voxo>=1) {
   ruongtrangbi(my.chiso.voxo).pokemon=0;
}
        my.chiso.voxo = id;

    }
    if(+ltb.chiso.type==5) {
        if(my.chiso.qua>=1) {
  ruongtrangbi(my.chiso.qua).pokemon=0;      
        }
        my.chiso.qua = id;
    }
    rand(1,10);
    game_pokemon(my.users.pokemon,5);
}


function game_pkmkn(idpkm,idkn,x) {
   // giaotiep();
var cu='';
var cu2='';

    if(idpkm == my.users.pokemon) {
        cu2+='<center><b onclick="gamecongkn('+idkn+','+idpkm+')" class="canvas_menu">Cộng</b> </center> ';

        cu+='<b onclick="game_dan('+idkn+',\'1\')" class=" canvas_menu">'+t('Ô số 1')+'</b><b onclick="game_dan('+idkn+',\'2\')" class=" canvas_menu">'+t('Ô số 2')+'</b><b onclick="game_dan('+idkn+',\'3\')" class=" canvas_menu">'+t('Ô số 3')+'</b><b onclick="game_dan('+idkn+',\'4\')" class="canvas_menu">'+t('Ô số 4')+'</b><b onclick="game_dan('+idkn+',\'5\')" class="canvas_menu">'+t('Ô số 5')+'</b>';
    }
        $("#kn_"+idkn+"").html(x+' <br> '+cu2+'<center>'+cu+'</center>');

                      $('#kn_'+idkn).toggle('fast','linear');  


}
function gamecongkn(id,pkm) {
    if(pkm != +my.users.pokemon) {
        giaotiep(t('Để cộng kĩ năng vui lòng biến hình thành pokemon này.'));
        return false;
    }
    if(sd(id) === null) {
        return false;
    }
    if(+sd(id).level >=16) {
        giaotiep(t('Đã đạt cấp tối đa.'));
        return false;
    }
    if(+my.chiso.kinang <=0) {
        giaotiep(t('Bạn đã hết điểm kĩ năng.'));
        return false;
    }
    
var itemcan= [49,49,49,49,49,50,50,50,50,50,51,51,51,51,51];

if(!soluong(itemcan[sd(id).level])) {
    giaotiep(t(' Bạn cần vật phẩm '+shopvatpham(itemcan[sd(id).level]).ten+' để nâng cấp kĩ năng này. '));
  return false;  
}
    
    if(+sd(id).level ==1 && +my.chiso.level <5) {
        giaotiep(t('Để nâng cấp kĩ năng này, pokemon cần đạt cấp 5.'));
        return false;
    }
    if(+sd(id).level ==2 && +my.chiso.level <10) {
        giaotiep(t('Để nâng cấp kĩ năng này, pokemon cần đạt cấp 10.'));
        return false;
    }
    if(+sd(id).level ==3 && +my.chiso.level <14) {
        giaotiep('Để nâng cấp kĩ năng này, pokemon cần đạt cấp 14.');
        return false;
    }
    if(+sd(id).level ==4 && +my.chiso.level <21) {
        giaotiep('Để nâng cấp kĩ năng này, pokemon cần đạt cấp 21.');
        return false;
    }
    if(+sd(id).level ==5 && +my.chiso.level <26) {
        giaotiep('Để nâng cấp kĩ năng này, pokemon cần đạt cấp 26.');
        return false;
    }
    if(+sd(id).level ==6 && +my.chiso.level <32) {
        giaotiep('Để nâng cấp kĩ năng này, pokemon cần đạt cấp 32.');
        return false;
    }
    if(+sd(id).level ==7 && +my.chiso.level <39) {
        giaotiep('Để nâng cấp kĩ năng này, pokemon cần đạt cấp 39.');
        return false;
    }
    if(+sd(id).level ==8 && +my.chiso.level <44) {
        giaotiep('Để nâng cấp kĩ năng này, pokemon cần đạt cấp 44.');
        return false;
    }
    if(+sd(id).level ==9 && +my.chiso.level <49) {
        giaotiep('Để nâng cấp kĩ năng này, pokemon cần đạt cấp 49.');
        return false;
    }
    if(+sd(id).level ==10 && +my.chiso.level <55) {
        giaotiep('Để nâng cấp kĩ năng này, pokemon cần đạt cấp 55.');
        return false;
    }
    if(+sd(id).level ==11 && +my.chiso.level <60) {
        giaotiep('Để nâng cấp kĩ năng này, pokemon cần đạt cấp 60.');
        return false;
    }
    if(+sd(id).level ==12 && +my.chiso.level <66) {
        giaotiep('Để nâng cấp kĩ năng này, pokemon cần đạt cấp 66.');
        return false;
    }
    if(+sd(id).level ==13 && +my.chiso.level <70) {
        giaotiep('Để nâng cấp kĩ năng này, pokemon cần đạt cấp 70.');
        return false;
    }
    if(+sd(id).level ==14 && +my.chiso.level <80) {
        giaotiep('Để nâng cấp kĩ năng này, pokemon cần đạt cấp 80.');
        return false;
    }
    if(+sd(id).level ==15 && +my.chiso.level <95) {
        giaotiep('Để nâng cấp kĩ năng này, pokemon cần đạt cấp 95.');
        return false;
    }
    lichsu('Nâng cấp '+sd(id).ten+' lên '+(+sd(id).level+1)+' mất  '+shopvatpham(itemcan[sd(id).level]).ten+'  ');
    soluong(itemcan[sd(id).level]).soluong = +soluong(itemcan[sd(id).level]).soluong -1;
    sd(id).exp = sd(id).expmax;
    sd(id);
    my.chiso.kinang = +my.chiso.kinang-1;
    game_pokemon(pkm,2);
}



function game_amthanh() {
    if(+my.users.amthanh<=0) {
        my.users.amthanh=1;
        giaotiep(t('Bật âm thanh thành công.Vui lòng đăng nhập lại.'));
        
    } else {
     my.users.amthanh=0;
        giaotiep(t('Tắt âm thanh thành công.Vui lòng đăng nhập lại.'));   
    }
    sql();
}
function game_subhoc(id) {
    if(kinang(id) === null) {
        giaotiep('Không tìm thấy kĩ năng này.');
        return false;
    } 
    if(+my.users.pokemon <=0) {
        giaotiep(t('Lỗi ! Bạn chưa biến hình thành pokemon.'));
        return false;
    }
    if(checkskill(id) !== null) {
               giaotiep(t('Bạn đã học kĩ năng này rồi.'));
               return false;
           }
          
   if(+kinang(id).level ==5) {
       var subd = +my.chiso.lv5;
   } 
   if(+kinang(id).level ==10) {
       var subd = +my.chiso.lv10;
   } 
   if(+kinang(id).level ==15) {
       var subd = +my.chiso.lv15;
   } 
   if(+kinang(id).level ==20) {
       var subd = +my.chiso.lv20;
   } 
   if(+kinang(id).level ==25) {
       var subd = +my.chiso.lv25;
   }
   if(+kinang(id).level ==30) {
       var subd = +my.chiso.lv30;
   }
   if(+kinang(id).level ==35) {
       var subd = +my.chiso.lv35;
   }
   if(+kinang(id).level ==40) {
       var subd = +my.chiso.lv40;
   }
   if(+kinang(id).level ==45) {
       var subd = +my.chiso.lv45;
   }
   if(+kinang(id).level ==50) {
       var subd = +my.chiso.lv50;
   }
   if(+kinang(id).level ==55) {
       var subd = +my.chiso.lv55;
   }
   if(+kinang(id).level ==60) {
       var subd = +my.chiso.lv60;
   }
    if(+kinang(id).level ==65) {
       var subd = +my.chiso.lv65;
   }
   if(subd <=0) {
       giaotiep(t('Bạn đã học kĩ năng ở cấp độ này rồi'));
       return false;
   }
       
                addkn(id);
                
                if(+kinang(id).level ==5) {
       my.chiso.lv5 =0;
   } 
   if(+kinang(id).level ==10) {
       my.chiso.lv10 =0;
   } 
   if(+kinang(id).level ==15) {
       my.chiso.lv15 =0;
   } 
   if(+kinang(id).level ==20) {
      my.chiso.lv20 =0;
   } 
   if(+kinang(id).level ==25) {
       my.chiso.lv25 =0;
   }
   if(+kinang(id).level ==30) {
      my.chiso.lv30 =0;
   }
   if(+kinang(id).level ==35) {
       my.chiso.lv35 =0;
   }
   if(+kinang(id).level ==40) {
      my.chiso.lv40 =0;
   }
   if(+kinang(id).level ==45) {
      my.chiso.lv45 =0;
   }
   if(+kinang(id).level ==50) {
       my.chiso.lv50 =0;
   }
   if(+kinang(id).level ==55) {
       my.chiso.lv55 =0;
   }
   if(+kinang(id).level ==60) {
       my.chiso.lv60 =0;
   }
    if(+kinang(id).level ==65) {
       my.chiso.lv65 =0;
   }
   game_shop(5);
}
function game_hskn(id) {
    giaotiep(t('Bạn có chắc chắn muốn học kĩ năng này không ? PokeMon chỉ có thể học duy nhất một kĩ năng miễn phí tại cấp độ này ?'));
    
           	$("#npc_menu").html('<b onclick="game_subhoc('+id+')" class="viptxt nutchat">'+t('Học')+'</b>');

}
function game_docsach(id) {
    if(kinang(id) === null) {
        giaotiep('Không tìm thấy kĩ năng này.');
        return false;
    } 
    giaotiep(' <font color=red>'+kinang(id).ten+'</font> <br> '+kinang(id).mota+'  ');
    
       	$("#npc_menu").html('<b onclick="game_hskn('+id+')" class="viptxt nutchat">'+t('Học')+'</b>');
   
}

function game_shop(id,box2) {
    c_giaotiep();
    var kkykrtyrty = '';
    if(id==5) {
        if(+my.users.pokemon <=0) {
            giaotiep(t('Hãy biến hình thành pokemon rồi nói chuyện với tôi !'));
            return false;
        }
    for(var k=0;k<data_kinang.length;k++) {
		if(+data_kinang[k].level <=+my.chiso.level && sd(data_kinang[k].id)===null) {
		    if(+data_kinang[k].level ==5 && my.chiso.lv5 ==1) {
kkykrtyrty+='<div class="border" onclick="game_docsach('+data_kinang[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="'+(data_kinang[k].id2 !== undefined ? '/sql/eff/skill/'+data_kinang[k].id2+'.png' : '/sql/eff/skill/'+data_kinang[k].id+'.png')+'" ><div class="count count-vp-1">lv.'+data_kinang[k].level+'</div></div>'+data_kinang[k].ten+'</div>';
}
if(+data_kinang[k].level ==10 && my.chiso.lv10 ==1) {
kkykrtyrty+='<div class="border" onclick="game_docsach('+data_kinang[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="'+(data_kinang[k].id2 !== undefined ? '/sql/eff/skill/'+data_kinang[k].id2+'.png' : '/sql/eff/skill/'+data_kinang[k].id+'.png')+'" ><div class="count count-vp-1">lv.'+data_kinang[k].level+'</div></div>'+data_kinang[k].ten+'</div>';
}
if(+data_kinang[k].level ==15 && my.chiso.lv15 ==1) {
kkykrtyrty+='<div class="border" onclick="game_docsach('+data_kinang[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="'+(data_kinang[k].id2 !== undefined ? '/sql/eff/skill/'+data_kinang[k].id2+'.png' : '/sql/eff/skill/'+data_kinang[k].id+'.png')+'" ><div class="count count-vp-1">lv.'+data_kinang[k].level+'</div></div>'+data_kinang[k].ten+'</div>';
}
if(+data_kinang[k].level ==20 && my.chiso.lv20 ==1) {
kkykrtyrty+='<div class="border" onclick="game_docsach('+data_kinang[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="'+(data_kinang[k].id2 !== undefined ? '/sql/eff/skill/'+data_kinang[k].id2+'.png' : '/sql/eff/skill/'+data_kinang[k].id+'.png')+'" ><div class="count count-vp-1">lv.'+data_kinang[k].level+'</div></div>'+data_kinang[k].ten+'</div>';
}
if(+data_kinang[k].level ==25 && my.chiso.lv25 ==1) {
kkykrtyrty+='<div class="border" onclick="game_docsach('+data_kinang[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="'+(data_kinang[k].id2 !== undefined ? '/sql/eff/skill/'+data_kinang[k].id2+'.png' : '/sql/eff/skill/'+data_kinang[k].id+'.png')+'" ><div class="count count-vp-1">lv.'+data_kinang[k].level+'</div></div>'+data_kinang[k].ten+'</div>';
}
if(+data_kinang[k].level ==30 && my.chiso.lv30 ==1) {
kkykrtyrty+='<div class="border" onclick="game_docsach('+data_kinang[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="'+(data_kinang[k].id2 !== undefined ? '/sql/eff/skill/'+data_kinang[k].id2+'.png' : '/sql/eff/skill/'+data_kinang[k].id+'.png')+'" ><div class="count count-vp-1">lv.'+data_kinang[k].level+'</div></div>'+data_kinang[k].ten+'</div>';
}
if(+data_kinang[k].level ==35 && my.chiso.lv35 ==1) {
kkykrtyrty+='<div class="border" onclick="game_docsach('+data_kinang[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="'+(data_kinang[k].id2 !== undefined ? '/sql/eff/skill/'+data_kinang[k].id2+'.png' : '/sql/eff/skill/'+data_kinang[k].id+'.png')+'" ><div class="count count-vp-1">lv.'+data_kinang[k].level+'</div></div>'+data_kinang[k].ten+'</div>';
}
if(+data_kinang[k].level ==40 && my.chiso.lv40 ==1) {
kkykrtyrty+='<div class="border" onclick="game_docsach('+data_kinang[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="'+(data_kinang[k].id2 !== undefined ? '/sql/eff/skill/'+data_kinang[k].id2+'.png' : '/sql/eff/skill/'+data_kinang[k].id+'.png')+'" ><div class="count count-vp-1">lv.'+data_kinang[k].level+'</div></div>'+data_kinang[k].ten+'</div>';
}
if(+data_kinang[k].level ==45 && my.chiso.lv45 ==1) {
kkykrtyrty+='<div class="border" onclick="game_docsach('+data_kinang[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="'+(data_kinang[k].id2 !== undefined ? '/sql/eff/skill/'+data_kinang[k].id2+'.png' : '/sql/eff/skill/'+data_kinang[k].id+'.png')+'" ><div class="count count-vp-1">lv.'+data_kinang[k].level+'</div></div>'+data_kinang[k].ten+'</div>';
}
if(+data_kinang[k].level ==50 && my.chiso.lv50 ==1) {
kkykrtyrty+='<div class="border" onclick="game_docsach('+data_kinang[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="'+(data_kinang[k].id2 !== undefined ? '/sql/eff/skill/'+data_kinang[k].id2+'.png' : '/sql/eff/skill/'+data_kinang[k].id+'.png')+'" ><div class="count count-vp-1">lv.'+data_kinang[k].level+'</div></div>'+data_kinang[k].ten+'</div>';
}
if(+data_kinang[k].level ==55 && my.chiso.lv55 ==1) {
kkykrtyrty+='<div class="border" onclick="game_docsach('+data_kinang[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="'+(data_kinang[k].id2 !== undefined ? '/sql/eff/skill/'+data_kinang[k].id2+'.png' : '/sql/eff/skill/'+data_kinang[k].id+'.png')+'" ><div class="count count-vp-1">lv.'+data_kinang[k].level+'</div></div>'+data_kinang[k].ten+'</div>';
}
if(+data_kinang[k].level ==60 && my.chiso.lv60 ==1) {
kkykrtyrty+='<div class="border" onclick="game_docsach('+data_kinang[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="'+(data_kinang[k].id2 !== undefined ? '/sql/eff/skill/'+data_kinang[k].id2+'.png' : '/sql/eff/skill/'+data_kinang[k].id+'.png')+'" ><div class="count count-vp-1">lv.'+data_kinang[k].level+'</div></div>'+data_kinang[k].ten+'</div>';
}
		}
			}     
       box(t('Bạn muốn học kĩ năng gì ?'),''+t('Sách')+':game_shop(4);'+t('Học')+':game_shop(5)',kkykrtyrty);

    }
    if(id==4) {
    for(var k=0;k<data_shopvatpham.length;k++) {
		if(+data_shopvatpham[k].hienthi ===0 && data_shopvatpham[k].loai =="kinang") {
kkykrtyrty+='<div class="border" onclick="game_xemvp('+data_shopvatpham[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="/sql/item/'+shopvatpham(data_shopvatpham[k].id).img+'.png" ><div class="count count-vp-1">lv.'+data_shopvatpham[k].level+'</div></div>'+data_shopvatpham[k].ten+' ('+shopvatpham(data_shopvatpham[k].id).gia+' Mảnh giấy vụn</div>';
		}
			}     
       box(t('Bạn muốn đổi sách gì ?'),''+t('Sách')+':game_shop(4);'+t('Học')+':game_shop(5)',kkykrtyrty);

    }
    if(id==1) {
    for(var k=0;k<data_shopvatpham.length;k++) {
		if(+data_shopvatpham[k].hienthi ===0 && data_shopvatpham[k].loai =="thucan") {
kkykrtyrty+='<div class="border" onclick="game_xemvp('+data_shopvatpham[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="/sql/item/'+shopvatpham(data_shopvatpham[k].id).img+'.png" ><div class="count count-vp-1">VV</div></div>'+data_shopvatpham[k].ten+' ('+shopvatpham(data_shopvatpham[k].id).gia+' '+shopvatpham(data_shopvatpham[k].id).loaitien+')</div>';
		}
			}     
       box(t('Bạn muốn ăn món gì ?'),''+t('Thức ăn')+':game_shop(1)',kkykrtyrty);

    }
    
    if(id==2) {
    for(var k=0;k<data_shopvatpham.length;k++) {
		if(+data_shopvatpham[k].hienthi ===0 && data_shopvatpham[k].loai =="trangbi" && +shoptrangbi(data_shopvatpham[k].trangbi).type == box2) {
kkykrtyrty+='<div class="border" onclick="game_xemvp('+data_shopvatpham[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="/sql/item/'+shopvatpham(data_shopvatpham[k].id).img+'.png" ><div class="count count-vp-1">'+shoptrangbi(data_shopvatpham[k].trangbi).level+'</div></div>'+data_shopvatpham[k].ten+' ('+shopvatpham(data_shopvatpham[k].id).gia+' '+shopvatpham(data_shopvatpham[k].id).loaitien+')</div>';
		}
			}     
       box(t('Chào quý khách! Bạn muốn mua gì ?'),''+t('Bình nước')+':game_shop(2,1);'+t('Bình thuốc')+':game_shop(2,2);'+t('Đá')+':game_shop(2,3);'+t('Vỏ xò')+':game_shop(2,4);'+t('Quả')+':game_shop(2,5)',kkykrtyrty);

    }
    
    if(id==3) {
    for(var k=0;k<data_shopvatpham.length;k++) {
		if(+data_shopvatpham[k].hienthi ===0 && data_shopvatpham[k].type =="item" && data_shopvatpham[k].loai == box2) {
kkykrtyrty+='<div class="border" onclick="game_xemvp('+data_shopvatpham[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="/sql/item/'+shopvatpham(data_shopvatpham[k].id).img+'.png" ></div>'+data_shopvatpham[k].ten+' ('+shopvatpham(data_shopvatpham[k].id).gia+' '+shopvatpham(data_shopvatpham[k].id).loaitien+')</div>';
		}
			}     
       box(t('Cửa hàng tôi có rất nhiều thứ giúp ích cho bạn !!!'),'Poke Ball:game_shop(3,\'pokeball\');'+t('Linh tinh')+':game_shop(3,\'linhtinh\')',kkykrtyrty);

    }

}

function game_tha(id) {
    if(mypokemon(id) === null) {
        giaotiep('Không tìm thấy pokemon');
        return false;
    }
    
    giaotiep(t('Bạn có chắc chắn muốn thả pokemon này không ? Bạn sẽ nhận lại bóng  '+shopvatpham(mypokemon(id).chiso.pokeball).ten+' ? '));
            $("#npc_menu").html('<b onclick="game_thapokemon('+id+')" class="viptxt nutchat">'+t('Thả')+'</b>');

}
function game_thapokemon(id) {
    if(mypokemon(id) === null) {
        giaotiep('Không tìm thấy pokemon');
        return false;
    }
    if(+id == +my.users.pokemon) {
        giaotiep(t('Pokemon này bạn đang biến hình không thể thả.'));
        return false;
    }
    giaotiep('Thả pokemon thành công. Bạn nhận được  '+shopvatpham(mypokemon(id).chiso.pokeball).ten+'*1 ');
    game_hanhtrang(3);
            vatpham(mypokemon(id).chiso.pokeball,1);
            xoapokemon(id);

}


function thoigiantinh(ts){
    var  delta = (+ts - date())/1000; //us to s
    var ps, pm, ph, pd, min, hou, sec, days;
    if(delta<=59){
        ps = (delta>1) ? "s": "";
        return tron(delta)+""+ps
    }
    if(delta>=60 && delta<=3599){
        min = Math.floor(delta/60);
        sec = delta-(min*60);
        pm = (min>1) ? "s": "";
        ps = (sec>1) ? "s": "";
        return  ""+min+"'"+tron(sec)+"s ";
    }
    if(delta>=3600 && delta<=86399){
        hou = Math.floor(delta/3600);
        min = Math.floor((delta-(hou*3600))/60);
        ph = (hou>1) ? "s": "";
        pm = (min>1) ? "s": "";
        sec = delta-(Math.floor(delta/60)*60);
        return  ""+hou+"h"+min+"'"+tron(sec)+"s ";
    } 
    if(delta>=86400){
        days = Math.floor(delta/86400);
        hou =  Math.floor((delta-(days*86400))/60/60);
        pd = (days>1) ? "s": "";
        ph = (hou>1) ? "s": "";
        min = Math.floor((delta-(Math.floor(delta/3600)*3600))/60);
        sec = delta-(Math.floor(delta/60)*60);
       // return days+" day"+pd+" "+hou+" hour"+ph;
    return  ""+days+"d"+hou+"h"+min+"'"+tron(sec)+"s ";
     
    }
}


function game_shopthoitrang(id) {
    c_giaotiep();
    var kkykrtyrty = '';
    
    if(id==1) {
    for(var k=0;k<data_shopskin.length;k++) {
		if(+data_shopskin[k].hienthi ===0) {
kkykrtyrty+='<div class="border" onclick="game_docskin(\''+data_shopskin[k].ten+'\')"> <div  class="showitem" style="border: 2px solid;"><img height="32" src="/xml/nhanvat.php?nhanvat='+data_shopskin[k].ten+'.png&nut=1" ><div class="count count-vp-1">VV</div></div> '+t('Giá')+' : '+data_shopskin[k].gia+' '+data_shopskin[k].loai+' <div id="skin_'+data_shopskin[k].ten+'" class=" menu list" style="display:none;"></div></div>';
		}
			}
    }
    if(id==2) {
         for(var k=0;k<my.thoitrang.length;k++) {
kkykrtyrty+='<div class="border" onclick="game_docskin(\''+my.thoitrang[k].ten+'\')"> <div  class="showitem" style="border: 2px solid;"><img height="32" src="/xml/nhanvat.php?nhanvat='+my.thoitrang[k].ten+'.png&nut=1"><div class="count count-vp-1">VV</div></div> '+t('Chạm để xem')+' <div id="skin_'+my.thoitrang[k].ten+'" class=" menu list" style="display:none;"></div></div>';
		}
    }
			
       box(t('Cửa hàng tôi có rất nhiều quần áo đẹp ! Cậu muốn mua gì ?'),'Shop:game_shopthoitrang(1);'+t('Rương')+':game_shopthoitrang(2)',kkykrtyrty);

    
}



function game_docskin(idtb) {
    var ty = '';
    if(shopthoitrang(idtb) === null) {
        giaotiep('Không tìm thấy vật phẩm này');
        return false;
    }
    if(+shopthoitrang(idtb).hp >=1) 
        ty+='<b><font color="red">+ '+shopthoitrang(idtb).hp+' HP</b></font><br>';
    if(+shopthoitrang(idtb).phep >=1) 
        ty+='<b><font color="38610B">+ '+shopthoitrang(idtb).phep+' '+t('phép')+'</font></b><br>';    
    if(+shopthoitrang(idtb).vatli >=1) 
        ty+='<b><font color="088A68">+ '+shopthoitrang(idtb).vatli+' '+t('Vật lí')+'</font></b><br>';
     if(+shopthoitrang(idtb).chimang >=1) 
        ty+='<b><font color="8A0829">+ '+shopthoitrang(idtb).chimang+' % CM</font></b><br>'; 
 if(+shopthoitrang(idtb).xuyengiap >=1) 
        ty+='<b><font color="DF013A">+ '+shopthoitrang(idtb).xuyengiap+' % XG</font></b><br>';
if(+shopthoitrang(idtb).mp >=1) 
        ty+='<b><font color="0B2F3A">+ '+shopthoitrang(idtb).mp+' Mp</font></b><br>';  
        
 if(+shopthoitrang(idtb).tocdo >=1) 
        ty+='<b><font color="blue">+ '+shopthoitrang(idtb).tocdo+' '+t('Tốc độ')+'</font></b><br>';            
    
    if(ruongthoitrang(idtb) == null) {
        ty+='<center><div class="canvas_menu" onclick="game_muathoitrang(\''+idtb+'\')">'+t('Mua')+' </div></center>';
    } else {
    ty+='<center><div class="canvas_menu" onclick="game_trangbithoitrang(\''+idtb+'\')">'+t('Mặc')+' </div></center>';
      
    }

        $('#skin_'+idtb).html(' '+ty+'');  

              $('#skin_'+idtb).toggle('fast','linear');  

     
}

function game_muathoitrang(id) {
    if(shopthoitrang(id) === null) {
        giaotiep('Vật phẩm không tồn tại');
        return false;
    }
    if(ruongthoitrang(id) !== null) {
        giaotiep(t('Bạn đã có vật phẩm này'));
        return false;
    }
    if(shopthoitrang(id).loai == "ruby") {
        var tc = my.users.ruby;
        var oa = 1;
    } else {
    var tc = my.users.xu;
    var ob =0;
   
    }
    
    if(+tc < +shopthoitrang(id).gia) {
        giaotiep(t('Bạn không có đủ tiền'));
        return false;
    }
    lichsu('Mua thời trang '+id+' ');
    giaotiep(t('Thanh toán thành công.'));
    	 my.thoitrang.push({ ten : id     });
if(oa==1) {
    ruby(-+shopthoitrang(id).gia) } 
    else {
        xu(-+shopthoitrang(id).gia)
    }
game_shopthoitrang(2);
    
}

function game_trangbithoitrang(id) {
    if(ruongthoitrang(id) === null) {
        giaotiep('Bạn không có vật phẩm này...');
        return false;
    }
    
    my.users.thoitrang = ''+id+'.png';
    if(+my.users.pokemon <=0) {
        my.users.skin = my.users.thoitrang;
    doitrang(my.users.thoitrang);
    }
    c_box();c_giaotiep();
}


function ban1(id) {
    var sl = +$('#soluong').val();
    var r = +$('#ruby').val();
    var x = +$('#xu').val();
    var us = $('#nguoinhan').val();
    if(sl <=0) {
        giaotiep(t('Bạn chưa nhập số lượng.'));
        return false;
    }
    if(+my.users.level <=5) {
        giaotiep(t('Đạt trình độ cấp 6 mới có thể mua bán.'));
        return false;
    }
    if(+soluong(id).soluong < sl) {
        giaotiep(t('số lượng nhập không hợp lệ.'));
        return false;
    }
    if(x <0) {
giaotiep(t('Giá tiền không hợp lệ..'));
   return false;
    }
     if(r <0) {
giaotiep('Giá tiền không hợp lệ..');
   return false;
    }
    if(getname(us) === null) {
        giaotiep(t('Người chơi không online hoặc không cùng bản đồ với bạn'));
        return false;
    }
    c_box();
   ws.send("ban_1:"+id+"^"+userID+"^"+getname(us).id+"^"+x+"^"+r+"^"+sl+"");
    giaotiep(t('Gửi yêu cầu bán thành công ! Vui lòng chờ đối phương chấp nhận.'));
    
}

function dongymua(idvp,soluong,x,r,nguoiban) {
    if(+my.users.level <=5) {
        giaotiep(t('Đạt trình độ cấp 6 mới có thể mua bán.'));
        return false;
    }
    if(shopvatpham(idvp) === null) {
        giaotiep(t('Lỗi vật phẩm không tồn tại ! giao dịch bị hủy'));
        return false;
    }
    if(+my.users.xu < x) {
        giaotiep(t('Bạn không đủ tiền để mua'));
        return false;
        
    }
     if(+my.users.ruby < r) {
        giaotiep(t('Bạn không đủ tiền để mua'));
        return false;
        
    }
    giaotiep(t('Đang mua vật phẩm... xin chờ ....'));
        ws.send("ban_2:"+idvp+"^"+nguoiban+"^"+userID+"^"+x+"^"+r+"^"+soluong+"");
}

function ban2(id) {
    var r = +$('#ruby').val();
    var x = +$('#xu').val();
    var us = $('#nguoinhan').val();
    if(mypokemon(id)=== null) {
        giaotiep('Không có pokemon này.');
        return false;
    }
    if(+my.users.level <=5) {
        giaotiep(t('Đạt trình độ cấp 5 mới có thể mua bán.'));
        return false;
    }
    if(+id == +my.users.pokemon) {
        giaotiep('Bạn đang trang bị pokemon này ! không thể bán.');
        return false;
    }
   if(+mypokemon(id).chiso.binhthuoc >=1) {
       giaotiep('Vui lòng tháo trang bị');
       return false;
   }
   if(+mypokemon(id).chiso.binhnuoc >=1) {
       giaotiep('Vui lòng tháo trang bị');
       return false;
   }
   if(+mypokemon(id).chiso.da >=1) {
       giaotiep('Vui lòng tháo trang bị');
       return false;
   }
   if(+mypokemon(id).chiso.voxo >=1) {
       giaotiep('Vui lòng tháo trang bị');
       return false;
   }
   if(+mypokemon(id).chiso.qua >=1) {
       giaotiep('Vui lòng tháo trang bị');
       return false;
   }
    if(x <0) {
giaotiep('Giá tiền không hợp lệ..');
   return false;
    }
     if(r <0) {
giaotiep('Giá tiền không hợp lệ..');
   return false;
    }
    if(getname(us) === null) {
        giaotiep(t('Người chơi không online hoặc không cùng bản đồ với bạn'));
        return false;
    }
    c_box();
  ws.send("pokemon_1:"+id+"^"+userID+"^"+getname(us).id+"^"+x+"^"+r+"^"+base64.encode(JSON.stringify(mypokemon(id)))+"");
    giaotiep(t('Gửi yêu cầu bán thành công ! Vui lòng chờ đối phương chấp nhận.'));
    
}

function dongymua2(idvp,x,r,nguoiban) {
    if(+my.users.level <=5) {
        giaotiep(t('Đạt trình độ cấp 5 mới có thể mua bán.'));
        return false;
    }
    if(+my.users.xu < x) {
        giaotiep(t('Bạn không đủ tiền để mua'));
        return false;
        
    }
     if(+my.users.ruby < r) {
        giaotiep(t('Bạn không đủ tiền để mua'));
        return false;
        
    }
    giaotiep(t('Đang mua vật phẩm... xin chờ ....'));
  ws.send("pokemon_2:"+idvp+"^"+nguoiban+"^"+userID+"^"+x+"^"+r+"");
}

function game_auto() {
    if(my.users.autobat <=0) {
        my.users.autobat =1;
        c_box();
        giaotiep(t('Bật auto thành công.'));
    } else {
            my.users.autobat =0;
    giaotiep(t('Tắt auto thành công.'));
    }
}



function gamecong(id,type) {
   if(+mypokemon(id).chiso.tiemnang <=0) {
       return false;
   }
   if(+my.users.pokemon != id) {
       giaotiep(t('Hãy biến hình thành pokemon này để cộng tiềm năng.'));
       return false;
   }
   giaotiep(t('Bạn muốn cộng bao nhiêu ?'));
   
   var ct = '';
   
   if(+mypokemon(id).chiso.tiemnang>=1) {
       ct+='<b onclick="button_cong('+id+','+type+',1)" class="viptxt nutchat">+1</b>';
   }
   if(+mypokemon(id).chiso.tiemnang>=5) {
       ct+='<b onclick="button_cong('+id+','+type+',5)" class="viptxt nutchat">+5</b>';
   }
   if(+mypokemon(id).chiso.tiemnang>=10) {
       ct+='<b onclick="button_cong('+id+','+type+',10)" class="viptxt nutchat">+10</b>';
   }
   if(+mypokemon(id).chiso.tiemnang>=50) {
       ct+='<b onclick="button_cong('+id+','+type+',50)" class="viptxt nutchat">+50</b>';
   }
   if(+mypokemon(id).chiso.tiemnang>=100) {
       ct+='<b onclick="button_cong('+id+','+type+',100)" class="viptxt nutchat">+50</b>';
   }
           $("#npc_menu").html(ct);

}
function button_cong(id,type,sl) {
    if(+my.users.pokemon != id) {
       giaotiep(t('Hãy biến hình thành pokemon này để cộng tiềm năng.'));
       return false;
   }
   if(+mypokemon(id).chiso.tiemnang <sl) {
       giaotiep(t('Không còn tiềm năng.'));
       return false;
   }
   
   if(sl <=0) {
       return false;
   }
   
   if(type==1) mypokemon(id).chiso.sucmanh=+mypokemon(id).chiso.sucmanh+sl;
   else if(type==2) mypokemon(id).chiso.tritue=+mypokemon(id).chiso.tritue+sl;
   else if(type==3) mypokemon(id).chiso.theluc=+mypokemon(id).chiso.theluc+sl;
   else if(type==4) mypokemon(id).chiso.kheoleo=+mypokemon(id).chiso.kheoleo+sl;
   else if(type==5) mypokemon(id).chiso.thanphap=+mypokemon(id).chiso.thanphap+sl;
   rand(1,10);
c_giaotiep();
   mypokemon(id).chiso.tiemnang = +mypokemon(id).chiso.tiemnang-sl;
   game_pokemon(id,1);
}


function game_pokemon(id, num)
{
    if (mypokemon(id) === null)
    {
        giaotiep('Bạn không có pokemon này');
        return false;
    }
   
    var ac = '';
    if (num == 2)
    {
        ac+='<center><font color="blue"><b>'+mypokemon(id).chiso.kinang+'</b> '+t('điểm kĩ năng')+'.</font></center>';
        for (var k = 0; k < mypokemon(id).kinang.length; k++)
        {
            if(kinang(mypokemon(id).kinang[k].id) != null) {
               var ae ='';
               if(mypokemon(id).kinang[k].buff != undefined) {
                 if(mypokemon(id).kinang[k].buff =="choang") {
                     ae+='<br> <b><font color=red> <font color=blue>'+mypokemon(id).kinang[k].tile+'%</font> '+t('gây choáng cho đối thủ trong vòng')+' '+tron(mypokemon(id).kinang[k].timebuff/1000)+'s </font></b> ';
                 }
                 
                 if(mypokemon(id).kinang[k].buff =="dongbang") {
                     ae+='<br> <b><font color=red> <font color=blue>'+mypokemon(id).kinang[k].tile+'%</font> '+t('gây đóng băng cho đối thủ')+' '+tron(mypokemon(id).kinang[k].timebuff/1000)+'s '+t('và tiêu hao')+'  <font color=blue>'+mypokemon(id).kinang[k].tacdung+'%</font>HP '+t('của đối thủ')+'. </font></b> ';
                 }
                 if(mypokemon(id).kinang[k].buff =="bong") {
                     ae+='<br> <b><font color=red> <font color=blue>'+mypokemon(id).kinang[k].tile+'%</font> '+t('gây bỏng cho đối thủ')+' '+tron(mypokemon(id).kinang[k].timebuff/1000)+'s '+t('và tiêu hao')+'  <font color=blue>'+mypokemon(id).kinang[k].tacdung+'%</font>HP. </font></b> ';
                 }
                 if(mypokemon(id).kinang[k].buff =="hoihp") {
                     ae+='<br> <b><font color=red> <font color=blue>'+mypokemon(id).kinang[k].tile+'%</font> '+t('Hồi HP cho bản thân trong')+' '+tron(mypokemon(id).kinang[k].timebuff/1000)+'s '+t('mỗi giây hồi phục')+'  <font color=blue>'+mypokemon(id).kinang[k].tacdung+'%</font>HP. </font></b> ';
                 }
                 if(mypokemon(id).kinang[k].buff =="hs") {
                     ae+='<br> <b><font color=red> <font color=blue>'+mypokemon(id).kinang[k].tile+'%</font> '+t('Hồi sinh cho người khác trong')+' '+tron(mypokemon(id).kinang[k].timebuff/1000)+'s '+t('mỗi giây hồi')+'  <font color=blue>'+mypokemon(id).kinang[k].tacdung+'%</font>HP. </font></b> ';
                 }
               }
            
            sd(mypokemon(id).kinang[k].id);
            ac += '<div class="border" onclick="game_pkmkn(' + id + ',' + mypokemon(id).kinang[k].id + ',\'' + mypokemon(id).kinang[k].ten + ' <br> '+kinang(mypokemon(id).kinang[k].id).mota+' <br> '+t('Mất MP')+' : ' + mypokemon(id).kinang[k].mp + ' <br> '+t('Hồi chiêu')+' : ' + mypokemon(id).kinang[k].hoichieu + ' <br> '+t('Sát thương')+' : ' + mypokemon(id).kinang[k].satthuong + ' ~ ' + mypokemon(id).kinang[k].satthuong * 1.5 + ' <br> Exp.' + tron(mypokemon(id).kinang[k].exp) + '/' + tron(mypokemon(id).kinang[k].expmax) + ' <br> '+t('Mục tiêu tấn công')+' : ' + tron(mypokemon(id).kinang[k].danhlan) + ' '+ae+'  \')"> <div  class="showitem" style="border: 2px solid;"><img src="/sql/eff/skill/' + imgskill(mypokemon(id).kinang[k].id).id + '.png""><div class="count count-vp-1">lv.' + mypokemon(id).kinang[k].level + '  </div></div>' + kinang(mypokemon(id).kinang[k].id).ten + '</div><div id="kn_'+mypokemon(id).kinang[k].id+'" class=" menu list" style="display: none;"></div>';
            }
        }
    }
    if (num == 3)
    {
        if (+id == +my.users.pokemon)
        {
            ac += '<div class=" menu list" onclick="thaopokemon(' + id + ')">'+t('Biến về người')+'</div>';
        }
        else
        {   
            
            ac+='<div class=" menu list" onclick="catpokemon(' + id + ')">'+t('Cất vào rương')+'</div>';
            ac += '<div class=" menu list" onclick="doipokemon(' + id + ')">'+t('Biến hình')+'</div>';
            ac += '<div class=" menu list" onclick="game_tha(' + id + ')">'+t('Thả PokeMon')+'</div>';
                    ac += '<div class=" menu list" onclick="game_pokemon(' + id + ',6)">'+t('Bán pokemon')+'</div>';

        }
    }
    if (num == 6)
    {
        ac += ''+t('Tên người nhận')+' : <input id="nguoinhan" class="form-control" type="text" value="" style="width: 50%;"> <br> ';
        ac += ' xu : <input id="xu" class="form-control" type="text" value="0" style="width: 50%;"> <br> ';
        ac += ' ruby : <input id="ruby" class="form-control" type="text" value="0" style="width: 50%;"> <br> ';
        ac += '<center><button class="btn btn-primary" onclick="ban2(' + id + ')" id="nutban">'+t('Bán')+'</button></center>';
    }
    if (num == 4)
    {
        if (+mypokemon(id).chiso.binhnuoc >= 1)
        {
            var idtb = mypokemon(id).chiso.binhnuoc;
            ac += '<div class="border" onclick="game_doctrangbi2(' + id + ',' + idtb + ')"> <div  class="showitem" style="border: 2px solid;"><img src="/sql/item/' + ruongtrangbi(idtb).chiso.img + '.png" ><div class="count count-vp-1">+' + ruongtrangbi(idtb).nangcap + ' </div></div>' + ruongtrangbi(idtb).chiso.ten + '</div><div id="trangbi2_' + idtb + '" class=" menu list" style="display:none;"></div>';
        }
        else
        {
            ac += '<div class="border"> <div  class="showitem" style="border: 2px solid;"></div></div>';
        }
        if (+mypokemon(id).chiso.binhthuoc >= 1)
        {
            var idtb = mypokemon(id).chiso.binhthuoc;
            ac += '<div class="border" onclick="game_doctrangbi2(' + id + ',' + idtb + ')"> <div  class="showitem" style="border: 2px solid;"><img src="/sql/item/' + ruongtrangbi(idtb).chiso.img + '.png" ><div class="count count-vp-1">+' + ruongtrangbi(idtb).nangcap + ' </div></div>' + ruongtrangbi(idtb).chiso.ten + '</div><div id="trangbi2_' + idtb + '" class=" menu list" style="display:none;"></div>';
        }
        else
        {
            ac += '<div class="border"> <div  class="showitem" style="border: 2px solid;"></div></div>';
        }
        if (+mypokemon(id).chiso.da >= 1)
        {
            var idtb = mypokemon(id).chiso.da;
            ac += '<div class="border" onclick="game_doctrangbi2(' + id + ',' + idtb + ')"> <div  class="showitem" style="border: 2px solid;"><img src="/sql/item/' + ruongtrangbi(idtb).chiso.img + '.png" ><div class="count count-vp-1">+' + ruongtrangbi(idtb).nangcap + ' </div></div>' + ruongtrangbi(idtb).chiso.ten + '</div><div id="trangbi2_' + idtb + '" class=" menu list" style="display:none;"></div>';
        }
        else
        {
            ac += '<div class="border"> <div  class="showitem" style="border: 2px solid;"></div></div>';
        }
        if (+mypokemon(id).chiso.voxo >= 1)
        {
            var idtb = mypokemon(id).chiso.voxo;
            ac += '<div class="border" onclick="game_doctrangbi2(' + id + ',' + idtb + ')"> <div  class="showitem" style="border: 2px solid;"><img src="/sql/item/' + ruongtrangbi(idtb).chiso.img + '.png" ><div class="count count-vp-1">+' + ruongtrangbi(idtb).nangcap + ' </div></div>' + ruongtrangbi(idtb).chiso.ten + '</div><div id="trangbi2_' + idtb + '" class=" menu list" style="display:none;"></div>';
        }
        else
        {
            ac += '<div class="border"> <div  class="showitem" style="border: 2px solid;"></div></div>';
        }
        if (+mypokemon(id).chiso.qua >= 1)
        {
            var idtb = mypokemon(id).chiso.qua;
            ac += '<div class="border" onclick="game_doctrangbi2(' + id + ',' + idtb + ')"> <div  class="showitem" style="border: 2px solid;"><img src="/sql/item/' + ruongtrangbi(idtb).chiso.img + '.png" ><div class="count count-vp-1">+' + ruongtrangbi(idtb).nangcap + ' </div></div>' + ruongtrangbi(idtb).chiso.ten + '</div><div id="trangbi2_' + idtb + '" class=" menu list" style="display:none;"></div>';
        }
        else
        {
            ac += '<div class="border"> <div  class="showitem" style="border: 2px solid;"></div></div>';
        }
    }
    if (num == 5)
    {
        for (var k = 0; k < my.trangbi.length; k++)
        {
            if (my.trangbi[k].pokemon <= 0)
            {
                ac += '<div class="border" onclick="game_doctrangbi(' + id + ',' + my.trangbi[k].id + ')"> <div  class="showitem" style="border: 2px solid;"><img src="/sql/item/' + ruongtrangbi(my.trangbi[k].id).chiso.img + '.png" ><div class="count count-vp-1">+' + ruongtrangbi(my.trangbi[k].id).nangcap + ' </div></div>' + ruongtrangbi(my.trangbi[k].id).chiso.ten + '</div><div id="trangbi_' + my.trangbi[k].id + '" class=" menu list" style="display:none;"></div>';
            }
        }
    }
    if (num == 1)
    {
        
        ac += '<span style="position: absolute;left:10%;">HP : ' + tron(mypokemon(id).chiso.hp) + '/' + tron(mypokemon(id).chiso.hpfull) + '  <br>'+t('Giáp')+' : ' + tron(mypokemon(id).chiso.giap) + ' <br> '+t('Xuyên giáp')+' : ' + (mypokemon(id).chiso.xuyengiap).toFixed(2) + '% <br>'+t('Giảm hồi chiêu')+' : ' + (mypokemon(id).chiso.tocdo/1000).toFixed(2) + ' s <br>'+t('Công vật lí')+' : ' + tron(mypokemon(id).chiso.vatli) + '  <br>'+t('Công phép')+' : ' + tron(mypokemon(id).chiso.phep) + '  <br>'+t('Tỉ lệ chí mạng')+' : ' + (mypokemon(id).chiso.chimang).toFixed(2) + '% <br> '+t('Tốc độ phát triển')+' : '+pokemon(mypokemon(id).chiso.id).tangtruong+'<br>  <center>'+type(mypokemon(id).chiso.id)+'</center> <center><b><font color="red">'+t('Tiềm năng')+' (' + mypokemon(id).chiso.tiemnang + ')</font></b></center>';
        ac += '<style>progress[value]::-webkit-progress-bar {border-radius: 2px;box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;color: #000;}</style>';
        ac+='<style>progress {color: blue;}</style>';
        ac += ''+t('Sức mạnh')+' <progress max="' + mypokemon(id).chiso.tiemnanggoc + '" value="' + mypokemon(id).chiso.sucmanh + '" style=" background-color: #000;"></progress> <b onclick="gamecong(' + id + ',1)">[+]</b> <br> ';
        ac += ''+t('Trí tuệ')+' <progress max="' + mypokemon(id).chiso.tiemnanggoc + '" value="' + mypokemon(id).chiso.tritue + '" style="background-color: #04B431;"></progress> <b onclick="gamecong(' + id + ',2)">[+]</b> <br> ';
        ac += ''+t('Thể lực')+' <progress max="' + mypokemon(id).chiso.tiemnanggoc + '" value="' + mypokemon(id).chiso.theluc + '" style="background-color: #FF0000;"></progress> <b onclick="gamecong(' + id + ',3)">[+]</b> <br> ';
        ac += ''+t('Kéo léo')+' <progress max="' + mypokemon(id).chiso.tiemnanggoc + '" value="' + mypokemon(id).chiso.kheoleo + '" style="background-color: #B4045F;"></progress> <b onclick="gamecong(' + id + ',4)">[+]</b> <br> ';
        ac += ''+t('Thân pháp')+' <progress max="' + mypokemon(id).chiso.tiemnanggoc + '" value="' + mypokemon(id).chiso.thanphap + '" style="background-color: #FFFF00;"></progress> <b onclick="gamecong(' + id + ',5)">[+]</b> <br> <hr> ';

        ac += t('1 sức mạnh : Tăng 1 sát thương vật lí,0.01 tỉ lệ chí mạng. <br>');
        ac += t('1 trí tuệ : tăng 30 hp,0.01 xuyên giáp. <br>');
        ac += t('1 thể lực : tăng 40 hp,6 mp. <br>');
        ac += t('1 khéo léo : 8 mp,3 tốc độ <br>');
        ac += t('1 thân pháp : 30 giáp, 2 sát thương phép <br></span>');

    }

    box('<img height="32" src="/xml/nhanvat.php?nhanvat=' + mypokemon(id).chiso.img + '&nut=1"> ' + mypokemon(id).chiso.ten + ' #' + mypokemon(id).id + ' <br> '+t('Cấp độ')+' : ' + mypokemon(id).chiso.level + ' (' + tron(mypokemon(id).chiso.exp) + '/' + tron(mypokemon(id).chiso.expmax) + ') ', ''+t('Chỉ số')+':game_pokemon(' + id + ',1);'+t('Kĩ năng')+':game_pokemon(' + id + ',2);'+t('Trang bị')+':game_pokemon(' + id + ',4);'+t('Túi')+':game_pokemon(' + id + ',5);'+t('Tính năng')+':game_pokemon(' + id + ',3)', ac);

}

function game_chatmap() {
    c_giaotiep();
        c_box();
        c_canvas();
        boxchat=1;
document.getElementById('menu_nho').style.display = "block";
  $('#menu_nho').html('<br><center><input id="messageBox" class="form-control" type="text" value="" style="width: 50%;"  onkeydown="if(event.keyCode == 13) chatMessage();" onFocus="this.select()" autofocus="autofocus"> </center> ');
        setTimeout(function() {
              camdi=1;

    }, 200);     
}



function game_chat(id) { 
    var ac ='';
if(id==0) {
ac+='<div class="border row"> <input id="messageBox" class="form-control" type="text" value="" onkeydown="if(event.keyCode == 13) chatMessage();" style="width: 70%;" placeHolder="Hãy nhập nội dung..."> <div class="canvas_menu" onclick="chatMessage()">Chat</div> </div>';
       ac+= '<div id="chatConsole">'+chat_1+'</div>';
}
if(id==1) {
    ac+='<div class="border row"> <input id="messageBox" class="form-control" type="text" value="" onkeydown="if(event.keyCode == 13) chatMessage();" style="width: 70%;" placeHolder="Hãy nhập nội dung..."> <div class="canvas_menu" onclick="chatMessage()">Chat</div> </div>';
       ac+= '<div id="playerList">'+chat_3+'</div>';
}
if(id==3) {
    ac+='<div class="border row"> <input id="messageBox" class="form-control" type="text" value="" onkeydown="if(event.keyCode == 13) chatMessage();" style="width: 70%;" placeHolder="Hãy nhập nội dung..."> <div class="canvas_menu" onclick="chatMessage()">Chat</div> </div>';
       ac+= '<div id="fixloi">'+chat_2+'</div>';
}
    

    box('<img height="32" src="/xml/nhanvat.php?nhanvat='+my.users.skin+'&nut=1"> '+my.users.username+' #'+my.users.id+' <br> '+t('Cấp độ')+' : '+my.users.level+'<span class="trai">('+tron(my.users.exp)+'/'+tron(my.users.expmax)+')</span>',''+t('Chát chung')+':doichat(0);Map:doichat(1);'+t('Riêng')+':doichat(3)',ac); 

}
function game_send() {
    if(getname($('#nguoinhan').val()) === null) {
        giaotiep(t('Người chơi không online'));
        return false;
    }
  if($('#noidung').val().length <=5) {
      giaotiep(t('Nội dung phải lớn hơn 5 kí tự'));
      return false;
  }
    chat('[PM]'+userName+' : '+$('#noidung').val(),'inbox',getname($('#nguoinhan').val()).id);

  $('#noidung').val('');

    
}
function game_ib(id,type) {
    var ac = '';
    var namex = '';
    if(getusers(id) !== null && type == 1) {
     namex = getusers(id).username;
    }
    
    
    ac+=''+t('Tên người nhận')+' : <input id="nguoinhan" class="form-control" type="text" value="'+namex+'" style="width: 50%;"><br>';
    ac+=''+t('Nội dung')+' : <input id="noidung" class="form-control" type="text" value="" style="width: 50%;">';
    ac+='<br><center><button class="btn btn-primary" onclick="game_send()" id="nutban">'+t('Nhắn tin')+'</button></center>';

    
    ac+='<hr><center>'+t('Tin nhắn mới')+'</center></hr>';
    ac+='<div id="fixloi">'+chat_2+'</div>';
    
    box('<img height="32" src="/xml/nhanvat.php?nhanvat='+my.users.skin+'&nut=1"> '+my.users.username+' #'+my.users.id+' <br> '+t('Cấp độ')+' : '+my.users.level+'<span class="trai">('+tron(my.users.exp)+'/'+tron(my.users.expmax)+')</span>', 'Inbox:game_ib(' + id + ')', ac);

}
function gamemoipvp(id) {
    if(+my.users.level <=5) {
        giaotiep(t('Bạn phải đạt cấp 5 mới có thể thách đấu.'));
        return false;
    }
     if(getusers(id) === null) {
        giaotiep(t('Người chơi không online.'));
        return false;
    }
    if(+$('#cuoc').val() <=10) {
      giaotiep(t('Mức cược phải >=11 xu'));
      return false;
  }
  if(+$('#cuoc').val() < +my.chiso.xu) {
      giaotiep(t('Bạn không có đủ xu.'));
      return false;
  }
  moipk(id,+$('#cuoc').val());
}
function game_pk() {
   $('#zxczxcse').show();
   
}
function ttnv(id) {
    return mmouser_info(id);
}
function mmouser_info(id,tc) {
    if(getusers(id) === null) {
        giaotiep(t('Người chơi không online.'));
        return false;
    }
    var ac='';
    if(tc==1) {
            ac+='<div class=" menu list" onclick="#">'+t('dịch chuyển')+'</div>';
    
    }
        ac+='<div class=" menu list" onclick="game_ketban('+id+')">'+vi('Kết bạn')+'</div>';
        ac+='<div class=" menu list" onclick="game_ib('+id+',1)">'+t('Nhắn tin')+'</div>';
        ac+='<div class=" menu list" onclick="game_pk()">'+t('Thách đấu')+'</div>';
   
   ac+='<div id="zxczxcse" style="display:none;">'+t('Mức cược')+' : <input id="cuoc" class="form-control" type="number" value="0" style="width: 50%;">';
    ac+='<br><center><button class="btn btn-primary" onclick="gamemoipvp('+id+')" id="nutban">'+t('Thách đấu')+'</button></center></div>';

       box('<img height="32" src="/xml/nhanvat.php?nhanvat='+getusers(id).skin+'&nut=1"> '+getusers(id).username+' #'+getusers(id).id+'',''+t('Người chơi')+':mmouser_info('+id+')',ac); 

}

function game_ketban(id) {
    if(getusers(id) === null) {
        giaotiep(t('Người chơi này không online.'));
        return false;
    }
    if(my.banbe === undefined ) {
        my.banbe = [];
    }
    
    for(var i=0;i<my.banbe.length;i++) {
        if(my.banbe[i].id == id) {
            giaotiep(t('Bạn đã kết bạn với người chơi này rồi.'));
            return false;
        } 
    }
    chat(''+userName+' '+t('Vừa thêm bạn vào danh sách bạn bè.')+'','ib',id);
    giaotiep(t('Kết bạn thành công.'));
    my.banbe.push({ id : id , name : getusers(id).username , skin : getusers(id).skin  });
}

function layvpab(id) {
    layra(id,+$('#soluong').val());
    game_ruong(1);
    cl();
}
    function gamelvldg(id) {
document.getElementById('menu_nho').style.display = "block";
  $('#menu_nho').html('<center>'+t('Số lượng')+' : <input id="soluong" class="form-control" type="number" value="" style="width: 50%;" onFocus="this.select()" autofocus="autofocus"> <button class="btn btn-primary" onclick="layvpab('+id+')" id="nutban">'+t('Lấy ra')+'</button></b> <button class="btn btn-primary" onclick="cl()" id="nutban">'+t('Hủy')+'</button></b></center> ');
}
function fghfghfgh(id) {
catvao(id,+$('#soluong').val());
   game_hanhtrang(2);
    cl();    
}

function gamkskfsd(id) {
document.getElementById('menu_nho').style.display = "block";
  $('#menu_nho').html('<center>'+t('Số lượng')+' : <input id="soluong" class="form-control" type="number" value="" style="width: 50%;" onFocus="this.select()" autofocus="autofocus"> <button class="btn btn-primary" onclick="fghfghfgh('+id+')" id="nutban">'+t('Cất')+'</button></b> <button class="btn btn-primary" onclick="cl()" id="nutban">'+t('Hủy')+'</button></b></center> ');
}


function game_ruong(id) {
var ac='';
if(id==1) {
   for(var k=0;k<my.ruong.length;k++) {
        
		if(my.ruong[k].soluong >=1) {
ac+='<div class="border" onclick="gamelvldg('+my.ruong[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="/sql/item/'+shopvatpham(my.ruong[k].id).img+'.png" ><div class="count count-vp-1">'+my.ruong[k].soluong+' </div></div>'+shopvatpham(my.ruong[k].id).ten+'</div>';
		} else {
		     my.ruong.splice(k, 1);
		}
			}
	for(var a=0;a<my.khodo.kho-my.ruong.length;a++ ) {
ac+='<div class="border"> <div  class="showitem" style="border: 2px solid;"></div></div>';
	    
	} 
}
if(id==2) {
    for(var k=0;k<my.pokemon.length;k++) {
             if(+mypokemon(my.pokemon[k].id).id == +my.users.pokemon) 
                 var tenpkm = '<font color="red">'+mypokemon(my.pokemon[k].id).chiso.ten+'</font>';
              else var tenpkm = ''+mypokemon(my.pokemon[k].id).chiso.ten+'';
              if(mypokemon(my.pokemon[k].id).kho ==1  ) {
		ac+='<div class="border" onclick="laypokemon('+mypokemon(my.pokemon[k].id).id+')"> <div  class="showitem" style="border: 2px solid;"><img height="32" src="/xml/nhanvat.php?nhanvat='+mypokemon(my.pokemon[k].id).chiso.img+'&nut=1" ><div class="count count-vp-1">lv.'+mypokemon(my.pokemon[k].id).chiso.level+'</div></div>'+tenpkm+'  HP : '+tron(mypokemon(my.pokemon[k].id).chiso.hp)+'/'+tron(mypokemon(my.pokemon[k].id).chiso.hpfull)+' </div>';
			}
         }
}
if(id==3) {
    giaotiep(t('Tính năng này đang bảo trì.'));
    return false;
    if(my.tiengui == undefined) {
        my.tiengui =0;
    }
    if(+my.tiengui >500000000) {
        my.tiengui = 500000000;
    }
    ac+='<center><b>'+tron(my.tiengui)+' XU</b></center> <br>'+t('Số tiền')+' : <input id="sotien" class="form-control" type="number" value="" style="width: 50%;">  <br> <center><button class="btn btn-primary" onclick="guitien();" id="nutban">'+t('Gửi tiền')+'</button><button class="btn btn-primary" onclick="laytien();" id="nutban">'+t('Lấy tiền')+'</button></center> <br><br> '+t('- Số tiền mang tối đa trên người là : <font color="red">2.000.000.000 xu </font> <Br>- Số tiền gửi tối đa là : <font color="red">500.000.000 xu</font> <br>- Nếu hơn thì số tiền quá đó sẽ bị mất. ')+'';
}
    
       box(t('Bạn muốn cất hay lấy gì ?'),''+t('Vật phẩm')+':game_ruong(1);PokeMon:game_ruong(2);'+t('Gửi tiền')+':game_ruong(3)',ac); 

}

function laytien() {
    if(+$('#sotien').val() <=0) {
        giaotiep('Vui lòng nhập xu');
        return false;
    }
    xu(+$('#sotien').val());
    my.tiengui = +my.tiengui - +$('#sotien').val();
    game_ruong(3);
}
function guitien() {
    if(+$('#sotien').val() <=0) {
        giaotiep('Vui lòng nhập xu');
        return false;
    }
    xu(-$('#sotien').val());
    my.tiengui = +my.tiengui + +$('#sotien').val();
    game_ruong(3);
}

function catpokemon(id) {
    if(mypokemon(id) === null) {
        return false;
    }
    mypokemon(id).kho =1;
    game_hanhtrang(3);
}
function laypokemon(id) {
    if(mypokemon(id) === null) {
        return false;
    }
    mypokemon(id).kho =0;
    game_ruong(2);
}

function edit_info() {
    c_giaotiep();
        c_box();
        c_canvas();
document.getElementById('menu_nho').style.display = "block";
  $('#menu_nho').html('<center>'+t('Mật khẩu mới')+' : <input id="newpass" class="form-control" type="text" value="" style="width: 50%;" onFocus="this.select()" autofocus="autofocus"> <button class="btn btn-primary" onclick="doi_pass()" id="nutban">'+t('Đổi')+'</button></b> <button class="btn btn-primary" onclick="cl()" id="nutban">'+t('Hủy')+'</button></b></center> ');
}

function doi_pass() {
    
    
    if($('#newpass').val().length <=5) {
        giaotiep(t('Mật khẩu lớn hơn 5 kí tự.'));
        return false;
    }
    
    cl();

    my.users.matkhau = md5($('#newpass').val());
    giaotiep(t('Đổi mật khẩu thành công.'));
   // lichsu('Đổi mật khẩu thành  '+$('#newpass').val()+'  ');
sql();
}
function chattg() {
    if(+my.users.xu <500) {
        giaotiep(t('Bạn cần 500 xu để chát'));
        return false
    }
    my.users.xu = +my.users.xu-500;
    cl();
    chat(''+userName+' : '+$('#classchat').val()+' ','CTG',0);
    camdi=0;
    lichsu('Chát thế giới :   '+$('#classchat').val()+'  ');
    
}
function game_cttg() {
    c_giaotiep();
        c_box();
        c_canvas();
        
document.getElementById('menu_nho').style.display = "block";
  $('#menu_nho').html('<br><center><input id="classchat" class="form-control" type="text" value="" style="width: 50%;"  onkeydown="if(event.keyCode == 13) chattg();"  autofocus="autofocus"> </center> ');
        setTimeout(function() {
              camdi=1;

    }, 200);     
}


