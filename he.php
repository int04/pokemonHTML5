<?PHP
header('Content-Type: application/json;charset=utf-8');  

$code = 
array(
    "5"=> array(15,30,20,25,10,30,35,30,35,19,23,15,19,29,30,30,15,10),
    "10"=> array(25,40,35,35,25,36,42,52,48,30,40,45,29,50,50,35,25,20),
    "15"=> array(40,55,50,50,45,60,50,59,55,45,60,55,46,65,85,75,85,60),
    "25"=> array(66,75,65,80,85,75,55,65,68,59,71,65,46,65,90,85,90,80),
    "30"=> array(80,80,79,82,90,85,66,69,75,85,79,70,48,69,91,90,91,81),
    "35"=> array(90,90,90,89,91,86,80,75,88,89,85,73,90,79,95,94,92,100),
    "40"=> array(100,95,96,94,99,90,89,89,95,96,97,99,93,99,96,97,96,120),
    "45"=> array(125,100,120,110,106,108,121,116,117,112,110,103,109,105,106,100,100,121),
    "50"=> array(135,120,121,115,129,130,131,161,119,115,140,130,120,121,125,120,110,135),
    "50"=> array(139,130,125,135,140,150,170,170,150,150,160,170,190,175,185,165,150,165),
   
);

$i=0;



while($i<=17) {
    $mp =15;
$thoigian =3500;
$id2 = 3;
$level = 15;
$ten = 'Funger red';
$img = 'b';
$img_1 = 'b'; // neu co anh khac gi de vo///
$img_0 = 'b';
$rong = 376;
$cao = 98;
$x = -30;
$w = 50;
$h=50;
$sohinh =4;
$pk = 'ok'; // ok = ddasnh xa
$buff = bong; // dongbang, choang, troi , bong
$tile = 1; // tile random ra///
$time = 3000; // thoigiantacdung;
$tacdung = 1; ///% tac dung
$mota = 'Ném một phi tiêu thẳng vào người đối thủ. ';
    if($i==0) {
    $he = 'Normal';
    $stp = 0;
    $svl = $code[$level][$i];
    $mp = $mp + ($mp/100*10);
    $thoigian = $thoigian + ($thoigian/100*10);
    $time = $time + ($time/100*10);
    $tile = $tile +3; 
    
    }
    if($i==1) {
    $he = 'Fire';
    $stp = 0;
    $svl = $code[$level][$i];
    $mp = $mp + ($mp/100*20);
    $thoigian = $thoigian + ($thoigian/100*20);
    $time = $time + ($time/100*20);
    $tile = $tile +5; 
    
    }
    if($i==2) {
    $he = 'Water';
    $stp = $code[$level][$i];
    $svl = 0;
    $mp = $mp + ($mp/100*35);
    $thoigian = $thoigian + ($thoigian/100*35);
    $time = $time + ($time/100*35);
     $tile = $tile +5; 
   
    }
    if($i==3) {
    $he = 'Electric';
    $stp = $code[$level][$i];
    $svl = 0;
    $mp = $mp + ($mp/100*25);
        $thoigian = $thoigian + ($thoigian/100*25);
    $time = $time + ($time/100*25);
    $tile = $tile +5; 

    
    }
    if($i==4) {
    $he = 'Grass';
    $stp = 0;
    $svl = $code[$level][$i];
    $mp = $mp + ($mp/100*10);
    $thoigian = $thoigian + ($thoigian/100*10);
    $time = $time + ($time/100*10);
      $tile = $tile +3; 
  
    }
    if($i==5) {
    $he = 'Ice';
    $stp = $code[$level][$i];
    $svl = 0;
    $mp = $mp + ($mp/100*50);
        $thoigian = $thoigian + ($thoigian/100*50);
    $time = $time + ($time/100*50);
    $tile = $tile +15; 

    
    }
    if($i==6) {
    $he = 'Fighting';
    $stp = 0;
    $svl = $code[$level][$i];
    $mp = $mp + ($mp/100*50);
    $thoigian = $thoigian + ($thoigian/100*10);
    $time = $time + ($time/100*10);
    $tile = $tile +5; 
    
    }
    
    if($i==7) {
    $he = 'Poison';
    $stp = $code[$level][$i];
    $svl = 0;
    $mp = $mp + ($mp/100*60);
        $thoigian = $thoigian + ($thoigian/100*60);
    $time = $time + ($time/100*60);
    $tile = $tile +15; 

    
    }
    if($i==8) {
    $he = 'Ground';
    $stp = 0;
    $svl = $code[$level][$i];
    $mp = $mp + ($mp/100*50);
        $thoigian = $thoigian + ($thoigian/100*50);
    $time = $time + ($time/100*50);
    $tile = $tile +3; 

    }
    if($i==9) {
    $he = 'Flying';
    $stp = 0;
    $svl = $code[$level][$i];
    $mp = $mp + ($mp/100*15);
    $thoigian = $thoigian + ($thoigian/100*15);
    $time = $time + ($time/100*15);
      $tile = $tile +3; 
  
    }
    if($i==10) {
    $he = 'Psychic';
    $stp = $code[$level][$i];
    $svl = 0;
    $mp = $mp + ($mp/100*60);
    $thoigian = $thoigian + ($thoigian/100*60);
     $time = $time + ($time/100*60);
     $tile = $tile +3; 
  
    }
    if($i==11) {
    $he = 'Bug';
    $stp = 0;
    $svl = $code[$level][$i];
    $mp = $mp + ($mp/100*5);
     $thoigian = $thoigian + ($thoigian/100*50);
    $time = $time + ($time/100*50);
    $tile = $tile +3; 
   
    }
    if($i==12) {
    $he = 'Rock';
    $stp = 0;
    $svl = $code[$level][$i];
    $mp = $mp + ($mp/100*50);
    $thoigian = $thoigian + ($thoigian/100*50);
    $time = $time + ($time/100*50);
    $tile = $tile +3; 

    }
    if($i==13) {
    $he = 'Ghost';
    $stp = $code[$level][$i];
    $svl = 0;
    $mp = $mp + ($mp/100*150);
     $thoigian = $thoigian + ($thoigian/100*50);
     $time = $time + ($time/100*50);
    $tile = $tile +15; 
  
    }
    if($i==14) {
    $he = 'Dragon';
    $stp = $code[$level][$i];
    $svl = 0;
    $mp = $mp + ($mp/100*150);
      $thoigian = $thoigian + ($thoigian/100*30);
     $time = $time + ($time/100*30);
     $tile = $tile +10; 

    }
    if($i==15) {
    $he = 'Dark';
    $stp = $code[$level][$i];
    $svl = 0;
    $mp = $mp + ($mp/100*150);
    $thoigian = $thoigian + ($thoigian/100*88);
     $time = $time + ($time/100*88);
      $tile = $tile +10; 
 
    }
    if($i==16) {
    $he = 'Steel';
    $stp = $code[$level][$i];
    $svl = 0;
    $mp = $mp + ($mp/100*150);
    $thoigian = $thoigian + ($thoigian/100*100);
    $time = $time + ($time/100*100);
    $tile = $tile +3; 
    
    }
    if($i==17) {
    $he = 'Fairy';
    $stp = $code[$level][$i];
    $svl = 0;
    $mp = $mp + ($mp/100*150);
    $thoigian = $thoigian + ($thoigian/100*100);
     $time = $time + ($time/100*100);
       $tile = $tile +20; 

    }
    
    if($stp >=1) {
      $b=  'Gây Sát '.$stp.' thương phép* cấp độ kĩ năng. ';
    } else {
        $b = 'Gây Sát '.$svl.' thương vật lí* cấp độ kĩ năng. ';
    }
    
    $j[] = array(
        
        "id" => rand(100000,99999999),
        "id2" =>$id2,
        "ten" => $ten,
        "img" => "".$img."".$i,
        "img0" => "".$img."".$i,
        "img1" => "".$img."".$i,
        "level" => $level,
        "phep" => $stp,
        "vatli" => $svl,
        "hp" => 0,
        "type" =>$he,
        "mp" => $mp,
        "buff" => $buff,
        "tile" => $tile,
        "time" => $time,
        "tacdung" => $tacdung,
        "thoigian" => $thoigian,
        "rong"=>$rong,
        "cao"=>$cao,
        "w"=>$w,
        "h"=>$h,
        "sohinh" => $sohinh,
        "mota" => $mota.$b
        
        );
    

    $i++;
}
    
    	echo  json_encode($j,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
