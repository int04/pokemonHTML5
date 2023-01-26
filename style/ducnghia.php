<?php
if(isset($_GET['t']) and ($_GET['t']+10>=time())){
	header('Content-type: text/css');
	echo'@charset "ISO-8859-1";
	/*
	*	DucNghia
	*	N.A.B- '.date('d-m-y H:m:s').'
	*	@DucNghia
	*/';
//	readfile("style.css");

	readfile("zing.css");

//	readfile("ducnghiait.css");
				readfile("ducnghia_.css");

				//	readfile("animate.css");
						readfile("b.css");
					//	readfile("_p.css");
						readfile("canvas.css");
						readfile("original.min.css");



}else{
	echo"Biến con mẹ mày đi :v";
}
?>

