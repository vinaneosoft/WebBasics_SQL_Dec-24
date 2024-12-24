/* capticalcase */
class BankAccount{
    constructor(balance=0,accountType="savings",accountNumber=111){
        console.log("in constructor");
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.accountType=accountType; 
    }
}

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
console.log(account2);
console.log(account2.accountType);
