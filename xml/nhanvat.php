<?php
////xử lí////
if($_GET[nut]=='0') {
    $ndoc = '0';
}
if($_GET[nut]=='1') {
    $ndoc = '32';
}
if($_GET[nut]=='2') {
    $ndoc = '64';
}
if($_GET[nut]=='3') {
    $ndoc = 96;
}

///////////
    header('Content-Type: image/png');
    $a = file_get_contents('../sql/load/images/charactersets/'.$_GET[nhanvat].'');
    if(!$a) {
    $img = imagecreatefrompng('../sql/pokemon0/'.explode('.',$_GET[nhanvat])[0].'.png');
    } else {
    $img = imagecreatefrompng('../sql/load/images/charactersets/'.$_GET[nhanvat].'');
    }
    imagealphablending($img, true);
    imagesavealpha($img, true);
   
 $x = ImageSX($img);
    $y = ImageSY($img);
    /////ảnh có 3 hình
    if($x >= 500) {
        $rong = 128;
    $cao  = 128;
        $ndoc = 1;
if($_GET[nghia]==0) {
    $ntrai = '0';
}
if($_GET[nghia]==1) {
    $ntrai = '32';
}
if($_GET[nghia]==2) {
    $ntrai = '64';
}
} else
    if($x == 256) {
        $rong = 64;
    $cao  = 64;
        $ndoc = 1;
if($_GET[nghia]==0) {
    $ntrai = '0';
}
if($_GET[nghia]==1) {
    $ntrai = '32';
}
if($_GET[nghia]==2) {
    $ntrai = '64';
}
} else
    if($x == 128) {
        $rong = 32;
    $cao  = 32;
        $ndoc = 1;
if($_GET[nghia]==0) {
    $ntrai = '0';
}
if($_GET[nghia]==1) {
    $ntrai = '32';
}
if($_GET[nghia]==2) {
    $ntrai = '64';
}
} else {
    $rong = 32;
    $cao  = 32;
    ///ảnh có 2 hình :3
 if($_GET[nghia]==0) {
    $ntrai = '0';
}
if($_GET[nghia]==1) {
    $ntrai = '32';
}
if($_GET[nghia]==2) {
    $ntrai = '0';
}   
}

  $background1 = imagecolorat($img, 0, 0);
    $background2 = imagecolorat($img, 1, 1);
    $img2= imagecreatetruecolor($rong, $cao);
    imagealphablending($img2, true);
    imagesavealpha($img2, true);

    $trans_colour = imagecolorallocatealpha($img2, 0, 0, 0, 127);
    imagefill($img2, 0, 0, $trans_colour);
    $doc = $ndoc;
    $trai = $ntrai;  ///0,34,66
    imagecopy($img2, $img, 0, 0, $trai, $doc, $rong, $cao);
    //imagedestroy($img);
    // output cropped image to the browser
    imagepng($img2);



