<?PHP

//header('Content-Type: application/json;charset=utf-8');  

if (!strpos($_SERVER['HTTP_REFERER'], 'pkmvn.xyz') && !strpos($_SERVER['HTTP_REFERER'], 'pkmh5.host')) {


exit('KHÔNG ĐƯỢC CURL !!!!!!');

}
$json = json_decode($_POST[users]);

$json = json_encode($json);

$index = fopen('../data/users/'.$_POST[uid].'.txt', 'w' );
fwrite ($index, $json);
fclose ($index);
$j[username] = $_POST[uid];
$j[linkcode] = 'http://pkmvn.xyz/data/users/'.$_POST[uid].'.txt';
$j[game] = 'PokeMon Biến hình';

            echo json_encode($j,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
