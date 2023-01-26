<?php
session_start();
$mysqli = new mysqli("localhost","root","","server");
$mysqli -> set_charset("utf8");


date_default_timezone_set('Asia/Ho_Chi_Minh');

function pc() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}
$mobile = pc();

class map {
		public $id = 0;
		public $name = null;
		public $code = 0;
		public $music = null;
		public $west = null;
		public $east = null;
		public $type = null;
		public $encounters = null;
		public $grass = null;

		public function map($id) {
          global $mysqli;
			$map = $mysqli->query("SELECT * FROM `maps` WHERE `id` = '" . $id . "'")->fetch_array();

			foreach($map as $key => $value) {
				$this->{$key} = $value;
			}

			$this->encounters = json_decode($this->encounters);
			if (!isset($this->encounters)) {
				$this->encounters = new stdClass();
			}

			$this->grass = json_decode($this->grass);
			if (!isset($this->grass)) {
				$this->grass = new stdClass();
			}
		}
	}
	
	/* FUNCTION NHIEM VU */
		class nhiemvu {
		public $id = 0;

public function ten($id) {
    global $mysqli;
   			$npc = $mysqli->query("SELECT * FROM `npcs` WHERE `id` = '" . $id . "'")->fetch_array();
 return $npc[name];
}

		public function nhiemvu($id) {
		        global $mysqli;
			$map = $mysqli->query("SELECT * FROM `ducnghia_nhiemvu` WHERE `nhiemvu` = '" . $id . "'")->fetch_array();

			foreach($map as $key => $value) {
				$this->{$key} = $value;
			}

		

			$this->ducnghia = json_decode($this->ducnghia);
			if (!isset($this->ducnghia)) {
				$this->ducnghia = new stdClass();
			}
		}
		
public function add($id, $amount) {
    global $mysqli;
			$this->ducnghia->{$id} = $amount;
			$mysqli->query("UPDATE `ducnghia_nhiemvu` SET `ducnghia` = '" . json_encode($this->ducnghia,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT) . "' WHERE `id` = '" . $this->id . "'");

			return $this->ducnghia->{$id};
		}				
		
	}
	/*FUNCTION NHIEM VU*/
	
	
/*FUNCTION USERS*/
class user {
		public $id = 0;
		public function user($id) {
		        global $mysqli;

			$user = $mysqli->query("SELECT * FROM `users` WHERE `id` = '" . $id . "'")->fetch_array();

			foreach($user as $key => $value) {
				$this->{$key} = $value;
			}

$this->item = json_decode($this->item);
			if (!isset($this->item)) {
				$this->item = new stdClass();
			}
			


		}
		

	
	}
/*END FUNCTION USERS*/



	function json($abc){

	    return json_encode($abc,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
	    
	}
	

 

	
	/*FUNCTION NPC*/
	class npcs {
		public $id = 0;
	

		public function npcs($id) {
		    global $mysqli;
			$duc = $mysqli->query("SELECT * FROM `npcs` WHERE `id` = '" . $id . "'")->fetch_array();

			foreach($duc as $key => $value) {
				$this->{$key} = $value;
			}

		$this->ducnghia = json_decode($this->ducnghia);
			if (!isset($this->ducnghia)) {
				$this->ducnghia = new stdClass();
			}
		}

public function xoa($id) {
    global $mysqli;
			unset($this->ducnghia->{$id});
			$mysqli->query("UPDATE `npcs` SET `ducnghia` = '" . json_encode($this->ducnghia) . "' WHERE `id` = '" . $this->id . "'");
			return $this->ducnghia->{$id};
		}		
	
public function add($ccc,$textxxx, $amount) {
    global $mysqli;
			$this->ducnghia->$ccc->$textxxx = $amount;
			$mysqli->query("UPDATE `npcs` SET `ducnghia` = '" . json_encode($this->ducnghia,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT) . "' WHERE `id` = '" . $this->id . "'");

			return $this->ducnghia->{$ccc};
		}	
		
	}
	/*END FUNCTION NPC*/
	
	
	function dichson($strurl) {
	    
     $strurl = preg_replace("/(#)/", "'", $strurl);
 
  return $strurl;
  }
 
   
/*POKEMON IN MAP*/

			
	class quai {
		public $id = 0;
		public function quai($id) {
		    global $mysqli;
			$pokemon = $mysqli->query("SELECT * FROM `m` WHERE `id` = '" . $id . "'")->fetch_array();

			foreach($pokemon as $key => $value) {
				$this->{$key} = $value;
			}

$this->thuong = json_decode($this->thuong);
			if (!isset($this->thuong)) {
				$this->thuong = new stdClass();
			}
			
	
		}
		
public function setthuong($n1,$n2,$n3) {
    global $mysqli;
			$this->thuong->{$n1}->{$n2} = $n3;
			$mysqli->query("UPDATE `m` SET `thuong` = '" . json_encode($this->thuong,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT) . "' WHERE `id` = '" . $this->id . "'");

			return $this->thuong->{$n1};
		}
		
	
	public function xoa($id,$id2) {
	    global $mysqli;
			unset($this->thuong->{$id}->{$id2});
			$mysqli->query("UPDATE `m` SET `thuong` = '" . json_encode($this->thuong,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT) . "' WHERE `id` = '" . $this->id . "'");

			return $this->thuong->{$id}->{$id2};
		}

	}
/*END POKEMON IN MAP*/


/*POKEMON*/
class pkm {
		public $id = 0;

		public function pkm($id) {
		    global $mysqli;
			$map = $mysqli->query("SELECT * FROM `ducnghia_pokemon` WHERE `id` = '" . $id . "'")->fetch_array();

			foreach($map as $key => $value) {
				$this->{$key} = $value;
			}

		

			$this->ducnghia = json_decode($this->ducnghia);
			if (!isset($this->ducnghia)) {
				$this->ducnghia = new stdClass();
			}
		}
		
public function add($id, $amount) {
    		    global $mysqli;

			$this->ducnghia->{$id} = $amount;
			$mysqli->query("UPDATE `ducnghia_pokemon` SET `ducnghia` = '" . json_encode($this->ducnghia,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT) . "' WHERE `id` = '" . $this->id . "'");

			return $this->ducnghia->{$id};
		}				
		
	}	
/**/



?>
