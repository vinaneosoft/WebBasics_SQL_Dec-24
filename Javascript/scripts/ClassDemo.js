/* capticalcase */
class BankAccount{
    // instance variables
    // instance methods
    accountNumber; balance; accountType; 

    /*A class may only have one constructor */
  /*   constructor(){
        console.log("in constru");
    } */
    constructor(balance=0,accType="savings",accNum=111){
        console.log("in constru");
        this.accountNumber=accNum;
        this.balance=balance;
        this.accountType=accType;
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
