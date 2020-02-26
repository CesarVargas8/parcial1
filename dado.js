var i=0,meta=1,j1=0,j2=0;
while(j1<100&&j2<100){
	j1+=avanzar();
	console.log("j1: ",j1);
	j2+=avanzar();
	console.log("j2: ",j2);
}
if(j1>99&&j2>99)
	console.log("Empate")
else 
	if(j1<j2)
		console.log("Gano el j2: ",j2);
	else
		console.log("Gano el j1: ",j1);

function dado (){
	var d=0;
	d=Math.floor(Math.random()*6+1);
	return d;
}
function avanzar (){
	var pos=1,d=dado();
	if(d==1){
		pos+=3;
	}
	if(d==3||d==5){
		pos+=1;
	}
	if(d==2||d==4||d==6){
		pos+=2;
	}
	return pos;
}
