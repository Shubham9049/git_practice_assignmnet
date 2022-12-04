let n=56;
for(let i=1;i<=n;i++){
    if(n%i==0){
        count++
    }

    if(count == 2){
        console.log("its a prime number")
    }else{
        console.log("its not a prime number")
    }
}