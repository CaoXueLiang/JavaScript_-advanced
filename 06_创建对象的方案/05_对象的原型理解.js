/**
 * 每个对象上都有一个`[[Prototype]]`属性，这个属性称为对象的原型 (隐式原型)
 */

var obj = { name: "kebi" };
var info = {};
console.log(obj);
console.log(info);

/**
 * 如何查看一个对象的原型
 * ① 早期的ECMA是没有规范如何去查看 [[prototype]]
 * ② 通过__proto__属性访问原型（浏览器提供的方法）
 * ③ ES5之后提供的 Object.getPrototypeOf
 */
console.log(obj.__proto__);
console.log(info.__proto__);
console.log(obj.__proto__ === Object.prototype);
console.log(Object.getPrototypeOf(obj));

/**
 * 对象的原型有什么用？
 * 当访问一个对象的属性是，会触发 [[get]] 操作
 * ① 先在当前对象中查找对应的属性，如果找到就直接使用
 * ② 如果没有找到，那么会沿着该对象的原型去查找
 */
console.log(obj.age);
obj.__proto__.age = 18;
console.log(obj.age);
