<?PHP



if(isset($_POST[b])) {
    $bbbbb= $_POST[b];
} else
if(isset($_GET[b])) {
    $bbbbb = $_GET[b];
} else {
    $bbbbb = 'game';
}

if(isset($_POST[a])) {
    $aaaaa= $_POST[a];
} else
if(isset($_GET[a])) {
    $aaaaa = $_GET[a];
} else {
    echo'DucNghia : error';
    exit();
}
if($aaaaa == "index" or $aaaaa == "menu" or $aaaaa == "users" or $aaaaa == "login") {
include_once('../templates/config.php');
include_once('../templates/ducnghia.php');
}
include(''.$bbbbb.'/'.$aaaaa.'.php');


