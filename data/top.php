<?PHP
include_once('../templates/config.php');

header('Content-Type: application/json;charset=utf-8');  

if ($handle = opendir('nguoichoi')) {

    while (false !== ($entry = readdir($handle))) {

        if ($entry != "." && $entry != "..") {

           $a = file_get_contents('nguoichoi/'.$entry);
  $b = json_decode($a);
  if($b->users->id >=1) {
 	$j[]=$b->users;
 	
  $b->lichsu = [];
   $json = json_encode($b);
$index = fopen('nguoichoi/'.$entry.'', 'w' );
fwrite ($index, $json);
fclose ($index);
  }
  
  
 
        }
    }
    closedir($handle);
}
$a = json_encode($j);

    $index = fopen('nhiemvu/users.json', 'w' );
fwrite ($index, $a);
fclose ($index);        
			
	