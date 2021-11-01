class Person {
  constructor(adress, name, students) {
    this.adress = adress;
    this.name = name;
    this.students = students;
  }

  entry(item) {
    this.students.push(item);
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.students.length) {
          return { value: this.students[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
}

const room1 = new Person("1撞2单元300", "教室202", ["lining", "james", "kebi"]);
room1.entry("caoxueliang");
for (const element of room1) {
  console.log(element);
}

//es6之前的构造函数课可以在原型上添加
// function Person() {}
// Person.prototype[Symbol.iterator] = function () {};
