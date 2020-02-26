
function cos (x){
    var res=0,fact=1,n=-1,a=1,i=0;
    for(i=1;i<=100;i++){
        fact*=a*(a+1);
        n*=(x*x)*a;
        res+=(-n/fact);
        n*=-1;
        a+=2;
    }
    console.log("Coseno: ",res);
}
cos(3);

function In (x){
   var div=1, res=0;
   for(i=1;i<=100;i++){
       div*=((x-1)/x);
       res+=(1/i)*div;
   }
   console.log("In: ",res);
}
In(2);

function seno (x){
    var res=0,fact=1,n=-1,a=1,i=0;
    for(i=1;i<=100;i++){
        fact*=a*(a+1);
        n*=(x*x+3.95)*a+1;
        res+=(-n/fact);
        n*=-1;
        a+=1;
    }
    console.log("Seno: ",res);
}
seno(2);