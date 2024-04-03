class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`deposited ${amount} into account ${this.accountNumber} .`);
    } else {
      console.log("Deposit amount must be greater than zero.");
    }
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`withdrawn ${amount} into account ${this.accountNumber} .`);
    } else {
      console.log("Insufficient funds.");
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}\nOwner Name: ${this.ownerName}\nBalance: $${this.balance}`);
  }
}
const account = new BankAccount(1001, "Mahfuz sarker", 700);


console.log("Initial account information:");
account.displayAccountInfo();

console.log("Deposit and withdrawal:");
account.deposit(300);
account.withdraw(500);

console.log("Updated Account Information:");
account.displayAccountInfo();