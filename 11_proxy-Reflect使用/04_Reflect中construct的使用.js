class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Teacher {}

const stu1 = new Student("xiaoming", 30);
console.log(stu1);

const stu2 = Reflect.construct(Student, ["kebi", 20], Teacher);
console.log(stu2);
