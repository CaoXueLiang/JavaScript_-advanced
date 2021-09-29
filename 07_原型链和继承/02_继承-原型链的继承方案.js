function Person() {
  this.name = "xiaoming";
  this.age = 18;
  this.friends = [];
}
Person.prototype.eating = function () {
  console.log(this.name + " eating~");
};

function Student() {
  this.sno = 101;
}
Student.prototype = new Person();

Student.prototype.studying = function () {
  console.log(this.name + " studying~");
};

var stu1 = new Student();
var stu2 = new Student();
stu1.name = "hhhhhh";
console.log(stu1);
console.log(stu1 instanceof Person);
console.log(stu1.name);
console.log(stu1.age);
stu1.eating();
stu1.studying();
console.log("-----------------------");

stu1.friends.push("kebi", "小明");
console.log(stu1.friends);
console.log(stu2.friends);

/**
 * 原型链继承方案的弊端：
 * ① 打印`stu1`实例对象，继承的属性name和age是看不到的
 * ② 修改原型上引用类型的值，会相互影响
 * ③ 直接修改对象的属性，是给本对象添加一个属性
 */
