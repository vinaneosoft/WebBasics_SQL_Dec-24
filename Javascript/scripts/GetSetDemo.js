/* capticalcase */
class BankAccount{
    #accountNumber; #balance; #accountType; 
    constructor(balance=0,accType="savings",accNum=111){
        console.log("in constructor");
        this.#accountNumber=accNum;
        this.#balance=balance;
        this.#accountType=accType;
    }
    set bal(balance){
        this.#balance=balance;
    }
    get bal(){
        return this.#balance
    }
    set actype(accountType){
        this.#accountType=accountType;
    }
    get actype(){
        return this.#accountType
    }

    deposit(amount){
        console.log("in deposit");
        
        this.#balance=this.#balance+amount;
        return this.#balance
    }
    withdraw(amount){
        if(amount<=this.#balance)
            this.#balance=this.#balance-amount;
        else
            throw new Error("Insufficient balance");
        return this.#balance
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

account1.bal=34000;
console.log(account1);
console.log(account1.bal);

console.log(account2);
console.log(account2.bal);

//console.log(account2.#accountType);
console.log(account4.bal);
account4.deposit(1000);
console.log(account4.bal);
console.log(account3.bal);
try{
account3.withdraw(50000);
}catch(error){
    console.log(error);
}
console.log(account3.bal);

account4.deposit(56788);
