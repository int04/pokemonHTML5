<?PHP
$my = json_decode($_POST[duc]);
$json = json_encode($my);

			$index = fopen('nhiemvu/ngonngu.json', 'w' );
fwrite ($index, $json);
fclose ($index);