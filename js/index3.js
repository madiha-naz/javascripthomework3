var leapyear =parseFloat(prompt("enter a year "));
function leap(){
    if(leapyear%400===0)
  return "leapyear";
 if(leapyear%100===0) 
 return "notleapyear";
if(leapyear%4===0) 
return "leapyear";
return "not a leap year";
}

document.write(leap())


