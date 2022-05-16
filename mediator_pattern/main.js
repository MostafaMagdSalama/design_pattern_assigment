"use strict";

class IMediator {
  constructor() {}
  Send(message, sender, receiver) {}
  sendAll(message, sender) {}
}

class ConcreteMediator extends IMediator {
  constructor() {
    super();
    this.colleagues = [];
  }
  attach(colleague) {
    this.colleagues.push(colleague);
  }
  detach(colleague) {
    this.colleagues = this.colleagues.filter((c) => c !== colleague);
  }

  Send(message, toColleague) {
    return this.constructor.name === toColleague.constructor.name
      ? toColleague.Notify(message)
      : "invalid operation";
  }
  sendAll(message, sender) {
    const newColleagues = this.colleagues.filter(
      (colleague) =>
        sender.name !== colleague.name &&
        sender.constructor.name === colleague.constructor.name
    );
    newColleagues.forEach((colleague) => {
      colleague.Notify(message);
    });
  }
}
class Colleague {
  constructor(mediator, name) {
    this._mediator = mediator;
    this.name = name;
  }
  Send(message, receiver) {
    this._mediator.Send(message, receiver);
  }
  sendAll(message) {
    this._mediator.sendAll(message, this);
  }

  Notify(message) {
    console.log(`${this.name} gets message: ` + message);
  }
}
class Colleague_2 {
  constructor(mediator, name) {
    this._mediator = mediator;
    this.name = name;
  }
  Send(message, receiver) {
    this._mediator.Send(message, receiver);
  }
  sendAll(message) {
    this._mediator.sendAll(message, this);
  }

  Notify(message) {
    console.log(`${this.name} gets message: ` + message);
  }
}

function init_Mediator() {
  var mediator = new ConcreteMediator();

  let ahmed = new Colleague(mediator, "ahmed");
  let mohamed = new Colleague(mediator, "mohamed");
  let mostafa = new Colleague(mediator, "Mostafa");
  let omniah = new Colleague(mediator, "Omniah");
  mediator.attach(ahmed);
  mediator.attach(mohamed);
  mediator.attach(mostafa);
  mediator.attach(omniah);

  //   omniah.Send("anytime dude", mostafa);
  mostafa.sendAll("hello");
}
