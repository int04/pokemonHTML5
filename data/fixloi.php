<?PHP
if(isset($_GET[login])) {
  header('Content-Type: application/json;charset=utf-8');  
   $taikhoan = $_POST[taikhoan];
    $users = 'nguoichoi/'.$taikhoan.'';

if(!file_exists($users)){
echo 1;
} else
{
 $a = file_get_contents($users);
 
 echo $a;
 
}
}

if(isset($_GET[save])) {

  $index = fopen('users/'.$_GET[taikhoan].'', 'w' );
fwrite ($index, $_POST[data]);
fclose ($index);
}