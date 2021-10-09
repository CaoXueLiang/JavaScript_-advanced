var names = ["abc", "cba", "nba"];

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._address = "北京市";
  }

  //① 普通实例方法，通过实例访问 var p1 = new Person(); p1.eating  p1.running
  eating() {
    console.log(`${this.name} eating~`);
  }

  running() {
    console.log(`${this.name} running~`);
  }

  //② 类的静态方法（类方法）;直接通过类名进行调用
  static randomPerson() {
    var nameIndex = Math.floor(Math.random() * names.length);
    var name = names[nameIndex];
    var age = Math.floor(Math.random() * 100);
    return new Person(name, age);
  }

  //③ 类的访问器方法
  get adress() {
    console.log("拦截访问操作");
    return this._address;
  }

  set adress(newAdress) {
    console.log("拦截设置操作");
    this._address = newAdress;
  }
}

let person1 = new Person("kebi", 20);
let person2 = new Person("xioaming", 30);
person1.eating();
person1.running();
person2.eating();
person2.running();

console.log(Person.randomPerson());
console.log(Person.randomPerson());
console.log(Person.randomPerson());

person1.adress;
person1.adress = "上海市";
console.log(person1);

console.log("------------------");
console.log(person1.__proto__ === Person.prototype);
