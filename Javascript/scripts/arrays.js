// camel case, noun, plural form
// dynamic: no fix size, they can grow
const nums=[56,78,356,789,456,88];
const names=["pooja",'pritam','kaveri','reema','isha']
const arr=[12, 'hari',5678.789, true, 34, "om"]
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



class Employee{
        id;
        ename;
        salary;
    // variables

        constructor(id,name, salary){
            this.id=id;
            this.name=name;
            this.salary=salary;
        }

}

let emp1=new Employee(45,"hari",679999);
let emp2=new Employee(45,"hari",679999);
let emp3=new Employee(45,"hari",679999);
let emp4=new Employee(45,"hari",679999);
let emp5=new Employee(45,"hari");
let emp6=new Employee(45);
let emp7=new Employee();

// map where store salaries of employees with their id
let map=new Map()
map.set(123,7890000);
map.set(121,7190000);
let sal1=map.get(123)
let sal2=map.get(121)