<?php
	class item {
		public $id = 0;
		public $name = null;
		public $description = null;
		public $file = null;

		public function item($id) {
			$item = mysql_fetch_array(mysql_query("SELECT * FROM `items` WHERE `id` = '" . mysql_real_escape_string($id) . "'"));

			foreach($item as $key => $value) {
				$this->{$key} = $value;
			}
		}
	}
?>