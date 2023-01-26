<?php
	class monster {
		public $id = 0;
		public $name = null;
		public $hp = 0;
		public $type = 0;
		public $type2 = 0;
		public $abilities = null;
		public $base_exp = 0;
		public $exp_growth = 0;
		public $gender_rate = null;
		public $capture_rate = 0;
		public $evolutions = null;
		public $moves = null;
		public $sprites = null;
		public $follow = 0;

		public function monster($id) {
			$monster = mysql_fetch_array(mysql_query("SELECT * FROM `monsters` WHERE `id` = '" . mysql_real_escape_string($id) . "'"));

			foreach($monster as $key => $value) {
				$this->{$key} = $value;
			}

			$this->abilities = json_decode($this->abilities);
			if (!isset($this->abilities)) {
				$this->abilities = new stdClass();
			}
			$this->sprites = json_decode($this->sprites);
			if (!isset($this->sprites)) {
				$this->sprites = new stdClass();
			}
			$this->moves = json_decode($this->moves);
			if (!isset($this->moves)) {
				$this->moves = new stdClass();
			}
			$this->gender_rate = json_decode($this->gender_rate);
			if (!isset($this->gender_rate)) {
				$this->gender_rate = new stdClass();
			}
			$this->evolutions = json_decode($this->evolutions);
			if (!isset($this->evolutions)) {
				$this->evolutions = new stdClass();
			}
		}
	}
?>