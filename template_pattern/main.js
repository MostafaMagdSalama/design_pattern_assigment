class User {
  constructor(id, name, salary) {
    this.id = id;
    this.salary = salary;
    this.name = name;
  }
}

class Sort {
  constructor() {
    this.array = [];
  }
  TemplateMethod() {
    this.loadData();
    this.sort();
    this.log();
  }
  loadData() {}
  swap(first, last) {
    let holder = this.array[first];
    this.array[first] = this.array[last];
    this.array[last] = holder;
  }
  //abstract method
  compare(x, y) {}
  sort() {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length - i - 1; j++) {
        if (this.compare(this.array[j], this.array[j + 1])) {
          this.swap(j, j + 1);
        }
      }
    }
    return this.array;
  }
  log() {
    console.log(this.array);
  }
}

class SortBySalary extends Sort {
  constructor() {
    super();
  }

  loadData() {
    const users = [
      new User(1, "mohamed", 200),
      new User(2, "ibrahim", 100),
      new User(3, "dfsfdf", 333),
      new User(3, "dfsfdf", 300),
      new User(3, "dfsfdf", 300),
    ];
    // const users = [
    //   { id: 1, name: "ahmed", salary: 300 },
    //   { id: 1, name: "ahmed", salary: 200 },
    //   { id: 1, name: "ahmed", salary: 2200 },
    //   { id: 1, name: "ahmed", salary: 100 },
    // ];

    console.log(users);
    this.array = users;
  }
  compare(x, y) {
    console.log(x.salary, y.salary);
    return x.salary < y.salary ? true : false;
  }
}

function Run() {
  let sortBySalary = new SortBySalary();
  sortBySalary.TemplateMethod();
}
