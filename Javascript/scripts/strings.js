
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


s1="    India is my country. I love my India country. I like to live here    ";
console.log( s1.length);
s1=s1.trim();
console.log( s1.length);
let c=s1.charAt(1);
console.log(c);
console.log(s1.toLowerCase());
console.log(s1.toUpperCase());

console.log(s1);
console.log(s1.substring(0,5));
console.log(s1.slice(0,5));
console.log(s1.substring(6));
console.log(s1.slice(6));
console.log(s1.substring());
console.log(s1.slice());
console.log("negative in substring");
console.log(s1.substring(-5));  // 0
console.log("negative in slice");
console.log(s1.slice(-5)); // counts from end of string
console.log(s1);
console.log(s1.substring(5,0)); //0,5
console.log(s1.slice(5,0)); // empty string
console.log(s1.substring(-15,-5))// 0,0
console.log(s1.slice(-15,-5))
console.log(s1.slice(10,-5))
console.log(s1.slice(-5,10))
console.log(s1.substring(-5,10)) //0, 10
console.log(s1.substring(s1.length-1)) 
console.log(s1.charAt(s1.length-1));


const st1="India";
const st2="india";

const b=st1.toLowerCase()==st2.toLowerCase()
console.log(b);

let m1="hi"
let m2=new String("hi");

console.log(m1.valueOf()==m2.valueOf());
console.log("---");

console.log(m1.valueOf()===m2.valueOf());

let ss="india is my country. india, india I love my india. india is country";
ss.indexOf('india');
ss.lastIndexOf('india');
ss.lastIndexOf('i');