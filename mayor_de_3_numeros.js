var x=Math.floor(Math.random()*20)+1;
var y=Math.floor(Math.random()*20)+1;
var z=Math.floor(Math.random()*20)+1;

console.log(x);
console.log(y);
console.log(z);

if (x>y&&x>z) {
    console.log(x);
} else {if (y>x&&y>z) {
    console.log(y);
} else {
    console.log("El mayor es: ",z);
    
}
    
}