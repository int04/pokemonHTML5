<?PHP
header('Content-Type: application/json;charset=utf-8');  
function clientScript($npcId, $script, $line, $function, $arguments = '') {
		switch (strtolower($function)) {
			default:
				$script[] = array(
					'line' => $line,
					'function' => $function,
					'arguments' => $arguments
				);

				break;

			case 'server side':
				$tokenRandom = 'ducnghia'.rand(1,999999999999999);

				$_SESSION['token'][$tokenRandom] = $npcId . '^' . $arguments;
				$dataRaw = explode('^', $arguments);

				$script[] = array(
					'line' => $line,
					'function' => $function,
					'xxxx' => $dataRaw[0],
					
					'arguments' => array('cdata' => $tokenRandom)
				);

				break;

			

			case 'warp':
				$dataRaw = explode('^', $arguments);

				$mapId = $dataRaw[0];
				$mapX = $dataRaw[1];
				$mapY = $dataRaw[2];

				$map = mysql_fetch_object(mysql_query("SELECT * FROM `maps` WHERE `id` = '" . $mapId . "'"));

				if ($map->id > 0) {
					$_SESSION['map']['warp'][$map->code] = $map->id;

					$script[] = array(
						'line' => $line,
						'function' => $function,
						'abc' => 'ducnghia',
						
						'arguments' => $map->code . '^' . $mapX . '^' . $mapY.'^'.$map->name.''
					);
				}

				break;
		}

		return $script;
	}


	$mapBase = mysql_fetch_object(mysql_query("SELECT * FROM `maps` WHERE `id` = '" . $user->map->id . "'"));

	$_SESSION['map']['warp'][$mapBase->code] = $mapBase->id;

	if ($_POST['mapid']) {
		$map = mysql_fetch_object(mysql_query("SELECT * FROM `maps` WHERE `code` = '" . $_POST['mapid'] . "'"));

		if ($map->id > 0) {
			if ($map->id == $user->map->id) {
				$user->map->x = (int) $_POST['x'];
				$user->map->y = (int) $_POST['y'];
			} else {
				$user->map->id = (int) $map->id;
				$user->map->x = (int) $_POST['x'] - 1;
				$user->map->y = (int) $_POST['y'];
			}

			if ($_SESSION['map']['id'] != $map->id) {
				$_SESSION['map'] = array(
					'id' => $map->id
				);
			}

			$_SESSION['map']['warp'][$map->code] = $map->id;

			mysql_query("UPDATE `users` SET `map` = '" . json_encode($user->map) . "' WHERE `id` = '" . $user->id. "'");
		}
	}

	$map = new map($user->map->id);

	if ($map->id > 1 && $map->monsters) {
		if (!in_array($map->id, $user->statistics->location->found)) {
			$user->statistics->location->found[] = $map->id;

			mysql_query("UPDATE `users` SET `statistics` = '" . json_encode($user->statistics) . "' WHERE `id` = '" . $user->id. "'");
		}
	}
	
	
             	
  if($datauser->nhiemvu->loai=="map" AND $datauser->nhiemvu->pokemon ==$map->id AND $datauser->nhiemvu->id>=1){
             	    $song = $datauser->nhiemvu->song +1;
             	            $datauser->nhiemvu('song',$song);
 
             	}
             	           	

	$results = array(
		'id' => $map->id,
		'ten' => t($map->ten),
		'hieuung' => $map->hieuung,
		'thoitiet' => $map->thoitiet,

		'music' => $map->music,
		'name' => $map->name,
		'type' => $map->type,
		'weather' => $map->weather
	);

	

	$results['friendsList'] = 0;

	$results['npcs'] = '';
	$results['inventory'] = '';
	$results['eggs'] = '';
	$results['script'] = '';

	if ($_POST['token']) {
		$tokenData = $_SESSION['token'][$_POST['token']];

		if ($tokenData) {
			$dataRaw = explode('^', $tokenData);

			$npc = mysql_fetch_object(mysql_query("SELECT * FROM `npcs` WHERE `id` = '" . $dataRaw[0] . "'"));

			$npcServerScript = json_decode($npc->server_script, true);

			$npcTrainer = json_decode($npc->trainer);

		 if ($npcServerScript) {
				foreach ($npcServerScript as $line) {
					$results['script'] = clientScript($npc->id, $results['script'], $line['line'], $line['function'], $line['arguments']);
				}
			} else {

			}
		}

		if ($_SESSION['utility']['script']['token'] == $_POST['token']) {
			unset($_SESSION['token'][$_POST['token']]);
			unset($_SESSION['utility']['script']);
		}
	} else {
		unset($_SESSION['token']);

		$npcs= mysql_query("SELECT * FROM `npcs` WHERE `map` = '" . $map->id . "' AND `nv` <= '".$datauser->nhiemvu->nhiemvu."'");
	//	$npcs= mysql_query("SELECT * FROM `m` WHERE `map` = '" . $map->id . "' ");




		if (mysql_num_rows($npcs)) {
			$results['npcs'] = array();

			while ($npc = mysql_fetch_object($npcs)) {
				$npcClientScript = json_decode($npc->client_script, true);

				$npcTrainer = json_decode($npc->trainer);

				$npcScript = null;

				$npcQuest = 0;

				if ($user->getNpcPhase($npc->id) != $npc->phase) {
					continue;
				}

				if ($npcClientScript) {
					foreach ($npcClientScript as $script) {
						$npcScript = clientScript($npc->id, $npcScript, $script['line'], $script['function'], $script['arguments']);
					}
				}


				

 $check_nv = new nhiemvu($datauser->nhiemvu->nhiemvu);
   $check_nv_data2 = mysql_fetch_assoc(mysql_query("SELECT * FROM `ducnghia_data_nhiemvu` WHERE `user_id` = '".$user->id."'  "));
$npcx = $npc->id;
     if($check_nv->ducnghia->npc == $npcx AND $datauser->nhiemvu->id<=0) {
 $chuanhan = '1';
   } else { $chuanhan = '0'; }
   
   if($check_nv->ducnghia->npc == $npcx AND $datauser->nhiemvu->song >=$datauser->nhiemvu->can AND $datauser->nhiemvu->id>=1) {
$hoanthanh ='1';
   } else { $hoanthanh ='0';}
   
   if($check_nv->ducnghia->npc == $npcx AND $datauser->nhiemvu->song <$datauser->nhiemvu->can AND $datauser->nhiemvu->id>=1) {
$danhan ='1';
   }
   
   else {
       $danhan ='0';
   }
   

if($_SESSION[id]==1) {
    $nt = '['.$npc->id.']'.t($npc->name);
} else {
    $nt = t($npc->name);
}
$button = array();

foreach ($npc->ducnghia as $npcjson) {
   if($datauser->id ==1) {
       $r = $npcjson->id;
   }
$button[] = array(
    'onclick' => dichson($npcjson->onclick),
    'name' => '#'.$r.' '.$npcjson->name.''
    );
					}  

                     
				$results['npc'][]= array(
					'id' => $npc->id,
					'name' => $nt,
					'x' => $npc->x,
					'y' => $npc->y,
					'button' => $button,
					'hpfull' => 0,
					'level' => 0,
					'hp' => 0,
						'time' => 0,
							'msg' => 0,
					'type' => $npc->type,
					'style' => $npc->style,
					'direction' => $npc->direction,
					'movement' => $npc->movement,
					'script' => $npcScript,
					'giaotiep' => $npc->text,
				);
                      
                      
             
                      
			}
		}
		
	}
	
            
            echo json_encode($results,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);