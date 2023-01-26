<?php
	include_once('class/map.php');
	include_once('class/monster.php');
	include_once('class/item.php');
	include_once('class/skill.php');

	$nature_growth = array(
		'attack' => array(1, 1.1, 1.1, 1.1, 1.1, 0.9, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 0.9, 1, 1, 1, 1),
		'defense' => array(1, 0.9, 1, 1, 1, 1.1, 1, 1.1, 1.1, 1.1, 1, 0.9, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 0.9, 1, 1, 1),
		'speed' => array(1, 1, 0.9, 1, 1, 1, 1, 0.9, 1, 1, 1.1, 1.1, 1, 1.1, 1.1, 1, 1, 0.9, 1, 1, 1, 1, 0.9, 1, 1),
		'spattack' => array(1, 1, 1, 0.9, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 0.9, 1, 1.1, 1.1, 1.1, 1, 1.1, 1, 1, 1, 0.9, 1),
		'spdefense' => array(1, 1, 1, 1, 0.9, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 0.9, 1.1, 1.1, 1.1, 1.1, 1)
	);

	function generate_user_monster($mon_id, $mon_level, $mon_name = '', $owner_id) {
		$mon_base = new monster($mon_id);

		$mon_exp = get_next_exp($mon_level - 1, $mon_base->exp_growth);

		if (rand(1, 10000) / 100 < $mon_base->gender_rate->female) {
			$mon_gender = 'F';
		} else {
			$mon_gender = 'M';
		}

		$mon_IVs = array(
			'hp' => rand(0, 31),
			'attack' => rand(0, 31),
			'defense' => rand(0, 31),
			'speed' => rand(0, 31),
			'spattack' => rand(0, 31),
			'spdefense' => rand(0, 31)
		);

		$mon_EVs = array(
			'hp' => 0,
			'attack' => 0,
			'defense' => 0,
			'speed' => 0,
			'spattack' => 0,
			'spdefense' => 0
		);

		$mon_base_moves = array();
		foreach ($mon_base->moves as $move) {
			if ($move->level >= 1 && $move->level <= $mon_level) {
				array_push($mon_base_moves, $move->id);
			}
		}

		$mon_moves = array();
		for ($i = 0; $i < 4; $i++) {
			if ($mon_base_moves[$i]) {
				$skill_id = $mon_base_moves[$i];
			}
			array_push($mon_moves, $skill_id);
		}

		mysql_query("INSERT INTO `user_monsters` (`id`, `name`, `level`, `exp`, `hp`, `gender`, `nature`, `moves`, `IVs`, `EVs`, `owner`, `current_owner`) VALUES ('" . $mon_id . "', '', '" . $mon_level . "', '" . $mon_exp . "', '" . calc_hp($mon_base->hp, $mon_level, $mon_IVs['hp'], $mon_EVs['hp']) . "', '" . $mon_gender . "', '" . get_nature_random() . "', '" . json_encode($mon_moves) . "', '" . json_encode($mon_IVs) . "', '" . json_encode($mon_EVs) . "', '" . $owner_id . "', '" . $owner_id . "')");

		return mysql_insert_id();
	}

	function get_next_exp($level, $growth) {
		$exp = 0;

		$next_level = min($level + 1, 100);

		if ($growth == 0) {
			if ($next_level <= 50) {
				$exp = floor(pow($next_level, 3) * (100 - $next_level) / 50);
			} else if ($next_level <= 68) {
				$exp = floor(pow($next_level, 3) * (150 - $next_level) / 100);
			} else if ($next_level <= 98) {
				$exp = floor(pow($next_level, 3) * ((1911 - (10 * $next_level)) / 3) / 500);
			} else {
				$exp = floor(pow($next_level, 3) * (160 - $next_level) / 100);
			}
		} else if ($growth == 1) {
			$exp = floor(0.8 * pow($next_level, 3));
		} else if ($growth == 2) {
			$exp = floor(pow($next_level, 3));
		} else if ($growth == 3) {
			$exp = floor((1.2 * pow($next_level, 3)) - (15 * pow($next_level, 2)) + (100 * $next_level) - 140);
		} else if ($growth == 4) {
			$exp = floor(1.25 * pow($next_level, 3));
		} else {
			if ($next_level <= 15) {
				$exp = floor(pow($next_level, 3) * (((($next_level + 1) / 3) + 24) / 50));
			} else if ($next_level <= 36) {
				$exp = floor(pow($next_level, 3) * (($next_level + 14) / 50));
			} else {
				$exp = floor(pow($next_level, 3) * ((($next_level / 2) + 32) / 50));
			}
		}

		return max($exp, 0);
	}

	function calc_hp($base_stat, $level = 0, $individual_value = 0, $effort_value = 0) {
		global $nature_growth;

		$result = (($individual_value + 2 * $base_stat + ($effort_value / 4)) * $level / 100) + 10 + $level;
		return (int) $result;
	}

	function calc_attack($base_stat, $level = 0, $individual_value = 0, $effort_value = 0, $nature = 0) {
		global $nature_growth;

		$result = ((($individual_value + 2 * $base_stat + ($effort_value / 4)) * $level / 100) + 5) * $nature_growth['attack'][$nature];
		return (int) $result;
	}

	function calc_defense($base_stat, $level = 0, $individual_value = 0, $effort_value = 0, $nature = 0) {
		global $nature_growth;

		$result = ((($individual_value + 2 * $base_stat + ($effort_value / 4)) * $level / 100) + 5) * $nature_growth['defense'][$nature];
		return (int) $result;
	}

	function calc_speed($base_stat, $level = 0, $individual_value = 0, $effort_value = 0, $nature = 0) {
		global $nature_growth;

		$result = ((($individual_value + 2 * $base_stat + ($effort_value / 4)) * $level / 100) + 5) * $nature_growth['speed'][$nature];
		return (int) $result;
	}

	function calc_spattack($base_stat, $level = 0, $individual_value = 0, $effort_value = 0, $nature = 0) {
		global $nature_growth;

		$result = ((($individual_value + 2 * $base_stat + ($effort_value / 4)) * $level / 100) + 5) * $nature_growth['spattack'][$nature];
		return (int) $result;
	}

	function calc_spdefense($base_stat, $level = 0, $individual_value = 0, $effort_value = 0, $nature = 0) {
		global $nature_growth;

		$result = ((($individual_value + 2 * $base_stat + ($effort_value / 4)) * $level / 100) + 5) * $nature_growth['spdefense'][$nature];
		return (int) $result;
	}

	function calc_damage($level, $attack_stat, $attack_power, $defense_stat) {
		$result = round(((((2 * $level / 5 + 2) * $attack_stat * $attack_power / $defense_stat) / 50) + 2) * 1.5 * 1 * rand(85, 100) / 100);
		return (int) $result;
	}

	function calc_type_effect($type, $type1, $type2 = 0) {
		$type_effect = array(
			1 => array(
				1, 1, 1, 1, 1, 0.5, 1, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1
			),
			2 => array(
				2, 1, 0.5, 0.5, 1, 2, 0.5, 0, 2, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5
			),
			3 => array(
				1, 2, 1, 1, 1, 0.5, 2, 1, 0.5, 1, 1, 2, 0.5, 1, 1, 1, 1, 1
			),
			4 => array(
				1, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2
			),
			5 => array(
				1, 1, 0, 2, 1, 2, 0.5, 1, 2, 2, 1, 0.5, 2, 1, 1, 1, 1, 1
			),
			6 => array(
				1, 0.5, 2, 1, 0.5, 1, 2, 1, 0.5, 2, 1, 1, 1, 1, 2, 1, 1, 1
			),
			7 => array(
				1, 0.5, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 1, 2, 1, 2, 1, 1, 2, 0.5
			),
			8 => array(
				0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 1
			),
			9 => array(
				1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 2, 1, 1, 2
			),
			10 => array(
				1, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5, 0.5, 2, 1, 1, 2, 0.5, 1, 1
			),
			11 => array(
				1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 0.5, 1, 1
			),
			12 => array(
				1, 1, 0.5, 0.5, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 1, 0.5, 1, 1
			),
			13 => array(
				1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 0.5, 1, 1
			),
			14 => array(
				1, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 0, 1
			),
			15 => array(
				1, 1, 2, 1, 2, 1, 1, 1, 0.5, 0.5, 0.5, 2, 1, 1, 0.5, 2, 1, 1
			),
			16 => array(
				1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 0
			),
			17 => array(
				1, 0.5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5
			),
			18 => array(
				1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 2, 2, 1
			)
		);

		if ($type < 1 || $type1 < 1) {
			return 0;
		}

		$result = $type_effect[$type][$type1 - 1];

		if ($type2 > 0) {
			$result2 = $type_effect[$type][$type2 - 1];

			if ($result2 < 1) {
				$result -= $result2;
			}
			else if ($result2 > 1) {
				$result += $result2;
			}
		}

		return $result;
	}

	function get_type_id($type_name) {
		$id = array(
			'normal' => 1,
			'fighting' => 2,
			'flying' => 3,
			'poison' => 4,
			'ground' => 5,
			'rock' => 6,
			'bug' => 7,
			'ghost' => 8,
			'steel' => 9,
			'fire' => 10,
			'water' => 11,
			'grass' => 12,
			'electric' => 13,
			'psychic' => 14,
			'ice' => 15,
			'dragon' => 16,
			'dark' => 17,
			'fairy' => 18
		);
		return $id[strtolower($type_name)];
	}

	function get_type_name($type_id) {
		$name = array(
			1 => 'Normal',
			2 => 'Fighting',
			3 => 'Flying',
			4 => 'Poison',
			5 => 'Ground',
			6 => 'Rock',
			7 => 'Bug',
			8 => 'Ghost',
			9 => 'Steel',
			10 => 'Fire',
			11 => 'Water',
			12 => 'Grass',
			13 => 'Electric',
			14 => 'Psychic',
			15 => 'Ice',
			16 => 'Dragon',
			17 => 'Dark',
			18 => 'Fairy'
		);
		return $name[$type_id];
	}

	function get_nature_random() {
		return rand(0, 24);
	}

	function get_nature_name($nature_id) {
		$name = array(
			0 => 'Hardy',
			1 => 'Lonely',
			2 => 'Brave',
			3 => 'Adamant',
			4 => 'Naughty',
			5 => 'Bold',
			7 => 'Relaxed',
			6 => 'Docile',
			8 => 'Impish',
			9 => 'Lax',
			10 => 'Timid',
			11 => 'Hasty',
			12 => 'Serious',
			13 => 'Jolly',
			14 => 'Naive',
			15 => 'Modest',
			16 => 'Mild',
			17 => 'Quiet',
			18 => 'Bashful',
			19 => 'Rash',
			20 => 'Calm',
			21 => 'Gentle',
			22 => 'Sassy',
			23 => 'Careful',
			24 => 'Quirky'
		);
		return $name[$nature_id];
	}

	function get_monster_special_name($special) {
		$name = array(
			1 => 'Shiny',
			5 => 'Gold'
		);

		return $name[$special];
	}

	function get_exp_growth_name($rate) {
		$name = array(
			0 => 'Erratic',
			1 => 'Fast',
			2 => 'Medium Fast',
			3 => 'Medium Slow',
			4 => 'Slow',
			5 => 'Fluctuating'
		);

		return $name[$rate];
	}

	function time_elapsed_string($timestamp) {
		$totaldelay = time() - $timestamp;
		if ($day = floor($totaldelay / 86400)) {
			$ret = $day . ' day' . (($day > 1) ? 's' : '');
		}
		else if ($hour = floor($totaldelay / 3600)) {
			$ret = $hour . ' hour' . (($hour > 1) ? 's' : '');
		}
		else if ($minute = floor($totaldelay / 60)) {
			$ret = $minute . ' minute' . (($minute > 1) ? 's' : '');
		}
		else {
			$second = floor($totaldelay / 1);
			$ret = $second . ' second' . (($second > 1) ? 's' : '');
		}
		return $ret . ' ago';
	}
?>