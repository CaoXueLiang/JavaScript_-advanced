/**
 * 构造函数：也是一个普通的函数
 *  ① 构造函数的首字母一般大写
 *  ② 通过new方法调用
 *
 *  可以获取到创建出来对象的类型，但是方法在实例上有重复定义
 */
function Person(name, age, height, adress) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.adress = adress;
  this.eating = function () {
    console.log(`${this.name} 在吃饭...`);
  };
  this.running = function () {
    console.log(`${this.name} 在跑步...`);
  };
}

var person1 = new Person("kebi", 30, 1.88, "北京市");
var person2 = new Person("小明", 18, 1.7, "石家庄市");
console.log(person1);
console.log(person2);
person1.eating();
person2.eating();
console.log(person1 instanceof Person);
console.log(person1.eating === person2.eating);
