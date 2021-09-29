function foo() {
  console.log("我是一个函数");
}

/**
 * ① 函数作为对象的子类型，有自己的[[Prototype]]属性 （隐式原型）
 * ② 同时函数作为函数，有自己的显示原型：prototype
 */

console.log(foo);
//隐式原型
console.log(foo.__proto__);

//显示原型
console.log(foo.prototype);

//隐式原型和显示原型不是同一个东西
console.log(foo.__proto__ === foo.prototype);

var foo1 = new foo();
var foo2 = new foo();
console.log(foo1.__proto__ === foo.prototype);
console.log(foo2.__proto__ === foo.prototype);
console.log(foo1.__proto__ === foo2.__proto__);

console.log("-------------------------------");
console.log(foo.__proto__ === Function.prototype);
console.log(foo.prototype.__proto__ === Object.prototype);
