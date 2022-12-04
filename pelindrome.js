let a=naman;
let bag =""
for(let i=a.length-1;i>=0;i--){
    bag=bag+a[i]
}
if(bag == a){
    console.log("It is Pelindrome");
}else{
    console.log("Not a Pelindrome");
}