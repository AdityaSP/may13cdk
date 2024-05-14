class LB{
    breathe(){
        console.log("I breathe")
    }
}

class HB extends LB{
    metathink(){
        console.log("I think therefore I am")
    }
}

class Fish extends LB{
    swim(){
        console.log("I swim only")
    }

}

class fabric {
    breath(){
        console.log("I breathe")
    }
}

const f1 = new Fish()
f1.swim()
f1.breathe()
const h1 = new HB()
h1.breathe()
h1.metathink()


//--------------------------------------------------
class Account {
  balance: number;
  name: string;
  
  constructor(bal: number, name: string) {
    this.balance = bal;
    this.name = name;
  }

  credit(amount: number) {
    this.balance = this.balance + amount;
  }

  debit(amount: number) {
    this.balance = this.balance - amount;
  }
}

class SavingsAccount extends Account{

    constructor(name: string){
        super(100, name)
    }

    debit(amount :number){
        if (this.balance - amount < 0)
            console.log("Cannot debit. Insufficient funds")
        else
            this.balance = this.balance - amount
    }
}

class CurrentAccount extends Account{
  constructor(bal: number, name: string) {
    bal = bal + 100
    super(bal, name)
  }
}

const sa1 = new SavingsAccount("Aditya")
const ca1 = new CurrentAccount(10000, "ABC Inc")
console.log(sa1.balance)
sa1.credit(100)
console.log(sa1.balance);
sa1.debit(50);
console.log(sa1.balance);   

console.log(ca1.balance);
ca1.credit(100);
console.log(ca1.balance);
ca1.debit(50);
console.log(ca1.balance);

console.log(sa1.balance)
sa1.debit(5000)
console.log(sa1.balance);

console.log(ca1.balance);
ca1.debit(20000)
console.log(ca1.balance);
