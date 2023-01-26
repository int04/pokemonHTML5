var express = require('express');
var socketIO = require('socket.io');
var path = require('path');
var PORT = process.env.PORT || 3000;
var INDEX = path.join(__dirname, 'index.html');

var server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
var io = socketIO(server, {
  pingInterval: 5000,
  pingTimeout: 5000,
  cookie: false
});

////databse game
var socketWall=[];
var players = {
	'id': [],
	'info': []
}
var chat = {
	'data': []
}
var chatMessageHistory = [];
var chatmap = [];
////ducnghia///
var pokemon = [  ];
var vatpham=[];
io.sockets.on('connection', function (socket) {
	
	////NEW USERS
	socket.on('ducnghialogin', function (data, callback) {
        	var ducnghia_data = data.split("^");
	if (players.id.indexOf(ducnghia_data[1]) != -1) {	
	console.log(''+ducnghia_data[1]+' Da ket noi toi tro choi roi,'); } else {	
			socket.playerID = ducnghia_data[1]; //data -》 id =》 
			players.id.push(socket.playerID);
            socketWall[socket.playerID]=socket;
            var tmp = {
				id: ducnghia_data[1],
				mapid : ducnghia_data[2],
				x: ducnghia_data[3],
				y: ducnghia_data[4],
				direction: 0,
				battle : 0 ,
				username : ducnghia_data[7],
				skin : ducnghia_data[8],
                 icon : ducnghia_data[9],
				 viettat : ducnghia_data[10],
				 pokemon : ducnghia_data[11],
		    				 exp : 0,
		                       xu :0,
		    camxuc : -1,
		    		     server : ducnghia_data[12],
		    		     chiso : 0


		    
			}
			players.info.push(tmp);
}
var sameMapplayers = {
			ducnghia: []
		}
		for (var i in players.info) {	
				sameMapplayers.ducnghia.push(players.info[i]);
		}
		io.sockets.emit('otherPlayersMove', sameMapplayers );
						io.sockets.emit('online', players.id.length );

	});
	
	////ngắt kết nối tới máy chủ////
	socket.on('disconnect', function (data) {
		if (!socket.playerID) return;
		var i = players.id.indexOf(socket.playerID);
		players.id.splice(i, 1);
		players.info.splice(i, 1);
        delete(socketWall[socket.playerID]);
   						io.sockets.emit('online', players.id.length );

io.to(socket.id).emit('outgame','ducnghia');

	})
	
	////dang xuat
	
	socket.on('out', function (data) {
		if (!socket.playerID) return;
		var i = players.id.indexOf(socket.playerID);
		players.id.splice(i, 1);
		players.info.splice(i, 1);
        delete(socketWall[socket.playerID]);
   						io.sockets.emit('online', players.id.length );


	})
	

/////Kiểm tra người chơi trong bản đồ ///
	function getAllplayersSameMap(mapId) {
		var sameMapplayers = {
			id: [],
			info: []
		}
		for (var i in players.info) {
			
			
			if (players.info[i].map === mapId) {
				sameMapplayers.id.push(players.id[i]);
				sameMapplayers.info.push(players.info[i]);
			}
		}
		return sameMapplayers;
	};
	
	
	function quai(mapId) {
		var send = [];
		for (var i in pokemon) {
			
			
			if (pokemon[i].map == mapId && pokemon[i].hp >=1 ) {
			send.push(pokemon[i]);
			}
		
		}
		return send;
	};
	///// Di chuyển /////
	socket.on('Move', function (data) {
	var ducnghia_data = data.split("^");	
		var i = players.id.indexOf(ducnghia_data[1]);
		if (i<0)
		return;
					players.info[i].username = ducnghia_data[0],

				players.info[i].id = ducnghia_data[1];
				players.info[i].mapid = ducnghia_data[2];
				players.info[i].x = ducnghia_data[3];
				players.info[i].y = ducnghia_data[4];
				players.info[i].direction = ducnghia_data[5];
				players.info[i].battle = ducnghia_data[6];
				players.info[i].skin = ducnghia_data[8];
				players.info[i].icon = ducnghia_data[9];
				players.info[i].viettat = ducnghia_data[10];
				players.info[i].pokemon = ducnghia_data[11];
				players.info[i].exp = ducnghia_data[12];
				players.info[i].xu = ducnghia_data[13];
				players.info[i].camxuc = ducnghia_data[14];
				players.info[i].server = ducnghia_data[15];
				players.info[i].chiso = ducnghia_data[16];
				players.info[i].co = ducnghia_data[17];

var sameMapplayers = {
			ducnghia: []
		}

		for (var i in players.info) {	
				sameMapplayers.ducnghia.push(players.info[i]);
		}


		io.sockets.emit('nguoichoi', sameMapplayers );
				io.sockets.emit('online', players.id.length );
				
				
				for (var i2 in pokemon) {
			

	if (pokemon[i2].hp <= 0 && pokemon[i2].time <= Date.now() ) {
			pokemon[i2].hp = pokemon[i2].hpfull;
			pokemon[i2].time = 0;
			}		
			
			
		}
		io.sockets.emit('laypokemon', quai(ducnghia_data[2]) );	

for (var k in vatpham) {

if(vatpham[k].timemat >=Date.now()) {
io.sockets.emit('itemtomap', { id : vatpham[k].id , map : vatpham[k].map , x : vatpham[k].x , y : vatpham[k].y , idvp : vatpham[k].idvp  } );	
						
			
		} else {
io.sockets.emit('xoavp', { id : vatpham[k].id } );	
			console.log('xóa '+vatpham[k].id+' ');
		vatpham.splice(k, 1);	
		}
}
	});



	////TỔNG NGƯỜI CHƠI///

socket.on("nhatvatpham", function (data) {	
for (var k in vatpham) {
	if(vatpham[k].id == data.id) {
	
if(vatpham[k].timenhat >=Date.now()) {
	
	if(vatpham[k].uid == data.uid) {
io.sockets.emit('donenhat', { idvp : vatpham[k].idvp , soluong : vatpham[k].soluong ,uid : data.uid ,code :1  } );	
			io.sockets.emit('xoavp', { id : vatpham[k].id } );	

			vatpham.splice(k, 1);	

	} else {
io.sockets.emit('donenhat', { code :0 , uid : data.uid  } );	
		
	}
	} else {
		io.sockets.emit('xoavp', { id : vatpham[k].id } );	

io.sockets.emit('donenhat', { idvp : vatpham[k].idvp , soluong : vatpham[k].soluong ,uid : data.uid ,code :1  } );	
		
				vatpham.splice(k, 1);	

	}
	
	
	
	}


}

	})	


socket.on("vatpham", function (data) {	
var time = Date.now();
var timenhat = +time+ + 30000;
var timemat = +time+ + 150000;

vatpham.push({ id :data.id , uid  : data.uid , idvp : data.idvp , soluong : data.soluong , timemat : timemat, timenhat : timenhat , map : data.map , x : data.x, y : data.y  });	
console.log('Rơi vật phẩm '+data.id+' , ');
	})		
	

	

//////Chát trong bản đồ ///
 socket.on("chatmap", function (data) {
	 var time = Date.now();
var timechat = +time+ + 3000;

		var txt = data.username + ": " + data.txt + "";
		chatmap.push(txt);
		var datasend =JSON.stringify( { username : data.username , noidung : data.txt , map : data.mapid  , server : data.server  });
		socket.broadcast.emit("chat", datasend); 
var tmp = {
				id: data.id,
				mapid : data.mapid,
	server : data.server,
				username : data.username,
				thoigian : timechat,
				noidung : data.txt
				
			}
		//	chat.data.push(tmp);		
	

		socket.broadcast.emit('datachat', tmp );
	
	
	///////////////////
	
			
		
	})

/////Chát tất cả
	socket.on("sendchat", function (data) {
		var txt = data.username + ": " + data.txt + "";

var datachat =JSON.stringify( { username : data.username , noidung : data.txt , id : data.id , server : data.server  });
socket.broadcast.emit("chatall", datachat); 
		
	})
	
	
socket.on("pvp_moi", function (data) {
	
		socket.broadcast.emit("pvp_moi", data);
		
		
	})
	
socket.on("pvp_ok", function (data) {
	
		socket.broadcast.emit("pvp_ok", data);
		
		
	})	

	
socket.on("kick", function (data) {
	
		socket.broadcast.emit("kick", data);
		
		
	})		
	
socket.on('ping', function (data) {
        
           
io.to(socket.id).emit('pong',Date.now());

        

    });	
socket.on("addquai", function (data) {	
	     var set = data;
 for (var i=0; i<set.length; i++) {
	 //add quai to data map 
	 pokemon.push({
		name : set[i].name,
		id : set[i].id,
		hp : set[i].hp,
		 hpfull : set[i].hpfull,
		 level : set[i].level,
		 time : 0,
		 thuong : set[i].thuong,
		 nhom : set[i].nhom,
		 hoisinh : set[i].hoisinh,
		 tancong : set[i].tancong,
		 giap : set[i].giap,
		 chimang : set[i].chimang,
		 map : set[i].map,
		 x : set[i].x,
		 y : set[i].y,
		 img : set[i].img
		 
		 
		
			});
	 /////
	 
 }
	
	})	
	
	function checkquai(idx) {
		var sendx = [];
		for (var i in pokemon) {
			
			
			if (pokemon[i].id == idx) {
			sendx.push(pokemon[i]);
			}
		}
		return sendx;
	};
	
socket.on("dame", function (data) {	

for (var i in pokemon) {
			
			
			if (pokemon[i].id == data.id) {
			
			if(pokemon[i].hp <= data.dame) {
pokemon[i].hp =0;
pokemon[i].time = +pokemon[i].hoisinh + Date.now() ;
io.to(socket.id).emit('dame',pokemon[i]);
} else {
	pokemon[i].hp =pokemon[i].hp - data.dame;
	
io.to(socket.id).emit('laykiss',{info: pokemon[i] , dame : data.dame });
	
}
			
			}
			
			
			
		}
})


//pvp_moi
socket.on("damepvp", function (data) {	

io.sockets.emit('damepvp', {id : data.id , dame : data.dame , uid : data.uid } );	


})	

socket.on("gietnguoi", function (data) {	

io.sockets.emit('gietnguoi', {id : data.id , uid : data.uid } );	


})			


///pvp game ////
 
socket.on("moipvp", function (data) {	
io.sockets.emit('moipvp', data );	
	
	})	

socket.on("dongypvp", function (data) {	
io.sockets.emit('dongypvp', data );	
	
	})

socket.on("chatthegioi", function (data) {	
io.sockets.emit('chatthegioi', data );	
	
	})	
			
	
socket.on("xoa", function (data) {	
	pokemon.splice(0);
	})			
socket.on("laypokemon", function (data) {	
io.sockets.emit('laypokemon', quai(data) );	
	
	})		
	
socket.on("giet", function (data) {	
io.sockets.emit('giet', JSON.stringify( { ducnghia : data   }) );	
	
	})	
	

	
socket.on("kinang", function (data) {	
socket.broadcast.emit("kinang", JSON.stringify( { ducnghia : data   }));

})	
	
socket.on("hp", function (data) {	
socket.broadcast.emit("hp", JSON.stringify( { ducnghia : data   }));
	})		
	

})