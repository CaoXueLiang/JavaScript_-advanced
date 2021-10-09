var names = ["abc", "cba", "nba"];

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(`${this.name} eating~`);
  }

  running() {
    console.log(`${this.name} running~`);
  }

  static randomPerson() {
    console.log(Math.random());
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teaching() {
    console.log(`${this.name}教的科目是${this.subject}`);
  }
}

let teacher1 = new Teacher("xiaoming", 30, "数学");
let teacher2 = new Teacher("lining", 35, "语文");
teacher1.eating();
teacher1.running();
teacher1.teaching();
teacher2.eating();
teacher2.running();
teacher2.teaching();
Teacher.randomPerson();

console.log(teacher2 instanceof Teacher);
console.log(teacher2 instanceof Person);
