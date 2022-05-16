class IState {
  constructor(amount, min, max) {
    this.amount = amount;
    this.min = min;
    this.max = max;
  }
}
class Sliver extends IState {
  constructor(amount) {
    super(amount, 0, 3000);
  }
  withdraw(transaction) {
    this.amount = transaction * 0.3;
  }
  deposite(transaction) {
    this.amount = transaction * 0.1;
  }
}
class Gold extends IState {
  constructor(amount) {
    super(amount, 3001, 10000);
  }
  withdraw(transaction) {
    this.amount = transaction * 0.2;
  }
  deposite(transaction) {
    this.amount = transaction * 0.3;
  }
}
class Platinum extends IState {
  constructor(amount) {
    super(amount, 10001, Number.MAX_VALUE);
  }
  withdraw(transaction) {
    this.amount = transaction * 0.15;
  }
  deposite(transaction) {
    this.amount = transaction * 0.7;
  }
}
class AccountManagement {
  constructor(balance) {
    this.balance = balance;
    this.state;
    this.determineState(this.balance);
  }
  determineState() {
    if (this.balance <= 3000) {
      this.state = new Sliver(this.balance);
    } else if (this.balance > 3000 && this.balance <= 10000) {
      this.state = new Gold(this.balance);
    } else {
      this.state = new Platinum(this.balance);
    }
  }
  withdraw() {
    this.state.withdraw(this.balance);
    this.balance = this.balance - this.state.amount;
    this.determineState();
  }
  deposite() {
    this.state.deposite(this.balance);
    this.balance = this.balance + this.state.amount;
    this.determineState();
  }
}
function showLogs() {
  const newAccount = new AccountManagement(10000000);
  console.log(newAccount.state);
  newAccount.withdraw(100);
  console.log(newAccount.state);
}
