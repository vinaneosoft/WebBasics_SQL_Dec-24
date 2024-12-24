class BankAccount{
    constructor(balance=0,accountType="savings",accountNumber=111){
        console.log("in constructor");
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.accountType=accountType;
    }

    deposit(amount){
        console.log("in deposit");
        
        this.balance=this.balance+amount;
        return this.balance
    }
    withdraw(amount){
        if(amount<=this.balance)
            this.balance=this.balance-amount;
        else
            throw new Error("Insufficient balance");
        return this.balance
    }


}// end 

const account1=new BankAccount(); // def constructor
console.log(account1);
const account2=new BankAccount(67000); // p constructor
console.log(account2);
const account3=new BankAccount(45000, 'salary'); // p constructor
console.log(account3);
const account4=new BankAccount(78000, 'current', 343434); // p constructor
console.log(account4);

account1.balance=34000;
console.log(account1);
console.log(account1.balance);

console.log(account2);
console.log(account2.balance);

//console.log(account2.accountType);
console.log(account4.balance);
account4.deposit(1000);
console.log(account4.balance);
console.log(account3.balance);
try{
account3.withdraw(50000);
}catch(error){
    console.log(error);
}
console.log(account3.balance);

account4.deposit(56788);

console.log("dot notation");
console.log(account1.accountNumber);
console.log(account1.accountType);
console.log(account1.balance);
console.log("bracket notation");
console.log(account1['accountNumber']);
console.log(account1['accountType']);
console.log(account1['balance']);
// all keys : for in
console.log("------key iteration on object (keys must not be private)-----");

for(let key in account1){
    console.log(key);
    console.log(account1[key]);
}

let nums=[56,78,90,,5,6,7,,88,8, ];
for (let num in nums){
    //console.log(num);
    console.log(nums[num]+"=>"+num)
}

for (let i=0;i<nums.length;i++){
    //console.log(num);
    console.log(nums[i]+"=>"+i)
}
