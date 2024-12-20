let courses=['Basics of java', 'Java Fundamentals', 
    'Web basics', 'Python in easy way', 'Advanced Python',"Advanced jAva course"]

//forEach

courses.forEach(function(course){
    console.log(course);
});
courses.forEach(function(crs, index){
    console.log(`${crs} is at index ${index}`);
});

courses.forEach(function(cr, index, ref){
    console.log(`${cr} is at index ${index} in array ${ref}`);
});

// convert annonymous function to arrow function

courses.forEach(function(course){
    console.log(course);
});

console.log("---------------");
courses.forEach(value => console.log(value))

// find all courses of java : filter (all matching from array)
console.log("...");
const javacourses=courses.filter(course=>course.toLowerCase().includes('java'))
javacourses.forEach(jc=>console.log(jc));
console.log("...");
courses.filter(course=>course.toLowerCase().includes('java')).forEach(jc=>console.log(jc));

console.log("...");

// find first course of java in array : find (first matching from array)
const javac=courses.find(course=>course.toLowerCase().includes('java'))
console.log(javac);

//convert every course to uppercase and store into new array : map

const uppercourses=courses.map(course=>course.toUpperCase())
console.log(uppercourses);

// join all courses with and and return joined string

console.log( uppercourses.join(" and "));

let babyages=[6,3,8,4,7];
// sum of array elements

let sum=0;
for(age of babyages){
    sum=sum+age
}
console.log(sum);
// reduce
let summ=babyages.reduce((prev, current)=>prev+current) // acc, current value of array
console.log(summ);
// prev=6, current=3 6+3 , prev=9
//prev=9, current=8 , 9+8, prev=17
//....
// how to set any custom initial value to prev??
let summ2=babyages.reduce((prev, current)=>prev+current, 20)
console.log(summ2);
// prev=20, current=6 26 , prev=26
// prev=26, current=3 29 , prev=29
//prev=29, current=8 , 29+8, prev=37
//...

// increment age by 1 for every age which is less than 5
// make function chaining

babyages.filter(num => num < 5).map(num => num + 1).forEach(num => console.log(num));