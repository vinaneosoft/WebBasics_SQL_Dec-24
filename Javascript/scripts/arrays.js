// camel case, noun, plural form
// dynamic: no fix size, they can grow
// direct declation
const nums=[56,78,356,789,456,88];
let names=["pooja",'pritam','kaveri','reema','isha']
const arr=[12, 'hari',5678.789, true, 34, "om"];

let employees=[
    {
        id:3455,
        ename:"hari",
        bsalary:56788
    },
    {
        id:678,
        ename:"hari",
        bsalary:56788
    },
    {
        id:455,
        ename:"hari",
        bsalary:56788
    }
]

// array declaration with new keyword

const numsar=new Array(67,78,45,34,23,56,7,8,67);
const namesar=new Array("hari","pooja","Poonam");


let ar1=[]; //0

ar1[0]=123;
ar1[1]=567;   //2
//array API
ar1.push(67)
ar1.push(78);
ar1.unshift(7777); //5
console.log(ar1);

ar1[2]=66666;
console.log(ar1);

//splice
ar1.splice(3,2)  // start, deleteCount
console.log(ar1);
ar1.splice(0,1,12111,44444)  // start, deleteCount, elements to replace
console.log(ar1);
ar1.splice(3,0,789)
console.log(ar1);

//pop, shift

names=["pooja",'pritam','kaveri','reema','isha']
//join
const joined=names.join("-");

// slice
const subarry=names.slice(0,2)
console.log(names);
// arrays are mutable : changes will be stored in same array and extra reference will be provided to
//that array
let ref=names.fill("new value", 0,2)
console.log(names);
console.log(ref);

let reverse=names.reverse();
console.log(names);
console.log(reverse);


const courses=['Web basics', 'PYTHON','sql','java',]
console.log(courses);
courses.sort(); //this method mutates the array and returns a reference to the same array.
console.log(courses);

courses.sort((s1,s2)=>{
    console.log(s1);
    console.log(s2);
    return s1.toLowerCase().localeCompare(s2.toLowerCase())
})
console.log(courses);

courses.sort((s1,s2)=>s1.toLowerCase().localeCompare(s2.toLowerCase()))
console.log(courses);

const emparr=new Array(
    {
        id:3455,
        ename:"hari",
        bsalary:56788
    },
    {
        id:678,
        ename:"hari",
        bsalary:56788
    },
    {
        id:455,
        ename:"hari",
        bsalary:56788
    }
)
// searching
// display whole array
for(let i=0;i<emparr.length;i++){
    console.log(emparr[i]);
}
console.log("-------------");
//find employee having id 455
for(let emp of emparr){
    if(emp.id==455){
        console.log(emp);
        break;
    }
}
console.log("-------------");
//increment salary by 5000 of employee having id 678
for(let emp of emparr){
    if(emp.id==678){
       emp.bsalary=emp.bsalary+5000
       break;
    }
}
console.log(emparr);
//increment salary by 5000 for every employee
for(let emp of emparr){
       emp.bsalary=emp.bsalary+5000 
}
const empswithincrement=emparr.map(employee=>employee.bsalary+5000)
console.log(empswithincrement);


let ob1={
    id:3455,
    ename:"hari",
    bsalary:56788
}
let ob2={
    id:3455,
    ename:"hari",
    bsalary:56788
}

console.log(ob1.id);
console.log(ob1.ename);
console.log(ob1.bsalary);

let test=function(){
    console.log("this is a funciton");
    
}
let testarr=[test];
let funref=testarr[0];
funref();








class Employee{
        id;
        ename;
        salary;
        static company="neosoft"
    // variables

        constructor(eid,ename, esalary){
            this.id=eid;
            this.name=ename;
            this.salary=esalary;
        }

}

let emp1=new Employee(45,"hari",679999);
let emp2=new Employee(45,"hari",679999);
let emp3=new Employee(45,"hari",679999);
let emp4=new Employee(45,"hari",679999);
let emp5=new Employee(45,"hari");
let emp6=new Employee(45);
let emp7=new Employee();
console.log(Employee.pie);


// map where store salaries of employees with their id
let map=new Map()
map.set(123,7890000);
map.set(121,7190000);
let sal1=map.get(123)
let sal2=map.get(121)