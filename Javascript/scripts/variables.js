
// dynamicaly typed lang
var num1;
num1=67899; //number
console.log(num1);
console.log(typeof num1);
num1="nighty thousand" // string
console.log(num1);
console.log(typeof num1);
num1=true // boolean
console.log(num1);
console.log(typeof num1);
let salary;
salary=67899; //number
salary="nighty thousand" // string
salary=true // boolean


var company="Neosoft";
var company="Webwerks" // var types variables can be redeclared

let clocation="Dadar";
//let clocation="Rabale"; //Cannot redeclare block-scoped variable 'location'.
clocation="Rabale"; // this is ok
//console.log(address); // address not defined
address="xyz";
console.log(address);
address="pqr";     
console.log(address);

/* function scoped variables */
function loop1(){
    console.log("outside"+i);
    document.write(i);
    for(var i=1;i<=5;i++){
        document.write(i);
    }//end
    document.write(i);
    console.log("outside"+i);
}// function body ended
loop1();

/** block scoped variables */
function loop2(){
   // console.log("outside"+i);
    //document.write(i);
    for(let i=1;i<=5;i++){
        document.write(i);
    }//end
   // document.write(i);
   // console.log("outside"+i);
}// function body ended
loop2();


console.log(myname); // undefined
var myname="harish";  // var type
console.log(myname);


//console.log(sirname);  // not defined
sirname="poojari"   // let type
console.log(sirname);console.log(sirname);console.log(sirname);console.log(sirname);console.log(sirname);

console.log(sirname)
console.log(sirname)

const pie=3.142;
pie=3.14444


