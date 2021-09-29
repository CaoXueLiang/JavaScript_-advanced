//父类
function Person(name, age, friends) {
  this.name = name;
  this.age = age;
  this.friends = friends;
}

Person.prototype.eating = function () {
  console.log(this.name + " eating~");
};

//子类
function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends);
  this.sno = sno;
}

Student.prototype = new Person();
Object.defineProperty(Student.prototype, "constructor", {
  value: Student,
  enumerable: false,
  configurable: true,
  writable: true,
});
Student.prototype.studying = function () {
  console.log(this.name + " studying~");
};

var stu1 = new Student("kebi", 18, ["xiaoming", "lining"], 100500);
var stu2 = new Student("james", 20, ["saigao"], 100600);
console.log(stu1);
console.log(stu2);
stu1.eating();
stu2.eating();
stu1.studying();
stu2.studying();

/**
 * 使用原型链和借用构造函数组合继承的方式，也存在缺点：
 *  ① Person函数被调用了两次
 *  ② Student实例的原型上会多出一些属性，但是这些属性没有存在的必要
 */
