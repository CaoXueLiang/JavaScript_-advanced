class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function mixinRuner(BaseClass) {
  class newClass extends BaseClass {
    running() {
      console.log(`${this.name} running~`);
    }
  }
  return newClass;
}

function mixinEater(BaseClass) {
  class newClass extends BaseClass {
    eating() {
      console.log(`${this.name} eating~`);
    }
  }
  return newClass;
}

let newStudent = mixinRuner(mixinEater(Person));
let stu1 = new newStudent("xiaoming", 20);
let stu2 = new newStudent("lining", 30);
console.log(stu1);
stu1.running();
stu1.eating();
stu2.eating();
stu2.running();
