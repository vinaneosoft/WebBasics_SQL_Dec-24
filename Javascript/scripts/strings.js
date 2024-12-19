
let s1="India is my country" // string literal
console.log(typeof s1); //string

let s2=new String("India");  // String object
console.log(typeof s2); // object

console.log(s2 instanceof String);

/*memory allocation and comparision */

let str1="Neosoft";
let str2="Neosoft";
let str3=new String("Rabale");
let str4=new String("Rabale");
console.log("---value comparision----");
console.log(str1.valueOf()==str2.valueOf());
console.log(str3.valueOf()==str4.valueOf());
console.log("---memory location comparision----");
console.log(str1==str2);
console.log(str3==str4);

const ans1=str1.localeCompare(str2);
console.log(ans1);
const ans2=str3.localeCompare(str4);
console.log(ans2);

/* string objects are immutable
once we create a string we can not change its characters, if we want change then changes
will be stored at new memory location*/
str1="Neosoft";
let result=str1+" , Dadar";
console.log(str1);
console.log(result);


let message="come to my house";
console.log(message.concat("at Rabale"));
console.log(message);

message=message + " at pune";
console.log(message);



