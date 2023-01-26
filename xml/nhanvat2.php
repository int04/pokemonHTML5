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
    $img = imagecreatefrompng('http://pkmvn.xyz/sql/pokemon/'.$_GET[nhanvat].'');
    imagealphablending($img, true);
    imagesavealpha($img, true);
   
 $x = ImageSX($img);
    $y = ImageSY($img);
    /////ảnh có 3 hình
    if($x >= 90) {
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
    $img2= imagecreatetruecolor(32, 32);
    imagealphablending($img2, true);
    imagesavealpha($img2, true);

    $trans_colour = imagecolorallocatealpha($img2, 0, 0, 0, 127);
    imagefill($img2, 0, 0, $trans_colour);
    $doc = $ndoc;
    $trai = $ntrai;  ///0,34,66
    imagecopy($img2, $img, 0, 0, $trai, $doc, 32, 32);
    imagedestroy($img);
    // output cropped image to the browser
    imagepng($img2);



