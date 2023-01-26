<?PHP

 //	$mysqli->query("ALTER TABLE `users` ADD `$id` text not null ");


$json = json_decode($_POST[users]);

   
 $i=$mysqli->query("SELECT * FROM `users` WHERE `taikhoan` = '".$_POST[uid]."' AND `sv` = '".$_POST[sv]."'")->fetch_assoc();
    if($i[id] <=0) {
    $mysqli->query("INSERT INTO `users` SET `taikhoan` = '".$_POST[uid]."', `sv` = '".$_POST[sv]."' ");      
    $id = $mysqli->insert_id;
    } else {
        $id = $i[id];
    }
    
 	foreach ($json as $code => $soluong) {
if($code !="lichsu" AND $code !='users') {
$mysqli->query("UPDATE `users` SET `".$code."` = '" . json_encode($soluong) . "' WHERE `id` = '" . $id . "'");
}
if($code == "users") {
    $mysqli->query("UPDATE `users` SET `".$code."` = '" . json_encode($soluong,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT) . "' WHERE `id` = '" . $id . "'");

}
}

foreach ($json->lichsu as $id => $soluong) {
     if (!$mysqli->query("SELECT * FROM `lichsu`  WHERE `tentaikhoan` = '".$b->users->taikhoan."' AND `time` ='".$soluong->{'time'}."'  ")->num_rows) {
$mysqli->query("INSERT INTO `lichsu` set `tentaikhoan` = '".$json->users->taikhoan."',`noidung` = '".$soluong->noidung."' , `thoigian` = '".$soluong->thoigian."',`codeid` = '".$soluong->id."',`time` ='".$soluong->{'time'}."'  ");
}

}

$mysqli->close();


$j[username] = $_POST[uid];
$j[linkcode] = 'http://pkmvn.xyz/data/nguoichoi/'.$_POST[uid].'.json';
$j[game] = 'PokeMon Biến hình';

            echo json_encode($j,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
