document.write(`<h1>basic calculator</h1>`)

var firstNumber=parseFloat(prompt("enter the number one"));
var operator=prompt("enter the oerator");
var secondNumber=parseFloat(prompt("enter the number two"));
document.write(firstNumber,operator,secondNumber,"=")
function add(a,b){
    return a+b;
}
function add(a,b){
    return a+b;
}
function sub(a,b){
    
    return a-b;
}
function multiply(a,b){
     if (b === 0) {
    return "Cannot divided by zero";
  }
    return a*b;
}
function divide(a,b){
     if (b === 0) {
    return "Cannot divided by zero";
  }
    return a/b;
}
var result ;
switch(operator){
    case "+":
        result = add (firstNumber,secondNumber)
        break;
        case "-":
        result = sub (firstNumber,secondNumber)
        break;
        case "*":
        result = multiply (firstNumber,secondNumber)
        break;

case "/":
        result = divide(firstNumber,secondNumber)
break;
default:
result= "invalid value"
break;

}
document.write(result)