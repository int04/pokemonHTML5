<?PHP
include_once('../templates/config.php');
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
					
					'arguments' => array('cdata' => $npcId)
				);

				break;

			

			case 'warp':
			        global $mysqli;

				$dataRaw = explode('^', $arguments);

				$mapId = $dataRaw[0];
				$mapX = $dataRaw[1];
				$mapY = $dataRaw[2];

				$map =$mysqli->query("SELECT * FROM `maps` WHERE `id` = '" . $mapId . "'")->fetch_object();

				if ($map->id > 0) {
					$_SESSION['map']['warp'][$map->code] = $map->id;

					$script[] = array(
						'line' => $line,
						'function' => $function,
						'abc' => 'ducnghia',
						'nhiemvu' => $map->nhiemvu,
						'arguments' => $map->code . '^' . $mapX . '^' . $mapY.'^'.$map->name.''
					);
				}

				break;
		}

		return $script;
	}

