class Cuadrado{
    constructor(lado){
        this.lado=lado;
    }
    area(){
        return this.lado*this.lado;
    }
}
 
const btn=document.getElementById("btnCuadrado");
 
btn.addEventListener('click',()=>{

    let altura=parseInt(document.getElementById("lado").value);

    let cuad=new Cuadrado (lado);
    
    let divRes=document.getElementById("resultadoCuad");
    
    divRes.innerHTML="<p>Cuadrado con lado " + cuad.lado + " y lado " + cuad.lado + "</p>";
    
    divRes.innerHTML+="<p>con un area de " + cuad.area() + "</p>";
});