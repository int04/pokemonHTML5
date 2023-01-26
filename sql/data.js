///  || OR
// && AND
var logingame = 
{
   maptop : 999999, 
   drawWidth : 0,
   drawHeight :0,
};
let loginload  = 0;
var imgload = '/sql/load/crop.jpg';
var imglogo = '/sql/load/PokeBurn.png';
var version = '0.0.2';
(function($) {
  var IS_IOS = /iphone|ipad/i.test(navigator.userAgent);
  $.fn.nodoubletapzoom = function() {
    if (IS_IOS)
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp
          , t1 = $(this).data('lastTouch') || t2
          , dt = t2 - t1
          , fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1) return;

        e.preventDefault();
        $(this).trigger('click').trigger('click');
      });
  };
})(jQuery);

var ping='999 ms';
var players = {
	'info': []
};
function code() {
    
 var        length = 30;
    
    
   var result           = '';
   var characters       = 'qwertyuiopasdfghjklzxcvbnm';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }

    return md5(result)+'.ducnghia';
}

function json(json) {
    return $.parseJSON(json);
}


////cookie session ducnghia save pass AND users
function tron(n, c, d, t) {
  var c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "." : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;

  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) ;
};
 
            setdata("canvas","fail");

////function ducnghia
var time =0;
var thoigian=0;
var timeplay =0;
var lt = 0;
var server = 1;
var camdi = 0;
var npcid = 0;
var npctext = 0;
var npctime = 0;
var datacamxuc =0;
var camxuc =-1;
var timecamxuc = 0;
var setvatpham='';
var setwin = '';
var textset ='';
var offhieuung=0;
var timeset =0;
var setxu2 =0;
var setexp2 =0;
var setxu =0;
var setexp =0;
var rongthan =0;
var datacanvas = '';
var count_chat =0;
var closechat =0;
var ananh = 0;
var chiendau = 0;
var nhiemvudata = '';
var an = 0;
var lvtile = 0;
var level = '';
var exp = '';
var sms = 0;
var clickpop = '';
var clickx = 0;
var clicky = 0;
var chatthegioi =0;
var chatthegioi_msg = '';
var chatthegioi_time = 0;
var hieuung = 0;
var thoitiet = 0;
var login = 0;

var maylon = 0;    
var maynho = 0;
	var grass = "";	
var friendsList = "";	
var buffer = document.createElement('canvas');
var bufferCtx = buffer.getContext('2d');
var bIsIPhone = false;
var bIsIPad = false;
var bIsAndroid = false;
var bWildBattleIsReady = false;
var bIsLoadingWildDialog = false;
var inventory = [];
var eggs = [];
var bShowUsers = true;
var chaybo = 0;	
if( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ) {
bIsIPhone = true;
rebindClicks();
	} else if(  navigator.userAgent.match(/iPad/i) ) {
bIsIPad = true;
rebindClicks();
	} else if(  navigator.userAgent.match(/Android/i)  || navigator.userAgent.match(/android/i) ) {
bIsAndroid = true;
rebindClicks();
	}
var admin = '0';
var bMagnify = false;
var chatset = 0;
var online = 'Không thể kết nối...';
var nicon = '0';
var userName = '';
var userSprite = '';
var userMoney = 0;
var userEvent = null;
var serverToken = '';
var clan_icon = '';
var clan_viettat = '';
var userX = 0;
var userY = 0;
var userDirection = 0;
var userStepPart = 0;
var userStepX = 0;
var userStepY = 0;
	var bLoading = true;
	var loadAction = "";
	var tick = 0;
	var ctx = null;
	var cvsWidth = 0;
	var cvsHeight = 0;
	var tagAlong = "";
	var tagAlongName = "";
	var follower = null;
	var battlescreen = "battlescreen";
	var captchaKeypress = new Array(false,false,false,false,false,false);
	var screenResources = new Array();
	var ImageResourceLoadedCount = 0;
	var ImageResourceTotalCount = 0;
	function ResourceImage(src,key) {
		this.img = new Image();
		this.img.src = src;
		this.url = src;
		this.img.onload = loadedResource;
		this.key = key;
		ImageResourceTotalCount++;
		return this;
	}
	var musicResources = new Array();
	var MusicResourceLoadedCount = 0;
	var MusicResourceTotalCount = 0;
	function ResourceMusic(src,key) {
		this.audio = null;
		MusicResourceTotalCount++;
		this.key = key;
		this.src = src;
		if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
		{
			this.audio = new Audio();
			this.audio.src = src;
			this.audio.load();
		}
		return this;
	}
	
	var prevPlaying = "";
	var prevPlayingSong = null;
	var playOnceSong = null;
	var soundEnabled = 0;
	var musicEnabled = 0;
	
	var effectResources = new Array();
	var EffectResourceLoadedCount = 0;
	var EffectResourceTotalCount = 0;
	function ResourceEffect(src,key) {
		this.audio = new Audio();
		this.audio.src = src;
		this.audio.oncanplaythrough = loadedEffectResource;
		if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
		{
			this.audio.load();
		}
		this.audio.volume = 0.5;
		this.key = key;
		EffectResourceTotalCount++;
		return this;
	}
	
	var currentMap = null;
		var ten = 'CHƯA ĐĂNG NHẬP';

	var mapName = '';
	var mapCode = '';
	var mapID = '';
	var mapWidth = 0;
	var mapHeight = 0;
	var mapData = null;
	var mapEvents =  null;
	var bMapDataLoaded = false;
	var bMapEventsLoaded = false;
	var mapLoadedCount = 0;
	var rawMapData = null;
	
	var mapAbove = new Image();
	var mapBase = new Image();
	mapAbove.onload = loadedMapImage;
	mapBase.onload = loadedMapImage;
	

	var loginAbove = new Image();
	var loginBase = new Image();
	loginAbove.onload = loadedMapImage;
	loginBase.onload = loadedMapImage;
	

	var stepsInGrass = 0;
	
	var mapEventObjects = new Array();
	
	//Map - runtime draw,centerMap functions
	var mapLeft = 0;
	var mapTop = 0;
	
	//Charset Variables
	var nhanvat = new Array();
	

	//Scripting Variables
	var events = new Array();
	var lastTriggeredEventName = "";
	
	//User Interaction
	var keyState = new Object;
	keyState.up = false;
	keyState.down = false;
	keyState.left = false;
	keyState.right = false;
	keyState.btn1 = false;
	keyState.btn2 = false; 
	keyState.btn3 = false; 
	var bMouseDown = false;
	
	//###########################################################
	//### SOCKET FUNCTIONS ############## Chat, Support Dialog
	//###########################################################
	//Sockets Variables
	var foregnusers = new Array();
	var bConnected = false;
	var updateTick = 0;
	var messages = new Array();
	var userOnWhichChatTab = "playerChat";

	
	function ChatMessage(isadmin,userid,username,message) {
		this.isadmin = isadmin;
		this.userid = userid;
		this.username = username;
		this.message = message;
		return this;
	}
	




	
	function rebindClicks(){
		var userAgent = navigator.userAgent.toLowerCase();
		
		if (bIsIPhone || bIsIPad || bIsAndroid) {
			//remove items which may be in the way
			$("#divTip").css("display","none");
			$("#mws-header").remove();
			$("#mws-container").css("padding-top","0px");
			$("#mws-sidebar").css("padding-top","10px");
			
			
			$("#divKeys").css("display","block");
			
			// For each event with an inline onclick
				/*
			$('[onclick]').each(function() {
				var onclick = $(this).attr('onclick');
				$(this).removeAttr('onclick'); // Remove the onclick attribute
				$(this).bind("click", preventClickEvent); // See to it that clicks never happen
				$(this).bind('tap', onclick); // Point taps to the onclick
				
				
			});
			*/



			$("#keyUp").bind('touchstart', function(ev) { 	keyState.up = true; return false;});
			$("#keyUp").bind("touchend", function(ev) {keyState.up = false; return false;	});
			
			$("#keyLeft").bind('touchstart', function(ev) { keyState.left = true; return false;});
			$("#keyLeft").bind("touchend", function(ev) {keyState.left = false; return false;	});
			
			$("#keyRight").bind('touchstart', function(ev) { keyState.right = true; return false;});
			$("#keyRight").bind("touchend", function(ev) {keyState.right = false; return false; });
			
			$("#keyDown").bind('touchstart', function(ev) { keyState.down = true; return false;});
			$("#keyDown").bind("touchend", function(ev) {keyState.down = false; return false;	});
			
			$("#keyA").bind('touchstart', function(ev) { 
				///duc
				 if(my.click.id !==0 && getuser(my.click.id) !== null && my.click.type =="users" ) {
            pvp(my.click.id);
        } else
        if(my.click.id !==0 && getnpc(my.click.id) !== null && my.click.type =="pokemon" ) {
            if(+getnpc(my.click.id).hp >=1) {
                att(my.click.id);
              
              for (var i=0; i<my.danhlan.length; i++) {
           if(i <=-1 && my.danhlan[i].id != my.click.id && getnpc( my.danhlan[i].id) !== null) {
               att(my.danhlan[i].id);
           }
	 }   
               
            }
            
            else if(+getnpc(my.click.id).idvp >=1) {
                nhatvp(my.click.id);
            }
            
            else if(getnpc(my.click.id).eventData[0].func== "DISPLAY MESSAGE") {
                noichuyen(my.click.id);
            }
             else {
                      keyState.btn1 = true;
 
            }
        } else {
       keyState.btn1 = true;
        }
				//done
				 return false;
			});
			
			$("#keyB").bind('touchstart', function(ev) { 
				if( camdi !=1 ) {keyState.btn2 = true;} return true;
			});
			
			$("#keyDUC").bind('touchstart', function(ev) { 
				if( camdi !=1 ) {keyState.btn2 = true;} return true;
			});
			
			$("#keyUp").nodoubletapzoom();
			$("#keyLeft").nodoubletapzoom();
			$("#keyRight").nodoubletapzoom();
			$("#keyDown").nodoubletapzoom();
			$("#keyA").nodoubletapzoom();
			$("#keyB").nodoubletapzoom();
						$("#keyDUC").nodoubletapzoom();

			$(".container").nodoubletapzoom();
			$("#mws-container").nodoubletapzoom();
		}
		
		
		
		
	}
	 
	function preventClickEvent(event)  {
		event.preventDefault();
	}
	
///////////////DUCNGHIA


 	
 	function update() {
 	    
		if( bLoading ) {
			if( ImageResourceLoadedCount == screenResources.length )
				if( charsetLoadedCount == charsets.length )
					if( mapLoadedCount == 2 ) 
						if( bMapEventsLoaded && bMapDataLoaded ) {
							bLoading = false;
							mapWidth = mapAbove.width;
							mapHeight = mapAbove.height;
							
							clearInterval(gameInterval);
							gameInterval = setInterval(function() {
							  update();
							  draw();
							}, 50);
							
						}
		} else {
			
			if( bConnected ) {
				updateTick++;
				if( updateTick > 10 ) {
					
				
				


					updateTick = 0;
				}
			}
			
			if( activeScript.length > 0 ) {
				scriptUpdate();
			} else if( bInBattle ) {
				battleUpdate();
			} else {
				//Process input and movement.
				if( activeScript.length == 0 ) {
					if( userEvent.moveQueue.length == 0 ) {
					   if(camdi==0) {
					 
					  
	
					       
					       
					       
					       
						if( keyState.up ) {
						      if(+my.users.pokemon >0 && +my.chiso.hp <=0) {
             die();
		             return false;
					    }
					    
					    if(my.camdi >=1) {
					        return false;
					    }
					    
						    					    ketnoi();
							userEvent.addMoveQueue("Up");
									    			playSFX("chay");

							
						} else if( keyState.down ) {
						      if(+my.users.pokemon >0 && +my.chiso.hp <=0) {
             die();
		             return false;
					    }
					     if(my.camdi >=1) {
					        return false;
					    }
						      ketnoi();
							userEvent.addMoveQueue("Down");
									    			playSFX("chay");

						} else if( keyState.left ) {
						     if(+my.users.pokemon >0 && +my.chiso.hp <=0) {
             die();
		             return false;
					    }
					     if(my.camdi >=1) {
					        return false;
					    }
						      ketnoi();
							userEvent.addMoveQueue("Left");
									    			playSFX("chay");

						} else if( keyState.right ) {
						     if(+my.users.pokemon >0 && +my.chiso.hp <=0) {
             die();
		             return false;
					    }
					     if(my.camdi >=1) {
					        return false;
					    }
						      ketnoi();
							userEvent.addMoveQueue("Right");
									    			playSFX("chay");

						}
					}
				}
				}
				
				if( keyState.btn1 ) {
					for(var k=0;k<currentMap.events.length;k++)
					{
						var evnt = currentMap.events[k];
						if (evnt.bEventEnabled && (evnt.type == "Action Button" || evnt.type == "X1" || evnt.type == "X2" || evnt.type == "X3" || evnt.type == "X10" || evnt.type == "X15" || evnt.type == "X20") && activeScript.length == 0 && evnt.eventData.length > 0)
						{
							var checkX = 0;
							var checkY = 0;
							if (userEvent.direction == 0)
								checkY = -1;
							if (userEvent.direction == 1)
								checkY = 1;
							if (userEvent.direction == 2)
								checkX = -1;
							if (userEvent.direction == 3)
								checkX = 1;

							if (evnt.mapPosition.X == userEvent.mapPosition.X + checkX && evnt.mapPosition.Y == userEvent.mapPosition.Y + checkY + 2 )
							{
								//sfx(SOUND_CONFIRM);
								if (triggerEvent(evnt, false))
								{
									keyState.btn1 = false;
									return;
								}
							}
						}
					}
				}
				
				
	        }
					
			//Evaluate our hero
			userEvent.evaluate();
	        centerMap();
			currentMap.evaluateEvents(ctx);
	        
			if( bWildBattleIsReady  ) {
				if( keyState.btn1 == true ) {
					wipeWildMonsterBox();
					battleWildSelected();
					keyState.btn1 = false;
				} 
			}
		}
 	}
 	var notice_load_p = 0;
 	function load_tat(){
		document.getElementById('ducnghia_menu').style.display = "none";
	document.getElementById('menu_nho').style.display = "none";
	document.getElementById('divKeys').style.display = "none";

 	    

 	}
 	
 	function load_mo(){
    if(closechat==0) {

    }

 			if (bIsIPhone || bIsIPad || bIsAndroid) {
	document.getElementById('divKeys').style.display = "block";

 			}            		
 	}
 	
 	screenResources.push(new ResourceImage("sql/load/img/canvas/u_loginbg.png","loadgame"));screenResources.push(new ResourceImage("sql/load/img/canvas/u_login.png","bar")); 	

 	screenResources.push(new ResourceImage(imgload,"bandload")); 
 	screenResources.push(new ResourceImage(imglogo,"logo")); 	    
 	  		screenResources.push(new ResourceImage("/sql/load/12.png","12+")); 	    











	
var input = 0;
var lo = 0;
///hiệu ứng /////////////
 

    var init = [];
    var maxParts = 100;  ///số lượng rơi
        var particles = [];
 
  

function move() {
      for (var b = 0; b < particles.length; b++) {
        var p = particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if (p.x > cvsWidth || p.y > cvsHeight) {
          p.x = Math.random() * cvsWidth;
          p.y = -20;
        }
      }
    }
    
	function draw() { 
	
if(timephp.time >=1 && timephp.load < Date.now()) {
    timephp.time = +timephp.time +500;
    timephp.load = Date.now() + 500;
}
	    
	    ///done


		if(userID <=0)
	    {
	        
	        if(loginload <=0)
	        {
	            
	                mapLeft--;
	            if(mapLeft<=-300)
	            {
	                loginload =1;
	            }
	        }
	        if(loginload >=1)
	        {
	            
	                mapLeft++;
	            if(mapLeft>=0)
	            {
	                loginload =0;
	            }
	        }
	        if(logingame.maptop ==999999)
	        {
	            logingame.maptop = -cvsHeight;
	            
	        }
	        
	         logingame.drawWidth = 1024 > cvsWidth ? cvsWidth : 1024;
			 logingame.drawHeight = 1024 > cvsHeight ? cvsHeight : 1024;
			if( logingame.drawHeight > 1024 +(-logingame.maptop-cvsHeight)-130 )
			    logingame.drawHeight = 1024 +(-logingame.maptop-cvsHeight)-130;
			if( logingame.drawWidth > 1024 + mapLeft )
			    logingame.drawWidth = 1024 + mapLeft;
	loginAbove.src='sql/load/maps/tren/m6.png?ty';
	loginBase.src='sql/load/maps/duoi/m6.png?ty';
	        ctx.drawImage(loginBase, -mapLeft, -(-logingame.maptop-cvsHeight)+130, logingame.drawWidth, logingame.drawHeight,0, 0, logingame.drawWidth, logingame.drawHeight);
			ctx.drawImage(loginAbove, -mapLeft, -(-logingame.maptop-cvsHeight)+130, logingame.drawWidth, logingame.drawHeight,0, 0, logingame.drawWidth, logingame.drawHeight);
	    }
	    else
	    {
		ctx.drawImage(resourceByKey("bandload"), 0, 0, cvsWidth,cvsHeight);
	    }

		ctx.drawImage(resourceByKey("12+"), 0, 0 );
		
		ctx.drawImage(resourceByKey("logo"), (cvsWidth/2-160), 100 );
		
		if( bLoading ) {
load_tat();

			if( ImageResourceLoadedCount > ImageResourceTotalCount)
				ImageResourceLoadedCount = ImageResourceTotalCount;
			if( EffectResourceLoadedCount > EffectResourceTotalCount)
				EffectResourceLoadedCount = EffectResourceTotalCount;
		
		var phantram = (ImageResourceLoadedCount+EffectResourceLoadedCount)/(ImageResourceTotalCount+EffectResourceTotalCount)*100;
		if(userID >=1) {
		var tilebar = tron(phantram * 2.28);
		ctx.drawImage(resourceByKey("loadgame"),  cvsWidth/2-120, cvsHeight-80, 247, 20 );
    ctx.drawImage(resourceByKey("bar"),  cvsWidth/2-111, cvsHeight-77, tilebar, 14 );
		   
 if(phantram<=99) {
     var nghia = "Loading... "+tron(phantram)+"%";
 }
 if(phantram>=100) {
     var nghia = 'Loading...';
 }

		var status = " "+nghia+" ";
			if( tick > 2 ) 
				status = status + ".";
			if( tick > 5 ) 
				status = status + ".";
			if( tick > 7 ) 
				status = status + ".";
			if( tick > 10 ) 
				tick = 0;
			
			ctx.font = "bold 12px sans-serif";
			ctx.textAlign = "center";
			
			drawShadowText(ctx,"Server Wourld : The first download may take a long time! Please wait.", cvsWidth/2, cvsHeight-80);		
			
			drawShadowText(ctx,status, cvsWidth/2, cvsHeight-65);		
			
			drawShadowText(ctx,"Lâu quá ? Hãy Tải lại trang.", cvsWidth/2, cvsHeight-45);		

			
		} else {
		    if(input==0) {
		    khach();
		    map_thongbao();
		    input =1;
		    }
		}
		
		ctx.font = "bold 12px sans-serif";
			ctx.textAlign = "center";
			drawShadowText(ctx,"Made in Fan Pokemon", cvsWidth-80, cvsHeight-35,"#A44219");		
			drawShadowText(ctx,"Version "+version+" New", cvsWidth-70, cvsHeight-20);		
			
		} else {
		    //npc
	

if(npctime >0) {
   npctime--;
}
load_mo();

			var drawWidth = mapWidth > cvsWidth ? cvsWidth : mapWidth;
			var drawHeight = mapHeight > cvsHeight ? cvsHeight : mapHeight;
			if( drawHeight > mapHeight +(-mapTop-cvsHeight)-130 )
			    drawHeight = mapHeight +(-mapTop-cvsHeight)-130;
			if( drawWidth > mapWidth + mapLeft )
			    drawWidth = mapWidth + mapLeft;
			ctx.drawImage(mapBase, -mapLeft, -(-mapTop-cvsHeight)+130, drawWidth, drawHeight, 0,  0, drawWidth, drawHeight );
			
			currentMap.drawEvents(ctx,"below");
			userEvent.drawImage(ctx);
			currentMap.drawEvents(ctx,"above");
			ctx.drawImage(mapAbove, -mapLeft, -(-mapTop-cvsHeight)+130, drawWidth, drawHeight,0, 0, drawWidth, drawHeight);
			currentMap.drawNames(ctx);
		if( bMagnify ) {
				bufferCtx.fillStyle="#000000";
				bufferCtx.fillRect(0,0,cvsWidth,cvsHeight);
				bufferCtx.drawImage(ctx.canvas, ctx.canvas.width/4+userEvent.offsetX, ctx.canvas.height/4+userEvent.offsetY, ctx.canvas.width/2, ctx.canvas.height/2,0, 0, drawWidth, drawHeight);
				ctx.fillStyle="#000000";
				ctx.fillRect(0,0,cvsWidth,cvsHeight);
				ctx.drawImage(bufferCtx.canvas,0,0,drawWidth, drawHeight);
			}
			
time = date();
thoigian = new Date();
var gio = thoigian.getHours();
///thoitiet
if(gio >=7 && gio <=16) {var colort = "rgba(0,0,0,0.0)";}else
if(gio <=18 && gio >=17) {var colort = "rgba(0,0,0,0.35)";} 	
else if(gio ==19) { var colort = "rgba(0,0,0,0.40)";} 	else
if(gio ==20) { var colort = "rgba(0,0,0,0.55)";} else
if(gio >=21) {var colort = "rgba(0,0,0,0.65)";}
else if(gio >=0 && gio<=3) {var colort = "rgba(0,0,0,0.65)";}

else if(gio >=4 && gio <=6)  { var colort = "rgba(0,0,0,0.40)";}

if(mapID==15) {
   var colort = "rgba(0,0,0,0.25)"; 
}

			if(userID >=1) {
			    if(userID==3333333333333333) {
			ctx.fillStyle=colort;
		ctx.fillRect(0,0,cvsWidth,cvsHeight);
			    }
			
			///mưa
		if(caidat.cauhinh ==1) {
		    playSFX("mua");
	  ctx.strokeStyle = 'rgba(174,194,224,0.5)';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
      for (var c = 0; c < particles.length; c++) {
        var p = particles[c];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx.stroke();
      }
      move();	
		}	
      //
      //mây
      
			}

///			
			if(userID==1) {
			    var xemgar =  "Canvas: ("+(userEvent.mapPosition.X)*16+","+(userEvent.mapPosition.Y)*16+") "+clickx+","+clicky+"("+clickpop+")";
			} else { xemgar = ''; }
			ctx.font = "bold 12px sans-serif";
			ctx.textAlign = "left";
			drawShadowText(ctx, " "+ping+"  "+xemgar+" " ,10, cvsHeight-15);
		
		ctx.textAlign = "right";
	    drawShadowText(ctx,"#["+mapID+"]"+ten+"(X,Y : "+(userEvent.mapPosition.X+1)+","+(userEvent.mapPosition.Y+1)+", "+userEvent.direction+")",cvsWidth-27, 20);
		
			if( activeScript.length > 0 ) {
				scriptDraw();
			}
			 
		if( datacanvas.length > 0 ) {
				dra2();
			}
			 	 
			 
			if( eggs.length > 0 ) {
				var egg = resourceByKey("pokemonegg");
				for(var i=0;i<eggs.length;i++) {
					ctx.drawImage(egg, -25 + (i*30), cvsHeight-100);
				}
			}
///phần hiệu ứng & thời gian

	ctx.textAlign = "right";

						/* Hiệu ứng thời tiết */
  			drawShadowText(ctx,"Server : "+server+"",cvsWidth-27, 35);
						
  			drawShadowText(ctx,""+tron(my.users.xu)+" xu,"+tron(my.users.ruby)+" ruby",cvsWidth-27, 50);
  			
  			if(my.users.nhiemvu.code==1) {
  			    if(my.users.nhiemvu.song >= my.users.nhiemvu.can) {
  			drawShadowText(ctx,"Tới gặp "+my.users.nhiemvu.tennpc+" nhận thưởng.  ",cvsWidth-27, 65,"#A44219");
  			    } else {
  	drawShadowText(ctx,""+my.users.nhiemvu.ten+" ("+my.users.nhiemvu.song+"/"+ my.users.nhiemvu.can+") ",cvsWidth-27, 65);
       
  			    }
    
  			}
  			if(my.users.datathucan ==1) {
  			    if(+my.users.thucan.thoigian > date()) {
  			        
  			  			drawShadowText(ctx,""+my.users.thucan.ten+" "+thoigiantinh(my.users.thucan.thoigian)+" ",cvsWidth-27, 80,"#00FF33");
  			  			
  			  	if(my.users.thucan.load <= Date.now()) {
  			  	    if(+my.chiso.hp >0 && +my.chiso.hp < +my.chiso.hpfull) {
  			  	    my.chiso.hp = +my.chiso.hp + my.users.thucan.hoi;
  			  	    if(+my.chiso.hp >= +my.chiso.hpfull) {
  			  	        my.chiso.hp = +my.chiso.hpfull;
  			  	    }
  			  	    }
  			  	    
  		if(+my.chiso.hp >0 && +my.chiso.mp < +my.chiso.mpfull) {
  			  	    my.chiso.mp = +my.chiso.mp + my.users.thucan.hoi;
  			  	    if(+my.chiso.mp >= +my.chiso.mpfull) {
  			  	        my.chiso.mp = +my.chiso.mpfull;
  			  	    }
  			  	    }	  	    
  			  	 my.users.thucan.load = Date.now()+500;   
  			  	}
  			  	  			  
  			  			
  			    }
}

if(my.users.autobat ==1) {
      			  			drawShadowText(ctx,"Auto On  ",cvsWidth-27, 95,"#00FF33");
if(my.users.tauto >=20) {
    my.users.tauto=0;
}
if(my.users.tauto<=0) {
    if(+my.users.pokemon >=1) {
        if(+my.chiso.hp >=1 && +my.chiso.mp >=1 ) {
    auto();
        }
    }
}
++my.users.tauto;
}
  			
  		  			if(my.click.id !=0) {
  			   if(my.click.type =="pokemon" && getnpc(my.click.id) !== null) { 

  	drawShadowText(ctx,"lv."+tron(getnpc(my.click.id).level)+" "+getnpc(my.click.id).name+" "+tron(getnpc(my.click.id).hp)+"/"+tron(getnpc(my.click.id).hpfull)+"",cvsWidth-20, 281);	
  }
 if(my.click.type =="pokemon" && getnpc(my.click.id) === null) { 

  my.click.id=0;
  my.click.type=0;
   }
 ///userssssss
 
 
 if(my.click.type =="users" && getusers(my.click.id) !== null) { 

  	drawShadowText(ctx,""+getusers(my.click.id).username+"",cvsWidth-20, 281);	
  }
 if(my.click.type =="users" && getusers(my.click.id) === null) { 

  my.click.id=0;
  my.click.type=0;
   }
   

}
  			drawShadowText(ctx,"Open chát(+"+count_chat+")",90, 74,"#A44219");
  			
  			if(+my.users.pokemon >=1) {

				if(updatekinang(1) !== null ) {

				ctx.beginPath();
if(my.attack.vitri == updatekinang(1).id)	 {	
ctx.lineWidth = "5";
ctx.strokeStyle = "green"; 
} else {
 ctx.lineWidth = "2";
ctx.strokeStyle = "black";    
}
ctx.rect(15, 80, 40, 40);
ctx.stroke();


	   	ctx.drawImage(resourceByKey("s"+updatekinang(1).id+""), 0, 0, resourceByKey("s"+updatekinang(1).id+"").width , resourceByKey("s"+updatekinang(1).id+"").height ,15,80,40,40  );

	   	
if(sd(updatekinang(1).id).time > Date.now()) {
ctx.fillStyle = "#585858";
ctx.fillRect(15,80,40, ( 40* (+sd(updatekinang(1).id).time - Date.now()) / +sd(updatekinang(1).id).hoichieu   )   );
    
}	   	
}

	if(updatekinang(2) !== null ) {
				ctx.beginPath();
				if(my.attack.vitri == updatekinang(2).id)	 {	
ctx.lineWidth = "5";
ctx.strokeStyle = "green"; 
} else {
 ctx.lineWidth = "2";
ctx.strokeStyle = "black";    
}
ctx.rect(55, 80, 40, 40);
ctx.stroke();

	   	ctx.drawImage(resourceByKey("s"+updatekinang(2).id+""), 0, 0, resourceByKey("s"+updatekinang(2).id+"").width , resourceByKey("s"+updatekinang(2).id+"").height ,55,80,40,40  );
if(sd(updatekinang(2).id).time > Date.now()) {
ctx.fillStyle = "#585858";
ctx.fillRect(55,80,40, ( 40* (+sd(updatekinang(2).id).time - Date.now()) / +sd(updatekinang(2).id).hoichieu   )   );
    
}	   	
}
	
	if(updatekinang(3) !== null ) {
				ctx.beginPath();
				if(my.attack.vitri == updatekinang(3).id)	 {	
ctx.lineWidth = "5";
ctx.strokeStyle = "green"; 
} else {
 ctx.lineWidth = "2";
ctx.strokeStyle = "black";    
}
ctx.rect(95, 80, 40, 40);
ctx.stroke();

	   	ctx.drawImage(resourceByKey("s"+updatekinang(3).id+""), 0, 0, resourceByKey("s"+updatekinang(3).id+"").width , resourceByKey("s"+updatekinang(3).id+"").height ,95,80,40,40  );
if(sd(updatekinang(3).id).time > Date.now()) {
ctx.fillStyle = "#585858";
ctx.fillRect(95,80,40, (40*(+sd(updatekinang(3).id).time - Date.now())/+sd(updatekinang(3).id).hoichieu));
    
}
}

if(updatekinang(4) !== null ) {
				ctx.beginPath();
				if(my.attack.vitri == updatekinang(4).id)	 {	
ctx.lineWidth = "5";
ctx.strokeStyle = "green"; 
} else {
 ctx.lineWidth = "2";
ctx.strokeStyle = "black";    
}
ctx.rect(135, 80, 40, 40);
ctx.stroke();

	   	ctx.drawImage(resourceByKey("s"+updatekinang(4).id+""), 0, 0, resourceByKey("s"+updatekinang(4).id+"").width , resourceByKey("s"+updatekinang(4).id+"").height ,135,80,40,40  );
if(sd(updatekinang(4).id).time > Date.now()) {
ctx.fillStyle = "#585858";
ctx.fillRect(135,80,40, (40*(+sd(updatekinang(4).id).time - Date.now())/+sd(updatekinang(4).id).hoichieu));
    
}	   	
}

	if(updatekinang(5) !== null ) {
				ctx.beginPath();
				if(my.attack.vitri == updatekinang(5).id)	 {	
ctx.lineWidth = "5";
ctx.strokeStyle = "green"; 
} else {
 ctx.lineWidth = "2";
ctx.strokeStyle = "black";    
}
ctx.rect(175, 80, 40, 40);
ctx.stroke();

	   	ctx.drawImage(resourceByKey("s"+updatekinang(5).id+""), 0, 0, resourceByKey("s"+updatekinang(5).id+"").width , resourceByKey("s"+updatekinang(5).id+"").height ,175,80,40,40  );
if(sd(updatekinang(5).id).time > Date.now()) {
ctx.fillStyle = "#585858";
ctx.fillRect(175,80,40, (40*(+sd(updatekinang(5).id).time - Date.now())/+sd(updatekinang(5).id).hoichieu));
    
}	   	
}

		}				
				
  			
  			
  		
  			

  	ctx.drawImage(resourceByKey("camxuc"), 32*4, 0, 32, 32,  0,120, 32, 32 );
			
			
			    if(my.users.timexx===undefined) {
			        my.users.timexx=0;
			    }
			   
			   
			   if(my.users.timexx <=0) my.users.bag=0;
			   if(my.users.timexx >=5 && my.users.timexx <=10) my.users.bag=1;
			   if(my.users.timexx >=11 && my.users.timexx <=15) my.users.bag=2;
			   if(my.users.timexx >=16 && my.users.timexx <=20) my.users.bag=3;
			   if(my.users.timexx>=21 && my.users.timexx <=25) my.users.bag=4;

			   if(my.users.timexx >=26) my.users.timexx=0;
			  
			       my.users.timexx++;
			   
			   
			    if(datacanvas!="camxuc") {

  	ctx.drawImage(resourceByKey("bag"), (0+65*my.users.bag), 0, 65, 65,  0,150, 45, 45 );
  	
   	ctx.drawImage(resourceByKey("chat"), 0, 0, 26, 22,  0,200, 30, 30 );
 	

}
		
		
		

// Add event listener for `click` events.


// Add element.



// Render elements.
elements.forEach(function(element) {
    context.fillStyle = element.colour;
    context.fillRect(element.left, element.top, element.width, element.height);
});
			///tối

    	ctx.textAlign = "left";

/* nhân vật & menu game */


  ctx.font = "bold 11px sans-serif";
drawShadowText(ctx,""+userName+" Lv."+my.users.level+"+"+(my.users.exp/my.users.expmax*100).toFixed(2)+"%",15, 20,"#FEF7F7");

	if(+my.users.pokemon >=1) {
drawShadowText(ctx,"HP:",15, 34,"#FEF7F7");

		ctx.drawImage(resourceByKey("loadgame"),  35, 25, 100, 13 );
    ctx.drawImage(resourceByKey("bar"),  35, 27.5, tron((my.chiso.hp/my.chiso.hpfull*100) * 1), 8 );


drawShadowText(ctx,"MP: "+tron(my.chiso.mp)+"/"+tron(my.chiso.mpfull)+" lv."+tron(my.chiso.level)+"+"+(my.chiso.exp/my.chiso.expmax*100).toFixed(2)+"% ",15, 50,"#FEF7F7");
}




ctx.font = "bold 10px sans-serif";

if(chatthegioi <=0 && dabase_chat.length >=1) {
           if(!dabase_chat[0].type) {
        dabase_chat[0].type='Admin';
    }
  chatthegioi_msg = dabase_chat[0].msg;
  chatthegioi = 1;
    chatthegioi_time= cvsWidth;      
     fixloi("<b><font color='red'>["+dabase_chat[0].type+"]</font> "+dabase_chat[0].msg+"</b>");
    
          
    					dabase_chat.splice(0, 1);
      
   
}


if(chatthegioi !=0) {
    if(an==0) an=1;
        ctx.drawImage(resourceByKey("hr"),0, (cvsHeight-cvsHeight+100),cvsWidth, 2 );

    if(chatthegioi_time<=(-chatthegioi_msg.length)) {
        chatthegioi = 0;
      if(an==1) an=0;
      
    }
     ctx.font = "bold 15px sans-serif";
drawShadowText(ctx,"Chat:",70, (cvsHeight-cvsHeight+95),"#F40000");
    ctx.font = "bold 15px sans-serif";
drawShadowText(ctx,chatthegioi_msg,chatthegioi_time, (cvsHeight-cvsHeight+120),"#FFFFFF");

      		chatthegioi_time = chatthegioi_time-2;
        ctx.drawImage(resourceByKey("hr"),0, (cvsHeight-cvsHeight+130),cvsWidth, 2 );
      		
} else {
    chatthegioi_time = cvsWidth;
}

if(caidat.skill >=1) {
  		    	players.info.splice(1);

}
if(players.info.length >=1 && userID >=1) {
	for (var i in players.info) {
	    if(players.info[i].danh == undefined) {
	    					playSFX("danh");
	    			players.info[i].danh='ducnghia';		
};


		
		if(players.info[i].pk =="ok") {
if(players.info[i].type == "pokemon") {
if(getnpc(players.info[i].id) !== null) {
     players.info[i].pkx = getnpc(players.info[i].id).X;
     players.info[i].pky = getnpc(players.info[i].id).Y;
} else {
 players.info[i].pkx = -10;
     players.info[i].pky = -10;   
}

} 
if(players.info[i].type == "users") {
  if(players.info[i].id == userID) {
  players.info[i].pkx = userEvent.X ;
players.info[i].pky = userEvent.Y;
  }  
    else
if(getuser(players.info[i].id) !== null) {
     players.info[i].pkx = getuser(players.info[i].id).drawPosX;
     players.info[i].pky = getuser(players.info[i].id).drawPosY;
} else {
 players.info[i].pkx = -10;
     players.info[i].pky = -10;   
}

}  
 




var myx = players.info[i].myx;
var myy = players.info[i].myy;
var pkx = players.info[i].pkx;
var pky = players.info[i].pky;
if(+myx < +pkx) {
   players.info[i].myx  = +players.info[i].myx+15;
    
    if(+players.info[i].myx >= +pkx ) {
        players.info[i].myx = pkx;
        players.info[i].thoigian=1;
    }
    
}
if(+myx > +pkx) {
   players.info[i].myx  = +players.info[i].myx-15;
 if(+players.info[i].myx <= +pkx ) {
        players.info[i].myx = pkx;
                players.info[i].thoigian=-1;

    }
}
if(+myy < +pky) {
   players.info[i].myy  = +players.info[i].myy+15;
   if(+players.info[i].myy >= +pky ) {
        players.info[i].myy = pky;
                players.info[i].thoigian=-1;

    }
}
if(+myy > +pky) {
   players.info[i].myy  = +players.info[i].myy-15;
   if(+players.info[i].myy <= +pky ) {
        players.info[i].myy = pky;
                players.info[i].thoigian=-1;

    }

}


if(kinang2(players.info[i].ten).h == undefined ) { 
		      players.info[i].h = players.info[i].cao;
		  } else {
		  players.info[i].h = kinang2(players.info[i].ten).h;
    
		  }
		  
		  if(kinang2(players.info[i].ten).w == undefined ) { 
		      players.info[i].w = players.info[i].tinh;
		  } else {
		  players.info[i].w = kinang2(players.info[i].ten).w;
    
		  }

	    	ctx.drawImage(resourceByKey(kinang2(players.info[i].ten).img), players.info[i].tinh*players.info[i].load, 0, players.info[i].tinh, players.info[i].cao,  myx, myy, players.info[i].w,players.info[i].h);

	    ++players.info[i].load;
if(players.info[i].load >= players.info[i].max) {
    players.info[i].load =0;
}
if(myx == pkx && myy == pky) {
    	    --players.info[i].thoigian;
 if(players.info[i].thoigian <=-1) {
		    	players.info.splice(i, 1);
		}   
}


		} else {
		
		
		if(players.info[i].thoigian >=0) {
		    if(kinang2(players.info[i].ten).x == undefined ) {
		        players.info[i].x = 0;
		    } else {
		     		players.info[i].x = +kinang2(players.info[i].ten).x;
   
		    }
		    
		     if(kinang2(players.info[i].ten).y == undefined ) {
		        players.info[i].y = 0;
		    } else {
		     		players.info[i].y = +kinang2(players.info[i].ten).y;
   
		    }
		  
		  if(kinang2(players.info[i].ten).h == undefined ) { 
		      players.info[i].h = players.info[i].cao;
		  } else {
		  players.info[i].h = kinang2(players.info[i].ten).h;
    
		  }
		  
		  if(kinang2(players.info[i].ten).w == undefined ) { 
		      players.info[i].w = players.info[i].tinh;
		  } else {
		  players.info[i].w = kinang2(players.info[i].ten).w;
    
		  }
		    
		    
		    
	    	ctx.drawImage(resourceByKey(kinang2(players.info[i].ten).img), players.info[i].tinh*players.info[i].load, 0, players.info[i].tinh, players.info[i].cao,  players.info[i].canvas_x+players.info[i].x, players.info[i].canvas_y + players.info[i].y, players.info[i].w, players.info[i].h );
	    	
	    --players.info[i].thoigian;
	    ++players.info[i].load;
	    
		}
		if(players.info[i].thoigian <=-1) {
		    	players.info.splice(i, 1);
		}
		
		}
		
		
		
		}
}
} 



mapit();
/* IT2004 */
		
		
		tick++;
		
		
	}
	
		function centerMap()
	{
		var MyX = userEvent.mapPosition.X * 16;
		var MyY = userEvent.mapPosition.Y * 16;

		var winSize = new Object;
		winSize.Width = cvsWidth;
		winSize.Height = cvsHeight;
		
		var xTmp = Math.max(MyX, cvsWidth / 2);
		var yTmp = Math.max(MyY, cvsHeight / 2);
		xTmp = Math.min(xTmp, mapWidth - winSize.Width / 2);
		yTmp = Math.min(yTmp, mapHeight - winSize.Height / 2);
			
		var actualPosition = new Object;
		actualPosition.X = xTmp;
		actualPosition.Y = yTmp;		   
				   
		var centerOfView = new Object;
		centerOfView.X = cvsWidth / 2;
		centerOfView.Y = cvsHeight / 2;			   
				   
		var viewPoint = new Object;
		viewPoint.X = centerOfView.X - actualPosition.X;
		viewPoint.Y = centerOfView.Y - actualPosition.Y;	
		
		if( userEvent.direction == 0 ) {
			userStepY = userEvent.stepPart;
		} else if( userEvent.direction == 1 ) {
			userStepY = -userEvent.stepPart;
		} else if( userEvent.direction == 2 ) {
			userStepX = userEvent.stepPart;
		} else if( userEvent.direction == 3 ) {
			userStepX = -userEvent.stepPart;
		}  

		//TODO: Check mapSize Worked
		if( MyX-userStepX > mapWidth - cvsWidth/2) {
			userStepX = 0;
		}
		if( MyX-userStepX < cvsWidth/2 ) {
			userStepX = 0;
		}

		if( MyY-userStepY > mapHeight - cvsHeight/2 ) {
			userStepY = 0;
		}
		if( MyY-userStepY < cvsHeight/2 ) {
			userStepY = 0;
		}

		var additionalDown = -cvsHeight-mapHeight/8;
		mapLeft = viewPoint.X + userStepX;
		mapTop = (viewPoint.Y + userStepY) * -1 + additionalDown;
		

		//User position should update as if it was an event, theirfore it should not be done in this function but rather in the gameEvent Class.
	}
	
	
	
	//###########################################################
	//### RENDERING FUNCTIONS ##############
	//###########################################################
	
	//drawShadowText(context,text,postionX,positionY)
	function drawShadowText(ctx,text,posX,posY,color) {
	
			ctx.fillStyle = 'black';
			ctx.fillText(text, posX+1, posY-1);
			ctx.fillText(text, posX-1, posY-1);
			ctx.fillText(text, posX+1, posY+1);
			ctx.fillText(text, posX-1, posY+1);
			if(!color)
				color =  'white';
			
			ctx.fillStyle = color;
			ctx.fillText(text, posX, posY);
	
	}
	
	//###########################################################
	//### AJAX FUNCTIONS ##############
	//###########################################################
	var requests = [];
	function requestObject() {
		var xmlHttpReq = false;
		
		// Mozilla/Safari
		if (window.XMLHttpRequest) {
			xmlHttpReq = new XMLHttpRequest();
		}
		// IE
		else if (window.ActiveXObject) {
			xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
		}
	
		self.xmlHttpReq = xmlHttpReq;	
		requests[requests.length] = xmlHttpReq;
		return xmlHttpReq;
	}
	function requestUtilityObject() {
		var xmlHttpReq = false;
		
		// Mozilla/Safari
		if (window.XMLHttpRequest) {
			xmlHttpReq = new XMLHttpRequest();
		}
		// IE
		else if (window.ActiveXObject) {
			xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
		}

		requests[requests.length] = xmlHttpReq;
		return xmlHttpReq;
	}
	
	function loadMapData() {
		if(userID >=1) {
		wipeWildMonsterBox();
		var xmlHttpReq = requestObject();
		self.xmlHttpReq.open("GET", "sql/load/maps/code/" + mapCode + ".xml", true);
		self.xmlHttpReq.onreadystatechange = loadMapDataCallback;
		self.xmlHttpReq.send();
		}
	}
	
	function loadMapDataCallback() {
		if (self.xmlHttpReq.readyState == 4) {
			if (self.xmlHttpReq.responseXML) {
				var resultsNode = self.xmlHttpReq.responseXML.childNodes[1];
				if (!resultsNode) {
					resultsNode = self.xmlHttpReq.responseXML.childNodes[0];
				}
	
				if (resultsNode == null) {
					loadMapData();
					return;
				}
				
				mapData = resultsNode;
				bMapDataLoaded = true;
				
				currentMap.load(mapData);
				
				if( loadAction != "" ) {
					if( loadAction.substr(0,4) == "wrap" ) {
						var direction = loadAction.substr(5,1);
						if( direction == 0 ) {
							userEvent.mapPosition.Y = Math.floor(mapHeight/16)-3;
						} else if( direction == 1 ) {
							userEvent.mapPosition.Y = 0;
						} else if( direction == 2 ) {
							userEvent.mapPosition.X = Math.floor(mapWidth/16)-3;
						} else if( direction == 3 ) {
							userEvent.mapPosition.X = 0;
						}  
					}
				}
				
				loadMapEvents();
			}
		}
	}
	
	
	function loadMapEvents() {

if(userID <=0) {
    return false;
}

	for(var i=0;i<data_map.length;i++) {
	    if(data_map[i].name == mapCode) {
	        loadMapEventsCallback(data_map[i]);
	        return false;
	    }
	}
		loadMapEventsCallback('Lỗi');
	}
	
	var gocgame = '';
	function loadMapEventsCallback(av) {
		gocgame =av;
				mapEvents = av;
game.gym.time=0;
				
				mapName = mapEvents.name; 
								ten = t(mapEvents.ten); 
				hieuung = mapEvents.hieuung; 
				thoitiet = mapEvents.thoitiet; 

				mapID = mapEvents.id; 
				battlescreen = mapEvents.type;
				//Load the map's events
				currentMap.loadEvents(mapEvents);

				currentMap.mapMusic = mapEvents.music; 
				friendsList =mapEvents.friendsList;
				if( currentMap.mapMusic != "" && currentMap.mapMusic != prevPlaying ) {
					playMusic(currentMap.mapMusic);
				}
				
				
				if( currentMap.mapMusic != "" ) {
					playMusic(currentMap.mapMusic);
				}
				
				
				bMapEventsLoaded = true;
			
		
	}
	
	
	function firstChildNodeNamed(name, node) {
		for (var i = 0; i < node.childNodes.length; i++) {
			if (node.childNodes[i].nodeName == name)
				return node.childNodes[i];
		}
		return null;
	}
	
	function nodeValue(node) {
		var str = node.nodeValue;
		if (str == null)
			if (node.childNodes.length > 0) 
				str = node.childNodes[0].nodeValue;
				
		return str;
	}
	
	function getDataOfImmediateChild(parentNode)
	{
		var val = "";
	    for (n=0; n < parentNode.childNodes.length; n++)
	    {
			val = val +  nodeValue(parentNode.childNodes[n]);
	    }
		return val;
	}

var loadchat = 0;




	
	$(document).ready(function() {
	    ///canvas ducnghia
	  var ducnghia_canvas_cao = $(window).height();
	  
	 ducnghia_canvas_cao = ducnghia_canvas_cao;
	  				$("#mws-explore-area").css("height",ducnghia_canvas_cao+"px");
    
    if(ducnghia_canvas_cao>=1024){
        
    }
    
    //// rộng - ducnghia
      var ducnghia_cavas_rong = $(window).width();
	  
	  if(ducnghia_cavas_rong >=609) {
	      ducnghia_cavas_rong = 609;
	  }
	  
	  				$(".container").css("width",ducnghia_cavas_rong+"px");
	  				
    	  				
var ducnghiait2000 = ducnghia_cavas_rong/2;
    	  				$("#keyUp").css("top",(ducnghia_canvas_cao-135)+"px");

    	  				 $("#keyUp").css("left",(ducnghiait2000-115)+"px");
    	  				$("#keyLeft").css("top",(ducnghia_canvas_cao-70)+"px");
    	  				$("#keyDown").css("top",(ducnghia_canvas_cao-70)+"px");
    	  				$("#keyRight").css("top",(ducnghia_canvas_cao-70)+"px");
    	  				 $("#keyDown").css("left",(ducnghiait2000-115)+"px");

    	  				$("#keyRight").css("left",(ducnghiait2000-50)+"px");
    	  

    	  				$("#keyA").css("top",(ducnghia_canvas_cao-70)+"px");
    	  				$("#keyA").css("left",(ducnghiait2000+70)+"px");
    	 
    	 $("#A").css("top",(ducnghia_canvas_cao-150)+"px");
    	  				$("#A").css("left",(ducnghiait2000+70)+"px");
    	$("#Up").css("top",(ducnghia_canvas_cao-155)+"px");
    	  				$("#Left").css("top",(ducnghia_canvas_cao-100)+"px");
    	  				$("#Down").css("top",(ducnghia_canvas_cao-100)+"px");
    	  				$("#Right").css("top",(ducnghia_canvas_cao-100)+"px");	 
    	 
    	 
    	


    ///done
	  
				
				///ducnghiagame	
		curMonImage = document.getElementById("curMonImage");
		curOppImage = document.getElementById("curOppImage");
	
		var c=document.getElementById("cvsGame");
		/////ducnghia////
		
		///done
		ctx = c.getContext("2d");
		
		ctx.canvas.width = $("#mws-explore-area").innerWidth();
        ctx.canvas.height = $("#mws-explore-area").innerHeight(); 
		
		cvsWidth = Math.floor(ctx.canvas.width/16+1)*16;
		cvsHeight = Math.floor(ctx.canvas.height/16+1)*16;
		
		if( cvsWidth > 1024 ) {
		    cvsWidth = 1024;
		}
		
		loadchargame();			//Instant / Async
		loadCharacterSets();	//Async
		loadImages();
		loadMapData();			//Async
			//CALLS: loadMapEvents(); UPON COMPLETION.		//Async
		
	userEvent = new gameEvent();
		userEvent.initAsPlayer(Point(userX,userY));
		currentMap = gameMap();
		
		//KEY DOWN
		$(document).bind('keydown', 'up', function (evt){keyState.up = true; return false;  } );
		$(document).bind('keydown', 'down', function (evt){ keyState.down = true; return false; });
		$(document).bind('keydown', 'left', function (evt){ keyState.left = true; return false; });
		$(document).bind('keydown', 'right', function (evt){ keyState.right = true; return false; });
	$(document).bind('keydown', 'Enter', function (evt){ if( camdi !=1 ) {keyState.btn1 = true;} return true; });
		$(document).bind('keydown', 'x', function (evt){ if( camdi !=1 ) {keyState.btn1 = true;}  return true; });
		$(document).bind('keydown', 'z', function (evt){ if( camdi !=1 ) {keyState.btn2 = true;} return true; });
		$(document).bind('keydown', 'c', function (evt){ if( camdi !=1 ) {keyState.btn3 = true;} return true; });
		

		$(document).bind('keydown', 'w', function (evt){ if( camdi !=1 ) {keyState.up = true;} return true; } );
		$(document).bind('keydown', 's', function (evt){ if( camdi !=1 ) {keyState.down = true;} return true; });
		$(document).bind('keydown', 'a', function (evt){ if( camdi !=1 ) {keyState.left = true;} return true; });
		$(document).bind('keydown', 'd', function (evt){ if( camdi !=1 ) {keyState.right = true;} return true; });

		$(document).bind('keydown', '1', function (evt){ captchaKeypress[0] = false; return true; });
		$(document).bind('keydown', '2', function (evt){ captchaKeypress[1] = false; return true; });
		$(document).bind('keydown', '3', function (evt){ captchaKeypress[2] = false; return true; });
		$(document).bind('keydown', '4', function (evt){ captchaKeypress[3] = false; return true; });
		$(document).bind('keydown', '5', function (evt){ captchaKeypress[4] = false; return true; });
		$(document).bind('keydown', '6', function (evt){ captchaKeypress[5] = false; return true; });
		
	

		//KEY UP/RELEASE
		$(document).bind('keyup', 'up', function (evt){ keyState.up = false; return false; } );
		$(document).bind('keyup', 'down', function (evt){ keyState.down = false; return false; });
		$(document).bind('keyup', 'left', function (evt){ keyState.left = false; return false; });
		$(document).bind('keyup', 'right', function (evt){ keyState.right = false; return false; });
			$(document).bind('keyup', 'Enter', function (evt){  if( camdi !=1 ) {keyState.btn1 = false;} return true; });
		$(document).bind('keyup', 'x', function (evt){  if( camdi !=1 ) {keyState.btn1 = false;}  return true; });
		$(document).bind('keyup', 'z', function (evt){  if( camdi !=1 ) {keyState.btn2 = false;} return true; });
		$(document).bind('keyup', 'c', function (evt){  if( camdi !=1 ) {keyState.btn3 = false;} return true; });
		
		$(document).bind('keyup', 'w', function (evt){  if( camdi !=1 ) {keyState.up = false;} return true; } );
		$(document).bind('keyup', 's', function (evt){  if( camdi !=1 ) {keyState.down = false;} return true; });
		$(document).bind('keyup', 'a', function (evt){  if( camdi !=1 ) {keyState.left = false;} return true; });
		$(document).bind('keyup', 'd', function (evt){  if( camdi !=1 ) {keyState.right = false;} return true; });
		
		
		
		
		
		
		$("#cvsGame").mousedown(function(e) {
  			if (!e) var e = window.event;
  			canvasMouseDown(e);
		});
		$("#cvsGame").mouseup(function(e) {
  			if (!e) var e = window.event;
  			canvasMouseUp(e);
		});
		$("#cvsGame").mousemove(function(e) {
  			if (!e) var e = window.event;
  			canvasMouseMove(e);
		});
		
	
		
		if( bIsIPhone || bIsIPad || bIsAndroid ) {
			rebindClicks();
		}
		
		//
		gameInterval = setInterval(function() {
		  update();
		  draw();
		}, 100);
		
		reszeWindow();
	});
	
	var timeoutInterval = null;
	var gameInterval = null;
	
	

	
	function preventClickEvent(event)  {
		event.preventDefault();
	}



	
	function loadMap(newMapCode, arrivalMethod, arrivalDirection) {
		mapLoadedCount = 0;
		bMapEventsLoaded = false;
		bMapDataLoaded = false;
		bLoading = true;
		
		
		clearInterval(gameInterval);
		gameInterval = setInterval(function() {
		  update();
		  draw();
		}, 500);
		

		mapCode = newMapCode;
		loadMapData();
		
		currentMap = gameMap();
		mapWidth = mapAbove.width;
		mapHeight = mapAbove.height;
		

		mapAbove = new Image();
		mapBase = new Image();
		mapAbove.onload = loadedMapImage;
		mapBase.onload = loadedMapImage;
		mapAbove.src='sql/load/maps/tren/' +mapCode+ '.png';
		mapBase.src='sql/load/maps/duoi/' +mapCode+ '.png';
		
		if( arrivalDirection  != null ) {
			loadAction = "wrap:" + arrivalDirection;
		} else {
			loadAction = "";
		}
		
		mmoUsers = new Array();
	}
	

function dulieumap(newMapCode, ducnghiamap) {
		mapLoadedCount = 0;
		bMapEventsLoaded = false;
		bMapDataLoaded = false;
		bLoading = true;
		
		
		clearInterval(gameInterval);
		gameInterval = setInterval(function() {
		  update();
		  draw();
		}, 500);
		

		mapCode = newMapCode;
		loadMapData();
		
		currentMap = gameMap();
		mapWidth = mapAbove.width;
		mapHeight = mapAbove.height;
		

		mapAbove = new Image();
		mapBase = new Image();
		mapAbove.onload = loadedMapImage;
		mapBase.onload = loadedMapImage;
		if(!ducnghiamap) {
		mapAbove.src='sql/load/maps/tren/' +mapCode+ '.png';
		mapBase.src='sql/load/maps/duoi/' +mapCode+ '.png';
		
		} else {
	mapAbove.src='sql/load/maps/tren/' +ducnghiamap+ '.png';
		mapBase.src='sql/load/maps/duoi/' +ducnghiamap+ '.png';		    
		}
		
		mmoUsers = new Array();
	}	
	
	
	
	$(window).resize(function() {
		if( ctx == null )
			return;
		
		reszeWindow();
	});
	
	
	function reszeWindow() {
		
		
		var heightPotential = $( window ).height();
		var usableHeight = heightPotential-175;
			var ducnghiarong = $( window ).width();
		var rong = ducnghiarong-175;
		
			var centerXx = cvsWidth/2;
		var centerYx = cvsHeight/2;
	
		
		if( $(".adDiv").length > 0 ) {
			usableHeight-=$(".adDiv").innerHeight();
		}



		
		
		if( $("#mws-explore-area").innerWidth() > 502 ) {
			usableHeight-=19;
		}
						$("#listonline").css("left",(centerXx - 180)+"px");

				$("#menu_nho").css("left",(centerXx - 180)+"px");

				////menu canvas game
				if(cvsWidth>=448) {
				    menu_show_canvas = 448;
				    
				} else {
				    menu_show_canvas = cvsWidth-50;
				}
				
					if(cvsWidth>=312) {
				    menu_giaotiep = 321;
				    
				} else {
				    menu_giaotiep = cvsWidth-50;
				}
				
				var tinh_menu = cvsWidth-menu_giaotiep;

				var tinh_x = cvsWidth-menu_show_canvas;
				var tinh_y = cvsHeight/2;
					var tinh_yes = cvsWidth-(cvsWidth-10);
		
		////
		$("#table_game").css("left",(tinh_x/2)-5+"px");

				$("#table_game").css("width",(menu_show_canvas+10)+"px");
		
				
		
		
		///
			
	////game
					

	///consolegame

////menu nhận thưởng
	if(cvsWidth>=428) {
				    menu_thuong = 428;
				    $("#ducnghia_nhanthuong").css("left",((cvsWidth-menu_thuong)/2)+"px");

				} else {
				    menu_thuong = cvsWidth-15;
				    $("#ducnghia_nhanthuong").css("left","5px");
				    $("#nut_nhan").css("left",(menu_thuong/2)-45+"px");

				}
				$("#ducnghia_nhanthuong").css("width",(menu_thuong)+"px");

////song


				$("#ducnghia_data").css("width",(menu_show_canvas-5)+"px");

				$("#ducnghia_menu_out").css("left",(menu_show_canvas-25)+"px");

				$("#ducnghia_menu").css("left",(tinh_x/2)-5+"px");

				$("#ducnghia_menu").css("width",(menu_show_canvas)+"px");
				
				$("#canvas").css("left",(tinh_x/2)-5+"px");
			$("#canvas").css("width",(menu_show_canvas)+"px");
			$("#canvas").css("top","70px");

			$("#canvas_data").css("width",(menu_show_canvas-5)+"px");
				$("#canvas_game").css("left",(menu_show_canvas/2-100)+"px");
				$("#canvas_out").css("left",(menu_show_canvas-25)+"px");
////attack
$("#nghiait_att").css("left",(tinh_yes/2)-3+"px");
$("#infotran").css("left",((cvsWidth-10)/2-100)+"px");

$("#nghiait_att").css("width",(cvsWidth-10)+"px");
$("#nghiait_att").css("top",(cvsHeight/2-220)+"px");

$("#nghiait_att").css("height",(cvsHeight/2+80)+"px");

			///attack
///ducnghia///close
	$("#ducnghia_giaotiep").css("width",(menu_giaotiep)+"px");
				$("#ducnghia_giaotiep").css("left",(tinh_menu/2)-5+"px");
				$("#ducnghia_npc").css("width",(menu_giaotiep-40)+"px");

			$("#ducnghia_giaotiep").css("top",(cvsHeight-290)+"px");
				$("#ducnghia_menu_giaotiep").css("width",(menu_giaotiep-40)+"px");

	
				$("#ducnghia_menu_giaotiep").css("top",(cvsHeight-160)+"px");

				$("#ducnghia_menu_giaotiep").css("left",(tinh_menu/2)+25+"px");	

		$("#mws-explore-encounter").css("top",-(usableHeight-100)+"px");
		$("#mws-explore-requests").css("top",-(usableHeight+30)+"px");


		ctx.canvas.width = $("#mws-explore-area").innerWidth();
        ctx.canvas.height = $("#mws-explore-area").innerHeight();
		
		cvsWidth = Math.floor(ctx.canvas.width/16+1)*16;
		cvsHeight = Math.floor(ctx.canvas.height/16+1)*16;
		
		buffer.width = ctx.canvas.width;
		buffer.height = ctx.canvas.height;
		
		if( cvsWidth > 1024 ) {
		    cvsWidth = 1024;
		}
		///hiệu ứng thời tiết
for (var a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * cvsWidth,
        y: Math.random() * cvsHeight,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 2, /// mưa rơi hay dọc ?
        ys: Math.random() * 10 + 10  ///tốc độ rơi
      })
    }

    for (var b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }		
		
		///ducnghia
		
		repositionMonsters();
		
		
	}
	
	function repositionMonsters() {
		
		cvsWidth = Math.floor(ctx.canvas.width/16+1)*16;
		cvsHeight = Math.floor(ctx.canvas.height/16+1)*16;
		
		var left = $("#cvsGame").offset().left + $("#cvsGame").position().left;
		var top = $("#cvsGame").offset().top + $("#cvsGame").position().top;
		
		var centerX = cvsWidth/2;
		var centerY = cvsHeight/2;
		
		//if( top > 158 ) {
			//centerY += top-158;
		//}
		
		curMonImage.style.left = (centerX-120-curMonImage.width/2) + 'px';
		curMonImage.style.top = (centerY-curMonImage.height/2+70) + 'px';
		curOppImage.style.left = (centerX+120-curOppImage.width/2) + 'px';
		curOppImage.style.top = (centerY-curOppImage.height/2) + 'px';
		
	}
	
	function loadedMapImage() {
		mapLoadedCount++;
	}
	
	function resourceByKey(key) {
		for(var i=0;i<screenResources.length;i++) {
			if( screenResources[i].key == key)
				return screenResources[i].img;
		}
		return null;
	}
	function musicResourceByKey(key) {
		for(var i=0;i<musicResources.length;i++) {
			if( musicResources[i].key == key)
				return musicResources[i];
		}
		return null;
	}
	function effectResourceByKey(key) {
		for(var i=0;i<effectResources.length;i++) {
			if( effectResources[i].key == key)
				return effectResources[i].audio;
		}
		return null;
	}
	
	function loadedMusicResource() {
		MusicResourceLoadedCount++;
	}
	function loadedEffectResource() {
		EffectResourceLoadedCount++;
	}
	function loadedResource() {
		ImageResourceLoadedCount++;
		for(var k=0;k<screenResources.length;k++) {
			if( this.src.indexOf(screenResources[k].url) > -1  ) {
				screenResources[k].width = this.width;
				screenResources[k].height = this.height;
			}
		}
	}
	
	
	
	function loadImages() {
	    ///////

		effectResources.push(new ResourceEffect("sql/load/audio/login.wav","login"));

	effectResources.push(new ResourceEffect("sql/load/audio/click.wav","click"));
	
	}
	
	//Loads all NPC and main character sprites into an array
	function loadCharacterSets() {
		//no longer used. All are loaded from explore.php.
	}
	
	

	//Adds a sprite to the charsets array
	
	
	//### SCRIPTING FUNCTIONS ##############

	function triggerEvent( Event, fromCollision)
	{
		if( Event.bEventEnabled ) {
	
			lastTriggeredEventName = Event.name;
			
			//face the user
			if( Event.mapPosition.X > userEvent.mapPosition.X ) {
				scriptAddLine("move event",Event.id + "^Face Left^-5");
			} else if( Event.mapPosition.X < userEvent.mapPosition.X ) {
				scriptAddLine("move event",Event.id + "^Face Right^-5");
			} else if( Event.mapPosition.Y > userEvent.mapPosition.Y+2 ) {
				scriptAddLine("move event",Event.id + "^Face Up^1");
			} else if( Event.mapPosition.Y < userEvent.mapPosition.Y+2 ) {
				scriptAddLine("move event",Event.id + "^Face Down^1");
			} 
			
			for(var i=0;i<Event.eventData.length;i++) {
				activeScript.push(Event.eventData[i]);
			}
			if( activeScript.length > 0 ) {
				scriptProgress();
				return true;
			} else {
				return false;
			}
	
		}
		return false;
	}
	
	//### KEY PRESS / MOUSE FUNCTIONS ##############
	
	function getPosition(e) {
		e = e || window.event;
		var cursor = {x:0, y:0};
		if (e.pageX || e.pageY) {
			cursor.x = e.pageX;
			cursor.y = e.pageY;
		} 
		else {
			var de = document.documentElement;
			var b = document.body;
			cursor.x = e.clientX + 
				(de.scrollLeft || b.scrollLeft) - (de.clientLeft || 0);
			cursor.y = e.clientY + 
				(de.scrollTop || b.scrollTop) - (de.clientTop || 0);
		}
		return cursor;
	}
	
	function hitTest(x,y,boxX1,boxY1,boxX2,boxY2) {
		if( x >= boxX1 && x <= boxX2 ) {
			if( y >= boxY1 && y <= boxY2 ) {
				return true;
			}
		}
		return false;
	}
	
	function checkMousePosition(posX,posY) {
		var boxWidth = 160;
		var boxHeight = 40;
		var centerX = cvsWidth/2;
		var centerY = cvsHeight/2;
		
		var boxX = centerX+46;
		var boxY = centerY+110-50;
		if( hitTest(posX,posY,boxX-boxWidth/2,boxY-boxHeight/2,boxX+boxWidth/2,boxY+boxHeight/2) ) {
			return "atk1";
		}
		
		boxX = centerX+174;
		boxY = centerY+110-50;
		if( hitTest(posX,posY,boxX-boxWidth/2,boxY-boxHeight/2,boxX+boxWidth/2,boxY+boxHeight/2) ) {
			return "atk2";
		}
		
		boxX = centerX+46;
		boxY = centerY+145-50;
		if( hitTest(posX,posY,boxX-boxWidth/2,boxY-boxHeight/2,boxX+boxWidth/2,boxY+boxHeight/2) ) {
			return "atk3";
		}
		
		boxX = centerX+174;
		boxY = centerY+145-50;
		if( hitTest(posX,posY,boxX-boxWidth/2,boxY-boxHeight/2,boxX+boxWidth/2,boxY+boxHeight/2) ) {
			return "atk4";
		}

		boxWidth = 100;
		boxX = centerX-232+45;
		boxY = centerY+125-40;
		if( hitTest(posX,posY,boxX-boxWidth/2,boxY-boxHeight/2,boxX+boxWidth/2,boxY+boxHeight/2) ) {
			return "run";
		}
		
		boxX = centerX-138+45;
		boxY = centerY+125-40;
		if( hitTest(posX,posY,boxX-boxWidth/2,boxY-boxHeight/2,boxX+boxWidth/2,boxY+boxHeight/2) ) {
			return "item";
		}
		
		
		boxWidth = 50;
		boxHeight = 50;
		boxX = centerX-220;
		boxY = centerY-111-80;
		if( hitTest(posX,posY,boxX-boxWidth/2,boxY-boxHeight/2,boxX+boxWidth/2,boxY+boxHeight/2) ) {
			return "swap";
		}
		
		if( battleSelectedMenu > 6 && battleSelectedMenu <= 12 ) {
			for(var k=0;k< teamMonsters.length;k++) {
				var pos = k+1;
			
				var x = centerX;
				var y = centerY-75-60;
				if( pos < 4 ) {
					x = x - 110; 
					y = y + pos * 30;
				} else {
					x = x + 110; 
					y = y + (pos-3) * 30;
				}
				
				boxWidth = 200;
				boxHeight = 40;
				boxX = x;
				boxY = y;
				if( hitTest(posX,posY,boxX-boxWidth/2,boxY-boxHeight/2,boxX+boxWidth/2,boxY+boxHeight/2) ) {
					return "swap" + pos;
				}
			}
		} if( battleSelectedMenu == 13 ) {
			
			for(var k=0;k< battleItems.length;k++) {
				var pos = k+1;
			
				var x = centerX;
				var y = centerY-75-60;
				if( pos < 5 ) {
					x = x - 110; 
					y = y + pos * 30;
				} else {
					x = x + 110; 
					y = y + (pos-4) * 30;
				}
			
				boxWidth = 200;
				boxHeight = 40;
				boxX = x;
				boxY = y;
				if( hitTest(posX,posY,boxX-boxWidth/2,boxY-boxHeight/2,boxX+boxWidth/2,boxY+boxHeight/2) ) {
					return "item" + pos;
				}
			}
			
			
			
		}
		
		return "";
	}
	
	function canvasMouseDown(e) {
		var pos = getPosition(e);
		var centerX = cvsWidth/2;
		var centerY = cvsHeight/2;
		bMouseDown = true;
		
		var left = $("#cvsGame").offset().left + $("#cvsGame").position().left;
		var top = $("#cvsGame").offset().top + $("#cvsGame").position().top;
		
		var posX = pos.x-left;
		var posY = pos.y-top;





if(posX >=12 && posX <=50) {
if(posY >=80 && posY <=119) {

if(updatekinang(1) !==null) {
   game_chorse(1); 
}
}}

if(posX >=51 && posX <=90) {
if(posY >=80 && posY <=119) {

if(updatekinang(2) !==null) {
   game_chorse(2); 
}
}}

if(posX >=91 && posX <=128) {
if(posY >=80 && posY <=119) {

if(updatekinang(3) !==null) {
   game_chorse(3); 
}
}}

if(posX >=129 && posX <=167) {
if(posY >=80 && posY <=119) {

if(updatekinang(4) !==null) {
   game_chorse(4); 
}
}}

if(posX >=169 && posX <=205) {
if(posY >=80 && posY <=119) {

if(updatekinang(5) !==null) {
   game_chorse(5); 
}
}}




if(posX >=3 && posX <=80) {
if(posY >=60 && posY <=75) {
     doichat(0);
}}

if(posX >=0 && posX <=28) {
if(posY >=121 && posY <=143) {
    ///camxuc
    
        datacanvas="camxuc";
    
}}

if(datacanvas=="camxuc") {
    if(posX >=0 && posX <=32 && posY >=157 && posY <=178) {
    camxuc =  0;datacanvas = '';timecamxuc =0;ketnoi();
    }
    
  if(posX >=33 && posX <=32*2 && posY >=157 && posY <=178) {
camxuc =  2;datacanvas = '';timecamxuc =0;ketnoi();
    }  
    
if(posX >=32*2 && posX <=32*3 && posY >=157 && posY <=178) {
camxuc =  4;timecamxuc =0;datacanvas = '';ketnoi();
    }      
    
if(posX >=32*3 && posX <=32*4 && posY >=157 && posY <=178) {
camxuc =  6; datacanvas = '';timecamxuc =0;ketnoi();
    } 
    ///hang2
  if(posX >=0 && posX <=32 && posY >=157+35 && posY <=178+35) {
    camxuc =  8;datacanvas = '';timecamxuc =0;ketnoi();
    }
    
  if(posX >=33 && posX <=32*2 && posY >=157+35 && posY <=178+35) {
camxuc =  10;datacanvas = '';timecamxuc =0;ketnoi();
    }  
    
if(posX >=32*2 && posX <=32*3 && posY >=157+35 && posY <=178+35) {
camxuc =  12;timecamxuc =0;datacanvas = '';ketnoi();
    }      
    
if(posX >=32*3 && posX <=32*4 && posY >=157+35 && posY <=178+35) {
camxuc =  14; datacanvas = '';timecamxuc =0;ketnoi();
    }        
    
    ///d
    
     ///hang2
  if(posX >=0 && posX <=32 && posY >=157+35*2 && posY <=178+35*2) {
    camxuc =  16;datacanvas = '';timecamxuc =0;ketnoi();
    }
    
  if(posX >=33 && posX <=32*2 && posY >=157+35*2 && posY <=178+35*2) {
camxuc =  18;datacanvas = '';timecamxuc =0;ketnoi();
    }  
    
if(posX >=32*2 && posX <=32*3 && posY >=157+35*2 && posY <=178+35*2) {
camxuc =  20;timecamxuc =0;datacanvas = '';ketnoi();
    }      
    
if(posX >=32*3 && posX <=32*4 && posY >=157+35*2 && posY <=178+35*2) {
camxuc =  22; datacanvas = '';timecamxuc =0;ketnoi();
    }        
    
    ///d
} else {
    if(posX >=3 && posX <=45) {
if(posY >=156 && posY <=190) {
game_hanhtrang(2);
}}

if(posX >=1 && posX <=30) {
if(posY >=201 && posY <=240) {
game_chatmap();

    
}}

}

 


		
		
				var ex = -mapLeft + posX + 0 +13-20;
ey = (-currentMap.mapHeight/2-mapTop - posY-300)*-1-35;
clickx = tron(ex/16);
clicky = tron(ey/16);
if(userID ==1 && admin==1) {
userEvent.mapPosition.Y=+clicky -1+1;
userEvent.mapPosition.X=+clickx-1+1;

}
userEvent.mapPosition.newY=+clicky -1+1;
userEvent.mapPosition.newX=+clickx-1+1;
		
			for(var i=0;i< mmoUsers.length;i++) {
				if( pos.x-left > mmoUsers[i].drawPosX && pos.x-left < mmoUsers[i].drawPosX +32 ) {
					if( pos.y-top > mmoUsers[i].drawPosY && pos.y-top < mmoUsers[i].drawPosY +32 ) {
                        my.click.id = mmoUsers[i].id;
						my.click.type = 'users';
						my.click.buoc = 0;
						
						
					}
				}
			}
			
			for(var i=0;i< events.length;i++) {
			
				if( pos.x-left > events[i].X && pos.x-left < events[i].X +32 ) {
					if( pos.y-top > events[i].Y && pos.y-top < events[i].Y +32 ) {
						my.click.id = events[i].id;
						my.click.type = 'pokemon';
						my.click.buoc = 0;
					}
				}
			}
		
		
		return false;
	}
	
	
	function canvasMouseUp(e) {
		var pos = getPosition(e);
		var centerX = cvsWidth/2;
		var centerY = cvsHeight/2;
		bMouseDown = false;
		

		
		return false;
	}
	
	
	function canvasMouseMove(e) {
		var pos = getPosition(e);
		var centerX = cvsWidth/2;
		var centerY = cvsHeight/2;
		var left = $("#cvsGame").offset().left + $("#cvsGame").position().left;
		var top = $("#cvsGame").offset().top + $("#cvsGame").position().top;
		
		var posX = pos.x-left;
		var posY = pos.y-top;
		
			var ex = -mapLeft + posX + 0 +13-20;
ey = (-currentMap.mapHeight/2-mapTop - posY-300)*-1-35;
clickx = tron(ex/16);
clicky = tron(ey/16);
clickpop = ' ('+posX+','+posY+') ';


		if( bInBattle ) {
			if( battleScript.length == 0 ) {
		
				var activeMenu = checkMousePosition(posX,posY);
				if( activeMenu == "atk1" && parseInt(battleStage) != 1) {
					battleSelectedMenu = 2;
				} else if( activeMenu == "atk2" && parseInt(battleStage) != 1) {
					battleSelectedMenu = 3;
				} else if( activeMenu == "atk3" && parseInt(battleStage) != 1) {
					battleSelectedMenu = 4;
				} else if( activeMenu == "atk4" && parseInt(battleStage) != 1) {
					battleSelectedMenu = 5;
				} else if( activeMenu == "run" && parseInt(battleStage) != 1) {
					battleSelectedMenu = 0;
				} else if( activeMenu == "item" && battleSelectedMenu != 13 && parseInt(battleStage) != 1) {
					battleSelectedMenu = 13;
				} else if( activeMenu == "swap"  && parseInt(battleStage) != 1 ) {
					battleSelectedMenu = 7;
				} else if( activeMenu.indexOf('swap') > -1 && activeMenu != "swap" ) {
					var pos = parseInt(activeMenu.replace(/swap/gi,''));
					battleSelectedMenu = pos+6;
				
				} else if( activeMenu.indexOf('item') > -1  && battleSelectedMenu == 13   && parseInt(battleStage) != 1 ) {
					var pos = parseInt(activeMenu.replace(/item/gi,''));
					battleItemSelectedMenu = pos-1;
				}
				
				if( activeMenu != "" )
					battleUpdatedMenu();
					
			
			}
		}

		
	}
	
	function dong_mmo(){
				$("#ducnghia_menu_data").html("");

	}
	
	//### MMO FUNCTIONS ###############
	function displayMMOUser(user) {
	     my.click.id = user.id;
						my.click.type = 'users';
						my.click.buoc = 0;
					

	}
	



	var userCount = "?";
	function serverPing(data) {
		var dataRow = data.split("^");
		userCount = parseInt(dataRow[1]);
	}
	

	
	

	
	var privateMessages = new Array();
	
	function updateChat(data) {
		var dataRow = data.split("^");
		var dataMsg = dataRow[1].split("|");
		var isadmin = dataMsg[0];
		var userids = dataMsg[1];
		var user = dataMsg[2];
		var msg = dataMsg[3];
		var isPM = dataMsg[4];
		var whichChat = parseInt(dataMsg[4]);
		if (whichChat <= 0 || whichChat > 2 || whichChat === undefined)
			whichChat = 1;

		var changeColor = true;
		var title = "A Legend";
		var monid = 0;
		messages.push(new ChatMessage(isadmin,userids,user,msg));
		
		var sender = mmoUserByName(user);
		if( sender != null ) {
			sender.msg = msg;
			sender.msgTick = 0;
		} else {
			if( userids == userID ) {
				userEvent.msg = msg;
				userEvent.msgTick = 0;
			}
		}

		
		if (msg.toLowerCase().indexOf(userName.toLowerCase()) > -1)
		{
			color = "#CE93D8";
			changeColor = false;
		}

	
		
	


		}
		
		
	
	
	
	

	
	//### AUDIO FUNCTIONS ###############
	
	function restoreLastSong() {
		if( musicEnabled == false ) 
			return;
			
		if( prevPlayingSong ) 
			prevPlayingSong.play();
			
		
	}
	
	function playMusicOnce(key) {
		if( musicEnabled == false ) 
			return;
			
		var audio = musicResourceByKey(key);
		if( audio ) {
		
			if( prevPlayingSong )
				prevPlayingSong.pause();
			
			if( playOnceSong )
				playOnceSong.pause();
			
			if( audio.audio == null ) {
				audio.audio = new Audio();
				audio.audio.src = audio.src;
				audio.audio.volume = 1;
				//this.audio.play();
				//this.audio.pause();
			}
			
			audio.audio.loop = false;
			audio.audio.addEventListener('ended', restoreLastSong);
			audio.audio.currentTime = 0;
			audio.audio.play();
			playOnceSong = audio.audio;
		}
	}
	
	function playMusic(key) {
		if( musicEnabled == false ) 
			return;
			
		var audio = musicResourceByKey(key);
		if( audio ) {
		
			if( prevPlayingSong )
				prevPlayingSong.pause();
			
			if( playOnceSong )
				playOnceSong.pause();
			
			if( audio.audio == null ) {
				audio.audio = new Audio();
				audio.audio.src = audio.src;
				audio.audio.volume = 1;
				//this.audio.play();
				//this.audio.pause();
			}
			
			audio.audio.loop = true;
			audio.audio.play();
			prevPlayingSong = audio.audio;
			prevPlaying = key;
		}
	}
	function playSFX(key) {
		if( caidat.hieuung == false ) 
			return;
			
		var audio = effectResourceByKey(key);
		if( audio ) {
			audio.play();
		}
	}
	
	
	//### SUPPORT FUNCTIONS ###############
	
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	
	
// ################################################
// ### MMO USER CLASS ###########################
// ################################################
function mapit() {
}	
	
	

function MMOUser(id,name,trainerimg) {
    this.hp = 0;
	this.id = id;
	this.name = name;
	this.trainerimg = trainerimg;
	this.mapid = 0;
	this.x = 0;
	this.y = 0;
	this.NewX = 0;
	this.NewY = 0;
	this.direction = 0;
	this.step = 0;
	this.inbattle = 0;
 this.giatoc = 0;
 this.viettat = 0;

	this.drawPosX = 0;
	this.drawPosY = 0;
	this.drawStartX = 0;
	this.drawStartY = 0;
	
	this.isRunning = 0;
	
	this.stepPart = 0;
	this.stepAnimation = 0;
	this.offsetX = 0;
	this.offsetY = 0;
	this.stepX = 0;
	this.stepY = 0;
	
    this.moveQueue = new Array();
		
	this.msg = "";
	this.msgTick = 0;
	this.msgexp = 0;
	this.exp = 0;
	this.xu = 0;
	
	this.frameCount = 2;
		this.imgpokemon = null;

	this.updated = false;
	this.follow = '';
  this.camxuc = -1;
  this.timecamxuc = 0;
  this.stepcx2 = 0;
  this.buff = [];
  this.datacamxuc2 = 0;
	this.evaluate = function() {
		
		this.stepX = 0;
		this.stepY = 0;
		if( this.moveQueue.length > 0 ) {
			if( this.moveQueue[0] == "up" ) {
				this.stepY = -this.stepPart;
			} else if( this.moveQueue[0] == "down" ) {
				this.stepY = this.stepPart;
			} else if( this.moveQueue[0] == "left" ) {
				this.stepX = -this.stepPart;
			} else {
				this.stepX = this.stepPart;
			}
		}
		
		this.drawPosX = mapLeft + (this.x * 16)+ this.stepX +13;
		this.drawPosY = -mapTop-currentMap.mapHeight/2 + ((this.y+2) * 16)+ this.stepY +2-130+32;
		
		var additionalDown = currentMap.mapHeight/2-cvsHeight/2;
		this.drawPosY = -mapTop-cvsHeight/2-currentMap.mapHeight/2 + ((this.y+2) * 16) + this.stepY +2+28 + (additionalDown-192);
		
		
		this.updateTextureCoords();	
		
		
		//process move queue - in between movequeue syncs check for position reevaluate
		this.processMoveQueue();
		
		if( this.msg != "" ) {
			this.msgTick++;
			if( this.msgTick > 250 ) {
				this.msg = "";
			}
		}
		
		if( this.exp !=0) {
			this.msgexp++;
			if( this.msgexp > 50 ) {
				this.exp = 0;
				this.xu = 0;
				this.msgexp = 0;
			}
		}
	}
	
	if(this.camxuc>=0) {
	    this.timecamxuc++;
	    if(this.timecamxuc >=150) {
	        this.camxuc =-1;
	        this.timecamxuc = 0;
	    }
	    
	}
	


	this.updatesWithoutMove = 0;
	this.processMoveQueue = function()    // Define Method
	{
		if( currentMap == null ) {
			return false;
		}
		
		if( this.moveQueue.length > 0 ) {
	
			if( this.moveQueue[0].toLowerCase() == "up" ) {
				this.direction = 0;
			} else if( this.moveQueue[0].toLowerCase() == "down" ) {
				this.direction = 1;
			} else if( this.moveQueue[0].toLowerCase() == "left" ) {
				this.direction = 2;
			} else if( this.moveQueue[0].toLowerCase() == "right" ) {
				this.direction = 3;
			}  
	
			if( this.stepPart == 8 || this.stepPart == 0 ) {
				this.stepAnimation++; 
				if( this.stepAnimation > this.frameCount ) 
					this.stepAnimation = 0;
			}

			this.stepPart = this.stepPart + 4;
			
		
	
			if( this.stepPart >= 16 ) {
				this.stepPart = 0;
		
				//update the coordanates at the end of the step.
				if( this.moveQueue[0] == "up" ) {
					this.y = this.y - 1;
				} else if( this.moveQueue[0] == "down" ) {
					this.y = this.y + 1;
				} else if( this.moveQueue[0] == "left" ) {
					this.x = this.x - 1;
				} else {
					this.x = this.x + 1;
				}
		
				this.moveQueue.splice(0,1); 
				
				if( Math.abs(this.NewX - this.x) > 6 || Math.abs(this.NewY - this.y) > 6 ) {
					this.x = this.NewX;
					this.y = this.NewY;
					this.moveQueue.length = 0;
					
			if(getuser(this.id) !== null) {
			players.info.push({
		ten : kinang(35).img,
		rong : kinang(35).rong,
		cao : kinang(35).cao,
		sohinh : kinang(35).sohinh,
		load :0,
		thoigian : kinang(35).sohinh,
		tinh : (kinang(35).rong/kinang(35).sohinh),
		canvas_x : getuser(this.id).drawPosX,
		canvas_y : getuser(this.id).drawPosY
			});			
			}	
				

				}
				
			}
		}
		
		if( this.moveQueue.length == 0 ) {
			//add to moveQueue based on position
				
			if( this.y > this.NewY ) {
				if( currentMap.tileIsWalkable( Point(this.x,this.y-2-1)) ) {
					this.addMoveQueue("up");
					playSFX("chay");
				}
			} else if( this.y < this.NewY ) {
				if( currentMap.tileIsWalkable( Point(this.x,this.y-2+1)) ) {
					this.addMoveQueue("down");
					playSFX("chay");
				}
			} else if( this.x > this.NewX ) {
				if( currentMap.tileIsWalkable( Point(this.x-1,this.y-2)) ) {
					this.addMoveQueue("left");
					playSFX("chay");
				}
			} else if( this.x < this.NewX ) {
				if( currentMap.tileIsWalkable( Point(this.x+1,this.y-2)) ) {
					this.addMoveQueue("right");
					playSFX("chay");
				}
			}
			
			this.updatesWithoutMove++;
			
			if( this.updatesWithoutMove > 10 ) {
				this.x=this.NewX;
				this.y=this.NewY;
				this.updatesWithoutMove = 0;
			}

		} else {
			this.updatesWithoutMove = 0;
		}

	}
	

	
	
	this.addMoveQueue = function(moveDirection)    // Define Method
	{
		this.moveQueue.push(moveDirection.toLowerCase());

	}
	
	this.drawNames = function(ctx)    // Define Method
	{
		if( this.name.indexOf("'s Pet") > -1 ) {
			return;
		}
	
		ctx.font = "bold 11px sans-serif";
		ctx.textAlign = "center";

if(this.exp !=0) {
    	drawShadowText(ctx,""+this.exp+"",  this.drawPosX+12, this.drawPosY+20-this.msgexp,"#00FFFF");  
}
if(this.xu !=0) {
    	drawShadowText(ctx,""+this.xu+"",  this.drawPosX+12, this.drawPosY+35-this.msgexp,"#01DF01");  
}


	if(this.camxuc>=0) {
	if(this.datacamxuc<=10) {
			     this.stepcx = 32;  
			    this.datacamxuc++;
			}
			else
			if(this.datacamxuc>=11 && this.datacamxuc <=20) {
			   			     this.stepcx =0; this.datacamxuc++; 
 
			}
			else {
			     this.stepcx =0; this.datacamxuc=0; 
			}		
	ctx.drawImage(resourceByKey("camxuc"), 32*this.camxuc+this.stepcx, 0, 32, 32,  this.drawPosX-5, this.drawPosY-55, 32, 32 );
		
			} else 
			if(this.co >=1) {
if(this.coload <=0)  this.coload = 1;
else if(this.coload ==1) this.coload = 2;
else  this.coload = 0;  
			   
			 
			 	ctx.drawImage(resourceByKey("co"), 0, co(this.co) + 12*this.coload, 12, 12,  this.drawPosX+5, this.drawPosY-40, 12, 12 );

			    
			}

    if(this.usersload ==0) {
        this.congload =1;
        this.usersload=1;
    } else {
        this.congload=-1;
        this.usersload=0;
    }
	 
			ctx.font = "bold 13px sans-serif";
		ctx.textAlign = "center";
	//người chơi khác
	if( my.click.id == this.id  && my.click.type == "users" && my.click.id !==0 ) {
						ctx.drawImage(resourceByKey("chon"),  this.drawPosX+12, this.drawPosY-35+this.congload);
					}
					if(+this.hp >=1 ) {
			drawShadowText(ctx,""+tron(this.hp)+"",  this.drawPosX+12, this.drawPosY-14,"#B8570D");
}
	
		
			if( this.msg != "") {
			drawShadowText(ctx,'"'+this.msg+'"',  this.drawPosX+12, this.drawPosY-1,"#FFFFFF");
		} else {
		   drawShadowText(ctx,this.name,  this.drawPosX+12, this.drawPosY-1);

		}
		
	
	//////////////hiệu ứng ////////////////////
	for(var k=0;k<this.buff.length;k++) {
		////eff choáng
		if(this.buff[k].buff =="choang"){
	      if(+this.buff[k].load <=1) {
		ctx.drawImage(resourceByKey("choang1"),0,0,50,22,  this.drawPosX-10, this.drawPosY-30,50,22);
} else {
   		ctx.drawImage(resourceByKey("choang2"),0,0,36,24,  this.drawPosX-10, this.drawPosY-30,36,24);
}
if(+this.buff[k].load >=2) {
    this.buff[k].load=0;
}

this.buff[k].load++;
}
////eff đóng băng

if(this.buff[k].buff =="dongbang"){
	     if(this.buff[k].time -date() >=3000 ) {
   		ctx.drawImage(resourceByKey("dongbang"),0,0,52,34,  this.drawPosX-5, this.drawPosY+10,36,24);
} else if(this.buff[k].time -date() >=2000 ) {
     		ctx.drawImage(resourceByKey("dongbang2"),0,0,54,36,  this.drawPosX-5, this.drawPosY+10,36,24);
}
else if(this.buff[k].time -date() >=1000 ) {
     		ctx.drawImage(resourceByKey("dongbang3"),0,0,62,40,  this.drawPosX-5, this.drawPosY+10,36,24);
} else {
     		ctx.drawImage(resourceByKey("dongbang4"),0,0,50,28,  this.drawPosX-5, this.drawPosY+10,36,24);
    
}

if(+this.buff[k].tacdung >=1 && +this.buff[k].timetacdung <= date()) {
    

     
if(userID == this.buff[k].uid && +getusers(this.id).hp >0) {
    this.truhp = +this.hp/100*+this.buff[k].tacdung;
this.hp = +this.hp - +this.truhp;
this.buff[k].timetacdung = date() + 1000;
	     ws.send("damepvp:"+this.id+"^"+userID+"^"+this.truhp+"");

    }
}

}

////bỏng


if(this.buff[k].buff =="bong"){
	    
if(+this.buff[k].tacdung >=1 && +this.buff[k].timetacdung <= date()) {
    	ctx.drawImage(resourceByKey("bong"),0,0,32,24,  this.drawPosX, this.drawPosY+10,32,22);
     
if(userID == this.buff[k].uid && +getusers(this.id).hp >0) {
this.truhp = +this.hp/100*+this.buff[k].tacdung;
this.hp = +this.hp - +this.truhp;
this.buff[k].timetacdung = date() + 1000;
     ws.send("damepvp:"+this.id+"^"+userID+"^"+this.truhp+"");


}
}

}

if(this.buff[k].buff =="troi"){
	      if(+this.buff[k].load <=1) {
		ctx.drawImage(resourceByKey("troi"),0,0,36,40,  this.drawPosX-10, this.drawPosY+10,32,22);
} else
if(+this.buff[k].load ==2) {
		ctx.drawImage(resourceByKey("troi2"),0,0,40,40,  this.drawPosX-10, this.drawPosY+10,32,22);
} else
if(+this.buff[k].load ==3) {
		ctx.drawImage(resourceByKey("troi3"),0,0,44,44,  this.drawPosX-10, this.drawPosY+10,32,22);
} else
{
		ctx.drawImage(resourceByKey("troi4"),0,0,34,38,  this.drawPosX-10, this.drawPosY+10,32,22);
}

if(+this.buff[k].load >=4) {
    this.buff[k].load=0;
}

this.buff[k].load++;
}



if(this.buff[k].buff =="hoihp"){

	      if(+this.buff[k].load <=1) {
		ctx.drawImage(resourceByKey("hp1"),0,0,50,48,  this.drawPosX-10, this.drawPosY,40,38);
}
else
 if(+this.buff[k].load ==2) {
		ctx.drawImage(resourceByKey("hp2"),0,0,51,45,  this.drawPosX-10, this.drawPosY,40,38);
}
else
if(+this.buff[k].load ==3) {
		ctx.drawImage(resourceByKey("hp3"),0,0,50,54,  this.drawPosX-10, this.drawPosY,40,38);
}
else {
		ctx.drawImage(resourceByKey("hp4"),0,0,55,59,  this.drawPosX-10, this.drawPosY,40,38);
}
if(+this.buff[k].load >=4) {
    this.buff[k].load=0;
}

this.buff[k].load++;

}

if(this.buff[k].buff =="hs"){

	      if(+this.buff[k].load <=1) {
		ctx.drawImage(resourceByKey("hs1"),0,0,40,41,  this.drawPosX-10, this.drawPosY,40,38);
}
else
 if(+this.buff[k].load ==2) {
		ctx.drawImage(resourceByKey("hs2"),0,0,49,48,  this.drawPosX-10, this.drawPosY,40,38);
}
else
if(+this.buff[k].load ==3) {
		ctx.drawImage(resourceByKey("hs3"),0,0,48,46,  this.drawPosX-10, this.drawPosY,40,38);
}
else {
		ctx.drawImage(resourceByKey("hs4"),0,0,50,45,  this.drawPosX-10, this.drawPosY,40,38);
}
if(+this.buff[k].load >=4) {
    this.buff[k].load=0;
}



this.buff[k].load++;

}


///delete from eff no time 
if(+this.buff[k].time <= date()) {
this.buff.splice(k, 1);
}
///ducnghia
		
		
			}
	  
	
	////////////PokeMon Biến hình////////////////////////
	
	}



	///
	///
	
		this.imgnv = null;
  this.anhnew = 0;
	 this.chieurong = 0;
	 this.rongcode =0;
	 this.loadcanvas=0;
	////người online
	this.drawImage = function(ctx)    // Define Method
	{

	if( this.imgnv == null ) {
if(checkloadgame(this.trainerimg) == null && loadimg == 1) {
if(imgpkm(''+this.trainerimg+'') !=null) {
         	addCharset('/sql/pokemon0/'+this.trainerimg+''); 
         	loadquai_json.push(this.trainerimg);
        } else {
           addCharset('/sql/load/images/charactersets/'+this.trainerimg+''); 
        }
            		gameimgload.push({img : this.trainerimg});

}
	for(var i=0;i< charsets.length;i++) {
					var img = charsets[i];
					if( img.src ) {
						if( img.src.indexOf("/" + this.trainerimg) > 0 ) {
							this.imgnv = img;
							if( img.width >= 256 ) {
								this.frameCount = 3;
								
							}
							if( img.width == 128 ) {
								this.frameCount = 3;
							    
							}
							if( img.width == 64 ) {
								this.frameCount = 1;
							  
							}
							if( img.width == 32 ) {
								this.frameCount = 0;
			                   

							}
						}
					}
				}
			
        	}
        	//trainerimg
        

		///pokemon
	
		if( this.imgnv != null && caidat.play <=0) {
		    if(this.chieurong <=0) {
      for(var i=0;i< charsets.length;i++) {
					var img = charsets[i];
					if( img.src ) {
						if( img.src.indexOf("/" + this.trainerimg) > 0 ) {
						    if(img.width ==512)  {
							    this.chieurong = 128;
							    this.chieucao=128;
							    this.rongmax = 50;
							    this.caomax = 50;
							    this.anhnew =1;
							} else
							if(img.width ==256)  {
							    this.chieurong = 64;
							    this.chieucao=64;
							    this.rongmax = 32;
							    this.caomax = 32;
							    this.anhnew =1;
							} else
							if(img.width ==128) {
							    this.chieurong = 32;
							    this.chieucao=32;
							this.rongmax = 32;
							    this.caomax = 32;	
							    this.anhnew=1;
							} else
							 {
							this.chieurong = 32;
							    this.chieucao=32;
							this.rongmax = 32;
							    this.caomax = 32;	
							} 
						}
					}
				}  	    
        	}
        	
        	if(this.chieurong >=1 && this.rongcode ==0) {
      for(var i=0;i< charsets.length;i++) {
					var img = charsets[i];
					if( img.src ) {
if( img.src.indexOf("/" + this.trainerimg) > 0 ) {
						    if(img.width ==512)  {
							    this.chieurong = 128;
							    this.chieucao=128;
							    this.rongmax = 50;
							    this.caomax = 50;
							    this.anhnew =1;
							} else
							if(img.width ==256)  {
							    this.chieurong = 64;
							    this.chieucao=64;
							    this.rongmax = 32;
							    this.caomax = 32;
							    this.anhnew =1;
							} else
							if(img.width ==128) {
							    this.chieurong = 32;
							    this.chieucao=32;
							this.rongmax = 32;
							    this.caomax = 32;	
							    this.anhnew=1;
							} else
							 {
							this.chieurong = 32;
							    this.chieucao=32;
							this.rongmax = 32;
							    this.caomax = 32;	
							} 
						}
					}
				}  	    
				this.rongcode ==1;
        	}
		ctx.drawImage(this.imgnv, this.drawStartX, this.drawStartY, this.chieurong, this.chieucao,  this.drawPosX-5, this.drawPosY, this.rongmax, this.caomax );
		
		if(caidat.nhun==1) {
        			if(this.loadcanvas >=Math.random() * (15 - 10) + 10) {
        	    this.loadcanvas = 0;
        	            	   ctx.drawImage(this.imgnv, this.drawStartX, this.drawStartY, this.chieurong, this.chieucao,  this.X-5, this.Y-1, this.rongmax, this.caomax);

        	} 
this.loadcanvas++;
        		}	
		}
		
 if(this.imgpokemon != null) {
if(this.direction==0){
var xpet = this.drawPosX;
var ypet = this.drawPosY+25;     
}

if(this.direction==1){
var xpet = this.drawPosX;
var ypet = this.drawPosY-25;         
}

if(this.direction==2){
var xpet = this.drawPosX+25;
var ypet = this.drawPosY;      
}

if(this.direction==3){
var xpet = this.drawPosX-25;
var ypet = this.drawPosY;
}
	
	ctx.drawImage(this.imgpokemon, this.drawStartX, this.drawStartY, 32, 32,  xpet, ypet, 32, 32 );	         
	         
}
		    	    
		    
		    
		


		if( parseInt(this.inbattle) == 1 ) {
		    ctx.drawImage(resourceByKey("pokeballicon"), this.drawPosX+4, this.drawPosY-26);
		}
		
		///module gia tộc
		///MODULE ICON
		if( parseInt(this.giatoc) != 0) {
		if(nicon !=1) {
		ctx.textAlign = "left";
	 ctx.drawImage(resourceByKey(this.giatoc),this.drawPosX-26, this.drawPosY-10);
		}
	 ///MODULE VIẾT TẮT
	 			ctx.font = "bold 10px sans-serif";

		ctx.textAlign = "left";
			drawShadowText(ctx,"["+this.viettat+"]",  this.drawPosX+36, this.drawPosY-1, "#BBDEFB");
}

///ducnghia

		
		
		

	}

	this.updateTextureCoords = function()    // Define Method
	{

		var startX = 0;
		var startY = 0;

	if(this.anhnew==1) {
			if( this.direction == 0 ) {
				switch(this.stepAnimation) {
					case 0 :
						startX = 1;
						startY = 3;
					break;
					case 1 :
						startX = 2;
						startY = 3;
					break;
					case 2 :
						startX = 3;
						startY = 3;
					break;
					case 3 :
						startX = 0;
						startY = 3;
					break;
				}
			} else if( this.direction == 1 ) {
				switch(this.stepAnimation) {
					case 0 :
						startX = 1;
						startY = 0;
					break;
					case 1 :
						startX = 2;
						startY = 0;
					break;
					case 2 :
						startX = 3;
						startY = 0;
					break;
					case 2 :
						startX = 0;
						startY = 0;
					break;
				}
			} else if( this.direction == 2 ) {
				switch(this.stepAnimation) {
					case 0 :
						startX = 1;
						startY = 1;
					break;
					case 1 :
						startX = 2;
						startY = 1;
					break;
					case 2 :
						startX = 3;
						startY = 1;
					break;
					case 3 :
						startX = 0;
						startY = 1;
					break;
				}
			} else {
				switch(this.stepAnimation) {
					case 0 :
						startX = 1;
						startY = 2;
					break;
					case 1 :
						startX = 2;
						startY = 2;
					break;
					case 2 :
						startX = 3;
						startY = 2;
					break;
					case 3 :
						startX = 0;
						startY = 2;
					break;
				}
			}
			
	 } else {
	   if( this.direction == 0 ) {

				switch(this.stepAnimation) {
					case 0 :
						startX = 0;
						startY = 0;
					break;
					case 1 :
						startX = 1;
						startY = 0;
					break;
					case 2 :
						startX = 2;
						startY = 0;
					break;
				}
			} else if( this.direction == 1 ) {
				switch(this.stepAnimation) {
					case 0 :
						startX = 0;
						startY = 1;
					break;
					case 1 :
						startX = 1;
						startY = 1;
					break;
					case 2 :
						startX = 2;
						startY = 1;
					break;
				}
			} else if( this.direction == 2 ) {
				switch(this.stepAnimation) {
					case 0 :
						startX = 0;
						startY = 2;
					break;
					case 1 :
						startX = 1;
						startY = 2;
					break;
					case 2 :
						startX = 2;
						startY = 2;
					break;
				}
			} else {
				switch(this.stepAnimation) {
					case 0 :
						startX = 0;
						startY = 3;
					break;
					case 1 :
						startX = 1;
						startY = 3;
					break;
					case 2 :
						startX = 2;
						startY = 3;
					break;
				}
			}  
	     
	     
	 }
		
		this.drawStartX = startX*this.chieurong;
		this.drawStartY = startY*this.chieucao;
	}
		
	return this;
}

var mmoUsers = new Array();
function updateMMOEvents(updateData) {
    
	for(var k=0;k<mmoUsers.length;k++) {
		mmoUsers[k].updated = false;
	}

	var dataRaw = updateData.split("^");
	for(var k=1;k<dataRaw.length;k++) {

		if( dataRaw[k] != "" ) {
			var dataUser = dataRaw[k].split("|");
			if (bShowUsers	|| friendsList.indexOf(dataUser[0]) > -1) {
			var user = mmoUserByName(dataUser[1]);
			if( user == null ) {
				//add id,name,trainerimg
				
				user = new MMOUser(dataUser[0],dataUser[1],dataUser[2]);
				mmoUsers.push(user);
			}
		 if(getuser(dataUser[0]).trainerimg != dataUser[2] ) {
		     user = new MMOUser(dataUser[0],dataUser[1],dataUser[2]);
				mmoUsers.push(user);
		 }
		 
		 
		 
			//update mapid,x,y,direction,step,inbattle
			
			user.mapid = dataUser[3];
			
			user.NewX = parseInt(dataUser[4]);
			user.NewY = parseInt(dataUser[5]);
			
			if( user.x == 0 ) {
				user.x = user.NewX;
				user.y = user.NewY;
			}
			
			
			user.direction = parseInt(dataUser[6]);
			user.step = 0;
			user.isRunning = 0;
			user.exp = dataUser[7];
			user.xu = dataUser[8];
			user.camxuc = dataUser[9];
			user.hp =  dataUser[10];
			user.co = dataUser[11];
	      //  user.buff = dataUser[16];
			user.updated = true;
		  }
		}
	}

	
	//remove old connections
	for(var k=0;k<mmoUsers.length;k++) {
		if( k < mmoUsers.length ) {
			if( mmoUsers[k].updated == false ) {
				mmoUsers.splice(k,1);
				k--;
			}
		}
	}
	
}

function mmoUserByName(name) {
	for(var k=0;k<mmoUsers.length;k++) {
		if( name == mmoUsers[k].name ) {
			return mmoUsers[k];
		}
	}
	return null;
}


function Point(x,y) {
	this.X = x;
	this.Y = y;
	return this;
}

// ################################################
// ### GAME EVENT CLASS ###########################
// ################################################
function ScriptLine(line,func,args,id) {
	this.func = func;
	this.args = args;
	this.line = line;
		this.id = id;

	return this;
}


function GameEgg(node) {
	if( node ) {
        
		this.id = nodeValue(firstChildNodeNamed("id", node));
		this.steps = nodeValue(firstChildNodeNamed("steps", node));
		
	}
	return this;
}

function GameItem(node) {
	if( node ) {
        
		this.id = nodeValue(firstChildNodeNamed("id", node));
		this.name = nodeValue(firstChildNodeNamed("name", node));
		this.file = nodeValue(firstChildNodeNamed("file", node));
		this.qty = nodeValue(firstChildNodeNamed("qty", node));
	}
	return this;
}

    function gameEvent(node)
	{
        this.moveQueue = new Array();
        this.mapPosition = new Object;
        
        this.bEventEnabled = false;
        this.bHidden = false;
        
        
		this.bIsUser = true;
		this.id = 0; 
		this.name = "";
		this.mapPosition.X = 0;
		this.mapPosition.Y = 0;
		this.spriteName = "";
		this.type = "";
		this.direction = 0;
		this.moveType = "";
		
		this.quest = 0;
			this.chuanhan = 0;
				this.danhan = 0;
				this.hoanthanh = 0;

		this.frameCount = 2;
		
        //Event Properties
        this.eventData = new Array();
        
		this.mapPosition.X = 0;
		this.mapPosition.Y = 0;
		this.mapPosition.newX = 0;
		this.mapPosition.newY = 0;



        //Core Variables
        if( node ) {

			this.id = node.id;
			this.name = node.name;
		
			this.mapPosition.X = parseInt(node.x)-1;
			this.mapPosition.Y = parseInt(node.y)+1;
			this.mapPosition.newX = parseInt(node.x)-1;
			this.mapPosition.newY = parseInt(node.y)+1;
			this.type = node.type;
			this.spriteName = node.style;
			this.direction = node.direction;
			this.moveType = node.movement;
        	this.bIsUser = false;
        	this.bEventEnabled = true;

this.idvp = node.idvp;
	this.hp = node.hp;
this.hpfull = node.hpfull;
this.level = node.level;
  this.msgn = node.msg;
this.timen = node.time;
this.chimang = node.chimang;
this.giap = node.giap;
this.tancong = node.tancong;
this.msghp = 0;
this.bosss = node.bosss;

this.timehp = 0;
this.fdgd =1;
this.giaotiep = node.giaotiep;
this.button = node.button;
        	
        	
        	var script = node.script;
        	for(var i=0;i<script.length;i++) {
        		line = script[i];
        		this.eventData.push(new ScriptLine( line.line , line.function , line.arguments,node.id ));
        	}
        		
        }

        //Movement
        this.stepPart = 0;
        this.stepAnimation = 0;

        this.bJumping = false;
        this.jumpYAdd = 0;
        this.jumpYAcc = 0;
        
		this.drawStartX = 0;
		this.drawStartY = 0;
        this.X = 0;
        this.Y = 0;
        
        this.offsetX = 0;
        this.offsetY = 0;
        this.stepX = 0;
        this.stepY = 0;
this.chieurong = 0;
		this.msg = "";
		this.msgTick = 0;
        
        this.bHasAppearance = false;
		if( this.spriteName != "" ) {
			this.bHasAppearance = true;
		}
		
      ///hiệu ứng quái vật ///
///creft ducnghia////
        this.ImageRef = null;
 this.nx = 0;
 this.ny =0;
 this.canhX = 29;
 this.canhY = 48;
 this.dctt =0;
 this.buff = [];
	  this.camdi=0;
	  this.camdanh=0;
this.rongcode =0;
this.anhnew=0;
this.loadcanvas =0;
 	this.ducnghiacanh = function()    // Define Method
		{
		
			var dNX = this.canhX * 16;
			var dMY = this.canhY * 16;
			if( currentMap == null ) {
				return;
			}
	
				//NPC EVENT POSITIONING
				
			
	
				var additionalDown2 = currentMap.mapHeight/2-cvsHeight/2;
				 this.nx = mapLeft + dNX + 0+13;
				this.ny = -mapTop-cvsHeight/2-currentMap.mapHeight/2 + dMY + 0 -2+28 + (additionalDown2-192);
				
			
	
		}       

	this.drawImage2 = function(ctx)    // Define Method
		{
		    if(mapID ==3)
		   ctx.drawImage(resourceByKey("longden"),  this.nx-5, this.ny);
 
		}

		this.drawImage = function(ctx)    // Define Method
		{

        	if( this.ImageRef == null ) {
if(checkloadgame(this.spriteName) == null && loadimg == 1) {
if(imgpkm(''+this.spriteName+'') !=null) {
         	addCharset('/sql/pokemon0/'+this.spriteName+''); 
         	loadquai_json.push(this.spriteName);
        } else {
           addCharset('/sql/load/images/charactersets/'+this.spriteName+''); 
        }
            		gameimgload.push({img : this.spriteName});

}
for(var i=0;i< charsets.length;i++) {
					var img = charsets[i];
					if( img.src ) {
						if( img.src.indexOf("/" + this.spriteName) > 0 ) {
						    	this.ImageRef = img;
						    if(img.width ==512)  {
					
							    this.frameCount = 3;
							} else
							if(img.width ==256)  {
							   
							    this.frameCount = 3;
							} else
							if(img.whith == 128) {
							 
							    this.frameCount = 3; 
							} else
					
							 {
							
							    this.frameCount = 1;
							} 
						}
					}
				}				
			
        	}
        	
        	
        	

if(this.fdgd ==1) {
        	    this.fdgd=0;
        	    this.congload=1;
        	} else {
        	    this.fdgd=1;
        	    this.congload=-1;
        	}
        	
        	if( this.ImageRef != null ) {
     	    
        		if(caidat.npc <=0   ) {
        		    	if(this.chieurong <=0) {
      for(var i=0;i< charsets.length;i++) {
					var img = charsets[i];
					if( img.src ) {
						if( img.src.indexOf("/" + this.spriteName) > 0 ) {
						    if(img.width ==512)  {
							    this.chieurong = 128;
							    this.chieucao=128;
							    this.rongmax = 50;
							    this.caomax = 50;
							    this.anhnew = 1;
							} else
							if(img.width ==256)  {
							    this.chieurong = 64;
							    this.chieucao=64;
							    this.rongmax = 37;
							    this.caomax = 37;							
							    this.anhnew = 1;
							    
							} else
							if(img.width ==128)  {
							    this.chieurong = 32;
							    this.chieucao=32;
							    this.rongmax = 32;
							    this.caomax = 32;
							    this.anhnew = 1;
							} else
							 {
							this.chieurong = 32;
							    this.chieucao=32;
							this.rongmax = 32;
							    this.caomax = 32;	
							} 
						}
					}
				}  	    
        	}
        	
        	if(this.chieurong >=1 && this.rongcode ==0) {
      for(var i=0;i< charsets.length;i++) {
					var img = charsets[i];
					if( img.src ) {
					if( img.src.indexOf("/" + this.spriteName) > 0 ) {
						    if(img.width ==512)  {
							    this.chieurong = 128;
							    this.chieucao=128;
							    this.rongmax = 50;
							    this.caomax = 50;
							    this.anhnew = 1;
							} else
							if(img.width ==256)  {
							    this.chieurong = 64;
							    this.chieucao=64;
							    this.rongmax = 37;
							    this.caomax = 37;							
							    this.anhnew = 1;
							    
							} else
							if(img.width ==128)  {
							    this.chieurong = 32;
							    this.chieucao=32;
							    this.rongmax = 32;
							    this.caomax = 32;
							    this.anhnew = 1;
							} else
							 {
							this.chieurong = 32;
							    this.chieucao=32;
							this.rongmax = 32;
							    this.caomax = 32;	
							} 
						}
					}
				}  	
				this.rongcode ==1;
        	}
        	
        	

        			ctx.drawImage(this.ImageRef, this.drawStartX, this.drawStartY, this.chieurong, this.chieucao,  this.X-5, this.Y, this.rongmax, this.caomax );
        			if(caidat.nhun==1) {
        			if(this.loadcanvas >=Math.random() * (15 - 10) + 10 ) {
        	    this.loadcanvas = 0;
        	            	   ctx.drawImage(this.ImageRef, this.drawStartX, this.drawStartY, this.chieurong, this.chieucao,  this.X-5, this.Y-1.1, this.rongmax, this.caomax);

        	} 
this.loadcanvas++;
        		}
        		}
	
					if( my.click.id == this.id  && my.click.type == "pokemon" && my.click.id !==0 ) {
						ctx.drawImage(resourceByKey("chon"),  this.X+2, this.Y-28+this.congload);
					}
					
					
					
				if(nhiemvu(my.users.nhiemvu.id)) {
		if(my.users.nhiemvu.code !=1 && +nhiemvu(my.users.nhiemvu.id).ducnghia.npc == this.id) {
		ctx.drawImage(resourceByKey("chuanhan"),  this.X+5, this.Y-30);
					}

	if( my.users.nhiemvu.code !=0 && +nhiemvu(my.users.nhiemvu.id).ducnghia.npc == this.id && my.users.nhiemvu.song < my.users.nhiemvu.can   ) {
						ctx.drawImage(resourceByKey("danhan"),  this.X+5, this.Y-30);
					}	
					
	if( my.users.nhiemvu.code !=0 && +nhiemvu(my.users.nhiemvu.id).ducnghia.npc == this.id && my.users.nhiemvu.song >= my.users.nhiemvu.can ) {
						ctx.drawImage(resourceByKey("hoanthanh"),  this.X+5, this.Y-30);
					}						
				}	
				
	///msg npc
	if(this.timen > time) {
	  	ctx.font = "bold 15px sans-serif";
				ctx.textAlign = "center";
				drawShadowText(ctx,this.msgn,  this.X+10, (this.Y-10)-this.canvas,"#0404B4");  
			
		this.canvas++;
			
	} else {
	    this.canvas =0;
	    this.time =0;
	}
	
	if(+this.boss==1 && +this.hp<=0) {
        	    xoanpc(this.id);
        	}
	
		if(this.timehp > time) {
	  	ctx.font = "bold 13px sans-serif";
				ctx.textAlign = "center";
				drawShadowText(ctx,this.msghp,  (this.X+10)-10, (this.Y)-this.hpcanvas,"#FF0000");  
			
		this.hpcanvas++;
			
	} else {
	    this.hpcanvas =0;
	    this.timehp =0;
	}
	
	////
	
				
	if(this.hp >0  && my.click.id == this.id  && my.click.type == "pokemon" && my.click.id !==0 ) {
	    //////////thanh hp//////////////
	     ctx.fillStyle = '#000000';
    ctx.fillRect(this.X-13, this.Y, 50, 7);
	    ctx.fillStyle = '#FF0000';
    ctx.fillRect(this.X-13, this.Y, 50*(this.hp/this.hpfull), 7);
   
	    ///////////thanh/////////////////////
			//	drawShadowText(ctx,""+tron(this.hp)+"",  this.X+10, this.Y-10,"#A44219");    
		
	}
	
	//////////////hiệu ứng ////////////////////
	for(var k=0;k<this.buff.length;k++) {
		////eff choáng
		if(this.buff[k].buff =="choang"){
	      if(+this.buff[k].load <=1) {
		ctx.drawImage(resourceByKey("choang1"),0,0,50,22,  this.X-10, this.Y-30,50,22);
} else {
   		ctx.drawImage(resourceByKey("choang2"),0,0,36,24,  this.X-10, this.Y-30,36,24);
}
if(+this.buff[k].load >=2) {
    this.buff[k].load=0;
}

this.buff[k].load++;
this.camdi =1;
this.camdanh=1;
}
////eff đóng băng

if(this.buff[k].buff =="dongbang"){
	     if(this.buff[k].time -date() >=3000 ) {
   		ctx.drawImage(resourceByKey("dongbang"),0,0,52,34,  this.X-5, this.Y+10,36,24);
} else if(this.buff[k].time -date() >=2000 ) {
     		ctx.drawImage(resourceByKey("dongbang2"),0,0,54,36,  this.X-5, this.Y+10,36,24);
}
else if(this.buff[k].time -date() >=1000 ) {
     		ctx.drawImage(resourceByKey("dongbang3"),0,0,62,40,  this.X-5, this.Y+10,36,24);
} else {
     		ctx.drawImage(resourceByKey("dongbang4"),0,0,50,28,  this.X-5, this.Y+10,36,24);
    
}

if(+this.buff[k].tacdung >=1 && +this.buff[k].timetacdung <= date()) {
    


if(userID == this.buff[k].uid) {
         this.truhp = +this.hp/100*+this.buff[k].tacdung;

    this.hp = +this.hp - +this.truhp;
this.buff[k].timetacdung = date() + 1000;
if(mapquai(this.id)) {
    quaist(this.id,this.truhp);
} else {
      ws.send("truke:"+this.id+"^"+this.truhp+"");
}
    }
}

this.camdi =1;
this.camdanh=1;
}

////bỏng


if(this.buff[k].buff =="bong"){
	    
if(+this.buff[k].tacdung >=1 && +this.buff[k].timetacdung <= date()) {
    	ctx.drawImage(resourceByKey("bong"),0,0,32,24,  this.X, this.Y+10,32,22);
  
if(userID == this.buff[k].uid) {
   this.truhp = +this.hp/100*+this.buff[k].tacdung;
this.hp = +this.hp - +this.truhp;
this.buff[k].timetacdung = date() + 1000;

    if(mapquai(this.id)) {
    quaist(this.id,this.truhp);
} else {
      ws.send("truke:"+this.id+"^"+this.truhp+"");

}
}
}

}

if(this.buff[k].buff =="troi"){
	      if(+this.buff[k].load <=1) {
		ctx.drawImage(resourceByKey("troi"),0,0,36,40,  this.X-10, this.Y+10,32,22);
} else
if(+this.buff[k].load ==2) {
		ctx.drawImage(resourceByKey("troi2"),0,0,40,40,  this.X-10, this.Y+10,32,22);
} else
if(+this.buff[k].load ==3) {
		ctx.drawImage(resourceByKey("troi3"),0,0,44,44,  this.X-10, this.Y+10,32,22);
} else
{
		ctx.drawImage(resourceByKey("troi4"),0,0,34,38,  this.X-10, this.Y+10,32,22);
}

if(+this.buff[k].load >=4) {
    this.buff[k].load=0;
}

this.buff[k].load++;
this.camdi =1;
}









///delete from eff no time 
if(+this.buff[k].time <= date()) {
    this.camdi=0;
    this.camdanh=0;
this.buff.splice(k, 1);
}
///ducnghia
		
		
			}
	  
	
	////////////PokeMon Biến hình////////////////////////
	
	/////////////đánh người chơi khác///////////   
	if( this.pk == 1 &&  this.timepk <= date() && this.camdanh!=1 ) {
					attpkm(this.id);
	this.timepk = date()+rand(3000,15000);    
				}	
	
	
	//////////////////POKEMON BIẾN HÌNH/////////////////
	    if(this.hp <=0) {
	    
	 ctx.font = "bold 10px sans-serif";
				ctx.textAlign = "center";
				if(userID <=10) {
			    drawShadowText(ctx,"["+this.id+"]"+this.name,  this.X+10, this.Y-1);
	    
				} else {
    				drawShadowText(ctx,this.name,  this.X+10, this.Y-1);
}
	    }
	    
	
	

				
        		
        	}
        }
        
		 
		this.initWithData = function(data)    // Define Method
		{
			
			this.processConditions();
			this.evaluate();
		}
	
		this.initAsPlayer = function(position)    // Define Method
		{
			this.bIsUser = true;
			this.bEventEnabled = true;
			
			this.spriteName = userSprite;
			this.direction = 1;
			this.mapPosition.X = position.X;
			this.mapPosition.Y = position.Y;

			
			
			
			this.evaluate();
		}
		
		this.processConditions = function()    // Define Method
		{
			this.bEventEnabled = true;
		}
	
		this.addMoveQueue = function(moveDirection)    // Define Method
		{

			this.moveQueue.push(moveDirection.toLowerCase());

		}
		
		
	
		this.evaluate = function()    // Define Method
		{
			if( this.bEventEnabled == false ) {
				return;
			}
			if( currentMap == null ) {
				return;
			}
			if( this.bIsUser == false && this.bHidden == false ) {
				this.processNPCMovement();
			}
			this.processMoveQueue();
			this.updatePosition();
			this.ducnghiacanh();
			
			if( this.msg != "" ) {
				this.msgTick++;
				if( this.msgTick > 250 ) {
					this.msg = "";
				}
			}
		}
	
		this.processNPCMovement = function()    // Define Method
		{
		    ///npc di chuyển
		    //////////////
	
		    ///////////
		    
		    
			if( this.moveQueue.length == 0 && activeScript.length == 0  &&  bInBattle == false && this.camdi !=1) {
				if( this.moveType == "Slow Random" || this.moveType == "Fast Random" ) {
			
					//Random Movement
					if( Math.floor(Math.random() * 10) == 1 ) {
						var randDirection = Math.floor(Math.random() * 4);
						if( randDirection == 0 ) {
							if( currentMap.tileIsWalkable( Point(this.mapPosition.X,this.mapPosition.Y-2-1)) ) {
								this.addMoveQueue("up");
							}
						} else if( randDirection == 1 ) {
							if( currentMap.tileIsWalkable( Point(this.mapPosition.X,this.mapPosition.Y-2+1)) ) {
								this.addMoveQueue("down");
							}
						} else if( randDirection == 2 ) {
							if( currentMap.tileIsWalkable( Point(this.mapPosition.X-1,this.mapPosition.Y-2)) ) {
								this.addMoveQueue("left");
							}
						} else {
							if( currentMap.tileIsWalkable( Point(this.mapPosition.X+1,this.mapPosition.Y-2)) ) {
								this.addMoveQueue("right");
							}
						}

					}
				} else if( this.moveType ==  "Follow User" ) {
					var xDif = userEvent.mapPosition.X - this.mapPosition.X;
					var yDif = userEvent.mapPosition.Y + 2 - this.mapPosition.Y;
					steps = 0;
					var dir = "";
					
					if( userEvent.moveQueue.length != 0 ) {
						if( xDif != 0 ) {
							if( xDif < 0 ) {
								dir = "left";
								steps = -xDif-5;
							} else {
								dir = "right";
								steps = xDif+5;
							}
						}
						if( yDif != 0 ) {
							if( yDif < 0 ) {
								dir = "up";
								steps = -yDif;
							} else {
								dir = "down";
								steps = yDif;
							}
						}

						
						
						if( dir != "" ) {
							this.addMoveQueue(dir);
						}

						
					}
				}
			}
		}
	
		this.processMoveQueue = function()    // Define Method
		{
			if( currentMap == null ) {
				return false;
			}
			
			
			
			
			var bPassedCheck = false;
			if( !this.bIsUser ) {
				bPassedCheck = true;
				if( this.moveQueue.length > 0 ) {
					if( this.moveQueue[0].toLowerCase() == "face up" ) {
						this.direction = 0;
						this.moveQueue.splice(0,1); 
					} else if( this.moveQueue[0].toLowerCase() == "face down" ) {
						this.direction = 1;
						this.moveQueue.splice(0,1); 
					} else if( this.moveQueue[0].toLowerCase() == "face left" ) {
						this.direction = 2;
						this.moveQueue.splice(0,1); 
					} else if( this.moveQueue[0].toLowerCase() == "face right" ) {
						this.direction = 3;
						this.moveQueue.splice(0,1); 
					} else if( this.moveQueue[0].toLowerCase() == "hide" ) {
						this.bHidden = true;
						this.moveQueue.splice(0,1); 
					} else if( this.moveQueue[0].toLowerCase() == "show" ) {
						this.bHidden = false;
						this.moveQueue.splice(0,1); 
					}
						
				}
			} else {
				while( bPassedCheck == false ) {
					if( this.moveQueue.length > 0 ) {
c_giaotiep();

						if( this.moveQueue[0] == "up" ) {
						  

							if( !currentMap.tileIsWalkable( Point(this.mapPosition.X,this.mapPosition.Y-1)) ) {
								this.moveQueue.splice(0,1); 
								this.direction = 0;
							} else {
								bPassedCheck = true;
							}
						} else if( this.moveQueue[0] == "down" ) {
							if( !currentMap.tileIsWalkable( Point(this.mapPosition.X,this.mapPosition.Y+1)) ) {
								this.moveQueue.splice(0,1); 
								this.direction = 1;
							} else {
								bPassedCheck = true;
							}
						} else if( this.moveQueue[0] == "left" ) {
							if( !currentMap.tileIsWalkable( Point(this.mapPosition.X-1,this.mapPosition.Y)) ) {
								this.moveQueue.splice(0,1); 
								this.direction = 2;
							} else {
								bPassedCheck = true;
							}
						} else if( this.moveQueue[0] == "right" ) {
							if( !currentMap.tileIsWalkable( Point(this.mapPosition.X+1,this.mapPosition.Y)) ) {
								this.moveQueue.splice(0,1); 
								this.direction = 3;
							} else {
								bPassedCheck = true;
							}
							
						} else if( this.moveQueue[0] == "jump" ) {
							bPassedCheck = true;
						} else if( this.moveQueue[0].toLowerCase() == "face up" ) {
							this.direction = 0;
							this.moveQueue.splice(0,1); 
						} else if( this.moveQueue[0].toLowerCase() == "face down" ) {
							this.direction = 1;
							this.moveQueue.splice(0,1); 
						} else if( this.moveQueue[0].toLowerCase() == "face left" ) {
							this.direction = 2;
							this.moveQueue.splice(0,1); 
						} else if( this.moveQueue[0].toLowerCase() == "face right" ) {
							this.direction = 3;
							this.moveQueue.splice(0,1); 
						} else if( this.moveQueue[0].toLowerCase() == "hide" ) {
							this.bHidden = true;
							this.moveQueue.splice(0,1); 
						} else if( this.moveQueue[0].toLowerCase() == "show" ) {
							this.bHidden = false;
							this.moveQueue.splice(0,1); 
						}  else {
							bPassedCheck = true;
						}
				//	document.getElementById('ducnghia_img').src = '/xml/nhanvat.php?nhanvat='+userSprite+'&nut='+this.direction+'&nghia='+this.stepAnimation+'';	


					} else {
						bPassedCheck = true;
					}
					
					if( bPassedCheck == false ) {
						//this.moveQueue.splice(0, 1);
					}
				}
			}
	
			if( this.moveQueue.length > 0 ) {
		
				if( this.moveQueue[0].toLowerCase() == "up" ) {
					this.direction = 0;
				} else if( this.moveQueue[0].toLowerCase() == "down" ) {
					this.direction = 1;
				} else if( this.moveQueue[0].toLowerCase() == "left" ) {
					this.direction = 2;
				} else if( this.moveQueue[0].toLowerCase() == "right" ) {
					this.direction = 3;
				} else if( this.moveQueue[0].toLowerCase() == "jump" ) {
					this.jumpYAcc = this.jumpYAcc + 2;
					this.jumpYAdd = this.jumpYAdd + this.jumpYAcc;
			
					if( this.jumpYAcc == 4 ) {
						this.jumpYAcc = 0;
						this.jumpYAdd = 0;
						this.bJumping = false;
				
						this.moveQueue.splice(0,1); 
					}
	
					return;
				}
								

		
				if( this.stepPart == 8 || this.stepPart == 0 ) {
					this.stepAnimation++; 
					if( this.stepAnimation > this.frameCount ) 
						this.stepAnimation = 0;
				}
	
				this.stepPart = this.stepPart + 4;
				if( this.moveType == "Slow Random" ) 
					this.stepPart = this.stepPart - 2;
					
		if( userID >=1 && this.moveQueue.length == 1 && (this.bIsUser || this.id==-1))  {
		    if(userSprite =="Ghost-Spooky.png") {
		        this.speednew = 2;
		    } else
		    if(userSprite =="PrincessPhoenix.png") {
		        this.speednew = 2;
		    } else
		    if(userSprite =="Mummy.png") {
		        this.speednew = 3;
		    } else 
		    
		    if(userSprite =="Illusionist.png") {
		        this.speednew = 2;
		    } else 
		    
		    {
		        this.speednew = 0;
		    }
		    
					this.stepPart = this.stepPart + this.speednew ;			
				
		}
				if( keyState.btn2 && this.moveQueue.length == 1 && (this.bIsUser || this.id==-1)) 
					this.stepPart = this.stepPart + 4;

				if( keyState.btn2 && this.moveQueue.length == 1 && (!this.bIsUser ) && this.id != -1 && this.moveType ==  "Follow User" ) 
					this.stepPart = this.stepPart + 4;
		
				if( this.stepPart >= 16 ) {
					this.stepPart = 0;
			
					//update the coordanates at the end of the step.
					if( this.moveQueue[0] == "up" ) {
						this.mapPosition.Y = this.mapPosition.Y - 1;

					} else if( this.moveQueue[0] == "down" ) {
						this.mapPosition.Y = this.mapPosition.Y + 1;

					} else if( this.moveQueue[0] == "left" ) {
						this.mapPosition.X = this.mapPosition.X - 1;

					} else {
						this.mapPosition.X = this.mapPosition.X + 1;

					}
			
					if( this.bIsUser ) {
						if( activeScript.length == 0 ) {
							if( this.eventCheck() == true ) {
								this.arrivedOnTile();
							}
						}
					}
			
					this.moveQueue.splice(0,1); 
				}
		
			}
		}
		

		
				
		this.eventCheck = function()    // Define Method
		{
	        for(var i=0;i<currentMap.events.length;i++) {
				var evnt = currentMap.events[i];
				
		        if( evnt.mapPosition.X == userEvent.mapPosition.X && evnt.mapPosition.Y == userEvent.mapPosition.Y + 2  ) {
                    if (evnt.type == "On Walk" && evnt.bEventEnabled && activeScript.length == 0 && evnt.eventData.length > 0)
                    {
				        if( triggerEvent( evnt , false) ) {
					        return false;
				        }
			        }
		        }
				
				//type
		        if( evnt.bEventEnabled && (evnt.type == "X1" || evnt.type == "X2" || evnt.type == "X3" || evnt.type == "X10" || evnt.type == "X15" || evnt.type == "X20")  && activeScript.length == 0 && evnt.eventData.length > 0 ) {
			        var stepsCheck = 1;
			        if( evnt.type == "X2" )
				        stepsCheck = 2;
			        if( evnt.type == "X3" )
				        stepsCheck = 3;
				    if( evnt.type == "X10" )
				        stepsCheck = 10;
				    if( evnt.type == "X15" )
				        stepsCheck = 15;
				    if( evnt.type == "X20" )
				        stepsCheck = 20;
				    
				    
			
			        for(var check = 1;check <= stepsCheck;check++) {
				        if( evnt.mapPosition.X+check == userEvent.mapPosition.X && evnt.mapPosition.Y == userEvent.mapPosition.Y + 2 && evnt.direction == 3 ) {
					        if( triggerEvent( evnt , true) ) {
						        return false;
					        }
				        }
				        if( evnt.mapPosition.X-check == userEvent.mapPosition.X && evnt.mapPosition.Y == userEvent.mapPosition.Y + 2 && evnt.direction == 2  ) {
					        if( triggerEvent( evnt , true) ) {
						        return false;
					        }
				        }
				        if( evnt.mapPosition.X == userEvent.mapPosition.X && evnt.mapPosition.Y+check == userEvent.mapPosition.Y + 2 && evnt.direction == 1  ) {
					        if( triggerEvent( evnt , true) ) {
						        return false;
					        }
				        }
				        if( evnt.mapPosition.X == userEvent.mapPosition.X && evnt.mapPosition.Y-check == userEvent.mapPosition.Y + 2 && evnt.direction == 0  ) {
					        if( triggerEvent( evnt , true) ) {
						        return false;
					        }
				        }
			        }
		        }
	        }
	        return true;
		}
		
		this.arrivedOnTile = function()    // Define Method
		{
		
		}
		
		this.isInGrass = function()    // Define Method
		{
			for(var i=0;i<currentMap.grassPatches.length;i++) {
				var patch = currentMap.grassPatches[i];
				grass = '(Grass:X,Y: '+patch.VX+','+patch.VY+' -W,H: '+patch.VW+','+patch.VH+') ';
				if( this.mapPosition.X >= patch.X1 && this.mapPosition.X <= patch.X2-2 ) {
					if( this.mapPosition.Y+2 >= patch.Y1 && this.mapPosition.Y+2 <= patch.Y2 ) {
						return true;
					}
				}
			}
			return false;
		} 
		
		
		
		///http://forum.pokemonlegends.com/viewtopic.php?t=669
		
	
		this.updatePosition = function()    // Define Method
		{
			var ySink = 0;
			
			this.stepX = 0;
			this.stepY = 0;
			
			this.offsetX = 0;
			this.offsetY = 0;
			
	
			var MyX = this.mapPosition.X * 16;
			var MyY = this.mapPosition.Y * 16;
			if( currentMap == null ) {
				return;
			}
	
			if( this.bIsUser == false ) {
				//NPC EVENT POSITIONING
				
				if( this.moveQueue.length > 0 ) {
					if( this.moveQueue[0] == "up" ) {
						this.stepY = -this.stepPart;
					} else if( this.moveQueue[0] == "down" ) {
						this.stepY = this.stepPart;
					} else if( this.moveQueue[0] == "left" ) {
						this.stepX = -this.stepPart;
					} else {
						this.stepX = this.stepPart;
					}
				}
	
				var additionalDown = currentMap.mapHeight/2-cvsHeight/2;
				this.X = mapLeft + MyX + this.stepX+13;
				//this.Y = -mapTop-currentMap.mapHeight/2 + MyY + this.stepY - Math.floor(this.jumpYAdd)+2-130+32;
				this.Y = -mapTop-cvsHeight/2-currentMap.mapHeight/2 + MyY + this.stepY - Math.floor(this.jumpYAdd)+2+28 + (additionalDown-192);
				
			} else {
				//USER EVENT POSITIONING
				if( this.moveQueue.length > 0 ) {
					if( this.moveQueue[0] == "left" ) {
						if(  MyX <= cvsWidth/2 || MyX > currentMap.mapWidth - cvsWidth/2 ) {
							this.stepX = -this.stepPart;
						}
					} else if( this.moveQueue[0] == "right" ) {
						if(  MyX < cvsWidth/2 || MyX >= currentMap.mapWidth - cvsWidth/2 ) {
							this.stepX = this.stepPart;
						}
					}
				}
				if(  MyY <= cvsHeight/2 || MyY >= currentMap.mapHeight - cvsHeight/2 ) {
					if( this.moveQueue.length > 0 ) {
						if( this.moveQueue[0] == "up" ) {
							this.stepY = -this.stepPart;
						} else if( this.moveQueue[0] == "down" ) {
							this.stepY = this.stepPart;
						}
					}
				}
		
				if( this.moveQueue.length > 0 ) {
					if( this.moveQueue[0] == "right" ) {
						if( MyX+this.stepX >= currentMap.mapWidth - cvsWidth/2 ) {
							this.offsetX = cvsWidth/2 + ( currentMap.mapWidth - MyX-this.stepX ) * -1;
						}
					} else {
						if( MyX-this.stepX > currentMap.mapWidth - cvsWidth/2 ) {
							this.offsetX = cvsWidth/2 + ( currentMap.mapWidth - MyX-this.stepX ) * -1;
						}
					}
				} else {
					if( MyX-this.stepX > currentMap.mapWidth - cvsWidth/2 ) {
						this.offsetX = cvsWidth/2 + ( currentMap.mapWidth - MyX-this.stepX ) * -1;
					}
				}
		
				if( this.moveQueue.length > 0 ) {
					if(  this.moveQueue[0] == "left" ) {
						if( MyX+this.stepX <= cvsWidth/2 ) {
							this.offsetX = (cvsWidth/2-MyX-this.stepX)*-1;
						}
					} else {
						if( MyX-this.stepX < cvsWidth/2 ) {
							this.offsetX = (cvsWidth/2-MyX-this.stepX)*-1;
						}
					}
				} else {
					if( MyX-this.stepX < cvsWidth/2 ) {
						this.offsetX = (cvsWidth/2-MyX-this.stepX)*-1;
					}
				}
	
				if( MyY+this.stepY > currentMap.mapHeight - cvsHeight/2 ) {
					this.offsetY = cvsHeight/2 + (currentMap.mapHeight - MyY-this.stepY ) * -1;
				}
				if( MyY+this.stepY < cvsHeight/2 ) {
					this.offsetY = (cvsHeight/2-MyY-this.stepY)*-1;
				}
		
				var half = (cvsWidth - currentMap.mapWidth);
				if( half < 0 )
					half = 0;
				this.X = half+cvsWidth/2 + this.offsetX+13;
								this.ducnghia = half+cvsWidth + this.offsetX+13;

				this.Y = cvsHeight/2 + this.offsetY - ySink - Math.floor(this.jumpYAdd);
	
			}
	
			this.updateTextureCoords();
		}
	
		this.updateTextureCoords = function()    // Define Method
		{
	
			var startX = 0;
			var startY = 0;
	 if(this.anhnew ==1) {
			if( this.direction == 0 ) {
				switch(this.stepAnimation) {
					case 0 :
						startX = 0;
						startY = 3;
					break;
					case 1 :
						startX = 1;
						startY = 3;
					break;
					case 2 :
						startX = 2;
						startY = 3;
					break;
					case 3 :
						startX = 3;
						startY = 3;
					break;
				}
			} else if( this.direction == 1 ) {
				switch(this.stepAnimation) {
					case 0 :
						startX = 0;
						startY = 0;
					break;
					case 1 :
						startX = 1;
						startY = 0;
					break;
					case 2 :
						startX = 2;
						startY = 0;
					break;
					case 2 :
						startX = 3;
						startY = 0;
					break;
				}
			} else if( this.direction == 2 ) {
				switch(this.stepAnimation) {
					case 0 :
						startX = 0;
						startY = 1;
					break;
					case 1 :
						startX = 1;
						startY = 1;
					break;
					case 2 :
						startX = 2;
						startY = 1;
					break;
					case 3 :
						startX = 3;
						startY = 1;
					break;
				}
			} else {
				switch(this.stepAnimation) {
					case 0 :
						startX = 0;
						startY = 2;
					break;
					case 1 :
						startX = 1;
						startY = 2;
					break;
					case 2 :
						startX = 2;
						startY = 2;
					break;
					case 3 :
						startX = 3;
						startY = 2;
					break;
				}
			}
			
	 } else {
	   if( this.direction == 0 ) {

				switch(this.stepAnimation) {
					case 0 :
						startX = 0;
						startY = 0;
					break;
					case 1 :
						startX = 1;
						startY = 0;
					break;
					case 2 :
						startX = 2;
						startY = 0;
					break;
				}
			} else if( this.direction == 1 ) {
				switch(this.stepAnimation) {
					case 0 :
						startX = 0;
						startY = 1;
					break;
					case 1 :
						startX = 1;
						startY = 1;
					break;
					case 2 :
						startX = 2;
						startY = 1;
					break;
				}
			} else if( this.direction == 2 ) {
				switch(this.stepAnimation) {
					case 0 :
						startX = 0;
						startY = 2;
					break;
					case 1 :
						startX = 1;
						startY = 2;
					break;
					case 2 :
						startX = 2;
						startY = 2;
					break;
				}
			} else {
				switch(this.stepAnimation) {
					case 0 :
						startX = 0;
						startY = 3;
					break;
					case 1 :
						startX = 1;
						startY = 3;
					break;
					case 2 :
						startX = 2;
						startY = 3;
					break;
				}
			}  
	     
	     
	 }
			this.drawStartX = startX*this.chieurong;
			this.drawStartY = startY*this.chieucao;
		}


        return this;
	}
    
	
	
// ################################################
// ### MAP CLASS ###########################
// ################################################


function Region(x1,y1,x2,y2,vx,vy,vw,vh) {
	this.X1 = x1;
	this.Y1 = y1;
	this.X2 = x2;
	this.Y2 = y2;
	this.VX = vx;
	this.VY = vy;
	this.VW = vw;
	this.VH = vh;
	
	return this;
}

// ################################################
// ### GAME MAP CLASS ############################# 
// ################################################
	function gameMap()
	{
		this.mapCollisionData = null;
		
		this.mapWidth = 0;
		this.mapHeight = 0;
		
		this.mapMusic = '';
		
		this.tileSize = 16;
		
		this.grassPatches = new Array();
		this.events = new Array();
		
		this.loadEvents = function(mapEvents)    // Define Method
		{
			events = new Array();
		
			
			for(var na=0;na<data_npc.length;na++) {
			    if(data_npc[na].map == mapEvents.id) {
			      events.push(new gameEvent(data_npc[na]));
  
			    }
			}
			
			
				///ở đây á
			
			
		
			
			
			if( tagAlong != "" ) {
				follower = new gameEvent();
				events.push(follower);
				
				follower.id = -1;
				follower.name = tagAlongName;

				follower.mapPosition.X = userEvent.mapPosition.X;
				follower.mapPosition.Y = userEvent.mapPosition.Y+3;
				follower.type = "Action Button";
				follower.spriteName = tagAlong + ".png";
				follower.direction = userEvent.direction;
				follower.moveType = "Follow User";
				follower.bIsUser = false;
				follower.bEventEnabled = true;
        		follower.eventData.push(new ScriptLine( 1, "MOVE EVENT" , "-1^move to user^1"));
        	
			}
			
		}
		
	
		
		this.getEvent = function(id) 
		{
			for(var k=0;k<events.length;k++) {
				if( events[k].id == id ) {
					return events[k];
				}
			}
			return null;
		}
		
		this.evaluateEvents = function()    // Define Method
		{
			for(var k=0;k<events.length;k++) {
				events[k].evaluate();
			}
			for(var k=0;k<mmoUsers.length;k++) {
				mmoUsers[k].evaluate();
			}
		}
		
		this.drawEvents = function(ctx,positionToDraw)    // Define Method
		{
			for(var k=0;k<events.length;k++) {
				if( positionToDraw == "above" ) {
					if( events[k].mapPosition.Y > userEvent.mapPosition.Y+2 ) {
						events[k].drawImage(ctx);
						
					}
				} else {
					if( events[k].mapPosition.Y <= userEvent.mapPosition.Y+2 ) {
						events[k].drawImage(ctx);
				         
					}
				}
			}
			for(var k=0;k<mmoUsers.length;k++) {
				if( positionToDraw == "above"  ) {
					if( mmoUsers[k].y > userEvent.mapPosition.Y ) {
						mmoUsers[k].drawImage(ctx);
					}
				} else {
					if( mmoUsers[k].y <= userEvent.mapPosition.Y ) {
						mmoUsers[k].drawImage(ctx);
					}
				}
			}
		}
		
		this.drawNames = function(ctx)    // Define Method
		{
			for(var k=0;k<mmoUsers.length;k++) {
				mmoUsers[k].drawNames(ctx);
			}
			//thongtin
			
			if(offhieuung !=0 && timeset <=50) {
			    timeset++;
			  	ctx.font = "bold 13px sans-serif";
				ctx.textAlign = "center";
				if(setwin) {
			drawShadowText(ctx,""+setwin+"",  userEvent.X+12, userEvent.Y-25-timeset,"#B40404"); 
				}
				if(setvatpham) {
			drawShadowText(ctx,""+setvatpham+"",  userEvent.X+12, userEvent.Y-10-timeset,"#F5A9A9"); 
				}
				if(textset) {
			drawShadowText(ctx,""+textset+"",  userEvent.X+12, userEvent.Y+5-timeset,"#086A87"); 
				}
			if(setexp) {
			drawShadowText(ctx,""+setexp+"",  userEvent.X+12, userEvent.Y+20-timeset,"#00FFFF");  
			}
if(setxu) {
				drawShadowText(ctx,""+setxu+"",  userEvent.X+12, userEvent.Y+35-timeset,"#01DF01");  
}
				if(timeset>50) {
				    offhieuung = 0;
				    timeset =0;
				    setxu=0
				    setexp =0;
				}
			}
			
			if( userEvent.msg != "" ) {
				ctx.font = "bold 13px sans-serif";
				ctx.textAlign = "center";
				drawShadowText(ctx,userEvent.msg,  userEvent.X+12, userEvent.Y-1,"#FFFFFF");
			} else {
				ctx.font = "bold 11px sans-serif";
				ctx.textAlign = "center";
				drawShadowText(ctx,userName,  userEvent.X+12, userEvent.Y-1,"#12D055");
			}
			//////////////HIỆU ỨNG MY////////////////
			if(+my.users.pokemon >=0) {
			for(var k=0;k<my.buff.length;k++) {
		////eff choáng
		if(my.buff[k].buff =="choang"){
	      if(+my.buff[k].load <=1) {
		ctx.drawImage(resourceByKey("choang1"),0,0,50,22,  userEvent.X-10, userEvent.Y-30,50,22);
} else {
   		ctx.drawImage(resourceByKey("choang2"),0,0,36,24,  userEvent.X-10, userEvent.Y-30,36,24);
}
if(+my.buff[k].load >=2) {
    my.buff[k].load=0;
}

my.buff[k].load++;
my.camdi =1;
my.camdanh=1;
}
////eff đóng băng

if(my.buff[k].buff =="dongbang"){
	     if(my.buff[k].time -date() >=3000 ) {
   		ctx.drawImage(resourceByKey("dongbang"),0,0,52,34,  userEvent.X-5, userEvent.Y+10,36,24);
} else if(my.buff[k].time -date() >=2000 ) {
     		ctx.drawImage(resourceByKey("dongbang2"),0,0,54,36,  userEvent.X-5, userEvent.Y+10,36,24);
}
else if(my.buff[k].time -date() >=1000 ) {
     		ctx.drawImage(resourceByKey("dongbang3"),0,0,62,40,  userEvent.X-5, userEvent.Y+10,36,24);
} else {
     		ctx.drawImage(resourceByKey("dongbang4"),0,0,50,28,  userEvent.X-5, userEvent.Y+10,36,24);
    
}


    


my.camdi =1;
my.camdanh=1;
}

////bỏng


if(my.buff[k].buff =="bong"){
	    
if(+my.buff[k].tacdung >=1 && +my.buff[k].timetacdung <= date()) {
    	ctx.drawImage(resourceByKey("bong"),0,0,32,24,  userEvent.X, userEvent.Y+10,32,22);

}

}

if(my.buff[k].buff =="troi"){
	      if(+my.buff[k].load <=1) {
		ctx.drawImage(resourceByKey("troi"),0,0,36,40,  userEvent.X-10, userEvent.Y+10,32,22);
} else
if(+my.buff[k].load ==2) {
		ctx.drawImage(resourceByKey("troi2"),0,0,40,40,  userEvent.X-10, userEvent.Y+10,32,22);
} else
if(+my.buff[k].load ==3) {
		ctx.drawImage(resourceByKey("troi3"),0,0,44,44,  userEvent.X-10, userEvent.Y+10,32,22);
} else
{
		ctx.drawImage(resourceByKey("troi4"),0,0,34,38,  userEvent.X-10, userEvent.Y+10,32,22);
}

if(+my.buff[k].load >=4) {
    my.buff[k].load=0;
}

my.buff[k].load++;
my.camdi =1;
}


if(my.buff[k].buff =="hoihp"){

	      if(+my.buff[k].load <=1) {
		ctx.drawImage(resourceByKey("hp1"),0,0,50,48,  userEvent.X-10, userEvent.Y,40,38);
}
else
 if(+my.buff[k].load ==2) {
		ctx.drawImage(resourceByKey("hp2"),0,0,51,45,  userEvent.X-10, userEvent.Y,40,38);
}
else
if(+my.buff[k].load ==3) {
		ctx.drawImage(resourceByKey("hp3"),0,0,50,54,  userEvent.X-10, userEvent.Y,40,38);
}
else {
		ctx.drawImage(resourceByKey("hp4"),0,0,55,59,  userEvent.X-10, userEvent.Y,40,38);
}
if(+my.buff[k].load >=4) {
    my.buff[k].load=0;
}

if(my.buff[k].timetacdung <= date() && +my.chiso.hp >=1) {
 my.chiso.hp = +my.chiso.hp + +my.chiso.hpfull/100*+my.buff[k].tacdung;
 setdrawn('+'+tron(my.chiso.hpfull/100*+my.buff[k].tacdung)+'');
 my.buff[k].timetacdung = date() + 1000;
 ketnoi();
 if(my.chiso.hp >= my.chiso.hpfull ) {
     my.buff[k].time=0;
 }
 
}


my.buff[k].load++;

}


if(my.buff[k].buff =="hs"){

	      if(+my.buff[k].load <=1) {
		ctx.drawImage(resourceByKey("hs1"),0,0,40,41,  userEvent.X-10, userEvent.Y,40,38);
}
else
 if(+my.buff[k].load ==2) {
		ctx.drawImage(resourceByKey("hs2"),0,0,49,48,  userEvent.X-10, userEvent.Y,40,38);
}
else
if(+my.buff[k].load ==3) {
		ctx.drawImage(resourceByKey("hs3"),0,0,48,46,  userEvent.X-10, userEvent.Y,40,38);
}
else {
		ctx.drawImage(resourceByKey("hs4"),0,0,50,45,  userEvent.X-10, userEvent.Y,40,38);
}
if(+my.buff[k].load >=4) {
    my.buff[k].load=0;
}

if(my.buff[k].timetacdung <= date()) {
 my.chiso.hp = +my.chiso.hp + +my.chiso.hpfull/100*+my.buff[k].tacdung;
  my.chiso.mp = +my.chiso.mp + +my.chiso.mpfull/100*+my.buff[k].tacdung;

 setdrawn('+'+tron(my.chiso.hpfull/100*+my.buff[k].tacdung)+'');
 my.buff[k].timetacdung = date() + 1000;
 ketnoi();
 if(my.chiso.hp >= my.chiso.hpfull ) {
     my.buff[k].time=0;
 }
 
}


my.buff[k].load++;

}







///delete from eff no time 
if(+my.buff[k].time <= date()) {
    my.camdi=0;
    my.camdanh=0;
my.buff.splice(k, 1);
}
///ducnghia
		
		
			}
	  
			}
			
if(my.buff.length <=0) {
    my.camdi=0;
    my.camdanh=0; 
}			
	////////////PokeMon Biến hình////////////////////////	
			
			
			//////////////////////////////
		
			
			if(camxuc>=0 && timecamxuc <=150) {
			if(datacamxuc<=10) {
			    var stepcx = 32;  
			    datacamxuc++;
			}
			else
			if(datacamxuc>=11 && datacamxuc <=20) {
			   			    var stepcx =0; datacamxuc++; 
 
			}
			else {
			    var stepcx =0; datacamxuc=0; 
			}
			
	ctx.drawImage(resourceByKey("camxuc"), 32*camxuc+stepcx, 0, 32, 32,  userEvent.X-5, userEvent.Y-40, 32, 32 );
	
		timecamxuc++;
		if(timecamxuc >=150) {
		    timecamxuc =0;
		    camxuc = -1;
		}
			} else if(my.users.co >=1) {
if(my.users.coload <=0)  my.users.coload = 1;
else if(my.users.coload ==1) my.users.coload = 2;
else  my.users.coload = 0;  
			   
			 
			 	ctx.drawImage(resourceByKey("co"), 0, co(my.users.co) + 12*my.users.coload, 12, 12,  userEvent.X+5, userEvent.Y-22, 12, 12 );

			    
			}
			
		
		}
		
		//skill


		
		this.load = function(mapData)    // Define Method
		{
		
			this.tileSize = mapData.getAttribute("tilewidth");
			this.mapWidth = mapData.getAttribute("width") * this.tileSize;
			this.mapHeight = mapData.getAttribute("height") * this.tileSize;
			
			
			
			var tileCount = (this.mapWidth / this.tileSize) * (this.mapHeight / this.tileSize);
			this.mapCollisionData = new Array(tileCount);
			
			for(var i=0;i<mapData.childNodes.length;i++) {
				var node = mapData.childNodes[i];
				
				if( node.nodeName == "layer") {
					if( node.getAttribute("name") == "Collision" ) {
						var dataNode = firstChildNodeNamed("data",node);
						var data = getDataOfImmediateChild(dataNode);
						
						data = data.replace(/\r\n/i, '').trim();
						rawMapData = stringToBytes(base64_decode(data));
						
						
						
					} else
					if( node.getAttribute("name") == "ducnghia" ) {
						var dataNode = firstChildNodeNamed("data",node);
						var data = getDataOfImmediateChild(dataNode);
						
						data = data.replace(/\r\n/i, '').trim();
						rawMapData = stringToBytes(base64_decode(data));
						
						
						
					}
				} else if( node.nodeName == "objectgroup") {
					if( node.getAttribute("name").toLowerCase() == "grass" ) {
						this.grassPatches = new Array();
						
						for (var k = 0; k < node.childNodes.length; k++) {
							var object = node.childNodes[k];
							
							if( object.nodeName != "#text" ) {
								var x1 = parseInt(object.getAttribute("x"))/this.tileSize;
								var y1 = parseInt(object.getAttribute("y"))/this.tileSize;
								
								var width = parseInt(object.getAttribute("width"))/this.tileSize;
								var height = parseInt(object.getAttribute("height"))/this.tileSize;
								
								var x2 = x1 + (width+1);
								var y2 = y1 + (height+1);
                               var vx = parseInt(object.getAttribute("x"));
                               var vy =  parseInt(object.getAttribute("y"));
                               var vw =  parseInt(object.getAttribute("width"));
                               var vh =  parseInt(object.getAttribute("height"));

								this.grassPatches.push(new Region(x1,y1,x2,y2,vx,vy,vw,vh));
							}
							
						}
					}
				}
				
			}
		}
		
		
        this.getTile = function( x,  y)
        {
        	var tilesWide = mapWidth / tileSize;
        	var pos = 0;
            x++;
            y++;
//dichuyen
        	if( y * tilesWide + x >= 0 && y * tilesWide + x < mapCollisionData.length ) {
        		if( rawMapData ) {
        			pos = (y * tilesWide + x)*4;
        		//	console.log(rawMapData[pos]);
        			if(rawMapData[pos] <= 0 && rawMapData[pos+1] <= 0  && rawMapData[pos+2] <= 0  && rawMapData[pos+3] <= 0   ) {
        				return 0;
        			}
        			return 1;
        		}
        		
            	//return mapCollisionData[y * tilesWide + x];
            } 
            return -1;
        }
		
		
		this.tileIsWalkable = function(position)    // Define Method
		{
			if( position.X < -1 )
				return false;
			if( position.Y < -1 )
				return false;
			if( position.X > this.mapWidth/16 )
				return false;
			if( position.Y > this.mapHeight/16 )
				return false;
	
			if( this.tileIsFreeFromEvents(position) == false ) {
				return false;
			}
	
			if( this.getTile(position.X,position.Y) == 0 ) {
				return true;
			}
				
			return false;
		}
		
		this.tileIsFreeFromEvents = function(position)    // Define Method
		{	
			
			for(var k=0;k<events.length;k++) {
			    if( events[k].spriteName != "" && events[k].spriteName != null && events[k].bHidden == false && events[k].bEventEnabled == true ) {
					if( events[k].mapPosition.X == position.X ) {
						if( events[k].mapPosition.Y == position.Y+2 ) {
							return false;
						}
					}
				}
			}
			
			
			//TODO: Complete Event Collision Detection
			return true;
		}
		
		return this;
	}

function base64_decode (data) {
    // Decodes string using MIME base64 algorithm  

    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,
        dec = "",
        tmp_arr = [];
 
    if (!data) {
        return data;
    }
 
    data += '';
 
    do { // unpack four hexets into three octets using index points in b64
        h1 = b64.indexOf(data.charAt(i++));
        h2 = b64.indexOf(data.charAt(i++));
        h3 = b64.indexOf(data.charAt(i++));
        h4 = b64.indexOf(data.charAt(i++));
 
        bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
 
        o1 = bits >> 16 & 0xff;
        o2 = bits >> 8 & 0xff;
        o3 = bits & 0xff;
 
        if (h3 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1);
        } else if (h4 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1, o2);
        } else {
            tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
        }
    } while (i < data.length);
 
    dec = tmp_arr.join('');
    //dec = this.utf8_decode(dec);
 
    return dec;
}

String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}

function stringToBytes ( str ) {
  var ch, st, re = [];
  for (var i = 0; i < str.length; i++ ) {
    ch = str.charCodeAt(i);  // get char 
    st = [];                 // set up "stack"
    do {
      st.push( ch & 0xFF );  // push byte to stack
      ch = ch >> 8;          // shift value down by 1 byte
    }  
    while ( ch );
    // add stack contents to result
    // done because chars have "wrong" endianness
    re = re.concat( st.reverse() );
  }
  // return an array of bytes
  return re;
}

function getIntAt ( arr, offs ) {
	
	if( arr[offs+0] == 0 && arr[offs+1] == 0 && arr[offs+2] == 0 && arr[offs+3] == 0 ) {
		return 0;
	} 
	return 1;
          
  return (arr[offs+0] << 24) +
         (arr[offs+1] << 16) +
         (arr[offs+2] << 8) +
          arr[offs+3];
}


// ################################################
// ### BATTLE CLASS ###########################
// ################################################

//Battle Variables
var bInBattle = false;
var battleStage = 0;
var battleTaskQueue = new Array();

var teamMonsters = new Array();
var opponentMonsters = new Array();

var monSkills = new Array();
var battleItems = new Array();

var doingCaptcha = false;

var captchaImages = new Array();
var captchaKeys = new Array();

var curMon = null;
var curOpp = null;
var nextMon = null;
var nextOpp = null;

var battleScript = new Array();
var battleSelectedMenu = 0;
var battleItemSelectedMenu = 0;

var battleSwappedMonsters = false;

var battleTick1 = 0;
var battleTick2 = 0;
var battleTick3 = 0;
var battleLoading = false;
var loadExplore = false;

var drawMons = true;
var drawMyHp = true;
var drawOpHp = true;

var bWildBattle = false;

function wipeWildMonsterBox() {
	bWildBattleIsReady = false;
	var form = document.getElementById('mws-explore-encounter');
	if( form ) {
		form.innerHTML = "";
	}
	
}

var activeScript = new Array();

//Animation timers
var scriptTick1 = 0;
var scriptTick2 = 0;
var scriptTick3 = 0;
var scriptTick4 = 0;

var drawnObjects = new Array();


var menuSelection = 0;
var menuOptions = new Array();
var menuDepth = new Array();
function scriptProgress() {
	//reset objects for the next function
	drawnObjects = new Array();
	scriptTick1 = 0;
	scriptTick2 = 0;
	scriptTick3 = 0;
	scriptTick4 = 0;
	wipeWildMonsterBox();
	menuOptions = new Array();
	
	
	while( activeScript[0].func == null )
		activeScript.splice(0,1);
	
	if( activeScript.length > 0 ) {
		var scriptFunc = activeScript[0].func.toLowerCase();
		var scriptData = activeScript[0].args; 
		
		if( scriptFunc == "server side" ) {
			loadServerSide(scriptData.cdata);
		} else if( scriptFunc == "display message" ) {
		
		}
		else if( scriptFunc == "attack" ) {
		
		}
		
		
		  else if( scriptFunc == "move event" ) {
			//Add the function to the events queue
			var args = scriptData.split("^");
			var evnt = currentMap.getEvent(args[0]);
			var dir = args[1].toLowerCase();
			var steps = parseInt(args[2]);
			
			if( args[0] == "0" )
			    evnt = userEvent;
			
			if( dir.toLowerCase() == "move to user" ) {
				var xDif = userEvent.mapPosition.X - evnt.mapPosition.X;
				var yDif = userEvent.mapPosition.Y + 2 - evnt.mapPosition.Y;
				steps = 0;
				
				if( xDif != 0 ) {
					if( xDif < 0 ) {
						dir = "left";
						steps = -xDif;
					} else {
						dir = "right";
						steps = xDif;
					}
				}
				if( yDif != 0 ) {
					if( yDif < 0 ) {
						dir = "up";
						steps = -yDif;
					} else {
						dir = "down";
						steps = yDif;
					}
				}
				
				if( steps == 1)
					steps++;
				
				for(var i=0;i<steps-1;i++) {
					evnt.moveQueue.push(dir);
				}
				
			} else {	
			
				if( dir == "forward" ) {
					if( evnt.direction == 0 )
						dir = "up";
					if( evnt.direction == 1 )
						dir = "down";
					if( evnt.direction == 2 )
						dir = "left";
					if( evnt.direction == 3 )
						dir = "right";
				}
			/*
				for(var i=0;i<steps;i++) {
					evnt.moveQueue.push(dir);
				}
				*/
				
			}
			
		    scriptLineComplete();
		} 
		
	 else if( scriptFunc == "warp" ) {
			arrivalDirection = null;
			var args = scriptData.split("^");
			
			userEvent.mapPosition.X = parseInt(args[1]);
			userEvent.mapPosition.Y = parseInt(args[2]);
			
		    scriptLineComplete();
		    if( args[0].toLowerCase() != mapCode.toLowerCase() ) {
		        dulieumap(args[0],args[3]);
		    }
		} else if( scriptFunc == battlescreen ) {
		
		} else if( scriptFunc == "battle" ) {
		//	battleWithTrainer(); ///xóa
		    scriptLineComplete();
		} else if( scriptFunc == "inn animation" ) {
			playMusicOnce("healing");
		} else {
		    scriptLineComplete();
		}
		
	}
}

//updates the current line being executed and triggers the end of the script function
function scriptUpdate() {
	if( activeScript.length > 0 ) {
		var scriptFunc = activeScript[0].func.toLowerCase();
		var scriptData = activeScript[0].id;
		if( scriptFunc == "attack" ) {
					scriptLineComplete();
					att(scriptData);
		
		} else
		if( scriptFunc == "item" ) {
					scriptLineComplete();
					nhatvp(scriptData);
		
		} else
		if( scriptFunc == "display message" ) {
					scriptLineComplete();
		noichuyen(scriptData);
			
			
		} else if( scriptFunc == "main menu inventory" ) {
		
			if( keyState.btn2 ) {
				if( menuDepth.length == 0 ) {
					keyState.btn2 = false;
					scriptLineComplete();
					scriptAddLine("main menu","");
					scriptProgress();
				}
			} else if( keyState.btn1 ) {
				var selectedItem = inventory[menuSelection];
				if( selected.name == "Inventory" ) {
					//use item...
					scriptLineComplete();
				}
			} else if( keyState.up ) {
				menuSelection--;
				if( menuSelection < 0 )
					menuSelection = inventory.length-1;
				keyState.up = false;
			} else if( keyState.down ) {
				menuSelection++;
				if( menuSelection >= inventory.length )
					menuSelection = 0;
				keyState.down = false;
			} 
		
		} else if( scriptFunc == "main menu" ) {
		
			if( keyState.btn2 ) {
				if( menuDepth.length == 0 ) {
					keyState.btn2 = false;
					scriptLineComplete();
				}
			} else if( keyState.btn1 ) {
				var selected = menuOptions[menuSelection];
				if( selected.text == "Inventory" ) {
					keyState.btn1 = false;
					scriptLineComplete();
					scriptAddLine("main menu inventory","");
					scriptProgress();
				}
			} else if( keyState.up ) {
				menuSelection--;
				if( menuSelection < 0 )
					menuSelection = menuOptions.length-1;
				keyState.up = false;
			} else if( keyState.down ) {
				menuSelection++;
				if( menuSelection >= menuOptions.length )
					menuSelection = 0;
				keyState.down = false;
			} 
		
			
		} else if( scriptFunc == "battle" ) { 
		
		} else if( scriptFunc == "quest start" ) {
			scriptTick1++;
			if( scriptTick1 > 1 ) {
				scriptTick2++;
				scriptTick1=0;
			}
			
			if( (keyState.btn1 || keyState.btn2) && scriptTick2 > 10 ) {
				scriptLineComplete();
				keyState.btn1 = false;
				keyState.btn2 = false;
			}
		} else if( scriptFunc == "quest finish" ) {
			scriptTick1++;
			if( scriptTick1 > 1 ) {
				scriptTick2++;
				scriptTick1=0;
			}
			
			if( (keyState.btn1 || keyState.btn2) && scriptTick2 > 10 ) {
				scriptLineComplete();
				keyState.btn1 = false;
				keyState.btn2 = false;
			}
		} else if( scriptFunc == "shop" ) {
			var items = scriptData.split("^");
			
			if( scriptTick1 == 0 ) {
				if( keyState.up ) {
					battleItemSelectedMenu = battleItemSelectedMenu - 1;
					if( battleItemSelectedMenu < 0 ) 
							battleItemSelectedMenu=0;
					keyState.up = false;
				} else if( keyState.right ) {
					battleItemSelectedMenu = battleItemSelectedMenu + 4;
					if( battleItemSelectedMenu >= items.length ) 
						battleItemSelectedMenu = items.length-1;
					keyState.right = false;
				} else if( keyState.left ) {
					battleItemSelectedMenu = battleItemSelectedMenu - 4;
					if( battleItemSelectedMenu < 0 ) 
						battleItemSelectedMenu=0;
					keyState.left = false;
				} else if( keyState.down ) {
					battleItemSelectedMenu = battleItemSelectedMenu + 1;
					if( battleItemSelectedMenu >= items.length ) 
						battleItemSelectedMenu = items.length-1;
					keyState.down = false;
				} else if( keyState.btn1 ) {
					var itemData = items[battleItemSelectedMenu].split("|");
					loadUtility("action=buy&item=" + itemData[0] + "&npc=" + lastTriggeredEventName);
					keyState.btn1 = false;
					
				} else if( keyState.btn2 ) {
					scriptLineComplete();
					keyState.btn2 = false;
				}
			}
		
			
		} else if( scriptFunc == "add item" ) {
			
			scriptTick1++;
			if( scriptTick1 > 80 ) {
				scriptLineComplete();
			}
			
		} else if( scriptFunc == "sync all" ) {
			
			var bClear = true;
			for(var k=0;k<currentMap.events.length;k++) {
				if( currentMap.events[k].moveQueue.length > 0 ) {
					bClear = false;
				}
			}
			if( userEvent.moveQueue.length > 0 ) {
				bClear = false;
			}
			
			if( bClear ) {
				scriptLineComplete();
			}
			
		} else if( scriptFunc == "move event" ) {
		    
		} else if( scriptFunc == "choice" ) {
			var args = scriptData.split("^");
		    
		    scriptTick1++;
			if( scriptTick1 > 1 ) {
				scriptTick2++;
				scriptTick1=0;
			}
			
			if( (keyState.btn1 || keyState.btn2) && scriptTick2 < args[0].length ) {
				playSFX("beep");
				scriptTick2 = args[0].length;
				keyState.btn1 = false;
				keyState.btn2 = false;
			} else {
				//make choice
				if( keyState.up ) {
					scriptTick3--;
					if( scriptTick3 < 0 ) {
						scriptTick3 = args.length-2;
					}
					keyState.up = false;
				} else if( keyState.down ) {
					scriptTick3++;
					if( scriptTick3 > args.length-2 ) {
						scriptTick3 = 0;
					}
					keyState.down = false;
				} else if( keyState.btn1 && scriptTick4 == 0) {
					loadUtility("action=choice&item=" + (scriptTick3+1) );
					scriptTick4 = 1;
					
					keyState.btn1 = false;
				}
				
				
				
			}
			
			
			
		} else if( scriptFunc == battlescreen ) {
		 	//
			// Animate curtains falling down the screen.
			//
			//
			// Animate curtains falling down the screen.
			//
			if( drawnObjects.length == 0 ) {
				drawnObjects.push("rect:0:0:width:height:rgba(255, 255, 255, 0)");
			}
			
			
			if( scriptTick2 == 0 ) {
				scriptTick1=scriptTick1+24;
				if( scriptTick1 > cvsHeight ) {
					scriptTick2++;
					scriptTick1 = 1;
					drawnObjects[0] = "rect:0:0:width:height:rgba(237,21,21,1)";
				} else {
					drawnObjects[0] = "rect:0:0:width:"+scriptTick1+":rgba(237,21,21,1)";
				}
				
			} else if( scriptTick2 == 1 ) {
				scriptTick1-=0.05;
				if( scriptTick1 <= 0 ) {
					scriptTick1 = 0;
					
					bInBattle = true;
					
					if( scriptData == "WILD" ) {
						loadBattle("x="+userEvent.mapPosition.X+"&y="+userEvent.mapPosition.Y+"&action=encounter");
					} else if( scriptData == "TRAINER" ) {
					///	loadBattle("x="+userEvent.mapPosition.X+"&y="+userEvent.mapPosition.Y+"&action=trainer");
					} else if( scriptData == "PVP" ) {
						loadBattle("x="+userEvent.mapPosition.X+"&y="+userEvent.mapPosition.Y+"&action=pvp");
					}
					
					scriptLineComplete();
					return;
				}
				drawnObjects[0] = "rect:0:0:width:height:rgba(237,186,21,"+scriptTick1+")";
			}
				
					
		} else if( scriptFunc == "inn animation" ) {
		 	//
			// Animate curtains falling down the screen.
			//
			if( drawnObjects.length == 0 ) {
				drawnObjects.push("rect:0:0:width:height:rgba(255, 255, 255, 0)");
			}
			
			
			if( scriptTick2 == 0 ) {
				scriptTick1=scriptTick1+16;
				if( scriptTick1 > cvsHeight ) {
					scriptTick2++;
					scriptTick1 = 1;
					drawnObjects[0] = "rect:0:0:width:height:rgba(237,186,21,1)";
				} else {
					drawnObjects[0] = "rect:0:0:width:"+scriptTick1+":rgba(237,186,21,1)";
				}
				
			} else if( scriptTick2 == 1 ) {
				scriptTick1-=0.01;
				if( scriptTick1 <= 0 ) {
					scriptTick1 = 0;
					scriptLineComplete();
					return;
				}
				drawnObjects[0] = "rect:0:0:width:height:rgba(237,186,21,"+scriptTick1+")";
			}
			
		}
	}
}

function scriptLineComplete() {
	activeScript.splice(0, 1);
	if( activeScript.length > 0 )
		scriptProgress();
}

function menuOpen() {
	if( activeScript.length == 0 ) {
		scriptAddLine("main menu");
		scriptProgress();
	}
}



function dra2() {
    		var dataconssole = datacanvas;
var centerX = cvsWidth/2;
		var centerY = cvsHeight/2;
    	if(dataconssole=="camxuc") {
	ctx.drawImage(resourceByKey("camxuc"), 32*0, 0, 32, 32,  0,155, 32, 32 );
	ctx.drawImage(resourceByKey("camxuc"), 32*2, 0, 32, 32,  32*1,155, 32, 32 );
	ctx.drawImage(resourceByKey("camxuc"), 32*4, 0, 32, 32,  32*2,155, 32, 32 );
	ctx.drawImage(resourceByKey("camxuc"), 32*6, 0, 32, 32,  32*3,155, 32, 32 );

	ctx.drawImage(resourceByKey("camxuc"), 32*8, 0, 32, 32,  32*0,190, 32, 32 );
	ctx.drawImage(resourceByKey("camxuc"), 32*10, 0, 32, 32,  32*1,190, 32, 32 );
	ctx.drawImage(resourceByKey("camxuc"), 32*12, 0, 32, 32,  32*2,190, 32, 32 );
	ctx.drawImage(resourceByKey("camxuc"), 32*14, 0, 32, 32,  32*3,190, 32, 32 );
	
	ctx.drawImage(resourceByKey("camxuc"), 32*16, 0, 32, 32,  32*0,225, 32, 32 );
	ctx.drawImage(resourceByKey("camxuc"), 32*18, 0, 32, 32,  32*1,225, 32, 32 );
	ctx.drawImage(resourceByKey("camxuc"), 32*20, 0, 32, 32,  32*2,225, 32, 32 );
	ctx.drawImage(resourceByKey("camxuc"), 32*22, 0, 32, 32,  32*3,225, 32, 32 );	

	   	


	}
}
function scriptDraw() {
	
	if( activeScript.length > 0 ) {
		var scriptFunc = activeScript[0].func.toLowerCase();
		var scriptData = activeScript[0].args;
		var centerX = cvsWidth/2;
		var centerY = cvsHeight/2;

	   if( scriptFunc == "server side" ) {
			

		//	ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
		//	ctx.fillRect(centerX - 101, centerY +77, 202,32);
		//	ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
		//	ctx.fillRect(centerX - 100, centerY +78, 200,30);
			
			ctx.textAlign = "center";
			ctx.font = "bold 14px sans-serif";
		ctx.drawImage(resourceByKey("notice"),  centerX - 101, centerY+77, 200, 40 );
					drawShadowText(ctx,"Load game...", centerX,centerY+107);


			
			
		}
	}
	


}

//Adds an action to the queue
function scriptAddLine(command,data) {
	activeScript.push(new ScriptLine(0,command,data));
	if( activeScript.length == 1 ) {
		scriptProgress();
	}

}

function loadServerSide(args) {

var data_loadserver = {};
   for(var i=0;i<data_npc.length;i++) {
       if(data_npc[i].id == args) {
           if(+data_npc[i].code[0].nhiemvu >+my.users.nhiemvu.id) {
               giaotiep(t('Bạn chưa thể tới khu vực này, hãy hoàn thành nhiệm vụ trước.'));
               					scriptLineComplete();

               return false;
           }

      data_loadserver.line =      data_npc[i].code[0].line;
      data_loadserver.function =      data_npc[i].code[0].function;
      data_loadserver.arguments =      data_npc[i].code[0].arguments;

       }
   }
       loadServerSideCallback(data_loadserver);


}

function loadServerSideCallback(resultsNode) {

		
        			activeScript.push(new ScriptLine( resultsNode.line , resultsNode.function , resultsNode.arguments ));
        		
        	
        	
			//end the current sript line which must be a "server side"
			scriptLineComplete();
			
		
	}
var hatchingEgg = false;
var keepAliveRequest = null;




function btnShowUsers(btn)
{
	if (btn.value == "On")
	{
		btn.value = "Off";
		bShowUsers = false;
		btn.className = "mws-button red small";

	}
	else
	{
		btn.value = "On";
		bShowUsers = true;
		btn.className = "mws-button green small";

	}
}

function userOnWhichChat(v)
{
	userOnWhichChatTab = v.id;
}



function dongtalk() {
  clearTimeout(dxxx);

     }


function giaotiep(data) {
  					$("#npc_menu").html('');
   
 var check = $('#ducnghia_npc').html();
if(check.length >=1) {
    dongload();
}
	var form = document.getElementById('ducnghia_giaotiep');
		document.getElementById('ducnghia_giaotiep').style.display = "block";
		document.getElementById('ducnghia_menu_giaotiep').style.display = "block";

	//	form.innerHTML =data;
	
	var content = data;
	
var contentLength = content.length;
var char = 0;
(function ducnghai_Dz_takl() { 
  dxxx = setTimeout(function() {
        char++;
        var type = content.substring(0, char);
  $('#ducnghia_npc').html(type + '');
  //recursive
        ducnghai_Dz_takl();
    }, 20);
}());
}
function c_giaotiep() {
    		document.getElementById('ducnghia_giaotiep').style.display = "none";
		document.getElementById('ducnghia_menu_giaotiep').style.display = "none";
 var check = $('#ducnghia_npc').html();
if(check.length >=1) {
    dongload();
}
}

function dongload() {
  clearTimeout(dxxx);

     }
     
     
     function datamap(){
         $.nghia({
url : '/xml/tool.php?xem',
type : 'POST',
data : {mapID : mapID},

ducnghia : function(result){
canvas('Dữ liệu trò chơi',result);
}
});
     }   
     
     
     function edit(id){
         $.nghia({
url : '/xml/tool.php?edit',
type : 'POST',
data : {id : id},

ducnghia : function(result){
canvas('Sửa trò chơi',result);

}
});
     } 
     
  
     
   
    function taodata(){
         $.nghia({
url : '/xml/tool.php?taodata',
type : 'POST',
data : {mapID : mapID , x : userEvent.mapPosition.X, y : userEvent.mapPosition.Y},

ducnghia : function(result){
canvas('Tạo dữ liệu game',result);

}
});
     }   
     
     
     function xemtruoc() {
   
  var direction = $('#direction').val();
  var images = $('#style').val();

				$('#xemtruoc').html('<img src="/xml/nhanvat.php?nhanvat='+images+'&nut='+direction+'">');	
}


function dongedit(){
    $('#ducnghia_listdata').html('');

}
     
     
     function editcode(){
    $.nghia({
            	       	url         : '/xml/tool.php?luu',
    	            	type        : 'POST',
    	            	data        : $("#ducnghia_dz_trang").find("select, textarea, input").serialize(),
                  	ducnghia : function(result){

						$('#giaotiep').html('ADMIN:<font color="red"><b>'+result+'</b></font>');	
    	            	}
    	        	});
    	        	loadMapEvents();
}

 function taocode(){
    $.nghia({
            	       	url         : '/xml/tool.php?tao',
    	            	type        : 'POST',
    	            	data        : $("#ducnghia_dz_trang").find("select, textarea, input").serialize(),
                  	ducnghia : function(result){

						$('#giaotiep').html('ADMIN:<font color="red"><b>'+result+'</b></font>');	
    	            	}
    	        	});
    	        	loadMapEvents();
}





function c_menu() {
    if(userID>=1) {
    		document.getElementById('ducnghia_menu').style.display = "none";
    }
}

function o_menu() {
    		document.getElementById('ducnghia_menu').style.display = "block";
 
}












  
  function web_chat(){

      $('#show_chatmap').toggle('fast','linear');  

  }  
  
  




  /////////////////ducnghia
  




///module gia tộc



function map_thongbao(){
   

    canvas(t('thông báo'),t(maychu.tip));


} 

function map_tanthu(){
   

    canvas(t('Hưỡng dẫn'),t(maychu.tiplogin));


}





     
////

function quayso(){
$.nghia({
url : code(),
type : 'POST',
data : {show :1 , a :'qs'},

ducnghia : function(result){
 canvas('THỬ VẬN MAY',result);

}
});
}  



function icon(btn)
{
	if (btn.value == "On")
	{
		btn.value = "Off";
        nicon = '1';
	}
	else
	{
		btn.value = "On";
        nicon = '0';

	}
}


function amthanh()
{
    $.nghia({
	url : code(),
	type : 'POST',
	data : {a:'us',amthanh:1},
	ducnghia : function(result){

giaotiep(result);
	}
});


}
 
 


function c(msg,type){
    if(!type) {
        type='Admin';
    }
  chatthegioi_msg = msg;
  chatthegioi = 1;
    chatthegioi_time= cvsWidth;      
     fixloi("<b><font color='red'>["+type+"]</font> "+msg+"</b>");
    
}


function topgame(id){
c_giaotiep();


$.nghia({
url : code(),
type : 'POST',
data : {id : id , top:1 , a :'t'},

ducnghia : function(result){
canvas('TOP',result);
}
});

}  


 function xoagame(id){
         $.nghia({
url : '/xml/tool.php?delete',
type : 'POST',
data : {id : id},
ducnghia : function(result){
datamap();
    	        	loadMapEvents();

}
});
     }    
     
     
     function nap() {
c_giaotiep();
 $.nghia({
url : '/napthe/index.php',
type : 'POST',
ducnghia : function(result){
canvas('NẠP RUBY',result);

}
});

      }
      
      
      function napthe(){
        	    	    	var card_type_id = $('#card_type_id').val();
        	    	    	var price_guest = $('#price_guest').val();
        	    	    	var pin = $('#pin').val();
        	    	    	var seri = $('#seri').val();
        	    	    	var note = $('#note').val();
        	    	   	var ma_bao_mat = $('#ma_bao_mat').val();

   $('#notice_the').html('Đang nạp xin chờ...');

$.nghia({
	url : '/napthe/napthe.php',
	type : 'POST',
	data : {card_type_id : card_type_id , price_guest : price_guest , pin : pin , seri : seri , note : note , ma_bao_mat : ma_bao_mat },
	ducnghia : function(result){
	var x = $.parseJSON(result);
    $('#notice_the').html(x.msg);


		                        $("#captcha").attr('src', '/napthe/securimage/securimage_show.php?sid=' + Math.random());
	
	}
 
});
}  
      
      

function chuyenmap(ducnghiaid,ducnghiax,ducnghiay){
    	arrivalDirection = null;

			userEvent.mapPosition.X =ducnghiax;
			userEvent.mapPosition.Y =ducnghiay;
			
		    scriptLineComplete();
		    
		  
		    	loadMap(ducnghiaid);
		    
}






function goto(x,y){
    
userEvent.mapPosition.X = x;
userEvent.mapPosition.Y = y;

}


function fix(){
map('Grassy Patch',26,15);
			
}




function pet(ducnghia,ten) {
    tagAlong = ducnghia.split(".")[0];
    tagAlongName = my.users.username;
    follower = new gameEvent();
				events.push(follower);
					follower.level = 0;

				follower.id = -1;
				follower.name = '';

				follower.mapPosition.X = userEvent.mapPosition.X-3;
				follower.mapPosition.Y = userEvent.mapPosition.Y+3;
				follower.type = "Action Button";
				follower.spriteName = tagAlong + "";
				follower.direction = userEvent.direction;
				follower.moveType = "Follow User";
				follower.bIsUser = false;
				follower.bEventEnabled = true;
        		follower.eventData.push(new ScriptLine( 2, "MOVE EVENT" , "-1^move to user^1"));
	loadMapEventsCallback(gocgame);

}



 
 
 
  function dangki(){
   	var taikhoan = $('#taikhoan').val();
		   	var matkhau = $('#matkhau').val();

$.nghia({
url : code(),
type : 'POST',
data : { taikhoan : taikhoan , matkhau : matkhau , dangki:1,a:'login' },
ducnghia : function(result){

giaotiep(t(result));
}
});
			
}
var loginstt =0;

function dangnhap2() {
    $.nghia({
url : '/data/fixloi.php',
type : 'POST',
ducnghia : function(data){
    console.log('hi');
    console.log(json(data).users);
} 
});
}

/* if(+maychu.active <=0 && +data.users.id >=10) {
         giaotiep(t(maychu.faillogin));
         return false;
     }
     */
function chonmaychunay(id) {
    if(checksv(id) == false) {
        giaotiep(t('Không thể tìm thấy port IP của máy chủ này.'));
        return false;
    } 
    if(checksv(id).code ==1) {
        giaotiep(t('Máy chủ đang bảo trì, vui lòng chọn máy chủ khác.'));
        return false;
    }
    c_canvas();
    server = id;
    khach();
}     
function listcacmaychu() {
    var td='';
    td+='<hr>';
     for(var i=0;i<listsv.length;i++) {
         if(+listsv[i].code ==0) {
       td+='<b class="btlogin" onclick="chonmaychunay('+listsv[i].id+')">'+listsv[i].name+'</b>';
         } else {
        td+='<b class="btlogin2" onclick="chonmaychunay('+listsv[i].id+')">'+listsv[i].name+'</b>';
            
         }
    }
    canvas('Danh sách máy chủ',td);
}
   function dangnhap(){
       if(chologin !=1) {
           giaotiep(t('Đang tải dữ liệu... xin chờ chút...'));
           return false;
       }
  var taikhoan = getdata('taikhoan');
  var matkhau = getdata('matkhau');
giaotiep('loading ....');
$.nghia({
url : '/data/login.php?login_2020',
type : 'POST',
data : { taikhoan : taikhoan , matkhau : matkhau , dangnhap:1,sv : server,a:'login' },
ducnghia : function(data){



if(+data.uid >=10 && +checksv(server).code ==1) {
    giaotiep(t(maychu.faillogin));
    return false;
}

time_connect = Date.now()+20000;
c(maychu.notice);
     my=data.nhanvat;
     my.camdi = 0;
     my.camdanh=0;
    my.click = { id: 0,type: "users",buoc: 0};
    my.pk = {timemoi: 1582344944709,id: 0,cuoc: 0,time: 1582345217526};
    my.attack ={};
    my.danhlan = [];
    my.lichsu = [];
	  ws.send("kick:"+data.nhanvat.users.id);
    c_giaotiep();
c_menu();
    c_vemap();
    soundEnabled=1;
   userName=data.nhanvat.users.username; 
      musicEnabled = data.nhanvat.users.amthanh;
userID =data.nhanvat.users.id;
clan_icon=0;
clan_viettat=0;
 ws.send("login:"+data.nhanvat.users.id+"^");
 mapName = data.nhanvat.users.mapname;
 map(data.nhanvat.users.mapname,+data.nhanvat.users.x-1+1,+data.nhanvat.users.y-1+1,data.nhanvat.users.mapname);
userSprite = data.nhanvat.users.skin;
 userEvent = new gameEvent();
		userEvent.initAsPlayer(Point(+data.nhanvat.users.x-1+1,+data.nhanvat.users.y-1+1));
		loadimggame();
		lichsu('Đăng nhập game.');
		setTimeout(function() {
              map_tanthu();

    }, 3000); 
 

}
});
			
}





function map(map,x,y,images) {
    	
  userEvent.mapPosition.X = x;
userEvent.mapPosition.Y = y;
userX = x;
userY = y;

      mapCode = map;
  dulieumap(map,images);
  loadMapEvents()
loadMapData(map,map);

	
	

}

function doitrang(ducnghiatrang) {
    var xduc = userEvent.mapPosition.X;
    var yduc = userEvent.mapPosition.Y;
    
    userSprite = ducnghiatrang;
    userEvent = new gameEvent();
		userEvent.initAsPlayer(Point(xduc,yduc));
		bum();
}


function shop_skin(){
c_giaotiep();
$.nghia({
url : code(),
type : 'POST',
data : {shopskin :1 , a :'skin'},

ducnghia : function(result){
canvas('Cửa Hàng Trang Phục',result);
}
});
}  


function xem_skin(id){
$.nghia({
url : code(),
type : 'POST',
data : {id : id , xemskin :1 , a :'skin'},

ducnghia : function(result){
var xx = $.parseJSON(result);
giaotiep(xx.info);
					$("#npc_menu").html(xx.ok);

}
});
}  

function mua_skin(id){
$.nghia({
url : code(),
type : 'POST',
data : {id : id , muaskin :1 , a :'skin'},

ducnghia : function(result){
giaotiep(result);
}
});
}  


function doiskin(){
c_giaotiep();
$.nghia({
url : code(),
data : {doiskin:1,a:'skin'},
type : 'POST',

ducnghia : function(result){
canvas('BAG',result);
}
});
} 


function ok_skin(id){
c_menu();
$.nghia({
url : code(),
type : 'POST',
data : {id : id , okdoi:1,a:'skin'},

ducnghia : function(result){
    var x = $.parseJSON(result);
doitrang(x.nv);
}
});
}  


 function taonv(){
         $.nghia({
url : '/xml/tool.php?taonv',
type : 'POST',

ducnghia : function(result){
$('#ducnghia_listdata').html(result);

}
});
     }   
     
     
       function adnv(){
    $.nghia({
            	       	url         : '/xml/tool.php?adnv',
    	            	type        : 'POST',
    	            	data        : $("#ducnghia_dz_trang").find("select, textarea, input").serialize(),
                  	ducnghia : function(result){

						$('#giaotiep').html('ADMIN:<font color="red"><b>'+result+'</b></font>');	
    	            	}
    	        	});
}








      





function reg_choingay() {
   	var taikhoan = $('#taikhoan').val();
    var matkhau = $('#matkhau').val();

$.nghia({
url : '/data/login.php?dky_2020',
type : 'POST',
data : { taikhoan : taikhoan , matkhau : matkhau , regchoi :1,a:'login' },
ducnghia : function(result){
var x = $.parseJSON(result);
giaotiep(x.ducnghia);



}
});
			
   
}




 


 
function c_nhanthuong(){
                         document.getElementById('ducnghia_nhanthuong').style.display = 'none';
       $('#ducnghia_nhanthuong').removeClass('lac');

}

function nhanthuong(nghiait){

    $('#ducnghia_nhanthuong').addClass('lac');

                     document.getElementById('ducnghia_nhanthuong').style.display = 'block';
						$('#ducnghia_nhanthuong_data').html('<b class="viptxt">'+nghiait+'</b>');	

}




function phimao(){
          $('#ducnghia_dichuyen').toggle('fast','linear');  

}


function c_vemap(){
	$('#ducnghia_canvas').html('');	

}

function lau(sv) {
    caidat.ngonngu = sv;
setdata('ngonngu',sv);

    c_giaotiep();
    if(userID<=0) {
        khach();
    }
}

function khach(){
    
    var nx =    cvsWidth;
var ny =    cvsHeight;
  var khach ='';
   playSFX("login");
   
   if(vietsub.length <=0) {
       taingonngu();
   }
   
 

me_ackhac();

  

    
}

function newac(){
       playSFX("login");

  var khach ='';
    khach+= ''+vi('Tài khoản')+' :<input class="input3" id="taikhoan000"  type="text" value="">';
        khach+= '<br>'+vi('Mật khẩu')+' :<input class="input3" id="matkhau000"  type="text" value="">';

                    khach+='<div class="btlogin" onclick="reg_choingay()">REG</div>';

                khach+='<div class="btlogin2" onclick="khach()">X</div>';

   var nx =    cvsWidth;
var ny =    cvsHeight;
 var left= (nx/2)-120;
    var width = nx/2;
    var height = 'auto';
    var top = ny-300;
	$('#ducnghia_canvas').html('<div style="position: absolute; left: '+left+'px; width: '+width+'px; height: '+height+'; top: '+top+'px;">'+khach+'</div>');	 

    
}



function saveacc(){
    var taikhoan = $('#taikhoan').val();
    var matkhau = $('#matkhau').val();
 setdata('taikhoan',taikhoan);
 setdata('matkhau',matkhau);
 khach();
}

function me_ackhac(){
  var khach ='';
   
     playSFX("login");
 khach+='<table>';
      khach+='<tr><td style="padding: 1px 15px 0px 2px;"><font color="white"><b>'+t('tài khoản')+'</font></b></td> <td style="padding: 1px 15px 0px 2px;"><input class="inputlogin" id="taikhoan" type="text" value="'+getdata('taikhoan')+'"></td></tr>';
     khach+='<tr><td style="padding: 1px 15px 0px 2px;"><font color="white"><b>'+t('Mật khẩu')+'</font></b></td> <td style="padding: 1px 15px 0px 2px;"><input class="inputlogin" id="matkhau"  type="password" value="'+getdata('matkhau')+'"></td></tr>';
     khach+='<tr><td style="padding: 1px 15px 0px 2px;"></td><td style="padding: 1px 15px 0px 2px;"><font color="white"><b><input type="checkbox" id="quydinh" value="1" checked> '+t('Đồng ý với')+' <font color="aqua" onclick="noiquy()">'+t('Điều khoản trò chơi')+'.</font></b></font></td></tr>';

khach+='</table>';

      khach+='<center><b class="btlogin" onclick="dangnhap()">'+t('Chơi')+'</b><b class="btlogin2" onclick="reg_choingay()">'+t('Đăng kí')+'</b>';
         khach+='<div class="btlogin" onclick="ngonngu()">LANGUAGE</div>';

    
var nx =    cvsWidth;
var ny =    cvsHeight;
if(cvsWidth<428)
{
 var left= (nx/2)-140;
}
else
{
 var left= (nx/2)-200;
    
}
    var width = (nx/2)+100;
    var height = 'auto';
    var top = ny-300;
	$('#ducnghia_canvas').html('<div style="position: absolute; left: '+left+'px; width: '+width+'px; height: '+height+'; top: '+top+'px;border: 2px solid #000000;box-shadow: 4px 4px 15px 1px #009688;background-color: #6220009e;"><center>'+khach+'</center></div>');	
}





function canvas(nghiacntt,nghiadulieu,it){
    if(!it) {
    c_giaotiep();
    }
    if(nghiacntt=="" || nghiacntt =="null" ) {
        nghiacntt = 'PokeMon';
    }
    	$('#canvas_game').html(nghiacntt);	
    	$('#canvas_data').html(nghiadulieu);	

                         document.getElementById('canvas').style.display = 'block';

}

function c_canvas(){
                         document.getElementById('canvas').style.display = 'none';

}









function out(){
           
c_box();
c_canvas();
c_giaotiep();
    khach();
    userID = 0;
     map();
    ws.send("out:game");
sql();
}





function wsgo(nut) {
    if(nut ==1) keyState.up = true;
    if(nut ==2) keyState.left = true;
    if(nut ==3) keyState.right = true;
    if(nut ==4) keyState.down = true;
	if(nut==5) keyState.btn1 = true;
	
	setTimeout(function(){ 
	    		keyState.up = false;
	    		keyState.left = false;
	    		keyState.right = false;
	    		keyState.down = false;
	    		keyState.btn1 = false;
	}, 50);

}








function cl() {
  document.getElementById('menu_nho').style.display = "none";
  
}







     




function cp() {
	 $.nghia({
url : '/xml/admin.php?admin',
type : 'POST',
ducnghia : function(result){
canvas('ADMIN',result);
}
});		
}


function cp_chon(name) {
	 $.nghia({
url : '/xml/admin.php?tool',
type : 'POST',
data : {mapID : mapID , x : userEvent.mapPosition.X, y : userEvent.mapPosition.Y, name : name , di : userEvent.direction},
ducnghia : function(result){

canvas('ADMIN',result);

}
});		

}


function adminad(name){
    $.nghia({
            	       	url         : '/xml/admin.php?'+name+'',
    	            	type        : 'POST',
    	            	data        : $("#admin").find("select, textarea, input").serialize(),
                  	ducnghia : function(result){
giaotiep(result);
fixloi(result);
    	            	}
    	        	});
}









function setdrawn(xu,exp ,stext,vp,no) {
   
    setvatpham = vp;
    setwin = no;
    textset = stext;
    setxu = xu;
    setexp = exp;
    timeset=0;
    offhieuung =1;
}




function outkick(acc) {
    if(acc<=0) {
        giaotiep('Kết nối thất bại ! máy chủ bảo trì hoặc mất kết nối ! Vui lòng đăng nhập lại.');
         setTimeout(function() {
              window.location="/play.php";

    }, 3000);
    } else {
        if(acc==userID) {
        giaotiep('Mất kết nối tới máy chủ ! Có thể do mạng hoặc do có người khác đăng nhập vào tài khoản ! Vui lòng đăng nhập lại.');
         setTimeout(function() {
              window.location="/play.php";

    }, 3000);      
        }
    }
}





     function npc(id,textg){
      npcid = id;
 npctext = textg;
 npctime = 50;    

     }
     
     


     





function xmenu() {
    document.getElementById('menu_nho').style.display = "none";

}
  
  






 function tip(){
$.nghia({
url : code(),
type : 'POST',
	data : {b : '1',a:'huongdan'},

ducnghia : function(result){
canvas('Tips',result);
}
});
}  

function box(head0,head,center){
	camdi = 1;
    if(cvsWidth<428) {
				    
				    $("#box").css("width","100%");

				}
    var abc = head.split(";");
    var log='';
    for (var i=0; i<abc.length; i++) {
		var button = abc[i].split(":");
		log+='<div class="canvas_menu" onclick="'+button[1]+'">'+button[0]+'</div>';
    	}
        	$('#head').html(head0);	

    	$('#box_head').html(log);	
    	$('#box_center').html(center);	

                         document.getElementById('box').style.display = 'block';

}

function c_box(){
    camdi=0;
    	$('#box_head').html('');	
    	$('#box_center').html('');	
                         document.getElementById('box').style.display = 'none';

}



