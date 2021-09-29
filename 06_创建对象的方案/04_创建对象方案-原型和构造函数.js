/**
 * 创建对象终极解决方案: 构造函数加原型链
 *
 */

function Person(name, age, height, adress) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.adress = adress;
}

Person.eating = function () {
  console.log(`${this.name} 在吃饭...`);
};

Person.running = function () {
  console.log(`${this.name} 在跑步...`);
};

var person1 = new Person("kebi", 30, 1.88, "北京市");
var person2 = new Person("小明", 18, 1.7, "石家庄市");
console.log(person1);
console.log(person2);
console.log(person1.eating === person2.eating);
