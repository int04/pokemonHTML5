<?php
	header("content-type: text/xml");

	include_once('../templates/config.php');
	include_once('../templates/lib.php');

	$user = new user($_SESSION['user_id']);

	$response = '';

	if ($_SESSION['utility']['script']) {
		$script_token = $_SESSION['utility']['script']['token'];
	}

	switch ($_POST['action']) {
		case 'choice':
			$_SESSION['utility']['script']['item'] = $_POST['item'];

			break;

		case 'buy':
			$npc = mysql_fetch_object(mysql_query("SELECT * FROM `npcs` WHERE `name` = '" . mysql_real_escape_string($_POST['npc']) . "'"));

			if (in_array($_POST['item'], json_decode($npc->shop, true))) {
				$item = new item($_POST['item']);

				if ($user->money > $item->cost) {
					$user->add_item($item->id, 1);

					$user->add_money(-$item->cost);

					$response .= '<k> new money: ' . $user->money . ' because price: ' . $item->cost . '</k>';
					$response .= '<msg>You purchased the item.</msg>';
				}

				$response .= '<money>' . $user->money . '</money>';
				$response .= '<msg>You do not have enough money to purchase this item.</msg>';
			}

			break;
	}
?>
<response><?php echo $response; ?></response>