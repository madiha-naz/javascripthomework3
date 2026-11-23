
document.write(`<h1>basic calculator for even odd calculation</h1>`)
var value =parseFloat(prompt("emter first number"))
function even(){
    return "even";}
function odd(){
    return "odd";
}
var result;
if (value%2===0){
  result ="even" 
   
}
else{
      result ="odd" 
}
document.write(result)