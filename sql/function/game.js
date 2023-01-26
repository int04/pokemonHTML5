
var level_skill = Array(
    0,
    10000,
    50000,
    300000,
    800000,
    1800000,
    3594964,
    6678876,
    9999767,
    12686786,
    20164566,
    36056567,
    40065767,
    50768678,
    60786786,
    70657657,
    800004456
    );

var level_my =  Array(
0,
1000,
2000,
3000,
4000,
5000,
10000,
15000,
45000,
65000,
75000,
155000,
250000,
490000,
534678,
754678,
948799,
1059789,
1379846,
1478984,
19264678,
20649878,
23978988,
25065478,
30057897,
32078989,
35064897,
39098789,
41078989,
49089999,
53077897,
59754660,
60555510,
63088456,
65065468,
68086456,
70979899,
71578999,
73879789,
76456456,
78465464,
80789999,
81657989,
83489799,
85978999,
86789789,
89878799,
90548978,
92978798,
93467899,
95467899,
96789999,
98787988,
99641312,
100456461,
109978999,
119978999,
129978999,
134978999,
135978999,
139978999,
140978999,
149978999,
153978999,
155978999
); 


var level_gym =  Array(
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,//lv 15
0,
0,
0,
0, 
0,// lc20
0,
0,
0,
0,
0,//25
0,
0,
0,
0,
1,//30
0,
0,
0,
0,
0,//35
0,
0,
0,
0,
0,//40
0,
0,
0,
0,
0,//45
0,
0,
0,
0,
0,//50
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,//60
0,
0,
10,
0
); 

function onlineupdate() {
     if(mmo.length >=1) {
      mmo.splice(0);
    }
    $.nghia({
	url : '/data/nhiemvu/users.json',
	type : 'POST',
	ducnghia : function(data){
	  for(var i=0;i< data.length;i++) {
			 mmo.push(data[i]);  

			}	  
	  
}
});
}

function taidulieu() {
    if(data_nhiemvu.length >=1) {
      data_nhiemvu.splice(0);
    }
   
     $.nghia({
	url : '/data/nhiemvu/nhiemvu.json',
	type : 'POST',
	ducnghia : function(data){
	  for(var i=0;i< data.nhiemvu.length;i++) {
			 data_nhiemvu.push(data.nhiemvu[i]);  

			}	  
	  
}
});
}



function taidulieu2() {
    if(data_pokemon.length >=1) {
      data_pokemon.splice(0);
    }
     $.nghia({
	url : '/data/nhiemvu/pokemon.json',
	type : 'POST',
	ducnghia : function(data){
	  for(var i=0;i< data.pokemon.length;i++) {
			 data_pokemon.push(data.pokemon[i]);  

			}	  
	 loadimg=1; 
}
});        
}