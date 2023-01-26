<?php
	#alleen toegankelijk als je bent ingelogd
	include('includes/security.php');
	
	$page = 'account-options';
	#Goeie taal erbij laden voor de page
	include_once('language/language-pages.php');

      #Pagina's opbouwen.
      switch ($_GET['category']) {

        #Persoonlijk openen
      	case "personal":
      	     	
      	$persoonlijkerror 	= '&nbsp;';
		$username 	  		= $_POST['username'] == ''   ? $gebruiker['username']   : $_POST['username'];
      	$voornaam 	  		= $_POST['voornaam'] == ''   ? $gebruiker['voornaam']   : $_POST['voornaam'];
        $achternaam   		= $_POST['achternaam'] == '' ? $gebruiker['achternaam'] : $_POST['achternaam'];
        $land 	      		= $_POST['land'] == ''       ? $gebruiker['land']       : $_POST['land'];
        $character 	  		= $_POST['character'] == ''   ? $gebruiker['character']   : $_POST['character'];
		$teamzien     		= $_POST['teamzien'] == ''   ? $gebruiker['teamzien']   : $_POST['teamzien'];
		$badgeszien     	= $_POST['badgeszien'] == ''   ? $gebruiker['badgeszien']   : $_POST['badgeszien'];
		$reclame     		= $_POST['reclame'] == ''   ? $gebruiker['reclame']   : $_POST['reclame'];
		$dueluitnodiging 	= $_POST['dueluitnodiging'] == '' ? $gebruiker['dueluitnodiging'] : $_POST['dueluitnodiging'];
        $premiumtekst 		= '<a href="?page=area-market">'.$txt['buy_premium_here'].'</a>';

		    #Als er op de Verander knop gedrukt word.
	      if(isset($_POST['persoonlijk'])){
			  
		  if(strlen($voornaam > 12)){
			  $persoonlijkerror = '<div class="red">'.$txt['alert_firstname_too_long'].'</div>';
		  }
		  elseif(strlen($achternaam > 12)){
			  $persoonlijkerror = '<div class="red">'.$txt['alert_lastname_too_long'].'</div>';
		  }
		  elseif($character != 'Red' && $character != 'Leaf' && $character != 'Ethan' && $character != 'Lyra' && $character != 'Brendan' && $character != 'May' && $character != 'Lucas' && $character != 'Dawn' && $character != 'Lunick' && $character != 'Solana' && $character != 'Ash' && $character != 'Blue' && $character != 'Brock' && $character != 'Misty' && $character != 'Tracey' && $character != 'Max' && $character != 'Paul' && $character != 'J' && $character != 'N'&& $character != 'Akuroma' && $character != 'Male Character BW2' && $character != 'Female Charakter BW2'){
			  $persoonlijkerror = '<div class="red">'.$txt['alert_character_invalid'].'</div>';
		  }
		  elseif($teamzien != '1' && $teamzien != '0'){
			  $persoonlijkerror = '<div class="red">'.$txt['alert_seeteam_invalid'].'</div>';
		  }
		  elseif($badgeszien != '1' && $badgeszien != '0'){
			  $persoonlijkerror = '<div class="red">'.$txt['alert_seebadges_invalid'].'</div>';
		  }
		  elseif($dueluitnodiging != '1' && $dueluitnodiging != '0'){
			  $persoonlijkerror = '<div class="red">'.$txt['alert_duel_invalid'].'</div>';
		  }
		  else{
          #Gegevens opslaan
          mysql_query("UPDATE `gebruikers` SET `voornaam`='".$voornaam."', `achternaam`='".$achternaam."', `land`='".$land."', `character`='".$character."', `teamzien`='".$teamzien."', `badgeszien`='".$badgeszien."', `dueluitnodiging`='".$dueluitnodiging."' WHERE `user_id`='".$_SESSION['id']."'");
          #Melding op het scherm weergeven dat het gelukt is
          $persoonlijkerror = '<div class="green">'.$txt['success_modified'].'</div>';
		  }
		  
		  #Username ff fixen
		  if($username != $gebruiker['username']){
			  if($gebruiker['gold'] < 15){
				  $persoonlijkerror = '<div class="red">'.$txt['alert_not_enough_gold'].'</div>';
			  }  
			  elseif(empty($username)){
				  $persoonlijkerror = '<div class="red">'.$txt['alert_no_username'].'</div>';
			  }  
			  elseif(strlen($username) < 3 ){
				  $persoonlijkerror = '<div class="red">'.$txt['alert_username_too_short'].'</div>';
			  }
			  elseif(strlen($username > 10)){
				  $persoonlijkerror = '<div class="red">'.$txt['alert_username_too_long'].'</div>';
			  }
			  elseif(mysql_num_rows(mysql_query("SELECT `username` FROM `gebruikers` WHERE `username`='".$username."'")) >= "1"){
				  $persoonlijkerror = '<div class="red">'.$txt['alert_username_already_taken'].'</div>';
			  }
			  else{
			  #Gegevens opslaan
			  mysql_query("UPDATE `gebruikers` SET `username`='".$username."', `gold`=`gold`-'15' WHERE `user_id`='".$_SESSION['id']."'");
			  
			  $persoonlijkerror = '<div class="green">'.$txt['success_modified'].'</div>';
			  }
		  }
        }
        
        #Kijken als speler premium account heeft
		if($gebruiker['premiumaccount'] >= 1) $premiumtekst = ''.$gebruiker['premiumaccount'].' '.$txt['days_left'];	
	    ?>
        
    <form method="post">
    <?php if(isset($_POST['persoonlijk'])) echo $persoonlijkerror; ?>
    <center>
    <table width="400" border="0" cellspacing="0" cellpadding="0">
      <tr>
    <td width="200" height="25"><?php echo $txt['premium_days']; ?></td>
    <td width="200"><? echo $premiumtekst; ?></td>
  </tr>
  <tr>
    <td height="25"><?php echo $txt['username']; ?></td>
    <td><input type="text" name="username" class="text_long" value="<? echo $username; ?>" maxlength="10" /><img src="images/icons/gold.png" title="<?php echo $txt['cost_15_gold']; ?>" style="margin:0px 0px -3px 5px;" /> 15</td>
  </tr>
  <tr>
    <td height="25"><?php echo $txt['firstname']; ?></td>
    <td><input type="text" name="voornaam" class="text_long" value="<? echo $voornaam; ?>" maxlength="12" /></td>
  </tr>
  <tr>
    <td height="25"><?php echo $txt['lastname']; ?></td>
    <td><input type="text" name="achternaam" class="text_long" value="<? echo $achternaam; ?>" maxlength="12" /></td>
  </tr>
  <tr>
    <td height="25"><?php echo $txt['country']; ?></td>
    <td><select name="land" class="text_select">
    <?
    $landsql = mysql_query("SELECT `en`, `nl` FROM `landen` ORDER BY `".$lang['taalshort']."` ASC"); 

    if(isset($land)) $landd = $land;
    else $landd = $gebruiker['land'];

    while($land = mysql_fetch_array($landsql)){
      $selected = '';
      if($land['en'] == $landd)   $selected = 'selected';
        
      echo '<option value="'.$land['en'].'" '.$selected.'>'.$land[$lang['taalshort']].'</option>';
    }
    ?>
    </select></td>
  </tr>
  <tr>
    <td height="25"><?php echo $txt['character']; ?></td>
    <td><select name="character" value="<?php if(isset($_POST ['character']) && !empty($_POST ['character'])) { echo $_POST ['character']; }?>" class="text_select">
      <?
      $charactersql = mysql_query("SELECT naam FROM characters ORDER BY id ASC");
      
      if(isset($_POST['character'])){
        $characterr = $_POST['character'];
      }
      else{
        $characterr = $gebruiker['character'];
      } 
  
      while($character = mysql_fetch_array($charactersql)){
        if($character['naam'] == $characterr){
          $selected = 'selected';
        }
        else{
          $selected = '';
        }
        echo '<option value="'.$character['naam'].'" '.$selected.'>'.$character['naam'].'</option>';
      }
      ?>
      </select></td>
  </tr>
   <tr>
    <td height="25"><?php echo $txt['team_on_profile']; ?></td>
    <td><?php 
		if($teamzien == 1){
          echo'	<input type="radio" name="teamzien" value="1" id="ja" checked /><label for="ja" style="padding-right:17px"> '.$txt['yes'].'</label>
            	<input type="radio" name="teamzien" value="0" id="nee" /><label for="nee"> '.$txt['no'].'</label>';
          }
          elseif($teamzien == 0){
          echo'	<input type="radio" name="teamzien" value="1" id="ja" /><label for="ja" style="padding-right:17px"> '.$txt['yes'].'</label>
               	<input type="radio" name="teamzien" value="0" id="nee" checked /><label for="nee"> '.$txt['no'].'</label>';
          }
          #Als er nog geen teamzien is
          else{
          echo'	<input type="radio" name="teamzien" value="1" id="ja" /><label for="ja" style="padding-right:17px"> '.$txt['yes'].'</label>
           		<input type="radio" name="teamzien" value="0" id="nee" /><label for="nee"> '.$txt['no'].'</label>';
          }?></td>
  </tr>
   <tr>
    <td height="25"><?php echo $txt['badges_on_profile']; ?></td>
    <td><?php 
		if($gebruiker['Badge case'] == 0){
			echo $txt['alert_dont_have_badgebox'];
		}
		else{
		
		if($badgeszien == 1){
          echo'	<input type="radio" name="badgeszien" value="1" id="badges1" checked /><label for="badges1" style="padding-right:17px"> '.$txt['yes'].'</label>
            	<input type="radio" name="badgeszien" value="0" id="badges2" /><label for="badges2"> '.$txt['no'].'</label>';
          }
          elseif($badgeszien == 0){
          echo'	<input type="radio" name="badgeszien" value="1" id="badges1" /><label for="badges1" style="padding-right:17px"> '.$txt['yes'].'</label>
               	<input type="radio" name="badgeszien" value="0" id="badges2" checked /><label for="badges2"> '.$txt['no'].'</label>';
          }
          #Als er nog geen teamzien is
          else{
          echo'	<input type="radio" name="badgeszien" value="1" id="badges1" /><label for="badges1" style="padding-right:17px"> '.$txt['yes'].'</label>
           		<input type="radio" name="badgeszien" value="0" id="badges2" /><label for="badges2"> '.$txt['no'].'</label>';
          }
		}?></td>
  </tr>
   <tr>
    <td height="25"><?php echo $txt['duel_invitation']; ?></td>
    <td><?php 
		if($gebruiker['rank'] < 3){
			echo $txt['available_rank_bully'];
		}
		elseif($gebruiker['premiumaccount'] == 0){
			echo $txt['alert_not_premium'];
		}
		else{
		
		if($dueluitnodiging == 1){
          echo'	<input type="radio" name="dueluitnodiging" value="1" id="duel1" checked /><label for="duel1" style="padding-right:10px"> '.$txt['on'].'</label>
            	<input type="radio" name="dueluitnodiging" value="0" id="duel2" /><label for="duel2"> '.$txt['off'].'</label>';
          }
          elseif($dueluitnodiging == 0){
          echo'	<input type="radio" name="dueluitnodiging" value="1" id="duel1" /><label for="duel1" style="padding-right:10px"> '.$txt['on'].'</label>
               	<input type="radio" name="dueluitnodiging" value="0" id="duel2" checked /><label for="duel2"> '.$txt['off'].'</label>';
          }
          #Als er nog geen dueluitnodiging is
          else{
          echo'	<input type="radio" name="dueluitnodiging" value="1" id="duel1" /><label for="duel1" style="padding-right:10px"> '.$txt['on'].'</label>
           		<input type="radio" name="dueluitnodiging" value="0" id="duel2" /><label for="duel2"> '.$txt['off'].'</label>';
          }
		}?></td>
  </tr>
  <tr>
    <td height="25">&nbsp;</td>
    <td><input type="submit" name="persoonlijk" value="<?php echo $txt['button_personal']; ?>" class="button" /></td>
  </tr>
</table></center>
</form>

<?
		    #Persoonlijk sluiten
		    break;
		    
		    #Wachtwoord openen
		    case "password":
			
			#als er op de verander knop gedrukt word
		      if(isset($_POST['veranderww'])){
		        		        
		        #Controleren als er wel wat ingevuld is
            if(empty($_POST['wachtwoordwachtwoordaanmeld']) && empty($_POST['huidig']) && empty($_POST['wachtwoordcontrole'])) 
              $wachtwoordtekst = '<div class="red">'.$txt['alert_all_fields_required'].'</div>';
            #is het huidige wachtwoord niet hetzelfde als het ingevoerde nieuwe wachtwoord
            elseif($_POST['huidig'] == $_POST['wachtwoordwachtwoordaanmeld'])
             $wachtwoordtekst = '<div class="red">'.$txt['alert_old_new_password_thesame'].'</div>';
            #Klopt het huidige wachtwoord wel met elkaar
            elseif(MD5($_POST['huidig']) <> $gebruiker['wachtwoord'])
              $wachtwoordtekst = '<div class="red">'.$txt['alert_old_password_wrong'].'</div>';
            #Is het wachtwoord wel langer dan 5 tekens
            elseif(strlen($_POST['wachtwoordwachtwoordaanmeld']) < 5)
              $wachtwoordtekst = '<div class="red">'.$txt['alert_password_too_short'].'</div>';
            #Komen beide wachtwoorden wel overeen
            elseif($_POST['wachtwoordwachtwoordaanmeld'] <> $_POST['wachtwoordcontrole'])
              $wachtwoordtekst = '<div class="red">'.$txt['alert_new_controle_password_wrong'].'</div>';
            else{
              $wachtwoordmd5 = md5($_POST['wachtwoordcontrole']);
              mysql_query("UPDATE `gebruikers` SET `wachtwoord`='".$wachtwoordmd5."' WHERE `user_id`='".$_SESSION['id']."'");
              $wachtwoordtekst = '<div class="green">'.$txt['success_password'].'</div>';
            }
          }       
		  
		  ?>
          <form method="post">
          <?php if(isset($_POST['veranderww'])) echo $wachtwoordtekst; ?>
          <center>
    <table width="350" border="0" cellspacing="0" cellpadding="0">
      <tr>
    <td width="200" height="25"><?php echo $txt['new_password']; ?></td>
    <td width="150"><input type="password" name="wachtwoordwachtwoordaanmeld" class="text_long" /></td>
  </tr>
  <tr>
    <td height="25"><?php echo $txt['new_password_again']; ?></td>
    <td><input type="password" name="wachtwoordcontrole" class="text_long" /></td>
  </tr>
  <tr>
    <td height="25"><?php echo $txt['password_now']; ?></td>
    <td><input type="password" name="huidig" class="text_long" /></td>
  </tr>
  <tr>
    <td height="25">&nbsp;</td>
    <td><input type="submit" name="veranderww" value="<?php echo $txt['button_password']; ?>" class="button" /></td>
  </tr>
</table></center>
</form>
<?

		    #wachtwoord sluiten
		    break;
			#Profiel openen
		    case "profile":
		      #Als er op de Knop gedrukt word
		      if(isset($_POST['profiel'])){
            #Tekst formateren
            $tekst = htmlspecialchars($_POST['tekst']);
            #Tag toe brengen die later verwijderd moet worden.
		        mysql_query("UPDATE `gebruikers` SET `profiel`='".$tekst."' WHERE `user_id`='".$_SESSION['id']."'");
            $profieltekst = '<div class="green">'.$txt['success_profile'].'</div>';
		      }

    		  $ptekst = mysql_fetch_array(mysql_query("SELECT `profiel` FROM `gebruikers` WHERE `user_id`='".$_SESSION['id']."'"));
    		  $tekst = htmlspecialchars_decode($ptekst['profiel']);
    		  $tekst = eregi_replace("\[remove]","",$tekst);
?>

		<script type="text/javascript" src="javascripts/jquery.colorbox.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				//Examples of how to assign the ColorBox event to elements
				$(".colorbox").colorbox({width:"850", height:"1050", iframe:true});
				
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
			});
		</script>
        
<form method="post">
<?php if(isset($_POST['profiel'])) echo $profieltekst; ?>
<center>
    <table width="660" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td height="25"><?php echo $txt['link_text_effects']; ?></td>
    </tr>
  <tr>
    <td><textarea class="text_area" rows="12" name="tekst"><? echo $tekst; ?></textarea></td>
    </tr>
  <tr>
    <td height="25"><input type="submit" value="<?php echo $txt['button_profile']; ?>" name="profiel" class="button" /></td>
    </tr>
</table></center>
</form>   

<?
		    #wijzig profiel sluiten
		    break;
		    
		    #Nieuw openen
		    case "restart":
		  
		  if(isset($_POST['opnieuw'])){
			  if(empty($_POST['wachtwoord']))
				  $opnieuwtekst = '<div class="red">'.$txt['alert_no_password'].'</div>';
			  elseif(md5($_POST['wachtwoord']) != $gebruiker['wachtwoord'])
				  $opnieuwtekst = '<div class="red">'.$txt['alert_password_wrong'].'</div>';
			  elseif($_POST['wereld'] == "")
				  $opnieuwtekst = '<div class="red">'.$txt['alert_no_beginworld'].'</div>';
				  
			  elseif($_POST['wereld'] != 'Kanto' && $_POST['wereld'] != 'Johto' && $_POST['wereld'] != 'Hoenn' && $_POST['wereld'] != 'Sinnoh' && $_POST['wereld'] != 'Unova')
				  $opnieuwtekst = '<div class="red">'.$txt['alert_world_invalid'].'</div>';
			  else{
          $datum = date('Y-m-d H:i:s');
			    #Alle items weg!
          mysql_query("UPDATE `gebruikers_item` SET `itembox`='Bag', `Badge case`='', `Poke ball`='', `Great ball`='', `Ultra ball`='', `Premier ball`='', `Net ball`='', `Dive ball`='', `Nest ball`='', `Repeat ball`='', `Timer ball`='', `Master ball`='', `Potion`='', `Super potion`='', `Hyper potion`='', `Full heal`='', `Revive`='', `Max revive`='', `Pokedex`='', `Pokedex chip`='', `Fishing rod`='', `Cave suit`='', `Protein`='', `Iron`='', `Carbos`='', `Calcium`='', `HP up`='', `Rare candy`='', `Duskstone`='', `Firestone`='', `Leafstone`='', `Moonstone`='', `Ovalstone`='', `Shinystone`='', `Sunstone`='', `Thunderstone`='', `Waterstone`='' , `Dawnstone`='' WHERE `user_id`='".$_SESSION['id']."'");
			    #Alle badges weg!
          mysql_query("UPDATE `gebruikers_badges` SET `Boulder`='0', `Cascade`='0', `Thunder`='0', `Rainbow`='0', `Marsh`='0', `Soul`='0', `Volcano`='0', `Earth`='0', `Zephyr`='0', `Hive`='0', `Plain`='0', `Fog`='0', `Storm`='0', `Mineral`='0', `Glacier`='0', `Rising`='0', `Stone`='0', `Knuckle`='0', `Dynamo`='0', `Heat`='0', `Balance`='0', `Feather`='0', `Mind`='0', `Rain`='0', `Coal`='0', `Forest`='0', `Cobble`='0', `Fen`='0', `Relic`='0', `Mine`='0', `Icicle`='0', `Beacon`='0', `Trio`='0', `Basic`='0', `Insect`='0', `Bolt`='0', `Quake`='0', `Jet`='0', `Freeze`='0', `Legend`='0' WHERE `user_id`='".$_SESSION['id']."'");
		  
			#Alle tmhm weg!
          mysql_query("UPDATE `gebruikers_tmhm` SET `TM01`='0', `TM02`='0', `TM03`='0', `TM04`='0', `TM05`='0', `TM06`='0', `TM07`='0', `TM08`='0', `TM09`='0', `TM10`='0', `TM11`='0', `TM12`='0', `TM13`='0', `TM14`='0', `TM15`='0', `TM16`='0', `TM17`='0', `TM18`='0', `TM19`='0', `TM20`='0', `TM21`='0', `TM22`='0', `TM23`='0', `TM24`='0', `TM25`='0', `TM26`='0', `TM27`='0', `TM28`='0', `TM29`='0', `TM30`='0', `TM31`='0', `TM32`='0', `TM33`='0', `TM34`='0', `TM35`='0', `TM36`='0', `TM37`='0', `TM38`='0', `TM39`='0', `TM40`='0', `TM41`='0', `TM41`='0', `TM42`='0', `TM43`='', `TM44`='0', `TM45`='0', `TM46`='0', `TM47`='0', `TM48`='0', `TM49`='0', `TM50`='0', `TM51`='0', `TM52`='0', `TM53`='0', `TM54`='0', `TM55`='0', `TM56`='0', `TM57`='0', `TM58`='0', `TM59`='0', `TM60`='0', `TM61`='0', `TM62`='0', `TM63`='0', `TM64`='0', `TM65`='0', `TM66`='0', `TM67`='0', `TM68`='0', `TM69`='0', `TM70`='0', `TM71`='0', `TM72`='0', `TM73`='0', `TM74`='0', `TM75`='0', `TM76`='0', `TM77`='0', `TM78`='0', `TM79`='0', `TM80`='0', `TM81`='0', `TM82`='0', `TM83`='0', `TM84`='0', `TM85`='0', `TM86`='', `TM87`='0', `TM88`='0', `TM89`='0', `TM90`='0', `TM91`='0', `TM92`='0', `HM01`='0', `HM02`='0', `HM03`='0', `HM04`='0', `HM05`='0', `HM06`='0', `HM07`='0', `HM08`='0' WHERE `user_id`='".$_SESSION['id']."'");
		  
          #Veel gebruikers dingen weg!
          mysql_query("UPDATE `gebruikers` SET `datum`='".$datum."', `wereld`='".$_POST['wereld']."', `silver`='75', `bank`='', `storten`='3', `huis`='doos', `geluksrad`='1', `rank`='1', `rankexp`='0', `rankexpnodig`='245', `aantalpokemon`='0', `badges`='0', `captcha_tevaak_fout`='0', `werkervaring`='0', `gewonnen`='0', `verloren`='0', `eigekregen`='0', `lvl_choose`='', `wiequiz`='0000-00-00 00:00:00', `werktijd`='0', `pokecentertijd`='0', `gevangenistijd`='0', `geluksrad`='3', `races_winst`='3', `races_verlies`='3', `pok_gezien`='', `pok_bezit`='', `pok_gehad`='' WHERE `user_id`='".$_SESSION['id']."'");
          #Alle Pokemons weg!
          mysql_query("DELETE FROM `pokemon_speler` WHERE `user_id`='".$_SESSION['id']."'");
          #Transferlijst Leeg!
          mysql_query("DELETE FROM `transferlijst` WHERE `user_id`='".$_SESSION['id']."'");
		  #Daycare Leeg!
		  mysql_query("DELETE FROM `daycare` WHERE `user_id`='".$_SESSION['id']."'");
          #Gebeurtenissen leeg!
          mysql_query("DELETE FROM `gebeurtenissen` WHERE `ontvanger_id`='".$_SESSION['id']."'");
				  $opnieuwtekst = '<div class="green">'.$txt['success_restart'].'</div>';
			  }
		  }
			  
	if(isset($_POST['opnieuw'])) echo $opnieuwtekst; ?>
   <center>
   <table width="660" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td><?php echo $txt['restart_title_text']; ?></td>
        </tr>
    </table>
    
    <form method="post">  
    <table width="350" border="0" cellspacing="0" cellpadding="0">
      <tr>
    <td width="200" height="25"><?php echo $txt['password_security']; ?></td>
    <td width="150"><input type="password" name="wachtwoord" class="text_long" value="" /></td>
  </tr>
  <tr>
    <td height="25"><?php echo $txt['beginworld']; ?></td>
    <td><input type="radio" name="wereld" id="kanto" value="Kanto" <?php if(isset($_POST['wereld']) && $_POST['wereld'] == "Kanto") { echo " checked='checked'"; } ?>> <label for="kanto">Kanto</label></td>
  </tr>
  <tr>
    <td rowspan="5"></td>
    <td height="25"><input type="radio" name="wereld" id="johto" value="Johto" <?php if(isset($_POST['wereld']) && $_POST['wereld'] == "Johto") { echo " checked='checked'"; } ?>> <label for="johto">Johto</label></td>
  </tr>
  <tr>
    <td height="25"><input type="radio" name="wereld" id="hoenn" value="Hoenn" <?php if(isset($_POST['wereld']) && $_POST['wereld'] == "Hoenn") { echo " checked='checked'"; } ?>> <label for="hoenn">Hoenn</label></td>
  </tr>
    <tr>
    <td height="25"><input type="radio" name="wereld" id="sinnoh" value="Sinnoh" <?php if(isset($_POST['wereld']) && $_POST['wereld'] == "Sinnoh") { echo " checked='checked'"; } ?>> <label for="sinnoh">Sinnoh</label></td>
  </tr>
    <tr>
    <td height="25"><input type="radio" name="wereld" id="unova" value="Unova" <?php if(isset($_POST['wereld']) && $_POST['wereld'] == "Unova") { echo " checked='checked'"; } ?>> <label for="unova">Unova</label></td>
  </tr>
  <tr>
  	<td><input type="submit" value="<?php echo $txt['button_restart']; ?>" name="opnieuw" class="button" /></td>
  </tr>
</table>
</form>
</center>
<?
		    #Profiel sluiten
		    break;
		    
		    #standaard 
		    default:
  		    #Doorsturen naar persoonlijk
  		    header("Location: ?page=account-options&category=personal");		    
		    break;
			      }
			?>