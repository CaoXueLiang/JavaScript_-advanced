/**
 * 一、每个对象里面都有一个`[[Prototype]]`隐式原型对象 （可以通过`__proto__`访问，但存在浏览器兼容问题）
 *
 *
 * 二、Foo是一个函数，会有一个显示原型对象：Foo.prototype
 *    Foo.prototype来自哪里?
 *    答案：创建了一个函数, Foo.prototype = { constructor: Foo }
 *
 *
 * 三、Foo是一个对象，那么他会有一个隐式原型对象：Foo.__proto__
 *    Foo.__proto__来自哪里?
 *    答案：new Function() Foo.__proto__ === Function.prototype
 *    Function.prototype = { constructor: Function }
 *
 */

var obj = {
  name: "why",
};

console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);
console.log("----------------------------------");

function Foo() {}
let foo1 = new Foo();
let obj1 = new Object();

console.log(foo1.__proto__ === Foo.prototype);

console.log(Function.prototype === Function.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log("----------------------------------");

console.log(Object.prototype === Object.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Object.prototype.__proto__);
console.log("----------------------------------");

console.log(Foo.prototype === Foo.prototype);
console.log(Foo.__proto__ === Function.prototype);
console.log(Foo.prototype.__proto__ === Object.prototype);
