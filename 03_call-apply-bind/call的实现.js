//一、call的基本使用
var name = "window";
var age = 100;

var obj = {
  name: "xiaoming",
  age: 18,
};

function foo() {
  console.log(this, ...arguments);
}

foo.call(null);
foo.call(undefined);
foo.call(obj);
foo.call(obj, 100, 200, 300);
foo.call(123);
console.log("-----------------------");

//二、手写call函数
Function.prototype.cxlCall = function (thisArg, ...argArray) {
  //将非对象类型的数据转化为对象类型（`123.fn`不能赋值属性）
  thisArg =
    thisArg !== undefined && thisArg !== null ? Object(thisArg) : window;
  thisArg.fn = this;
  let result = thisArg.fn(...argArray);
  delete thisArg.fn;
  return result;
};

foo.cxlCall(null);
foo.cxlCall(undefined);
foo.cxlCall(obj);
foo.cxlCall(obj, 100, 200, 300);
foo.cxlCall(123);
