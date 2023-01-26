<?PHP
	 header('Content-Type: application/json;charset=utf-8');  



$npcs= mysql_query("SELECT * FROM `ducnghia_nhiemvu`");


		if (mysql_num_rows($npcs)) {
			while ($npc = mysql_fetch_object($npcs)) {
$ab = json_decode($npc->ducnghia);
        $a33465 = mysql_fetch_assoc(mysql_query("SELECT * FROM `npcs` WHERE `id` = '".$ab->npc."'  "));
				$j['nhiemvu'][]= array(
					'id' => $npc->id,
					'nhiemvu' => $npc->nhiemvu,
					'npcname' => $a33465[name],
					'ducnghia' => json_decode($npc->ducnghia),
				
					
				);
                      
        

             
                      
			}
		}
		
	echo json_encode($j);
