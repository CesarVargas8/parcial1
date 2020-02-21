function euler_fact(x){
    var i=0,fact=1,res=0;

    for(i=1;i<=x;i++){
        fact*=i;
        res+=1/fact;
    }
    return res;
}
console.log(euler_fact(5));