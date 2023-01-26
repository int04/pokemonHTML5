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


$npcs= mysql_query("SELECT * FROM `m`");


		if (mysql_num_rows($npcs)) {
			$results['npcs'] = array();

			while ($npc = mysql_fetch_object($npcs)) {

    $nt = '['.$npc->id.']'.t($npc->name);

if(!$npc->type) {
    $npc->type = 'Action Button';
}

if(!$npc->direction) {
    $npc->direction = 0;
}

if(!$npc->movement) {
    $npc->movement = 'Slow Random';
}
	$npcClientScript = json_decode('[{"line":1,"function":"attack","arguments":{"@cdata":"DUCNGHIA"}}]', true);

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


                     
				$j['npc'][]= array(
					'id' => $npc->id,
					'name' => $npc->name,
					'map' => $npc->map,
					'x' => $npc->x,
					'hp' => $npc->hpfull,
					'hpfull' => $npc->hpfull,
					'hoisinh' => $npc->hoisinh,
					'level' => $npc->level,
					'msg' => '',
					'time' => 0,
					'thuong' => $npc->thuong,
					'nhom' => $npc->nhom,
					'y' => $npc->y,
					'type' => $npc->type,
					'img' => $npc->img,
					'tancong' => $npc->tancong,
					'giap' => $npc->giap,
					'chimang' => $npc->chimang,
					'direction' => $npc->direction,
					'movement' => $npc->movement,
					'script' => $npcScript
					
				);
                      
        

             
                      
			}
		}
		
	echo json_encode($j,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
