<?PHP 
$title = isset($textl) ? $textl.' - PokeBurn' : 'PokeMon Burn - WebGame Play Now everywhere';
 ?>
<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.0//EN" "http://www.wapforum.org/DTD/xhtml-mobile10.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width,maximum-scale=1,user-scalable=no"/>
		<meta http-equiv="content-language" content="vi" />
        <title><?=$title?></title>
		<meta name="keywords" content="PokeMon, truyện pokemon, pokemon biến hình, pokemon bien hinh, pokemon viet nam, POKEMON MMO, pokemon RPG, Pokemon PVP, pokemon PK, PokeBurn, PokeMon burn, Pokemon made in Fan, Pokemon rpg new, pokemon breakthrough play" />
		<meta name="description" content="PokeMon burn, Web Pokemon biến hình, Online games, play on any operating system anytime anywhere." />
		<meta name="robots" content="INDEX,FOLLOW" />
		<link rel="icon" href='/sql/load/images/items/Master%20ball.png' type="image/x-icon" />
		<link rel="apple-touch-icon" href="/sql/load/images/items/Master%20ball.png" />
		<link rel="shortcut icon" href='/sql/load/images/items/Master%20ball.png' type="image/x-icon" />
		<link rel="icon" type="/sql/load/images/items/Master%20ball.png">
        <link rel="stylesheet" type="text/css" href="/forum/images/StyleSheet.css?vc" />
        <link rel="stylesheet" type="text/css" href="/forum/images/template.css?cxx" />
		
    </head>
    <body>       <div class="body_body">
		
<div class="left_top"></div><div class="bg_top"><div class="right_top"></div></div>
<div class="body-content">
<div class="a" align="center"><img src="/sql/load/PokeBurn.png" height="90"/></div>
<div id="top">
		<div class="link-more">
		<div class="h">
	
		<div class="bg_tree"></div>
		<div class="bg_noel"></div>

<div id="box_login_ads"> 
    <?PHP IF(!$user_id) { ?>
	
	<div class="box_button_login" style="width:100%;position: relative;text-align:center;"><a href="/forum/login.php">
		<button>Login forum</button></a> <a href="/play">
		<button>PLAY GAME</button></a> 
		
		<a href="/forum/changepass.php">
		<button>Change Pass</button></a> 
	
	</div> <?PHP } else {?>

		<div style="width:100%;float:left;">
	<table style="margin-left:auto;margin-right:auto;text-align:left;">
		<tr>
			<td>
								<td colspan=5 align=center>
					<div class="box_welcome_team"><span>
					<img src="/xml/nhanvat.php?nhanvat=<?=avatar($user_id)?>&nut=1" alt="username" /><br>
					<b style="color:#ad4105"><?=nick($user_id)?></b> <br><a href="logout.php">Out</a> - <a href="changepass.php">Change Pass</a>
				
				
					</span>
					</div>
				</td>
			
							</td>
			
		</tr>
		
	</table>
	</div>
	<?PHP }?>
	


</div>