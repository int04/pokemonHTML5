<?PHP
header('Content-Type: application/json;charset=utf-8');  

if(isset($_POST[getmap])) {
 $a = file_get_contents('../data/map/'.$_POST[mapid].'.json');
 echo $a;
}

if(isset($_POST[token])) {
  $a = file_get_contents('../data/map/'.$_POST[mapName].'.json');
 $b = json_decode($a);
  
 foreach ($b->npc as $a => $ab) {

	if($ab->id == $_POST[token]) {
	    
	    $duc->line = $ab->code[0]->line;
	    $duc->function = $ab->code[0]->function;
	    $duc->arguments = $ab->code[0]->arguments;
	    
	    
			echo json_encode($duc);
				
	} else {
	   
	}
	
	
				}
 

}
 
 