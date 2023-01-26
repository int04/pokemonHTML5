var ruby_can = Array(
    1,
    2,
    3,
    5,
    10,
    12,
    15,
    20,
    35,
    50,
    65,
    75,
    90,
    150,
    350,
    0
    );
var xu_can = Array(
    540,
    1260,
    3960,
    18810,
    25920,
    40800,
    84480,
    414720,
    533760,
    806400,
    1620480,
    8017920,
    9461760,
    14684160,
    22026240,
    0
    );
    var da_can = Array(
    1,
    3,
    8,
    6,
    9,
    12,
    15,
    20,
    35,
    40,
    68,
    80,
    96,
    105,
    130,
    0
    );
    
    var tile_can = Array(
    100,
    80,
    70,
    64,
    51,
    44,
    36,
    29,
    21,
    18,
    15,
    12,
    10,
    9,
    5,
    0
    );
    
    function game_cuonghoa(id) {
        if(ruongtrangbi(id) === null) {
        giaotiep('Vui lòng thử lại.');
        return false;
    }
     if(ruongtrangbi(id).nangcap >=15) {
        giaotiep(t('Đã đạt cấp tối đa.'));
        return false;
    }
    
    if(soluong(11) < da_can[+ruongtrangbi(id).nangcap]) {
        giaotiep(t('Bạn chưa đủ đá để nâng cấp.'));
        return false;
    }
    if(my.users.xu < xu_can[+ruongtrangbi(id).nangcap]) {
        giaotiep(t('Bạn không đủ xu để nâng cấp.'));
        return false;
    }
    c_box();
    c_giaotiep();
    ch();
    xu(-xu_can[+ruongtrangbi(id).nangcap]);
   vatpham(11,-da_can[+ruongtrangbi(id).nangcap]);
    if(rand(1,100) <= tile_can[+ruongtrangbi(id).nangcap]) {
        setTimeout(function(){
            ruongtrangbi(id).nangcap = +ruongtrangbi(id).nangcap+1;
            giaotiep(' '+t('Nâng cấp thành công ! Trang bị được lên cấp')+' '+ruongtrangbi(id).nangcap+'  ');
            cuonghoa(1,id);
        }, 300);

    } else {
        if(+ruongtrangbi(id).nangcap <=2) {
            ruongtrangbi(id).nangcap=0;
        }
        
        if(+ruongtrangbi(id).nangcap >=3 && +ruongtrangbi(id).nangcap <=5) {
            ruongtrangbi(id).nangcap=3;
        }
        
        if(+ruongtrangbi(id).nangcap >=6 && +ruongtrangbi(id).nangcap <=8) {
            ruongtrangbi(id).nangcap=6;
        }
        if(+ruongtrangbi(id).nangcap >=9 && +ruongtrangbi(id).nangcap <=11) {
            ruongtrangbi(id).nangcap=9;
        }
        if(+ruongtrangbi(id).nangcap >=12 && +ruongtrangbi(id).nangcap <=14) {
            ruongtrangbi(id).nangcap=12;
        }
        if(+ruongtrangbi(id).nangcap >=14 ) {
            ruongtrangbi(id).nangcap=14;
        }
        
   setTimeout(function(){
            ruongtrangbi(id).nangcap = +ruongtrangbi(id).nangcap;
            giaotiep(''+t('Xin lỗi, ta đã làm hết sức ! Trang bị tụt xuống cấp')+' '+ruongtrangbi(id).nangcap+'  ');
            cuonghoa(1,id);
        }, 300);     
        
    }
    
   
    
    }
    
    
    
  function game_cuonghoacanthan(id) {
        if(ruongtrangbi(id) === null) {
        giaotiep(t('Vui lòng thử lại.'));
        return false;
    }
     if(ruongtrangbi(id).nangcap >=15) {
        giaotiep(t('Đã đạt cấp tối đa.'));
        return false;
    }
    
    if(soluong(11) < da_can[+ruongtrangbi(id).nangcap]) {
        giaotiep(t('Bạn chưa đủ đá để nâng cấp.'));
        return false;
    }
    if(my.users.ruby < ruby_can[+ruongtrangbi(id).nangcap]) {
        giaotiep(t('Bạn không đủ ruby để nâng cấp.'));
        return false;
    }
    c_box();
    c_giaotiep();
    ch();
    ruby(-ruby_can[+ruongtrangbi(id).nangcap]);
   vatpham(11,-da_can[+ruongtrangbi(id).nangcap]);
    if(rand(1,100) <= tile_can[+ruongtrangbi(id).nangcap]) {
        setTimeout(function(){
            ruongtrangbi(id).nangcap = +ruongtrangbi(id).nangcap+1;
            giaotiep(''+t('Nâng cấp thành công ! Trang bị được lên cấp')+' '+ruongtrangbi(id).nangcap+'  ');
            cuonghoa(3,id);
        }, 300);

    } else {
        
   setTimeout(function(){
            ruongtrangbi(id).nangcap = +ruongtrangbi(id).nangcap;
            giaotiep(''+t('Nâng cấp thất bại, do nâng cấp cẩn thận nên không bị tụt cấp.')+' ');
            cuonghoa(3,id);
        }, 300);     
        
    }
    
   
    
    }  
    
    
    
    
    
    function cuonghoa(num,id) {
        var ac='';
        var idtb = id;
    
    if(num ==3) {
        if(ruongtrangbi(id) === null) {
        ac+=t('Chọn hành trang=> click món đồ cần cường hóa.');
        return false;
    }
    
    var ty = ' '+t('Yêu cầu cấp độ pokemon')+' '+ruongtrangbi(idtb).chiso.level+' <br>';
    if(+ruongtrangbi(idtb).chiso.hp >=1) 
        ty+='<b><font color="red">+ '+ruongtrangbi(idtb).chiso.hp+' HP</b></font><br>';
    if(+ruongtrangbi(idtb).chiso.phep >=1) 
        ty+='<b><font color="38610B">+ '+ruongtrangbi(idtb).chiso.phep+' phép</font></b><br>';    
    if(+ruongtrangbi(idtb).chiso.vatli >=1) 
        ty+='<b><font color="088A68">+ '+ruongtrangbi(idtb).chiso.vatli+' Vật lí</font></b><br>';
    if(+ruongtrangbi(idtb).chiso.chimang >0) 
        ty+='<b><font color="8A0829">+ '+ruongtrangbi(idtb).chiso.chimang.toFixed(2)+' % CM</font></b><br>'; 
 if(+ruongtrangbi(idtb).chiso.xuyengiap >0) 
        ty+='<b><font color="DF013A">+ '+ruongtrangbi(idtb).chiso.xuyengiap.toFixed(2)+' % XG</font></b><br>';
        if(+ruongtrangbi(idtb).chiso.giap >=1) 
        ty+='<b><font color="DF013A">+ '+ruongtrangbi(idtb).chiso.giap+' % Giáp</font></b><br>';
if(+ruongtrangbi(idtb).chiso.mp >=1) 
        ty+='<b><font color="0B2F3A">+ '+ruongtrangbi(idtb).chiso.mp+' Mp</font></b><br>';  
        
 if(+ruongtrangbi(idtb).chiso.tocdo >=1) 
        ty+='<b><font color="blue">+ '+ruongtrangbi(idtb).chiso.tocdo+' tốc độ</font></b><br>';            
    
    
    
      ac+='<div class="menu list">'+ruongtrangbi(idtb).chiso.ten+' + '+ruongtrangbi(idtb).nangcap+' <br> '+ty+' </div>';
    
      ac+='<center><div class="canvas_menu" onclick="game_cuonghoacanthan('+idtb+')">'+t('Cận thận')+'</div> <br> '+t('Tỉ lệ thành công')+' : '+tile_can[+ruongtrangbi(idtb).nangcap]+'% <br> '+t('Ruby cần')+' : '+tron(ruby_can[+ruongtrangbi(idtb).nangcap])+' <br> '+t('Đá cần')+' : '+da_can[+ruongtrangbi(idtb).nangcap]+'   </center>';
ac+='<center>'+t('Trang bị sẽ không tụt cấp khi bạn nâng cấp thất bại')+'</center>';
        }    
        
        if(num ==1) {
        if(ruongtrangbi(id) === null) {
        ac+=t('Chọn hành trang=> click món đồ cần cường hóa.');
        return false;
    }
    
    var ty = 'Yêu cầu cấp độ pokemon '+ruongtrangbi(idtb).chiso.level+' <br>';
   if(+ruongtrangbi(idtb).chiso.hp >=1) 
        ty+='<b><font color="red">+ '+tron(ruongtrangbi(idtb).chiso.hp)+' HP</b></font><br>';
    if(+ruongtrangbi(idtb).chiso.phep >=1) 
        ty+='<b><font color="38610B">+ '+tron(ruongtrangbi(idtb).chiso.phep)+' phép</font></b><br>';    
    if(+ruongtrangbi(idtb).chiso.vatli >=1) 
        ty+='<b><font color="088A68">+ '+tron(ruongtrangbi(idtb).chiso.vatli)+' Vật lí</font></b><br>';
    if(+ruongtrangbi(idtb).chiso.chimang >0) 
        ty+='<b><font color="8A0829">+ '+ruongtrangbi(idtb).chiso.chimang.toFixed(2)+' % CM</font></b><br>'; 
 if(+ruongtrangbi(idtb).chiso.xuyengiap >0) 
        ty+='<b><font color="DF013A">+ '+ruongtrangbi(idtb).chiso.xuyengiap.toFixed(2)+' % XG</font></b><br>';
        if(+ruongtrangbi(idtb).chiso.giap >=1) 
        ty+='<b><font color="DF013A">+ '+ruongtrangbi(idtb).chiso.giap+'  Giáp</font></b><br>';
if(+ruongtrangbi(idtb).chiso.mp >=1) 
        ty+='<b><font color="0B2F3A">+ '+tron(ruongtrangbi(idtb).chiso.mp)+' Mp</font></b><br>';  
        
 if(+ruongtrangbi(idtb).chiso.tocdo >=1) 
        ty+='<b><font color="blue">+ '+tron(ruongtrangbi(idtb).chiso.tocdo)+' tốc độ</font></b><br>';          
    
    
    
      ac+='<div class="menu list">'+ruongtrangbi(idtb).chiso.ten+' + '+ruongtrangbi(idtb).nangcap+' <br> '+ty+' </div>';
    
      ac+='<center><div class="canvas_menu" onclick="game_cuonghoa('+idtb+')">'+t('cường hóa')+'</div> <br> '+t('Tỉ lệ thành công')+' : '+tile_can[+ruongtrangbi(idtb).nangcap]+'% <br> '+t('Xu cần')+' : '+tron(xu_can[+ruongtrangbi(idtb).nangcap])+' <br> '+t('Đá cần')+' : '+da_can[+ruongtrangbi(idtb).nangcap]+'   </center>';

        }
        
        
        if(num==2) {
        for(var k=0;k<my.trangbi.length;k++) {
		if(my.trangbi[k].pokemon <=0) {
ac+='<div class="border" onclick="game_nc_doc('+my.trangbi[k].id+')"> <div  class="showitem" style="border: 2px solid;"><img src="/sql/item/'+ruongtrangbi(my.trangbi[k].id).chiso.img+'.png" ><div class="count count-vp-1">+'+ruongtrangbi(my.trangbi[k].id).nangcap+' </div></div>'+ruongtrangbi(my.trangbi[k].id).chiso.ten+'</div><div id="trangbi_'+my.trangbi[k].id+'" class=" menu list" style="display:none;"></div>';
		}
     } 
        }
    box(t('Chọn đồ muốn cần cường hóa rồi ta sẽ giúp cậu !'),''+t('Cường hóa')+':cuonghoa(1,'+id+');'+t('Túi')+':cuonghoa(2,'+id+')',ac); 
    
    }
    
    
    function game_nc_doc(idtb) {
    
    if(ruongtrangbi(idtb) === null) {
        giaotiep('Không tìm thấy vật phẩm này');
        return false;
    }
    var ty = 'Yêu cầu cấp độ pokemon '+ruongtrangbi(idtb).chiso.level+' <br>';
    if(+ruongtrangbi(idtb).chiso.hp >=1) 
        ty+='<b><font color="red">+ '+tron(ruongtrangbi(idtb).chiso.hp)+' HP</b></font><br>';
    if(+ruongtrangbi(idtb).chiso.phep >=1) 
        ty+='<b><font color="38610B">+ '+tron(ruongtrangbi(idtb).chiso.phep)+' phép</font></b><br>';    
    if(+ruongtrangbi(idtb).chiso.vatli >=1) 
        ty+='<b><font color="088A68">+ '+tron(ruongtrangbi(idtb).chiso.vatli)+' Vật lí</font></b><br>';
     if(+ruongtrangbi(idtb).chiso.chimang >0) 
        ty+='<b><font color="8A0829">+ '+ruongtrangbi(idtb).chiso.chimang.toFixed(2)+' % CM</font></b><br>'; 
 if(+ruongtrangbi(idtb).chiso.xuyengiap >0) 
        ty+='<b><font color="DF013A">+ '+ruongtrangbi(idtb).chiso.xuyengiap.toFixed(2)+' % XG</font></b><br>';
if(+ruongtrangbi(idtb).chiso.mp >=1) 
        ty+='<b><font color="0B2F3A">+ '+tron(ruongtrangbi(idtb).chiso.mp)+' Mp</font></b><br>';  
        if(+ruongtrangbi(idtb).chiso.giap >=1) 
        ty+='<b><font color="0B2F3A">+ '+tron(ruongtrangbi(idtb).chiso.giap)+' Giáp</font></b><br>';  
        
 if(+ruongtrangbi(idtb).chiso.tocdo >=1) 
        ty+='<b><font color="blue">+ '+tron(ruongtrangbi(idtb).chiso.tocdo)+' tốc độ</font></b><br>';  
    
    
        ty+='<center><div class="canvas_menu" onclick="cuonghoa(1,'+idtb+')">'+t('Cường hóa')+'</div><div class="canvas_menu" onclick="cuonghoa(3,'+idtb+')">'+t('Cẩn thận')+'</div></center>';
    
        $('#trangbi_'+idtb).html(''+ruongtrangbi(idtb).chiso.ten+' + '+ruongtrangbi(idtb).nangcap+' <br> '+ty+'');  

              $('#trangbi_'+idtb).toggle('fast','linear');  

     
}