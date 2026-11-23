//  var name =prompt("enter user name")
//  var math= parseInt(prompt("enter marks of math"))
// var physics= parseInt(prompt("enter marks of physics"))
// var english= parseInt(prompt("enter marks of english"))
// var obtain = math+physics+english;

// var total=300;
// var percent=obtain/total*100

// function result(percent){
// if(percent>=40)

//     return "pass";

// else{
//     return "fail";
// }
// }
// function grade(percent){
//     if (percent >=80)
//         return "A+"
//     else if (percent>=70)
//          return "b+"
//         else if (percent>=60)
//          return "c+"
//         else if (percent>=50)
//          return "d+"
//         else{
//             return "f"
//         }
// }

// document.write(`name of student : ${name} <br>marks in maths: ${math}<br> marks in physics ${physics}<br> marks of english ${english}<br> percentage : ${percent.toFixed(2)} <br>result: ${result(percent)} <br>grade: ${grade(percent)} <br>`);
// document.write("<BR>ARRAY <BR>")


var student=["madiha","adyan","moiz","zainab","rumaisa","arham","kinza"];
document.write("indexing of moiz is ",student.indexOf("moiz"),"<br>","length of this array is",student.length,"<br>");
student.forEach(function (student,index){
     document.write( `${index + 1}. ${student}<br>`);
 
     
})
