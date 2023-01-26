const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080 });

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var socketWall = [];
var players = {
  id: [],
  info: []
};
var pokemon = [];
var vatpham = [];
/*
Cách dùng biến :
: tên của biến
^ dữ liệu của biến
/ nhiều dữ liệu của biến hơn.
*/
wss.on('connection', function connection(ws) {
	if(ws.id == undefined) {
		ws.id = getRandomInt(100000,999999);
	}
  ws.on('message', function incoming(data) {
	 var dulieu = data.split(":");
	 if(dulieu[0] == "login") {
	         var ducnghia_data  = dulieu[1].split("^");
			 if (players.id.indexOf(ducnghia_data[0]) != -1) {
      console.log("" + ducnghia_data[0] + " Da ket noi toi tro choi roi,");
    } else {
      ws.playerID = ducnghia_data[0]; //data -》 id =》
      players.id.push(ws.playerID);
      socketWall[ws.playerID] = ws;
    
      players.info.push({id: ducnghia_data[1]});
    }
	 }
	 
	if(dulieu[0] == "ketnoi") {
	var ducnghia_data = dulieu[1].split("^");	
	var i = players.id.indexOf(ducnghia_data[1]);
    if (i < 0) {
		return;
	}
	players.info[i].id = ducnghia_data[1];

	players.info[i].mapid = ducnghia_data[2];
    players.info[i].x = ducnghia_data[3];
    players.info[i].y = ducnghia_data[4];
    players.info[i].direction = ducnghia_data[5];
    players.info[i].username = ducnghia_data[6];
    players.info[i].skin = ducnghia_data[7];
    players.info[i].exp = ducnghia_data[8];
    players.info[i].xu = ducnghia_data[9];
    players.info[i].camxuc = ducnghia_data[10];
    players.info[i].server = ducnghia_data[11];
    players.info[i].chiso = ducnghia_data[12];
    players.info[i].co = ducnghia_data[13];
    players.info[i].buff = ducnghia_data[14]; 
	 ///Gửi dữ liệu người chơi ////
	 var mmousers = 'nguoichoi:';
for (var i in players.info) {
      mmousers+='/'+players.info[i].id+'^'+players.info[i].username+'^'+players.info[i].mapid+'^'+players.info[i].x+'^'+players.info[i].y+'^'+players.info[i].direction+'^'+players.info[i].skin+'^'+players.info[i].exp+'^'+players.info[i].xu+'^'+players.info[i].camxuc+'^'+players.info[i].server+'^'+players.info[i].chiso+'^'+players.info[i].co+'^'+players.info[i].buff+'';
    }
	
	wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(mmousers);
      }
    });
     //////////////////////////////	 
	 
	 ///hiển thị vật phẩm rơi ra ở đất ///
	 var itemroi = 'vatpham:';
	 for (var k in vatpham) {
      if (vatpham[k].timemat >= Date.now()) {
        
		itemroi+='/'+vatpham[k].id+'^'+vatpham[k].map+'^'+vatpham[k].x+'^'+vatpham[k].y+'^'+vatpham[k].idvp+'';
      } else {
		ws.send('xoavp:'+vatpham[k].id+'^');
        vatpham.splice(k, 1);
      }
    }
	wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(itemroi);
      }
    });
	////
	}
	if(dulieu[0] == "nhatvatpham") {
		var data = dulieu[1].split("^");
		for (var k in vatpham) {
      if (vatpham[k].id == data[0]) {
        if (vatpham[k].timenhat >= Date.now()) {
          if (vatpham[k].uid == data[1]) {
            
			ws.send('donenhat:'+vatpham[k].idvp+'^'+vatpham[k].soluong+'^'+data[1]+'^1^'+vatpham[k].id+'');
		    ws.send('xoavp:'+vatpham[k].id+'^');
            vatpham.splice(k, 1);
          } else {
			ws.send('donenhat:'+vatpham[k].idvp+'^'+vatpham[k].soluong+'^'+data[1]+'^0');
          }
        } else {
		    ws.send('xoavp:'+vatpham[k].id+'^');
			ws.send('donenhat:'+vatpham[k].idvp+'^'+vatpham[k].soluong+'^'+data[1]+'^1^'+vatpham[k].id+'');
          vatpham.splice(k, 1);
        }
      }
    }
	}
	
	if(dulieu[0] =="xoavp") {
        wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send('xoavp:'+dulieu[1]+'^');
      }
    });
	}
	
    if(dulieu[0] == "vatpham") {
	var time = Date.now();
    var timenhat = +time + +30000;
    var timemat = +time + +90000;

    vatpham.push({
      id: dulieu[1].split("^")[0],
      uid: dulieu[1].split("^")[1],
      idvp: dulieu[1].split("^")[2],
      soluong: dulieu[1].split("^")[3],
      timemat: timemat,
      timenhat: timenhat,
      map: dulieu[1].split("^")[4],
      x: dulieu[1].split("^")[5],
      y: dulieu[1].split("^")[6]
    });	
		
	}
	
	if(dulieu[0] == "chatmap") {
		
		wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
	
        client.send('chat:'+dulieu[1]);
      }
    });
		
	}
	
	if(dulieu[0] == "sendchat") {
		
		wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
	
        client.send('sendchat:'+dulieu[1]);
      }
    });
		
	}
	
	if(dulieu[0] == "pvp_moi") {
		
		wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send('pvp_moi:'+dulieu[1]+'^');
      }
    });
		
	}
	
	if(dulieu[0] == "pvp_ok") {
		
		wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send('pvp_ok:'+dulieu[1]+'^');
      }
    });
		
	}
	
	if(dulieu[0] == "kick") {
		
		wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
	
        client.send('kick:'+dulieu[1]);
      }
    });
		
	}
	
	if(dulieu[0] == "truke") {
		
		wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
	
        client.send('truke:'+dulieu[1]);
      }
    });
		
	}
	
	
	
	if(dulieu[0] == "damepvp") {
				
		wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send('damepvp:'+dulieu[1]+'^');
      }
    });
		
	}
	
	if(dulieu[0] == "gietnguoi") {
		
		wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send('gietnguoi:'+dulieu[1]+'^');
      }
    });
		
	}
	
	if(dulieu[0] == "ngonngu") {
		
		wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send('ngonngu:'+dulieu[1]+'^');
      }
    });
		
	}
	
	if(dulieu[0] == "buff") {
		
		wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send('buff:'+dulieu[1]+'^');
      }
    });
		
	}
	
	
	
	if(dulieu[0] == "ban_1") {
		
		wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send('ban_1:'+dulieu[1]+'^');
      }
    });
		
	}
	
	if(dulieu[0] == "pokemon_1") {
		
		wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send('pokemon_1:'+dulieu[1]+'^');
      }
    });
		
	}
	
	if(dulieu[0] == "ban_2") {
		
		wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send('ban_2:'+dulieu[1]+'^');
      }
    });
		
	}
	
	if(dulieu[0] == "pokemon_2") {
		
		wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send('pokemon_2:'+dulieu[1]+'^');
      }
    });
		
	}
	
	if(dulieu[0] == "ban_3") {
		
		wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send('ban_3:'+dulieu[1]+'^');
      }
    });
		
	}
	
	
	if(dulieu[0] == "pokemon_3") {
		
		wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send('pokemon_3:'+dulieu[1]+'^');
      }
    });
		
	}
	
	
	
	
	
	if(dulieu[0] == "chatthegioi") {
		
		wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send('chatthegioi:'+dulieu[1]+'^');
      }
    });
		
	}
	
	if(dulieu[0] == "kinang") {
		wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
	
        client.send('kinang:'+dulieu[1]);
      }
    });
	}
	
	if(dulieu[0] == "out") {
		if (!ws.playerID) return;
    var i = players.id.indexOf(ws.playerID);
    players.id.splice(i, 1);
    players.info.splice(i, 1);
    delete socketWall[ws.playerID];
    console.log('đăng xuất '+ws.id);
	}
	
	
	


  });
  
  
  ws.on('close', function() {
	  if (!ws.playerID) return;
    var i = players.id.indexOf(ws.playerID);
    players.id.splice(i, 1);
    players.info.splice(i, 1);
    delete socketWall[ws.playerID];
    console.log('Xóa '+ws.id);
  
  });

  
});

