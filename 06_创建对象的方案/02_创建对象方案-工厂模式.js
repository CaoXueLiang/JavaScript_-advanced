/**
 * 工厂模式：相对于字面量创建对象，更加便捷不用重复写一些相同的代码。可以批量创建对象
 * 缺点：获取不到对象最真实的类型
 */

function createPerson(name, age, height, adress) {
  var p = {};
  p.name = name;
  p.age = age;
  p.height = height;
  p.adress = adress;
  p.eating = function () {
    console.log(`${this.name} 在吃东西~`);
  };
  p.running = function () {
    console.log(`${this.name} 在跑步`);
  };
  return p;
}

var person1 = createPerson("kebi", 30, 1.88, "洛杉矶");
var person2 = createPerson("lining", 40, 1.7, "北京市");
var person3 = createPerson("xioaming", 18, 1, 99, "石家庄市");

person1.name = "小明";
console.log(person1);
console.log(person2);
console.log(person3);
person1.eating();
person2.eating();
person3.eating();
