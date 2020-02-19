function serie1 (n){
    var n1=-4,n2=1,div=0,i=0,suma=0;
    for(i=1;i<=n;i++){
        n1*=-1;
        div=n1/n2;
        suma+=div;
        n2+=2;
    }
    return suma;
}
console.log(serie1(100000000));