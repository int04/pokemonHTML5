var pokemon_data = [
    "sql/function/md5.js",
    "sql/function/cuonghoa.js",
    "sql/function/thoitrang.js",
    "sql/function/trangbi.js",
    "sql/function/used.js",
    "sql/function/dabase.js",
    "sql/function/item.js",
    "sql/char.js",
    "sql/function/game.js",
    "sql/function/eff.js",
    "sql/function/db.js",
    "sql/data.js",
    "sql/npm.js",
    "sql/function/kinang.js",
    "sql/function/button.js",
     "sql/function/pokemon.js",
     "sql/function/button2.js",

    




];
var data_tienhoa = [];
var data_gym = [];
var listsv = [];
var vietsub = [];
var huongdan = [];
var maychu = {};
var quai = [];
var data_map = [];
var data_npc = [];
var timephp = { time : 0 , load : 0};
function checkquai(id) {
    for(var i =0;i<quai.length;i++) {
        if(quai[i].nhom == id) {
            return quai[i];
        }
    }
    return null;
}
function getmap(id) {
    for(var i =0;i<data_map.length;i++) {
        if(data_map[i].id == id) {
            return data_map[i];
        }
    }
    return null;
}
function datanpc(id) {
    for(var i =0;i<data_npc.length;i++) {
        if(data_npc[i].id == id) {
            return data_npc[i];
        }
    }
    return null;
}
function checksv(id) {
    for(var i=0;i<=listsv.length;i++) {
        if(+listsv[i].id == +id) {
            return listsv[i];
        }
    }
    return false;
}
function taingonngu() {
     $.nghia({
	url : '/data/config.php',
	type : 'POST',
	ducnghia : function(data){
	 timephp.time =    data.time;
	 maychu = data.server;
	  for(var i=0;i<data.listgame.length;i++) {
	      listsv.push(data.listgame[i]);
	  }
	  console.log(data.listgame);

	  
}
}); 
$.nghia({
	url : '/data/nhiemvu/npc.json',
	type : 'POST',
	ducnghia : function(data){
	  for(var i=0;i< data.length;i++) {
	      
			 data_npc.push(data[i]);  
	      
			}	  
	  
}
}); 
$.nghia({
	url : '/data/nhiemvu/map.json',
	type : 'POST',
	ducnghia : function(data){
	  for(var i=0;i< data.length;i++) {
	      
			 data_map.push(data[i]);  
	      
			}	  
	  
}
}); 
$.nghia({
	url : '/data/nhiemvu/quai.json',
	type : 'POST',
	ducnghia : function(data){
	  for(var i=0;i< data.npc.length;i++) {
	      if(+data.npc[i].hoisinh <= 10000) {
			 quai.push(data.npc[i]);  
	      }
			}	  
	  
}
}); 
 $.nghia({
	url : '/data/nhiemvu/ngonngu.json',
	type : 'POST',
	ducnghia : function(data){
	  for(var i=0;i< data.length;i++) {
			 vietsub.push(data[i]);  
			}	  
	  
}
}); 

$.nghia({
	url : '/data/nhiemvu/gym.json',
	type : 'POST',
	ducnghia : function(data){
	  for(var i=0;i< data.length;i++) {
			 data_gym.push(data[i]);  
			}	  
	  
}
}); 

$.nghia({
	url : '/data/nhiemvu/tienhoa.json',
	type : 'POST',
	ducnghia : function(data){
	  for(var i=0;i< data.length;i++) {
			 data_tienhoa.push(data[i]);  
			}	  
	  
}
}); 

 $.nghia({
	url : '/data/nhiemvu/huongdan.json',
	type : 'POST',
	ducnghia : function(data){
	  for(var i=0;i< data.length;i++) {
			 huongdan.push(data[i]);  
			}	  
	  
}
});  

}
taingonngu();

function dulieu()
{
    ducnghia.loadfile(pokemon_data,
        function()
        {
            console.log(
                'tai du lieu thanh cong.'
            );

        });
}