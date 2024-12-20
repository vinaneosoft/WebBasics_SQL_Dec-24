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
let summ=babyages.reduce((prev, current)=>prev+current)
console.log(summ);