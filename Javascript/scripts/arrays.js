// camel case, noun, plural form
// dynamic: no fix size, they can grow
// direct declation
const nums=[56,78,356,789,456,88];
const names=["pooja",'pritam','kaveri','reema','isha']
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

let ar1=[]; //0

ar1[0]=123;
ar1[1]=567;   //2

ar1.push(67)
ar1.push(78);
ar1.unshift(7777); //5
console.log(ar1);

ar1[2]=66666;
console.log(ar1);

//splice
//array API


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








class NeoEmployee{
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