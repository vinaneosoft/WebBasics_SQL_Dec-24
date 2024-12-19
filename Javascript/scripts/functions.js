//normal functions

// camel case, verb

sendMessage()
function sendMessage(){
    document.write("<b>This is normal funciton....</b><br>") // JS DOM
}

sendMessage()

function sendMessage2(message){
    document.write("<b>"+message+"</b><br>") // JS DOM
    document.write(`<b>My message: ${message}</b><br>`)
}

sendMessage2("Hello Welcome...")

document.write("<div>hi</div>")

document.write("<ol>")
document.write("<li>tea</li>")
document.write("<li>tea</li>")
document.write("</ol>")


const num=67;
//addNumbers(45,78);
let addNumbers=function(num1,num2){
    return num1+num2;
}
let r1=addNumbers(45,67);
console.log(r1);
addNumbers=function(num1,num2,num3){
    return num1+num2+num3;
}
let r2=addNumbers(45,67,12);
console.log(r2);

const subNumbers=function(num1,num2){
    return num1-num2;
}
console.log(subNumbers(45,23));

/* Assignment to constant variable. */
/* subNumbers=function(num1,num2,num3){
    return num1-num2-num3;
}
console.log(subNumbers(45,23,12)); */



