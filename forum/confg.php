<?php
session_start();
$mysqli = new mysqli("localhost","ducxnghi_h5","ducnghia@vps1","ducxnghi_h5");
$mysqli -> set_charset("utf8");
$mysqli->query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
date_default_timezone_set('Asia/Ho_Chi_Minh');

$kmess = $_SESSION['kmess'] > 5 && $_SESSION['kmess'] < 10 ? $_SESSION['kmess'] : 10;
$page = isset($_REQUEST['p']) && $_REQUEST['p'] > 0 ? intval($_REQUEST['p']) : 1;
$start = isset($_REQUEST['p']) ? $page * $kmess - $kmess : (isset($_GET['start']) ? abs(intval($_GET['start'])) : 0);
$sv = $_SESSION[server];
	function trang($url, $start, $total, $kmess) {
    $out[] = '<div class="pagination">';
    $neighbors = 2;
    if ($start >= $total) $start = max(0, $total - (($total % $kmess) == 0 ? $kmess : ($total % $kmess)));
    else $start = max(0, (int)$start - ((int)$start % (int)$kmess));
    $base_link = '<a class="pagelink" href="' . strtr($url, array('%' => '%%')) . 'p=%d' . '">%s</a>';
    $out[] = $start == 0 ? '' : sprintf($base_link, $start / $kmess, '&lt;&lt; Trang Tr&#432;&#7899;c');
    if ($start > $kmess * $neighbors) $out[] = sprintf($base_link, 1, '1');
    if ($start > $kmess * ($neighbors + 1)) $out[] = '<span><a>...</a></span>';
    for ($nCont = $neighbors;$nCont >= 1;$nCont--) if ($start >= $kmess * $nCont) {
        $tmpStart = $start - $kmess * $nCont;
        $out[] = sprintf($base_link, $tmpStart / $kmess + 1, $tmpStart / $kmess + 1);
    }
    $out[] = '<span class="pagecurrent">' . ($start / $kmess + 1) . '</span>';
    $tmpMaxPages = (int)(($total - 1) / $kmess) * $kmess;
    for ($nCont = 1;$nCont <= $neighbors;$nCont++) if ($start + $kmess * $nCont <= $tmpMaxPages) {
        $tmpStart = $start + $kmess * $nCont;
        $out[] = sprintf($base_link, $tmpStart / $kmess + 1, $tmpStart / $kmess + 1);
    }
    if ($start + $kmess * ($neighbors + 1) < $tmpMaxPages) $out[] = '<span class="pagelink"><a>...</a></span>';
    if ($start + $kmess * $neighbors < $tmpMaxPages) $out[] = sprintf($base_link, $tmpMaxPages / $kmess + 1, $tmpMaxPages / $kmess + 1);
    if ($start + $kmess < $total) {
        $display_page = ($start + $kmess) > $total ? $total : ($start / $kmess + 2);
        $out[] = sprintf($base_link, $display_page, 'Trang Ti&#7871;p &gt;&gt;');
    }
    $out[] = '</div>';
    return implode('', $out);
}
function thoigian($var) {
$shift = (7 + 7) * 3600;
$time = time ();
$jun = round (($time - $var)/ 60 );
if( $jun < 1 ){ $jun = 'Vài giây trước' ;}
if( $jun >= 1 && $jun < 60 ){ $jun = " $jun phút trước" ;}
if( $jun >= 60 && $jun <= 1440 ){ $jun = round($jun/60 ); $jun = " $jun giờ trước" ;}
if( $jun > 1440 && $jun <= 2880){ $jun = 'hôm qua, ' . date("H:i", $var + $shift).'' ;}
if( $jun > 2880 && $jun < 43200 ){ $jun = round(round($jun/60)/24); $jun = " $jun ngày trước" ;}
if( $jun >= 43200 && date('Y', $var) == date('Y', time())){$jun = date("d/m - H:i", $var + $shift);}
if( $jun >= 43200 && date('Y', $var) != date('Y', time())){$jun = date("d/m/Y - H:i", $var + $shift);}
return $jun ;
}

function nick($id) {
    global $mysqli;
	$data = $mysqli->query("SELECT * FROM `taikhoan` WHERE `id`='".$id."'")->fetch_assoc();

	$tenv = $mysqli->query("SELECT * FROM `users` WHERE `taikhoan`='".$data[taikhoan]."' AND `sv` = '".$data[login]."' ")->fetch_assoc();
	$ck_sv = $mysqli->query("SELECT * FROM `server` WHERE `id`='".$tenv[sv]."'")->fetch_assoc();
	$name = json_decode($tenv[users]);
	
	if($data[admin] == 0) {
	    $ducnghiait = '<font color="black">'.$name->username.' ('.$ck_sv[ten].')</font>';
	}
	if($data[admin] == 1) {
	    $ducnghiait = '<font color="blue">'.$name->username.' ('.$ck_sv[ten].')</font>';
	}
	if($data[admin] == 2) {
	    $ducnghiait = '<font color="green">'.$name->username.' ('.$ck_sv[ten].')</font>';
	}
		if($data[admin] == 3) {
	    $ducnghiait = '<font color="red">'.$name->username.' ('.$ck_sv[ten].')</font>';
	}


return $ducnghiait ;
}

function avatar($id) {
 global $mysqli;
	$data = $mysqli->query("SELECT * FROM `taikhoan` WHERE `id`='".$id."'")->fetch_assoc();

	$tenv = $mysqli->query("SELECT * FROM `users` WHERE `taikhoan`='".$data[taikhoan]."' AND `sv` = '".$data[login]."' ")->fetch_assoc();
	if($tenv[id] <=0) {
	    $name= '';
	} else {
	$name = json_decode($tenv[users])->skin;
	}
return $name ;
}

function online($id) {
     global $mysqli;

	$data = $mysqli->query("SELECT * FROM `taikhoan` WHERE `id`='".$id."'")->fetch_assoc();
	
if(time() > $data['time'] + 300) {
    $ducnghiait = '<img style="vertical-align:middle;"  src="/forum/images/offline.png" border="0">';
} else  {
    $ducnghiait = '<img style="vertical-align:middle;"  src="/forum/images/online.png" border="0">';
}


return $ducnghiait ;
}

function baiviet($id) {
    global $mysqli;
	$data = $mysqli->query("SELECT * FROM `taikhoan` WHERE `id`='".$id."'")->fetch_assoc();
	
return $data[baiviet] ;
}

$user_id = $_SESSION[id];
	if($user_id) {
	    	$data = $mysqli->query("SELECT * FROM `taikhoan` WHERE `id`='".$user_id."'")->fetch_assoc();

$mysqli->query("UPDATE `taikhoan` SET `time` =  '".time()."' WHERE `id`='".$user_id."'");
	}








 function highlight_bb($var)
    {
        // Список поиска
        $search = array(
'#\[img](.+?)\[/img]#is', // images 
'#\[d](.+?)\[/d]#is', // link download

            '#\[b](.+?)\[/b]#is', // Жирный
            '#\[i](.+?)\[/i]#is', // Курсив
            '#\[u](.+?)\[/u]#is', // Подчеркнутый
            '#\[s](.+?)\[/s]#is', // Зачеркнутый
            '#\[small](.+?)\[/small]#is', // Маленький шрифт
            '#\[big](.+?)\[/big]#is', // Большой шрифт
            '#\[red](.+?)\[/red]#is', // Красный
            '#\[green](.+?)\[/green]#is', // Зеленый
            '#\[blue](.+?)\[/blue]#is', // Синий
            '!\[color=(#[0-9a-f]{3}|#[0-9a-f]{6}|[a-z\-]+)](.+?)\[/color]!is', // Цвет шрифта
            '!\[bg=(#[0-9a-f]{3}|#[0-9a-f]{6}|[a-z\-]+)](.+?)\[/bg]!is', // Цвет фона
            '#\[(quote|c)](.+?)\[/(quote|c)]#is', // Цитата
            '#\[\*](.+?)\[/\*]#is', // Список
            '#\[spoiler=(.+?)](.+?)\[/spoiler]#is' // Спойлер
        );
        // Список замены
        $replace = array(
			'<a href="$1" title="Click to view image" target="_blank"><img src="$1" border="0" style="max-width: 200px;"></img></a>', //images 
			'<img src="/images/bb/download.gif" border="0"></img><a href="$1" title="Click to download">[Download]</a>',// link download

            '<span style="font-weight: bold">$1</span>', // Жирный
            '<span style="font-style:italic">$1</span>', // Курсив
            '<span style="text-decoration:underline">$1</span>', // Подчеркнутый
            '<span style="text-decoration:line-through">$1</span>', // Зачеркнутый
            '<span style="font-size:x-small">$1</span>', // Маленький шрифт
            '<span style="font-size:large">$1</span>', // Большой шрифт
            '<span style="color:red">$1</span>', // Красный
            '<span style="color:green">$1</span>', // Зеленый
            '<span style="color:blue">$1</span>', // Синий
            '<span style="color:$1">$2</span>', // Цвет шрифта
            '<span style="background-color:$1">$2</span>', // Цвет фона
            '<div class="bbcode_container"><div class="bbcode_quote"><div class="quote_container"><div class="bbcode_quote_container"></div>$2</div></div></div>', // Цитата
            '<span class="bblist">$1</span>', // Список
            '<div><div class="spoilerhead" style="cursor:pointer;" onclick="var _n=this.parentNode.getElementsByTagName(\'div\')[1];if(_n.style.display==\'none\'){_n.style.display=\'\';}else{_n.style.display=\'none\';}">$1 (+/-)</div><div class="spoilerbody" style="display:none">$2</div></div>' // Спойлер
        );
        return preg_replace($search, $replace, $var);
    }
    
    
function ducnghia($var = '') {

$var = str_replace('[br]', '<br/>', $var);

$var = highlight_bb($var);
//////////////

return $var;
}