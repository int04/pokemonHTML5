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
						
						'arguments' => $map->code . '^' . $mapX . '^' . $mapY.'^'.$map->name.''
					);
				}

				break;
		}

		return $script;
	}



$ddd= $mysqli->query("SELECT * FROM `maps`");

			while ($map = $ddd->fetch_object()) {

	$resultsaaa[] = array(
		'id' => $map->id,
		'ten' => $map->ten,
		'hieuung' => $map->hieuung,
		'thoitiet' => $map->thoitiet,
		'nhiemvu' => $map->nhiemvu,

		'music' => $map->music,
		'name' => $map->name,
		'type' => $map->type,
		'weather' => $map->weather
	);

			
		
			    
			}
			$a = json_encode($resultsaaa);
    $index = fopen('nhiemvu/map.json', 'w' );
fwrite ($index, $a);
fclose ($index);    
			


		$npcs= $mysqli->query("SELECT * FROM `npcs` ");


		if ($npcs->num_rows) {
			$results = array();

			while ($npc = $npcs->fetch_object()) {
				$npcClientScript = json_decode($npc->client_script, true);

				$npcTrainer = json_decode($npc->trainer);

				$npcScript = null;

				$npcQuest = 0;

			

				if ($npcClientScript) {
					foreach ($npcClientScript as $script) {
						$npcScript = clientScript($npc->id, $npcScript, $script['line'], $script['function'], $script['arguments']);
					}
				}

				$svvsdfsdf = json_decode($npc->server_script, true);

foreach ($svvsdfsdf as $line) {
					$abcd = clientScript($npc->id, $results['script'], $line['line'], $line['function'], $line['arguments']);
				}
	

$button = array();
				$gfhffgf = json_decode($npc->ducnghia, true);

foreach ($gfhffgf as $npcjson=>$ab) {
  
$button[] = array(
    'onclick' => dichson($ab[onclick]),
    'id' => $ab[id],
    'name' => $ab[name]
    );
					}  

                
				$results[]= array(
					'id' => $npc->id,
					'name' => $npc->name,
					'map' => $npc->map,
					
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
					'code' => $abcd,
					'direction' => $npc->direction,
					'movement' => $npc->movement,
					'server' => $npc->server_script,
					'script' => $npcScript,
					'giaotiep' => $npc->text,
				);
                      
                      
             
                      
			}
		}
		
			$a2 = json_encode($results);
    $index = fopen('nhiemvu/npc.json', 'w' );
fwrite ($index, $a2);
fclose ($index);    
			
			
	///nhiemvu
	
	$npcs= $mysqli->query("SELECT * FROM `ducnghia_nhiemvu`");
		if ($npcs->num_rows) {
			while ($npc = $npcs->fetch_object()) {
$ab = json_decode($npc->ducnghia);
        $a33465 = $mysqli->query("SELECT * FROM `npcs` WHERE `id` = '".$ab->npc."'  ")->fetch_assoc();
				$j['nhiemvu'][]= array(
					'id' => $npc->id,
					'nhiemvu' => $npc->nhiemvu,
					'npcname' => $a33465[name],
					'ducnghia' => json_decode($npc->ducnghia),
				
					
				);
                      
        


			}
		}
		
	//	 $a =  json_encode($j,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
		$a = json_encode($j);

    $index = fopen('nhiemvu/nhiemvu.json', 'w' );
fwrite ($index, $a);
fclose ($index);        

$npcs= $mysqli->query("SELECT * FROM `m`");
		if ($npcs->num_rows) {
			$results['npcs'] = array();

			while ($npc = $npcs->fetch_object()) {

    $nt = '['.$npc->id.']'.$npc->name;

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


				if ($npcClientScript) {
					foreach ($npcClientScript as $script) {
						$npcScript = clientScript($npc->id, $npcScript, $script['line'], $script['function'], $script['arguments']);
					}
				}


                     
				$j_quai['npc'][]= array(
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
		
		 $aaaa =  json_encode($j_quai,JSON_UNESCAPED_UNICODE);

    $index = fopen('nhiemvu/quai.json', 'w' );
fwrite ($index, $aaaa);
fclose ($index);        
	
	$npcs= $mysqli->query("SELECT * FROM `ducnghia_pokemon`");
			while ($npc2 = $npcs->fetch_object()) {
			    $npc = new pkm($npc2->id);
				$j_pet['pokemon'][]= array(
					'id' => $npc->id,
				    'hp' => $npc->ducnghia->hp,
				    'ten' => $npc->ducnghia->ten,
				    'img' => $npc->ducnghia->img,
				    'giap' => $npc->ducnghia->giap,
				    'mp' => $npc->ducnghia->mp,
				    'xuyengiap' => $npc->ducnghia->xuyengiap,
				    'tocdo' => $npc->ducnghia->tocdo,
				    'phep' => $npc->ducnghia->phep,
				    'chimang' => $npc->ducnghia->chimang,
				    'vatli' => $npc->ducnghia->vatli,
				    'type1' => $npc->ducnghia->type1,
				    'type2' => $npc->ducnghia->type2,
				    'tangtruong' => $npc->ducnghia->tangtruong,
				
					
				);
                      
        

             
                      
			}
		
			$axa = json_encode($j_pet);
    $index = fopen('nhiemvu/pokemon.json', 'w' );
fwrite ($index, $axa);
fclose ($index);        
			
			
			
////////gym//////////

	$npcs= $mysqli->query("SELECT * FROM `gym`");
			while ($npc2 = $npcs->fetch_object()) {
				$jxxxa[]= array(
					'id' => $npc2->id,
				    'he' => $npc2->he,
				    'soluong' => $npc2->soluong,
				    'level' => $npc2->level,
				    'huyhieu' => $npc2->huyhieu,
				);
                      
        

             
                      
			}
		
	$errrrr = json_encode($jxxxa);
    $index = fopen('nhiemvu/gym.json', 'w' );
fwrite ($index, $errrrr);
fclose ($index);    



//////////LEVEL LÊN/////////

$tienhoav= $mysqli->query("SELECT * FROM `tienhoa`");
			while ($th = $tienhoav->fetch_object()) {
				$code_th[]= array(
					'id' => $th->id,
					'pokemon' => $th->pokemon,
					'new' => $th->{'new'},
					'level' => $th->level,
					'da' => $th->da,
				    
				);
                      
        

             
                      
			}
		
	$errrrxxxrxxx = json_encode($code_th);
    $index = fopen('nhiemvu/tienhoa.json', 'w' );
fwrite ($index, $errrrxxxrxxx);
fclose ($index);    
			
			
			
	echo'Done';
            
           
            
            