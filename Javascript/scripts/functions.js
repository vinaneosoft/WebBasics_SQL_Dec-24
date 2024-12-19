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



const getName=()=>{
    console.log("Vina Patil");
}
getName();


const cubeFun=(num)=>{
    return num*num*num;
}

console.log(cubeFun(4));

// features
/* 1. if arrow function has single formal argument then () are optional */
const cubeFun2=num=>{
    return num*num*num;
}
console.log(cubeFun2(4));

/* 2. if arrow function contains single stmt in body then {} are optional*/

const cubeFun3=num=>console.log( num*num*num)

cubeFun3(4);

/* 3. if arrow function contains single return stmt in body then {} are optional, return keyword not allowed
value will be automatically returned by a function*/
const cubeFun4=num=>num*num*num;
console.log(cubeFun4(5));

const cubeFun5=num=>{return num*num*num};
console.log(cubeFun5(5));
