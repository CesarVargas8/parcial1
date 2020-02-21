function euler_exponente(x){
    var fact=1,e=x,res=1,i=0;

    for(i=1;i<=x;i++){
        fact*=i;
        res+=e/fact;
        e*=x;
    }
    return res;
}
console.log(euler_exponente(5))