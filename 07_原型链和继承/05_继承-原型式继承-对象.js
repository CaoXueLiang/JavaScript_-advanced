/**
 *  原型式继承：主要针对的是对象
 *  实现分方式有三种：(本质上是相同的)
 *  ① `Object.create`函数
 *  ② createObject1
 *  ③ createObject2
 */

/**
 * 缺点：多个实例的引用类型，指向相同的内存
 */

var obj = {
  name: "kebi",
  age: 18,
  friends: ["p1", "p2", "p3"],
};

//方式一：
var info = Object.create(obj);
console.log(info);
console.log(info.__proto__);

//方式二：
function createObject1(o) {
  var obj = {};
  Object.setPrototypeOf(obj, o);
  return obj;
}

//方式三：
function createObject2(o) {
  function Fn() {}
  Fn.prototype = o;
  return new Fn();
}

var obj2 = createObject1(obj);
var obj3 = createObject2(obj);
console.log(obj2.__proto__);
console.log(obj3.__proto__);
