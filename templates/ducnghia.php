<?php
define('ROOT', dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR);
function tron($x) {
    return number_format($x);
}

function bug($ducnghia_check){
	$ducnghia_dove=addslashes($ducnghia_check);
	return $ducnghia_dove;
}
function BBCODE($text,$forum = false){
	$text = htmlspecialchars($text);
        $SMILE_FOLD = glob(ROOT.'/style/images/smileys/*.gif', GLOB_BRACE);
        $SMILE_TOTAL = count($SMILE_FOLD);

            for ($i = 0; $i < $SMILE_TOTAL; $i++) {
				$new = basename($SMILE_FOLD[$i]);
				$new = str_replace('.gif','',$new);
				$text = str_replace($new,'<img src="/style/images/smileys/'.$new.'.gif">',$text);
            }
$find = array(
'~\[dam\](.*?)\[/dam\]~s',
'~\[red\](.*?)\[/red\]~s',
'~\[blue\](.*?)\[/blue\]~s',

'~\[b\](.*?)\[/b\]~s',
'~\[i\](.*?)\[/i\]~s',
'~\[u\](.*?)\[/u\]~s',
'~\[color=(.*?)\](.*?)\[/color\]~s',
'~\[url=((?:ftp|https?)://.*?)\](.*?)\[/url\]~s',
'~\[img\](https?://.*?)\[/img\]~s',
'~\[onclick=(.*?)\](.*?)\[/onclick\]~s',
'~\[div](.*?)\[/div\]~s'

);
 $replace = array(
     '<b class="viptxt">$1</b>',
     '<font color="red">$1</font>',
     '<font color="blue">$1</font>',

'<b>$1</b>',
 
'<i>$1</i>',
 
'<span style="text-decoration:underline;">$1</span>',
 
'<span style="color:$1;">$2</span>',
 
'<a href="$1">$2</a>',
 
'<img src="$1" alt="" />',

'<b onclick="$1" class="viptxt">$2</b>',
'<p class="$1"></p>'

 
);
 
// Thay thế
 
return preg_replace($find,$replace,$text);
			
}


function demkytu($kytu,$text){
$chars=str_split($text);
$count=0;
foreach($chars as &$char)
{
    if($char==$kytu)
    {
  $count++;
    }
}
return $count;
}
function smileys($element){
			$SMILE_FOLD = glob(ROOT.'/style/images/smileys/*.gif', GLOB_BRACE);
        $SMILE_TOTAL = count($SMILE_FOLD);
            for ($i = 1; $i < $SMILE_TOTAL; $i++) {
				$new = basename($SMILE_FOLD[$i]);
				$new = str_replace('.gif','',$new);
				$HEADER_modal .= ' '.str_replace($new,'<a href="javascript:smile(\''.$new.'\',\''.$element.'\');"><img src="/style/images/smileys/'.$new.'.gif"></a>',$new);
            }
			return $HEADER_modal;
}
function files($dirname)

{

    $total_files=0;

     

    if(is_dir($dirname))

    {

        $dp=opendir($dirname);

         

        if($dp)

        {

            while(($filename=readdir($dp)) == true)

            {

                if(($filename !=".") && ($filename !=".."))

                {

                    $total_files++;

                }

            }

        }

    }

     

     

    return $total_files;

}

function rand_string($length) {
$chars ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
$size = strlen($char);
for($i = 0; $i<$length; $i++) {
$str .= $chars[rand(0, $size -1)];
$str=substr(str_shuffle($chars), 0, $length);
}
return$str;
}
















	  
	  





