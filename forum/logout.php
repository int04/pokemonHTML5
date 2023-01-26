<?php 
session_start();
session_unset();
    $_SESSION['id'] = NULL;
header("Location: login.php");
?>
