class IMediator {
  constructor() {}
  Send(message, fromColleague) {}
  Notify(message) {}
}

class Bank {
  constructor(mediator) {}
  loginSystem() {}
  checkAvialibleAmountOfMoney() {}

  checkCredentials(NId, BankId, password) {}
}
class CIB extends Bank {
  constructor(nid, bankId, mediator) {
    super(mediator);
    this.NID = nid;
    this.bankId = bankId;
    this.password = "";
  }
  Send(message) {
    this.mediator.Send(message, this);
  }

  Notify(message) {
    console.log(message);
    console.log("from cib  done");
  }
  loginSystem(id, password, bankAccount) {
    console.log("logging system checking credentials....");
    console.log("valid credentials");
  }
  checkAvialibleAmountOfMoney() {
    console.log("avalibale amount of money");
  }
}
class CentralBank extends IMediator {
  constructor() {
    super();
  }
  Send(message, dest) {
    dest.Notify(message);
  }
  checkCredentials(NId, BankId, password) {
    console.log("checking the credentail bank_id on abozaabi....");
    console.log("valid credentails");
  }
}
class AbuZaabi extends Bank {
  constructor(mediator) {
    super(mediator);
  }
  Send(message) {
    this.mediator.Send(message, this);
  }

  Notify(message) {
    console.log("Abu zaabi" + message);
  }
}

class FacadeBankSystem {
  constructor() {
    var mediator = new CentralBank();
    this.cib = new CIB(1, 323232, mediator);
    this.central_bank = new CentralBank();
  }
  transferMoney(CibAccountCredentials, amount, toBank, toAccountId) {
    this.cib.loginSystem(1, "123", "mostafa-account2121");
    this.central_bank.checkCredentials(1, "123", "******");
    this.central_bank.Send(
      "transaction complele centeral bank to cib",
      this.cib
    );
  }
}

function withFacade() {
  // client
  let transferMoneyInterface = new FacadeBankSystem();
  transferMoneyInterface.transferMoney();
}
