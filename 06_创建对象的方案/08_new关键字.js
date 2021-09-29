function Person(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

Person.prototype.eating = function () {
  console.log(`${this.name} 在吃饭`);
};

Person.prototype.running = function () {
  console.log(`${this.name} 在跑步`);
};

var person1 = new Person("kebi", 18, 1.88);
console.log(person1);
person1.eating();
person1.running();

/**
 * 调用`new`关键字，内部经历了哪些步骤
 * ① 创建一个空对象 {}
 * ② 将对象的隐式原型[[Prototype]]，赋值为构造函数的显示原型 `prototype`
 * ③ 将函数的this指向这个新创建的对象
 * ④ 执行函数体中的内容
 * ⑤ 如果该构造函数未返回非空对象，则返回这个对象
 */

//手写new函数的实现
function myNew(fn, ...argment) {
  let obj = {};
  Object.setPrototypeOf(obj, fn.prototype);
  let result = fn.call(obj, ...argment);
  let isObject = typeof result === "object" && result !== null;
  let isFunction = typeof result === "function";
  if (isObject || isFunction) {
    return result;
  } else {
    return obj;
  }
}

var person2 = myNew(Person, "xiaoming", 20, 1.75);
console.log(person2);
person2.eating();
person2.running();
console.log(person2 instanceof Person);

console.log(person1.__ptoto__ === person2.__ptoto__);
