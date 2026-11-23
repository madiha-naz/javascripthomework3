var number =parseFloat(prompt("enter a number"))
function factorial(n){
    var result=1;
for (let i=2;i<=n ;i++){
    result *=i;

}
return result;
}
if (number < 0) {
    document.write("invalid number")
}
else{
    document.write(`${number}!=${factorial(number)}`)
}
