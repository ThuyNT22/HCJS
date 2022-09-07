var n = 2;
function checkPrime(n){
    //kiem tra x co phai so nguyen to ko
    if(n<2){
        return false;
    }else if(n==2||n==3){
        return true;
    }else{
        for(var i=2;i<=n/2;i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
}
function nextPrime(n){
    for(var i=n+1;true;i++){
        if(checkPrime(i)){
            return i;
        }
    }
}
function continuePrime(x){
    var x = document.getElementById("heading");
    x.innerText = n;
    n = nextPrime(n);
}


