var obj = {
  name: "kebi",
  age: 18,
};

/**
 * 当访问对象上的属性时，会触发[[get]]操作
 *  ① 首先在当前对象中查找属性
 *  ② 如果当前对象中没有该属性，会沿着原型链[[Prototype]]向上寻找
 */

obj.__proto__ = {};

obj.__proto__.__proto__ = {};

obj.__proto__.__proto__.__proto__ = {
  address: "北京市",
};

console.log(obj.address);

/**
 * 对象的顶层原型是什么？
 * 对象的顶层原型是: `Object.prototype`
 */
let currentPrototype = obj.__proto__;
console.log(currentPrototype);
while (currentPrototype) {
  currentPrototype = currentPrototype.__proto__;
  console.log(currentPrototype);
  console.log(currentPrototype === Object.prototype);
}

console.log(Object.getOwnPropertyDescriptors(Object.prototype));
console.log(Object.prototype.constructor);
console.log(Object.prototype.__proto__);

/**
 * 构造函数的原型
 */
function Person() {}
console.log(Object.getOwnPropertyDescriptors(Person.prototype.__proto__));
