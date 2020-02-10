//OPtien un numero y apartir de ello da calificacion
var x=Math.floor(Math.random()*10)+1;

console.log("Sacaste: ",x);

if (x==10) {
    console.log("Tienes A");
}else{
    if (x==9) {
        console.log("Tienes B");
    }else{
        if (x==8) {
            console.log("Tienes C");
        }else{
            if (x==7) {
                console.log("Tienes D");
            }else{
                if (x==6) {
                    console.log("Tienes E");
                }else{
                    console.log("Tienes F");
                }
            }
        }
    }
}
