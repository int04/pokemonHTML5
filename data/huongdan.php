<?PHP
$my = json_decode($_POST[duc]);
$json = json_encode($my);

			$index = fopen('nhiemvu/huongdan.json', 'w' );
fwrite ($index, $json);
fclose ($index);