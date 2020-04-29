class Rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura/2;
    }
}
 
const btn=document.getElementById("btnRectangulo");
 
btn.addEventListener('click',()=>{
    
    let altura=parseInt(document.getElementById("altura").value);
    let base=parseInt(document.getElementById("base").value);

    let rect=new Rectangulo (base,altura);
    
    let divRes=document.getElementById("resultadoRect");
    
    divRes.innerHTML="<p>Rectangulo con base " + rect.base + " y altura " + rect.altura + "</p>";
    
    divRes.innerHTML+="<p>con un area de " + rect.area() + "</p>";
});
